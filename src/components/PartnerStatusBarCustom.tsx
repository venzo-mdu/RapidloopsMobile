import { Image, Modal, Platform, StyleSheet, Text, ToastAndroid, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS, FONTS, ICONS, IMAGES } from '../helpers/custom'
import {helpersCSS} from '../helpers/custom';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PHONENUMBERLOGIN } from '../screens';
import { useNavigation } from '@react-navigation/native';

const PartnerStatusBarCustom = () => {

  const navigation = useNavigation();

  const [showLogout, setShowLogout] = useState(false);
  const [logout, setLogout] = useState(false)

  const showLogoutFn = () => {
    setShowLogout(true);
  };

  const stayLoginFn = () => {
    setShowLogout(false);
  };

  const logoutFn = () => {
    AsyncStorage.removeItem('TOKEN');
    AsyncStorage.removeItem('USERID');
    AsyncStorage.removeItem('PHONENUM');
    AsyncStorage.removeItem('COMPANYID');
    setShowLogout(false);
    ToastAndroid.show('Log out Successfully', ToastAndroid.SHORT);
    navigation.navigate(PHONENUMBERLOGIN);
  };

  return (
    <>
      <View style={styles.appBarBGIMGBox}>
        <View style={styles.appBarIconBox} />
        <View style={styles.appBarBGIMGView}>
          <Image source={IMAGES.APPLOGINLOGOWHITE} style={styles.appBarBGIMG} />
        </View>

        <View onTouchEnd={showLogoutFn} style={styles.appBarIconBox}>
          <Image source={ICONS.WHITELOGOUT} style={{width: 24, height: 24}} />
        </View>
      </View>

      <Modal
        transparent={true}
        animationType={"none"}
        visible={showLogout}
        onRequestClose={stayLoginFn}
      >
        <View style={styles.modalBG}>
          <View style={styles.logoutBGBox}>
            <View style={styles.logoutHeadingBox}>
              <Image source={ICONS.BLACKLOGOUT} style={{width: 22, height: 22}} />
              <Text style={styles.logoutHeadingTxt}>Log-Out</Text>
            </View>

            <Text style={styles.logoutSubheadingTxt}>Are you sure you want to logout?</Text>

            <View style={styles.logoutOptionBox}>
              <View onTouchEnd={stayLoginFn} style={styles.logoutNoOptionBox}>
                <Text style={styles.logoutYesOptionBoxTxt}>No</Text>
              </View>
              <View onTouchEnd={logoutFn} style={styles.logoutYesOptionBox}>
                <Text style={styles.logoutYesOptionBoxTxt}>Yes</Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </>
  )
}

export default PartnerStatusBarCustom

const styles = StyleSheet.create({
    appBarBGIMGBox: {
      backgroundColor: COLORS.PRIMARY,
      width: "100%",
      paddingTop: Platform.OS == 'ios' ? 64 : 0,
      height: 64,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    appBarBGIMGView: {
      width: 112,
      height: 56,
      alignItems: "center",
      justifyContent: "flex-end",
      marginTop: "auto",
      marginBottom: 2,
    },
    appBarBGIMG: {
      width: 102,
      height: 50,
      resizeMode: 'contain',
    },
    appBarIconBox: {
      width: 48,
      height: 48,
      ...helpersCSS.Mid,
    },

    modalBG: {
      flex: 1,
      backgroundColor: '#00000099',
      ...helpersCSS.Mid,
    },
    logoutBGBox: {
      backgroundColor: COLORS.WHITE,
      paddingHorizontal: 24,
      paddingTop: 24,
      borderRadius: 24,
    },
    logoutHeadingBox: {
      flexDirection: "row",
      alignItems: "center",
    },
    logoutHeadingTxt: {
      fontSize: 24,
      color: COLORS.BLACK,
      fontFamily: FONTS.MontserratBold,
      marginLeft: 8,
    },
    logoutSubheadingTxt: {
      fontSize: 14,
      color: "#85848a",
      fontFamily: FONTS.MontserratMedium,
      marginTop: 16,
    },
    logoutOptionBox: {
      flexDirection: "row",
      alignItems: "center",
      alignSelf: "flex-end",
      marginTop: 32,
    },
    logoutNoOptionBox: {
      backgroundColor: "#cfb896",
      width: 90,
      height: 50,
      ...helpersCSS.Mid,
      marginLeft: 8,
      marginBottom: 24,
      borderRadius: 32,
      ...helpersCSS.shadow3,
    },
    logoutYesOptionBox: {
      backgroundColor: COLORS.PRIMARY,
      width: 90,
      height: 50,
      ...helpersCSS.Mid,
      marginLeft: 8,
      marginBottom: 24,
      borderRadius: 32,
      ...helpersCSS.shadow3,
    },
    logoutYesOptionBoxTxt: {
      fontSize: 16,
      color: COLORS.WHITE,
      fontFamily: FONTS.MontserratSemiBold,
    },
})