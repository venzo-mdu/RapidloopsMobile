import { View, Text, Image, ImageBackground, TextInput, ScrollView, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import StatusBarCustom from '../../../components/StatusBarCustom'
import { API, COLORS, ICONS, IMAGES } from '../../../helpers/custom'
import { PartnerDashboardScreenStyles, PartnerLoadsScreenStyles, PartnerPODScreenStyles } from '../AppStyles'
import { launchImageLibrary } from 'react-native-image-picker'
import DeviceInfo from 'react-native-device-info'
import { useNavigation } from '@react-navigation/native'

const PartnerPODScreen = (props) => {

  const navigation = useNavigation();

  useEffect(() => {
    console.log("tripId = ",props.route.params?.tripId);
    console.log("loadId = ",props.route.params?.loadId);
    console.log("driverName = ",props.route.params?.driverName);
    console.log("driverPhoneNumber = ",props.route.params?.driverPhoneNumber);
    console.log("truckId = ",props.route.params?.truckId);
  }, []);

  const [tonneValue, setTonneValue] = useState("");
  const [SDuri, setSDuri] = useState("");
  const [LRuri, setLRuri] = useState("");

  const uploadImgFn = async (type) => {
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
          if(type == "SD") {
            setSDuri(response?.assets[0]?.uri);
          } else if(type == "LR") {
            setLRuri(response?.assets[0]?.uri);
          }
        }
      });
    } catch (error) {
      console.error("Error selecting image:", error);
    }
  };

  const podFn = async (data, file, type) => {
    try {
      const DeviceId = await DeviceInfo.getUniqueId();

      const data = JSON.stringify({
        tripId: props.route.params?.tripId,
        loadId: props.route.params?.loadId,
        driverName: props.route.params?.driverName,
        driverPhoneNumber: props.route.params?.driverPhoneNumber,
        truckId: props.route.params?.truckId,
      });

      await fetch(API?.PartnerUnLoadDoc, {
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
        console.log("pod responseJson : ",responseJson);
        ToastAndroid.show(responseJson?.message, ToastAndroid.SHORT);
      })
      .catch((error) => {
        console.log(error);
      });
    } catch (error) {
      console.error("catch : ", error);
    }
  };

  const goBackFn = () => {
    navigation.goBack();
  };

  return (
    <View>
      <StatusBarCustom sb_color={COLORS.BLACK} />

      <View style={PartnerLoadsScreenStyles.container}>
        <View style={PartnerDashboardScreenStyles.appBarBGIMGBox}>
          <View onTouchEnd={goBackFn} style={PartnerDashboardScreenStyles.appBarIconBox}>
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
                    onChangeText={val => setTonneValue(val.replace(/[^0-9]/g, ''))}
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

          <View onTouchEnd={uploadImgFn.bind(this,"SD")} style={PartnerPODScreenStyles.cameraCardBox}>
            {SDuri != "" ? (
              <>
                <Image source={{uri: SDuri}} style={{width: 64, height: 64, marginBottom: 12}} />
              </>
            ) : (
              <>
                <Text style={PartnerPODScreenStyles.cameraCardBoxTxt}>SD</Text>
              </>
            )}
            <Image source={ICONS.BLACKBIGCAMERA} style={{width: 28, height: 28, marginBottom: 10}} />
          </View>

          <View onTouchEnd={uploadImgFn.bind(this,"LR")} style={PartnerPODScreenStyles.cameraCardBox}>
            {LRuri != "" ? (
              <>
                <Image source={{uri: LRuri}} style={{width: 64, height: 64, marginBottom: 12}} />
              </>
            ) : (
              <>
                <Text style={PartnerPODScreenStyles.cameraCardBoxTxt}>LR</Text>
              </>
            )}
            <Image source={ICONS.BLACKBIGCAMERA} style={{width: 28, height: 28, marginBottom: 10}} />
          </View>

          <View onTouchEnd={podFn} style={PartnerPODScreenStyles.okBtnBox}>
            <Text style={PartnerPODScreenStyles.okBtnBoxTxt}>OK</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

export default PartnerPODScreen