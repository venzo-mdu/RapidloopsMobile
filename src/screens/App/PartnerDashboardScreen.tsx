import { View, Text, Image, ScrollView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import StatusBarCustom from '../../components/StatusBarCustom';
import { API, COLORS, ICONS, IMAGES } from '../../helpers/custom';
import { PartnerDashboardScreenStyles } from './AppStyles';
import { DASHBOARD } from '..';
import moment from 'moment';

const PartnerDashboardScreen = () => {

  const navigation = useNavigation();

  useEffect(() => {
    getDataFn();
  }, []);

  const getDataFn = async () => {
    try {
      const data = JSON.stringify({
        "userId": global.USERID,
      });

      console.log("data : ",data);
      console.log("global.TOKEN ",global.TOKEN);

      await fetch(API?.PartnerDashboard, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + global.TOKEN,
        },
        body: data,
      })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log("home responseJson : ",responseJson);
        setDASHBOARDDATA([responseJson?.data])
      })
      .catch((error) => {
        console.log(error);
      });
    } catch (error) {
      console.error("catch : ", error);
    }
  };

  const [DASHBOARDDATA, setDASHBOARDDATA] = useState(null);

  return (
    <View>
      <StatusBarCustom sb_color={COLORS.BLACK} />

      <View style={PartnerDashboardScreenStyles.container}>
        <View style={PartnerDashboardScreenStyles.appBarBGIMGBox}>
          <View style={PartnerDashboardScreenStyles.appBarIconBox} />
          <View style={PartnerDashboardScreenStyles.appBarBGIMGView}>
            <Image source={IMAGES.APPLOGINLOGOWHITE} style={PartnerDashboardScreenStyles.appBarBGIMG} />
          </View>

          <View style={PartnerDashboardScreenStyles.appBarIconBox}>
            <Image source={ICONS.WHITELOGOUT} style={{width: 24, height: 24}} />
          </View>
        </View>

        <FlatList data={DASHBOARDDATA}
          contentContainerStyle={{paddingBottom: 100}}
          // refreshControl={
          //   <RefreshControl
          //     refreshing={refreshing} 
          //     onRefresh={onRefresh} 
          //     colors={[COLORS.PRIMARY]} // Customizing spinner colors
          //     progressBackgroundColor="#ffffff" // Customizing background color
          //   />
          // }
          renderItem={({item, index}) => 
            { 
              return (
                <>
                  <View style={PartnerDashboardScreenStyles.partnerCoverImgBox}>
                    <Image source={IMAGES.PARTNERCOVERBGIMG} style={PartnerDashboardScreenStyles.partnerCoverImg} />
                  </View>

                  <View style={PartnerDashboardScreenStyles.partnerProfileImgCenterBox}>
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
    </View>
  )
}

export default PartnerDashboardScreen