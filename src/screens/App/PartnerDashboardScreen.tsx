import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import StatusBarCustom from '../../components/StatusBarCustom';
import { COLORS, ICONS, IMAGES } from '../../helpers/custom';
import { PartnerDashboardScreenStyles } from './AppStyles';

const PartnerDashboardScreen = () => {

  const navigation = useNavigation();

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

        <ScrollView>
          <View style={PartnerDashboardScreenStyles.partnerCoverImgBox}>
            <Image source={IMAGES.PARTNERCOVERBGIMG} style={PartnerDashboardScreenStyles.partnerCoverImg} />
          </View>

          <View style={PartnerDashboardScreenStyles.partnerProfileImgCenterBox}>
            <View style={PartnerDashboardScreenStyles.partnerProfileImgBox}>
              <Image source={IMAGES.PARTNERPROFILEIMG} style={PartnerDashboardScreenStyles.partnerProfileImg} />
            </View>

            <View style={PartnerDashboardScreenStyles.partnerProfileImgEditBox}>
              <Image source={ICONS.GREYCAMERA} style={{width: 22, height: 22}} />
            </View>
          </View>

          <Text style={PartnerDashboardScreenStyles.userNameTxt}>app test 11 app test 11</Text>
          <Text style={PartnerDashboardScreenStyles.userPartnerKeyTxt}>Partner Since <Text style={PartnerDashboardScreenStyles.userPartnerValueTxt}>04 Dec 2023</Text></Text>

          <View style={{marginTop: 20, marginBottom: 32}}>
            <View style={PartnerDashboardScreenStyles.earningsRowBox}>
              <View style={PartnerDashboardScreenStyles.earningIndivBox}>
                <Text style={PartnerDashboardScreenStyles.earningIndivKeyTxt}>Live Loads</Text>
                <Text style={PartnerDashboardScreenStyles.earningIndivValueTxt}>147</Text>
              </View>

              <View style={PartnerDashboardScreenStyles.earningIndivBox}>
                <Text style={PartnerDashboardScreenStyles.earningIndivKeyTxt}>Live Trips</Text>
                <Text style={PartnerDashboardScreenStyles.earningIndivValueTxt}>56</Text>
              </View>
            </View>

            <View style={PartnerDashboardScreenStyles.earningsRowBox}>
              <View style={PartnerDashboardScreenStyles.earningIndivBox}>
                <Text style={PartnerDashboardScreenStyles.earningIndivKeyTxt}>Loading Doc Pending</Text>
                <Text style={PartnerDashboardScreenStyles.earningIndivValueTxt}>11</Text>
              </View>

              <View style={PartnerDashboardScreenStyles.earningIndivBox}>
                <Text style={PartnerDashboardScreenStyles.earningIndivKeyTxt}>UnLoading Doc Pending</Text>
                <Text style={PartnerDashboardScreenStyles.earningIndivValueTxt}>59</Text>
              </View>
            </View>

            <View style={[PartnerDashboardScreenStyles.earningIndivBox, {alignSelf: "center"}]}>
              <Text style={PartnerDashboardScreenStyles.earningIndivKeyTxt}>Physical POD</Text>
              <Text style={PartnerDashboardScreenStyles.earningIndivValueTxt}>11</Text>
            </View>
          </View>

        </ScrollView>
      </View>
    </View>
  )
}

export default PartnerDashboardScreen