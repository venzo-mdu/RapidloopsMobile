import { View, Text, Image, ImageBackground, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import StatusBarCustom from '../../components/StatusBarCustom'
import { COLORS, ICONS, IMAGES } from '../../helpers/custom'
import { PartnerDashboardScreenStyles, PartnerLoadsScreenStyles, PartnerPODScreenStyles } from './AppStyles'

const PartnerPODScreen = () => {

  const [tonneValue, setTonneValue] = useState("");

  return (
    <View>
      <StatusBarCustom sb_color={COLORS.BLACK} />

      <View style={PartnerLoadsScreenStyles.container}>
        <View style={PartnerDashboardScreenStyles.appBarBGIMGBox}>
          <View style={PartnerDashboardScreenStyles.appBarIconBox}>
            <Image source={ICONS.WHITELEFTARR} style={{width: 16, height: 16}} />
          </View>

          <View style={PartnerDashboardScreenStyles.appBarBGIMGView}>
            <Image source={IMAGES.APPLOGINLOGOWHITE} style={PartnerDashboardScreenStyles.appBarBGIMG} />
          </View>

          <View style={PartnerDashboardScreenStyles.appBarIconBox} />
        </View>

        <ScrollView contentContainerStyle={{paddingBottom: 64}}>
          <View style={PartnerPODScreenStyles.searchBGImgBox}>
            <ImageBackground source={IMAGES.APPBARBG} style={PartnerPODScreenStyles.searchBGImg} resizeMode="stretch">
              <Text style={PartnerPODScreenStyles.headingTxt}>Proof Of Delivery</Text>

              <View style={PartnerPODScreenStyles.tonBoxRow}>
                <View style={PartnerPODScreenStyles.tonBoxRowTxtBox} />

                <View style={PartnerPODScreenStyles.tonBox}>
                  <TextInput
                    onChangeText={setTonneValue}
                    value={tonneValue}
                    style={[PartnerPODScreenStyles.searchIPTxtBox, {fontSize: tonneValue == "" ? 12 : 14}]}
                    placeholder={""}
                    placeholderTextColor={"#646464"}
                    keyboardType="numeric"
                    inputMode="numeric"
                  />
                </View>

                <View style={PartnerPODScreenStyles.tonBoxRowTxtBox}>
                  <Text style={PartnerPODScreenStyles.tonBoxRowTxt}>Tonne</Text>
                </View>
              </View>
            </ImageBackground>
          </View>

          <View style={PartnerPODScreenStyles.cameraCardBox}>
            <Text style={PartnerPODScreenStyles.cameraCardBoxTxt}>SD</Text>
            <Image source={ICONS.BLACKBIGCAMERA} style={{width: 28, height: 28, marginBottom: 10}} />
          </View>

          <View style={PartnerPODScreenStyles.cameraCardBox}>
            <Text style={PartnerPODScreenStyles.cameraCardBoxTxt}>LR</Text>
            <Image source={ICONS.BLACKBIGCAMERA} style={{width: 28, height: 28, marginBottom: 10}} />
          </View>

          <View style={PartnerPODScreenStyles.okBtnBox}>
            <Text style={PartnerPODScreenStyles.okBtnBoxTxt}>OK</Text>
          </View>

        </ScrollView>
        
      </View>
    </View>
  )
}

export default PartnerPODScreen