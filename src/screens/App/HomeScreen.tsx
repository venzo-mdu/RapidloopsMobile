import { useNavigation } from '@react-navigation/native';
import moment from "moment";
import React, { useEffect, useState } from 'react';
import { FlatList, Image, ImageBackground, RefreshControl, Text, View } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { NOTIFICATION } from '..';
import StatusBarCustom from '../../components/StatusBarCustom';
import { API, COLORS, IMAGEBASEURL, IMAGES } from '../../helpers/custom';
import { HomeScreenStyles } from './AppStyles';

const HomeScreen = () => {

  const navigation = useNavigation();

  useEffect(() => {
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
    const options = {
      maxHeight: 2000,
      maxWidth: 2000,
      storageOptions: {
        skipBackup: true,
        path: 'images'
      },
      mediaType: 'photo',
      includeBase64: false,
    };

    var res;

    await launchImageLibrary(options, (response) => { 
      console.log("picker response :: ",response);

      if (response.didCancel) {
        console.error('User cancelled image picker');
      } else if (response.error) {
        console.error('Image picker error: ', response.error);
      } else {
        res = response?.assets[0]?.uri;
      }
    });
    console.log("res response :: ",res);

    try {

      const data = JSON.stringify({
        "id" : global.USERID,
        "docExt" : "jpeg",
        "imageType" : "userProfile",
      });

      console.log("DATA : ",data);
    
      await fetch(API?.DashboardIMG, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + global.TOKEN,
        },
        body: data
      })
      .then((response) => response.json())
      .then((responseJson) => {
        console.error("DashboardIMG : ",responseJson)
      })
      .catch((error) => {
        console.error(error);
      });

    } catch (error) {
      console.error("catch : ", error);
    }
  };

  const dashboardDeleteImageFn = async () => {
    try {

      const data = JSON.stringify({
        "id" : global.USERID,
        "fileName" : "user/userProfile-6ff50653-eb5b-4bdf-9ccb-cb50281784a2.jpg",
        "fileType" : "userProfile",
      });
      
      console.error(data)

    
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
        console.error("DELETE : ",responseJson)
      })
      .catch((error) => {
        console.error(error);
      });

    } catch (error) {
      console.error("catch : ", error);
    }
  }

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
          contentContainerStyle={{paddingBottom: 16}}
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
                <View onTouchEnd={uploadImgFn} style={HomeScreenStyles.userProfileImgBox}>
                {/* <Image source={{uri : "https://hadrondev.blob.core.windows.net/hadron-rapidloops-com/user/userProfile-c352fe9f-a2e6-4642-8577-4918b14ffac1.jpg"}} style={HomeScreenStyles.userProfileCoverImg} /> */}
                  <Image source={{uri : IMAGEBASEURL + item?.userDetail?.truckerProfileImage}} style={HomeScreenStyles.userProfileImg} />
                </View>

                <View onTouchEnd={uploadImgFn} style={HomeScreenStyles.userProfileCoverImgBox}>
                  <Image source={{uri : IMAGEBASEURL + item?.companyDetail?.companyProfileImage}} style={HomeScreenStyles.userProfileCoverImg} />
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
    </View>
  )
}

export default HomeScreen