import { View, Text, Image, FlatList, Platform, RefreshControl, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { API, COLORS, ICONS, IMAGEBASEURL, IMAGES } from '../../../helpers/custom';
import StatusBarCustom from '../../../components/StatusBarCustom';
import { PartnerDashboardScreenStyles } from '../AppStyles';
import moment from 'moment';
import DeviceInfo from 'react-native-device-info';
import messaging from '@react-native-firebase/messaging';
import PushNotification from "react-native-push-notification";
import PartnerStatusBarCustom from '../../../components/PartnerStatusBarCustom';
import { launchImageLibrary } from 'react-native-image-picker';

const PartnerDashboardScreen = () => {

  const navigation = useNavigation();

  useEffect(() => {
    createChannels();
    getDataFn();
  }, []);

  const getDataFn = async () => {
    try {
      const data = JSON.stringify({
        "userId": global.USERID,
      });

      console.log("data : ",data);
      console.log("global.TOKEN ",global.TOKEN);

      const DeviceId = await DeviceInfo.getUniqueId();

      await fetch(API?.PartnerDashboard, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + global.TOKEN,
          'User-Agent':  DeviceId + "/" + "1.1.3" + "/" + Platform.OS ,
        },
        body: data,
      })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log("home responseJson : ",responseJson);
        setDASHBOARDDATA([responseJson?.data])
        setRefreshing(false);
      })
      .catch((error) => {
        console.log(error);
      });
    } catch (error) {
      console.error("catch : ", error);
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
            id: global.USERID,
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
      const DeviceId = await DeviceInfo.getUniqueId();

      await fetch(API?.PartnerDashboardIMG, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + global.TOKEN,
          'User-Agent':  DeviceId + "/" + "1.1.3" + "/" + Platform.OS ,
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
      const DeviceId = await DeviceInfo.getUniqueId();

      const data = JSON.stringify({
        "id" : global.USERID,
        "fileName" : DASHBOARDDATA[0]?.userDetail?.profilePicture,
        "fileType" : "userProfile",
      });
      console.log(data)
    
      await fetch(API?.PartnerDashboardDeleteIMG, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + global.TOKEN,
          'User-Agent':  DeviceId + "/" + "1.1.3" + "/" + Platform.OS ,
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
    if(DASHBOARDDATA[0]?.userDetail?.profilePicture != null) {
      setShowDelete(true);
      console.log("1")
    } else {
      setShowDelete(false);
      console.log("2")
    }
    
    setShowUploadImgType(type);
    setShowUpload(true);
  };

  const closeUploadFn = () => {
    setShowUpload(false);
  };

  const [DASHBOARDDATA, setDASHBOARDDATA] = useState(null);

  useEffect(() => {
    getMsgFn();
  },[]);

  const getMsgFn = async () => {
    const token = await messaging().getToken();
    console.log("token =",token);
  };

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      var notify = (remoteMessage);
      handleNotification(notify?.data?.title, notify?.data?.body);
      console.log(JSON.stringify(remoteMessage))
    });

    return unsubscribe;
  }, []);

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

  const [refreshing, setRefreshing] = useState(false);
  
  const onRefresh = async () => {
    setRefreshing(true);
    await getDataFn();
  };

  return (
    <View>
      <StatusBarCustom sb_color={COLORS.BLACK} />

      <View style={PartnerDashboardScreenStyles.container}>
        <PartnerStatusBarCustom CloseFn={() => console.log("first")} />

        <FlatList data={DASHBOARDDATA}
          contentContainerStyle={{paddingBottom: 100}}
          refreshControl={
            <RefreshControl
              refreshing={refreshing} 
              onRefresh={onRefresh} 
              colors={[COLORS.PRIMARY]} // Customizing spinner colors
              progressBackgroundColor="#ffffff" // Customizing background color
            />
          }
          renderItem={({item, index}) => 
            { 
              return (
                <>
                  <View style={PartnerDashboardScreenStyles.partnerCoverImgBox}>
                    <Image source={IMAGES.PARTNERCOVERBGIMG} style={PartnerDashboardScreenStyles.partnerCoverImg} />
                  </View>

                  <View onTouchEnd={uploadModalFn} style={PartnerDashboardScreenStyles.partnerProfileImgCenterBox}>
                    <View style={PartnerDashboardScreenStyles.partnerProfileImgBox}>
                      <Image source={item?.userDetail?.profilePicture ? {uri: IMAGEBASEURL + item?.userDetail?.profilePicture} : IMAGES.PARTNERPROFILEIMG} style={PartnerDashboardScreenStyles.partnerProfileImg} />
                    </View>

                    <View style={PartnerDashboardScreenStyles.partnerProfileImgEditBox}>
                      <Image source={ICONS.GREYCAMERA} style={{width: 22, height: 22}} />
                    </View>
                  </View>

                  <Text style={PartnerDashboardScreenStyles.userNameTxt}>{item?.userDetail?.fullName}</Text>
                  <Text style={PartnerDashboardScreenStyles.userPartnerKeyTxt}>Partner Since <Text style={PartnerDashboardScreenStyles.userPartnerValueTxt}>{moment(item?.userDetail?.sinceDate, "DD-MM-YYYY").format("DD MMM YYYY")}</Text></Text>

                  <View style={{marginTop: 20, marginBottom: 32}}>
                    <View style={PartnerDashboardScreenStyles.earningsRowBox}>
                      <View style={PartnerDashboardScreenStyles.earningIndivBox}>
                        <Text style={PartnerDashboardScreenStyles.earningIndivKeyTxt}>Live Loads</Text>
                        <Text style={PartnerDashboardScreenStyles.earningIndivValueTxt}>{item?.dashboardCount?.liveLoad}</Text>
                      </View>

                      <View style={PartnerDashboardScreenStyles.earningIndivBox}>
                        <Text style={PartnerDashboardScreenStyles.earningIndivKeyTxt}>Live Trips</Text>
                        <Text style={PartnerDashboardScreenStyles.earningIndivValueTxt}>{item?.dashboardCount?.liveTrips}</Text>
                      </View>
                    </View>

                    <View style={PartnerDashboardScreenStyles.earningsRowBox}>
                      <View style={PartnerDashboardScreenStyles.earningIndivBox}>
                        <Text style={PartnerDashboardScreenStyles.earningIndivKeyTxt}>Loading Doc Pending</Text>
                        <Text style={PartnerDashboardScreenStyles.earningIndivValueTxt}>{item?.dashboardCount?.loadingDocPending}</Text>
                      </View>

                      <View style={PartnerDashboardScreenStyles.earningIndivBox}>
                        <Text style={PartnerDashboardScreenStyles.earningIndivKeyTxt}>UnLoading Doc Pending</Text>
                        <Text style={PartnerDashboardScreenStyles.earningIndivValueTxt}>{item?.dashboardCount?.unloadingDocPending}</Text>
                      </View>
                    </View>

                    <View style={[PartnerDashboardScreenStyles.earningIndivBox, {alignSelf: "center"}]}>
                      <Text style={PartnerDashboardScreenStyles.earningIndivKeyTxt}>Physical POD</Text>
                      <Text style={PartnerDashboardScreenStyles.earningIndivValueTxt}>{item?.dashboardCount?.physicalPodPending}</Text>
                    </View>
                  </View>
                </>
              )
            }
          }
        />
      </View>

      <Modal
        transparent={true}
        animationType={"none"}
        visible={showUpload}
        onRequestClose={closeUploadFn}
      >
        <View style={PartnerDashboardScreenStyles.modalBG}>
          <View style={PartnerDashboardScreenStyles.contentBox}>
            {showDelete ? (
              <View>
                <View onTouchEnd={uploadImgFn} style={PartnerDashboardScreenStyles.contentRow}>
                  <View style={PartnerDashboardScreenStyles.contentImgBox}>
                    <Image source={ICONS.LIGHTGREYEDIT} style={{width: 20, height: 20}} />
                  </View>

                  <Text style={PartnerDashboardScreenStyles.contentTxt1}>Edit Picture</Text>
                </View>

                <Text style={PartnerDashboardScreenStyles.contentTxt2}>1024*768</Text>

                <View onTouchEnd={dashboardDeleteImageFn} style={PartnerDashboardScreenStyles.contentRow}>
                  <View style={PartnerDashboardScreenStyles.contentImgBox}>
                    <Image source={ICONS.LIGHTGREYDELETE} style={{width: 20, height: 20}} />
                  </View>
                  <Text style={PartnerDashboardScreenStyles.contentTxt1}>Remove Picture</Text>
                </View>
                </View>
            ) : (
              <View>
                <View onTouchEnd={uploadImgFn} style={PartnerDashboardScreenStyles.contentRow}>
                  <View style={PartnerDashboardScreenStyles.contentImgBox}>
                    <Image source={ICONS.LIGHTGREYADDPIC} style={{width: 20, height: 20}} />
                  </View>

                  <Text style={PartnerDashboardScreenStyles.contentTxt1}>Add Picture</Text>
                </View>

                <Text style={[PartnerDashboardScreenStyles.contentTxt2, {marginBottom: 0}]}>1024*768</Text>
              </View>
            )}
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default PartnerDashboardScreen