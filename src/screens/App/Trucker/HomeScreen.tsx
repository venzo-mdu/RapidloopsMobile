import { useNavigation } from '@react-navigation/native';
import moment from "moment";
import React, { useEffect, useState } from 'react';
import { FlatList, Image, ImageBackground, Modal, RefreshControl, Text, View } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { NOTIFICATION } from '../..';
import StatusBarCustom from '../../../components/StatusBarCustom';
import { API, COLORS, ICONS, IMAGEBASEURL, IMAGES } from '../../../helpers/custom';
import { HomeScreenStyles } from '../AppStyles';
import messaging from '@react-native-firebase/messaging';
import PushNotification from "react-native-push-notification";
import RNFS from 'react-native-fs';
import { decode } from 'base-64';
import { Buffer } from 'buffer';
global.Buffer = global.Buffer || require('buffer').Buffer;
import dataUriToBlob from 'data-uri-to-blob';

const HomeScreen = () => {

  const navigation = useNavigation();

  useEffect(() => {
    createChannels();
    getDataFn();
  }, []);

  const getDataFn = async () => {
    try {
      await fetch(API?.Dashboard + "?id=" + global.COMPANYID + "&userId=" + global.USERID, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + global.TOKEN,
        }
      })
      .then((response) => response.json())
      .then((responseJson) => {
        setDASHBOARDINFO([responseJson]);
        setRefreshing(false);
      })
      .catch((error) => {
        console.error(error);
        setRefreshing(false);
      });
    } catch (error) {
      console.error("catch : ", error);
      setRefreshing(false);
    }
  };

  const uploadImgFn = async () => {
    try {
      const options = {
        mediaType: 'photo',
        includeBase64: true,
      };
  
      launchImageLibrary(options, async (response) => {
        if (response.didCancel) {
          console.error('User cancelled image picker');
        } else if (response.error) {
          console.error('Image picker error: ', response.error);
        } else {
          const fileFormat = response?.assets[0]?.type.split("/");

          const data = {
            id: uploadImgType == "userProfile" ? global.USERID : global.COMPANYID,
            docExt: fileFormat[1],
            imageType: uploadImgType,
          };

          callAPIFn(data, response?.assets[0], response?.assets[0]?.type);
        }
      });
    } catch (error) {
      console.error("Error selecting image:", error);
    }
  };

  const callAPIFn = async (data, file, type) => {
    try {

      await fetch(API?.DashboardIMG, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + global.TOKEN,
        },
        body: JSON.stringify(data),
      })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log("home responseJson : ",responseJson);

        saveImage(responseJson?.uploadURL, file, type);
      })
      .catch((error) => {
        console.log(error);
      });
    } catch (error) {
      console.error("catch : ", error);
    }
  };

  const saveImage = async (url, file1, type) => {
  
    if (url == null) return;

    try {
      const headers = {
        "Content-Type": type,
        "x-ms-blob-type": "BlockBlob"
      };
    
      const body = file1;

      const response = await fetch(url, {
        method: "PUT",
        headers: headers,
        body: body
      });

      const result = await response.text();
      console.log(result,"== result");

      setShowUploadImgType("");
      setShowUpload(false);
      setShowDelete(false);
      getDataFn();
    } catch (error) {
      console.error(error);
    }
  };

  const dashboardDeleteImageFn = async () => {
    try {
      const data = JSON.stringify({
        "id" : uploadImgType == "userProfile" ? global.USERID : global.COMPANYID,
        "fileName" : uploadImgType == "userProfile" ? DASHBOARDINFO[0]?.userDetail?.truckerProfileImage : DASHBOARDINFO[0]?.companyDetail?.companyProfileImage,
        "fileType" : uploadImgType,
      });
      console.log(data)
    
      await fetch(API?.DashboardDeleteIMG, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + global.TOKEN,
        },
        body: data
      })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log("DELETE : ",responseJson)
        setShowUploadImgType("");
        setShowUpload(false);
        setShowDelete(false);
        getDataFn();
      })
      .catch((error) => {
        console.error(error);
      });

    } catch (error) {
      console.error("catch : ", error);
    }
  };

  const [showUpload, setShowUpload] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [uploadImgType, setShowUploadImgType] = useState("");

  const uploadModalFn = (type) => {
    console.error(type,"type")
    if(type == "userProfile" && DASHBOARDINFO[0]?.userDetail?.truckerProfileImage != null) {
      setShowDelete(true);
      console.log("1")
    } else if(type == "companyProfile" && DASHBOARDINFO[0]?.companyDetail?.companyProfileImage != null) {
      setShowDelete(true);
      console.log("2")
    } else {
      setShowDelete(false);
      console.log("3")
    }
    
    setShowUploadImgType(type);
    setShowUpload(true);
  };

  const closeUploadFn = () => {
    setShowUpload(false);
  };

  const [DASHBOARDINFO, setDASHBOARDINFO] = useState([1]);

  const NotificationFn = () => {
    navigation.navigate(NOTIFICATION);
  };

  const openDrawer = () => {
    navigation.toggleDrawer();
  };

  const [refreshing, setRefreshing] = useState(false);
  
  const onRefresh = async () => {
    setRefreshing(true);
    await getDataFn();
  };

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      var notify = (remoteMessage);
      handleNotification(notify?.data?.title, notify?.data?.body);
      console.log(JSON.stringify(remoteMessage))
    });

    return unsubscribe;
  });

  const createChannels = () => {
    PushNotification.createChannel(
      {
        channelId : "test-channel",
        channelName : "Test Channel"
      }
    )
  };

  const handleNotification = (title, body) => {
    console.warn("remoteMessage =",title, body);
    
    PushNotification.localNotification(
      {
        channelId : "test-channel",
        title : title,
        message : body,
      }
    )
  };

  return (
    <View>
      <StatusBarCustom sb_color={COLORS.PRIMARY} />

      <View style={HomeScreenStyles.container}>
        <View style={HomeScreenStyles.appBarBGIMGBox}>
          <ImageBackground source={IMAGES.HOMEBGIMG} style={HomeScreenStyles.appBarBGIMG}>
            <View style={HomeScreenStyles.appBarRowBox}>
              <View onTouchEnd={openDrawer} style={HomeScreenStyles.menuBox} />

              <View onTouchEnd={NotificationFn} style={HomeScreenStyles.bellBox} />
            </View>
          </ImageBackground>
        </View> 

        <FlatList data={DASHBOARDINFO} 
          showsVerticalScrollIndicator={false} 
          style={HomeScreenStyles.scrollContainer}
          contentContainerStyle={{paddingBottom: 80}}
          refreshControl={
            <RefreshControl 
              refreshing={refreshing} 
              onRefresh={onRefresh} 
              colors={[COLORS.PRIMARY]} // Customizing spinner colors
              progressBackgroundColor="#ffffff" // Customizing background color
            />
          }
          renderItem={({item, index}) => (
            <>
              <View style={HomeScreenStyles.userBGImgBox}>
                <View onTouchEnd={uploadModalFn.bind(this,"userProfile")} style={HomeScreenStyles.userProfileImgBox}>
                  <Image source={item?.userDetail?.truckerProfileImage != null ? {uri : IMAGEBASEURL + item?.userDetail?.truckerProfileImage + "?cb=" + Date.now(), cache: true} : ICONS.LIGHTGREYUSER} style={item?.userDetail?.truckerProfileImage ? HomeScreenStyles.userProfileImg : {width: 40, height: 40, marginLeft: "auto", marginRight: "auto", marginTop: "auto", marginBottom: "auto", }} />
                </View>

                <View onTouchEnd={uploadModalFn.bind(this,"companyProfile")} style={HomeScreenStyles.userProfileCoverImgBox}>
                  <Image source={item?.companyDetail?.companyProfileImage != null ? {uri : IMAGEBASEURL + item?.companyDetail?.companyProfileImage + "?cb=" + Date.now(), cache: true} : ICONS.DRAWERTRUCKINACTIVE} style={HomeScreenStyles.userProfileCoverImg} />
                </View>

                <View style={HomeScreenStyles.countBox}>
                  <View style={HomeScreenStyles.countIndivBox}>
                    <Text style={HomeScreenStyles.countValueTxt}>{item?.allTruckerUsers}</Text>
                    <Text style={HomeScreenStyles.countKeyTxt}>User</Text>
                  </View>

                  <View style={HomeScreenStyles.countIndivBox}>
                    <Text style={HomeScreenStyles.countValueTxt}>{item?.allTrucks}</Text>
                    <Text style={HomeScreenStyles.countKeyTxt}>Trucks</Text>
                  </View>
                </View>
              </View>

              <View style={HomeScreenStyles.userDetailsBox}>
                <Text style={HomeScreenStyles.userNameTxt}>{item?.userDetail?.firstName}</Text>
                <Text style={HomeScreenStyles.userCompanyTxt}>{item?.userDetail?.lastName}</Text>
                <Text style={HomeScreenStyles.userPartnerKeyTxt}>Partner Since{"  "}<Text style={HomeScreenStyles.userPartnerValueTxt}>{moment(item?.companyDetail?.availableFromDate).format("DD MMM YYYY")}</Text></Text>
              </View>

              <View>
                <Text style={HomeScreenStyles.homeSubHeadingTxt}>Trips</Text>
                <View style={HomeScreenStyles.tripsRowBox}>
                  <View style={HomeScreenStyles.tripsIndivBox}>
                    <Text style={HomeScreenStyles.tripsIndivValueTxt}>{item?.allTrips}</Text>
                    <Text style={HomeScreenStyles.tripsIndivKeyTxt}>Total</Text>
                  </View>

                  <View style={HomeScreenStyles.tripsIndivBox}>
                    <Text style={HomeScreenStyles.tripsIndivValueTxt}>{item?.tripsAndRevenues?.lastYear?.Trips}</Text>
                    <Text style={HomeScreenStyles.tripsIndivKeyTxt}>Last year</Text>
                  </View>

                  <View style={HomeScreenStyles.tripsIndivBox}>
                    <Text style={HomeScreenStyles.tripsIndivValueTxt}>{item?.tripsAndRevenues?.thisYear?.Trips}</Text>
                    <Text style={HomeScreenStyles.tripsIndivKeyTxt}>This year</Text>
                  </View>

                  <View style={HomeScreenStyles.tripsIndivBox}>
                    <Text style={HomeScreenStyles.tripsIndivValueTxt}>{item?.tripsAndRevenues?.lastMonth?.Trips}</Text>
                    <Text style={HomeScreenStyles.tripsIndivKeyTxt}>Last month</Text>
                  </View>

                  <View style={HomeScreenStyles.tripsIndivBox}>
                    <Text style={HomeScreenStyles.tripsIndivValueTxt}>{item?.tripsAndRevenues?.thisMonth?.Trips}</Text>
                    <Text style={HomeScreenStyles.tripsIndivKeyTxt}>This month</Text>
                  </View>
                </View>
              </View>

              <View>
                <Text style={HomeScreenStyles.homeSubHeadingTxt}>Earnings</Text>

                <View style={HomeScreenStyles.earningsRowBox}>
                  <View style={HomeScreenStyles.earningIndivBox}>
                    <Text style={HomeScreenStyles.earningIndivValueTxt}>{item?.tripsAndRevenues?.lastYear?.Revenue}</Text>
                    <Text style={HomeScreenStyles.earningIndivKeyTxt}>Last year</Text>
                  </View>

                  <View style={HomeScreenStyles.earningIndivBox}>
                    <Text style={HomeScreenStyles.earningIndivValueTxt}>{item?.tripsAndRevenues?.thisYear?.Revenue}</Text>
                    <Text style={HomeScreenStyles.earningIndivKeyTxt}>This year</Text>
                  </View>
                </View>

                <View style={HomeScreenStyles.earningsRowBox}>
                  <View style={HomeScreenStyles.earningIndivBox}>
                    <Text style={HomeScreenStyles.earningIndivValueTxt}>{item?.tripsAndRevenues?.lastMonth?.Revenue}</Text>
                    <Text style={HomeScreenStyles.earningIndivKeyTxt}>Last month</Text>
                  </View>

                  <View style={HomeScreenStyles.earningIndivBox}>
                    <Text style={HomeScreenStyles.earningIndivValueTxt}>{item?.tripsAndRevenues?.thisMonth?.Revenue}</Text>
                    <Text style={HomeScreenStyles.earningIndivKeyTxt}>This month</Text>
                  </View>
                </View>

                <View style={HomeScreenStyles.earningsRowBottomBox}>
                  <Text style={HomeScreenStyles.earningIndivValueTxt}>{item?.balanceRecievable}</Text>
                  <Text style={HomeScreenStyles.earningIndivKeyTxt}>Receivable</Text>
                </View>
              </View>
            </>
          )}
        />
      </View>

      <Modal
        transparent={true}
        animationType={"none"}
        visible={showUpload}
        onRequestClose={closeUploadFn}
      >
        <View style={HomeScreenStyles.modalBG}>
          <View style={HomeScreenStyles.contentBox}>
            {showDelete ? (
              <View>
                <View onTouchEnd={uploadImgFn} style={HomeScreenStyles.contentRow}>
                  <View style={HomeScreenStyles.contentImgBox}>
                    <Image source={ICONS.LIGHTGREYEDIT} style={{width: 20, height: 20}} />
                  </View>

                  <Text style={HomeScreenStyles.contentTxt1}>Edit Picture</Text>
                </View>

                <Text style={HomeScreenStyles.contentTxt2}>1024*768</Text>

                <View onTouchEnd={dashboardDeleteImageFn} style={HomeScreenStyles.contentRow}>
                  <View style={HomeScreenStyles.contentImgBox}>
                    <Image source={ICONS.LIGHTGREYDELETE} style={{width: 20, height: 20}} />
                  </View>
                  <Text style={HomeScreenStyles.contentTxt1}>Remove Picture</Text>
                </View>
                </View>
            ) : (
              <View>
                <View onTouchEnd={uploadImgFn} style={HomeScreenStyles.contentRow}>
                  <View style={HomeScreenStyles.contentImgBox}>
                    <Image source={ICONS.LIGHTGREYADDPIC} style={{width: 20, height: 20}} />
                  </View>

                  <Text style={HomeScreenStyles.contentTxt1}>Add Picture</Text>
                </View>

                <Text style={[HomeScreenStyles.contentTxt2, {marginBottom: 0}]}>1024*768</Text>
              </View>
            )}
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default HomeScreen