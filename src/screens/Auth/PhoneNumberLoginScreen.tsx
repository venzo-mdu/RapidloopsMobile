import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useRef, useState } from 'react'
import { Alert, BackHandler, Image, Platform, ScrollView, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import { Snackbar } from 'react-native-paper'
import { PHONENUMBEROTP } from '..'
import StatusBarCustom from '../../components/StatusBarCustom'
import { COLORS, IMAGES } from '../../helpers/custom'
import { PhoneNumberLoginStyles } from './AuthStyles'
import { loginmobile } from '../../function/firebaseFunction/auth'
import { firebaseConfig } from '../../function/firebase'
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';

const PhoneNumberLoginScreen = () => {

  const navigation = useNavigation();

  const [phoneNumber, setPhoneNumber] = useState();

  const recaptchaVerifier = useRef(null);

  const getOTPFn = async () => {

    if(phoneNumber?.length != 10) {
      if(Platform.OS == "ios") {
        setToast("Enter valid phone number");
        setVisible(true);
      } else {
        ToastAndroid.show('Enter valid phone number', ToastAndroid.SHORT);
      }
    } else {
      const phoneNum = phoneNumber;
      const res = await loginmobile(phoneNum, recaptchaVerifier);
      console.warn("res : ",res)

      if(res?.verificationId != ""){
        const verificationId = res?.verificationId;
        setPhoneNumber();
    
        navigation.navigate(PHONENUMBEROTP, {phoneNum, verificationId});
      } else {
        ToastAndroid.show('Enter valid phone number', ToastAndroid.SHORT);
      }
      
    }
  }

  const [visible, setVisible] = useState(false);
  const [toast, setToast] = useState("");

  const onDismissSnackBar = () => setVisible(false);

  return (
    <View style={PhoneNumberLoginStyles.container}>
      <StatusBarCustom sb_color={COLORS.BLACK} />
      {/* recaptchaVerifier */}
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebaseConfig}
      />

      <ScrollView>
        <View style={PhoneNumberLoginStyles.topRow}>
          <View style={PhoneNumberLoginStyles.topLeftImgBox}>
            <Image source={IMAGES.LEFTCORNERARC} style={PhoneNumberLoginStyles.topLeftImg} />
          </View>

          <View style={{alignItems: "center"}}>
            <View style={PhoneNumberLoginStyles.centerLogoImgBox}>
              <Image source={IMAGES.APPLOGINLOGO} style={PhoneNumberLoginStyles.centerLogoImg} />
            </View>
            <View style={PhoneNumberLoginStyles.otpGlobeLogoImgBox}>
              <Image source={IMAGES.OTPGLOBELOGO} style={PhoneNumberLoginStyles.otpGlobeLogoImg} />
            </View>
          </View>

          <View style={PhoneNumberLoginStyles.topLeftImgBox} />
        </View>

        <View style={{alignItems: "center"}}>
          <Text style={PhoneNumberLoginStyles.headingTxt}>OTP Verification</Text>
          <Text style={PhoneNumberLoginStyles.subHeadingTxt1}>To get your{' '}<Text style={PhoneNumberLoginStyles.subHeadingTxt2}>One Time Password</Text></Text>
          <Text style={PhoneNumberLoginStyles.placeHolderTxt}>Enter Mobile Number</Text>

          <View style={PhoneNumberLoginStyles.phoneNumberBox}>
            <TextInput
              onChangeText={val => setPhoneNumber(val.replace(/[^0-9]/g, ''))}
              value={phoneNumber}
              style={PhoneNumberLoginStyles.phoneNumberBoxIP}
              keyboardType="phone-pad"
              inputMode="numeric"
              maxLength={10}
            />
          </View>

          <TouchableOpacity activeOpacity={0.9} onPressOut={getOTPFn} style={PhoneNumberLoginStyles.submitBtn}>
            <Text style={PhoneNumberLoginStyles.submitTxt}>GET OTP</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <Snackbar visible={visible} onDismiss={onDismissSnackBar} rippleColor={"grey"} style={{backgroundColor: COLORS.PRIMARY}} duration={3000}>{toast}</Snackbar>
    </View>
  )
}

export default PhoneNumberLoginScreen