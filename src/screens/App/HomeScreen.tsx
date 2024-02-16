import { View, Text, SafeAreaView, ImageBackground, Image, ScrollView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import StatusBarCustom from '../../components/StatusBarCustom';
import { API, COLORS, ICONS, IMAGEBASEURL, IMAGES, getStatusBarHeight } from '../../helpers/custom';
import { HomeScreenStyles } from './AppStyles';
import moment from "moment";

const HomeScreen = () => {

  const navigation = useNavigation();

  useEffect(() => {
    console.log("HOME",global.COMPANYID)
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
        console.log("HOME APIs : ",responseJson);
        setDASHBOARDINFO([responseJson]);
      })
      .catch((error) => {
        console.log(error);
      });
    } catch (error) {
      console.error("catch : ", error);
    }
  };

  const [DASHBOARDINFO, setDASHBOARDINFO] = useState([1]);

  const openDrawer = () => {
    navigation.toggleDrawer();
  };

  return (
    <View>
      <StatusBarCustom sb_color={COLORS.PRIMARY} />

      <View style={HomeScreenStyles.container}>
        <View style={HomeScreenStyles.appBarBGIMGBox}>
          <ImageBackground source={IMAGES.HOMEBGIMG} style={HomeScreenStyles.appBarBGIMG}>
            <View style={HomeScreenStyles.appBarRowBox}>
              <View onTouchEnd={openDrawer} style={HomeScreenStyles.menuBox} />

              <View style={HomeScreenStyles.bellBox} />
            </View>
          </ImageBackground>
        </View>

        <FlatList data={DASHBOARDINFO} 
          showsVerticalScrollIndicator={false} 
          style={HomeScreenStyles.scrollContainer}
          contentContainerStyle={{paddingBottom: 16}}
          renderItem={({item, index}) => (
            <>
              <View style={HomeScreenStyles.userBGImgBox}>
                <View style={HomeScreenStyles.userProfileImgBox}>
                  <Image source={{uri : IMAGEBASEURL + item?.userDetail?.truckerProfileImage}} style={HomeScreenStyles.userProfileImg} />
                </View>

                <View style={HomeScreenStyles.userProfileCoverImgBox}>
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