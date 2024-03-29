import { View, Text, ToastAndroid, Platform, ScrollView, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Snackbar } from 'react-native-paper';
import Clipboard from '@react-native-clipboard/clipboard';
import { DRAWERHOME, PARTNERDRAWERHOME, PARTNERTABHOME } from '..';
import { loginverifyOtp } from '../../function/firebaseFunction/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DeviceInfo from 'react-native-device-info';
import messaging from '@react-native-firebase/messaging';
import { API, COLORS, IMAGES } from '../../helpers/custom';
import { PhoneNumberLoginStyles, PhoneNumberOTPStyles } from './AuthStyles';
import StatusBarCustom from '../../components/StatusBarCustom';

const PhoneNumberOTPScreen = (props) => {

  const navigation = useNavigation();

  useEffect(() => {
    setPhoneNumber(props.route.params?.phoneNum);
    handlePaste();
  }, []);

  const [phoneNumber, setPhoneNumber] = useState();

  const getOTPFn = async () => {
    const verificationCode = otp.join("");

    if(otp?.length != 6) {
      if(Platform.OS == "ios") {
        setToast("Enter valid OTP");
        setVisible(true);
      } else {
        ToastAndroid.show('Enter valid OTP', ToastAndroid.SHORT);
      }
    } else {
      const response = await loginverifyOtp(verificationCode, props.route.params?.verificationId);

      global.TOKEN = response?.tokenResponse?.idToken;
      global.USERID = response?.userData?.uid;

      const UUID = response?.userData?.uid;
      const AUTHTOKEN = response?.tokenResponse?.idToken;

      AsyncStorage.setItem('TOKEN', response?.tokenResponse?.idToken);
      AsyncStorage.setItem('USERID', response?.userData?.uid);
      AsyncStorage.setItem('PHONENUM',  props.route.params?.phoneNum);

      const DeviceId = await DeviceInfo.getUniqueId();
      console.log("DeviceId =",DeviceId);
      console.log("UUID =", UUID, AUTHTOKEN);

      try {
        const data = JSON.stringify({
          userId: UUID,
        });

        fetch(API.UserType, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + AUTHTOKEN,
          },
          body: data
        })
        .then((res) => res.json())
        .then((resJson) => {
          console.log("USER TYPE RES= ",resJson?.data?.userTypeId, resJson?.status)

          if (resJson?.status) {
            if (resJson?.data?.userTypeId == 5 || resJson?.data?.userTypeId == 6) {
              truckerDataFn(AUTHTOKEN, fcmToken, UUID, DeviceId);
            } else if (resJson?.data?.userTypeId == 8) {
              partnerDataFn(AUTHTOKEN, fcmToken, UUID, DeviceId);
            } else {
              console.warn("wrong")
            }
          } else {
            console.warn("wrong")
          }
        })
        .catch((error) => {
          console.error(error);
        });
      } catch (error) {
        console.error("catch : ", error);
      }
    }
  };

  const partnerDataFn = async (AUTHTOKEN, fcmToken, UUID, DeviceId) => {
    try {
      fetch(API?.PartnerFCM + "?refreshToken=" + fcmToken + "&id=" + UUID, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + AUTHTOKEN,
          'User-Agent':  DeviceId + "/" + "1.1.3" + "/" + Platform.OS ,
        }
      })
      .then((res1) => res1.json())
      .then((resJson1) => {
        console.log("FCM flow : ",resJson1);

        try {
          const data = JSON.stringify({
            "userId" : UUID,
            "deviceId" : DeviceId
          });

          fetch(API?.PartnerUpdateDeviceId, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + AUTHTOKEN,
              'User-Agent':  DeviceId + "/" + "1.1.3" + "/" + Platform.OS ,
            },
            body: data,
          })
          .then((res2) => res2.json())
          .then((resJson2) => {
            console.log("responseJson : ",resJson2);

            navigation.navigate(PARTNERTABHOME);
          })
          .catch((err2) => {
            console.error(err2);
          });
        } catch (error2) {
          console.error("catch : ", error2);
        }
        
      })
      .catch((err1) => {
        console.error(err1);
      });
    } catch (error1) {
      console.error("catch : ", error1);
    }
  };

  const truckerDataFn = async (AUTHTOKEN, fcmToken, UUID, DeviceId) => {
    try {
      fetch(API.TruckerData + "?truckerPhoneNumber=" + props.route.params?.phoneNum, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + AUTHTOKEN,
        }
      })
      .then((res1) => res1.json())
      .then((resJson1) => {
        console.log("TruckerData res : ",resJson1);

        if(resJson1?.success) {
          global.COMPANYID = resJson1?.companyInfo?.companyId
          AsyncStorage.setItem('COMPANYID', resJson1?.companyInfo?.companyId);

          try {
            fetch(API?.TruckerFCM + "?refreshToken=" + fcmToken + "&id=" + UUID, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + AUTHTOKEN,
                'User-Agent':  DeviceId + "/" + "1.1.3" + "/" + Platform.OS ,
              }
            })
            .then((res2) => res2.json())
            .then((resJson2) => {
              console.log("TRUCKER FCM RES : ",resJson2);
              navigation.navigate(DRAWERHOME);
            })
            .catch((err2) => {
              console.error(err2);
            });

          } catch (error2) {
            console.error("catch : ", error2);
          }
        }
      })
      .catch((err1) => {
        console.error(err1);
      });
    } catch (error1) {
      console.error("catch : ", error1);
    }
  };

  const [visible, setVisible] = useState(false);
  const [toast, setToast] = useState("");

  const onDismissSnackBar = () => setVisible(false);

  const [otp, setOtp] = useState(Array(6).fill(''));
  const inputRefs = useRef([]);

  const handleOTPChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to the next input if the current input is not the last one
    if (index < 6 - 1 && value !== '') {
      inputRefs.current[index + 1].focus();
    }

    if (index > 0 && value === '') {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = async () => {
    try {
      const clipboardContent = await Clipboard.getString();

      if(clipboardContent?.length == 6) {
        const otpValues = clipboardContent.split('').slice(0, 6);
  
        const newOtp = Array(6).fill('');
        otpValues.forEach((value, index) => {
          newOtp[index] = value;
        });
  
        setOtp(newOtp);
      }
    } catch (error) {
      console.error('Error pasting from clipboard:', error);
    }
  };

  useEffect(() => {
    getMsgFn();
  },[]);

  const getMsgFn = async () => {
    const token = await messaging().getToken();
    setFcmToken(token);
    console.log("token =",token);
  };

  const [fcmToken, setFcmToken] = useState("");

  return (
    <View style={PhoneNumberLoginStyles.container}>
      <StatusBarCustom sb_color={COLORS.BLACK} />

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
          <Text style={PhoneNumberLoginStyles.subHeadingTxt1}>Enter the OTP sent to{' '}<Text style={PhoneNumberLoginStyles.subHeadingTxt2}>{phoneNumber}</Text></Text>

          <View style={PhoneNumberOTPStyles.otpContainer}>
            {otp.map((value, index) => (
              <TextInput
                key={index}
                style={PhoneNumberOTPStyles.inputOTP}
                value={value}
                keyboardType="numeric"
                maxLength={1}
                onChangeText={(text) => handleOTPChange(index, text)}
                ref={(ref) => (inputRefs.current[index] = ref)}
              />
              ))
            }
          </View>

          <Text  style={PhoneNumberOTPStyles.resendOTPTxt1}>Didn't recieved the OTP?{" "}<Text  style={PhoneNumberOTPStyles.resendOTPTxt2}>RESEND OTP</Text></Text>

          <TouchableOpacity activeOpacity={0.9} onPressOut={getOTPFn} style={PhoneNumberLoginStyles.submitBtn}>
            <Text style={PhoneNumberLoginStyles.submitTxt}>VERIFY & PROCEED</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <Snackbar visible={visible} onDismiss={onDismissSnackBar} rippleColor={"grey"} style={{backgroundColor: COLORS.PRIMARY}} duration={3000}>{toast}</Snackbar>
    </View>
  )
}

export default PhoneNumberOTPScreen
