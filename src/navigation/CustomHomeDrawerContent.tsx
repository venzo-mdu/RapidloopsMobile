import React, { useState } from 'react';
import { Image, Modal, SafeAreaView, StyleSheet, Text, ToastAndroid, View } from 'react-native';
import { COLORS, FONTS, ICONS, helpersCSS } from '../helpers/custom';
import { BANKINFO, COMPANYINFO, PHONENUMBERLOGIN, USERS } from '../screens';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CustomHomeDrawerContent = ({ navigation }) => {

  const [showLogout, setShowLogout] = useState(false);
  const [logout, setLogout] = useState(false)

  const goToCompanyInfoFn = () => {
    navigation.navigate(COMPANYINFO);
  };

  const goToBankInfoFn = () => {
    navigation.navigate(BANKINFO);
  };

  const goToUsersFn = () => {
    navigation.navigate(USERS);
  };

  const goToSettingsFn = () => {
    // navigation.navigate(SETTINGS);
  };

  const showLogoutFn = () => {
    setShowLogout(true);
    navigation.toggleDrawer();
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

  const closeDrawer = () => {
    navigation.toggleDrawer();
  };

  return (
    <SafeAreaView style={CustomHomeDrawerContentStyles.container}>
      <View onTouchEnd={closeDrawer} style={CustomHomeDrawerContentStyles.closeImgBox}>
        <Image source={ICONS.BLACKCLOSE} style={CustomHomeDrawerContentStyles.closeImg} />
      </View>

      <View style={CustomHomeDrawerContentStyles.contentBox}>
        <View onTouchEnd={goToCompanyInfoFn} style={CustomHomeDrawerContentStyles.contentIndivBox}>
          <Text style={CustomHomeDrawerContentStyles.contentIndivTxt}>Company Info</Text>
        </View>

        <View onTouchEnd={goToBankInfoFn} style={CustomHomeDrawerContentStyles.contentIndivBox}>
          <Text style={CustomHomeDrawerContentStyles.contentIndivTxt}>Bank Info</Text>
        </View>

        <View onTouchEnd={goToUsersFn} style={CustomHomeDrawerContentStyles.contentIndivBox}>
          <Text style={CustomHomeDrawerContentStyles.contentIndivTxt}>Users</Text>
        </View>
      </View>

      <View style={CustomHomeDrawerContentStyles.bottomRowBox}>
        <View onTouchEnd={goToSettingsFn} style={CustomHomeDrawerContentStyles.bottomIndivRowBox1}>
          <Image source={ICONS.BLACKSETTINGS} style={{width: 18, height: 18, marginRight: 10,}} />
          <Text style={CustomHomeDrawerContentStyles.contentIndivTxt}>Settings</Text>
        </View>

        <View onTouchEnd={showLogoutFn} style={CustomHomeDrawerContentStyles.bottomIndivRowBox2}>
          <Image source={ICONS.BLACKLOGOUT} style={{width: 16, height: 16, marginRight: 10,}} />
          <Text style={CustomHomeDrawerContentStyles.contentIndivTxt}>Logout</Text>
        </View>
      </View>

      <Modal
        transparent={true}
        animationType={"none"}
        visible={showLogout}
        onRequestClose={stayLoginFn}
      >
        <View style={CustomHomeDrawerContentStyles.modalBG}>
          <View style={CustomHomeDrawerContentStyles.logoutBGBox}>
            <View style={CustomHomeDrawerContentStyles.logoutHeadingBox}>
              <Image source={ICONS.BLACKLOGOUT} style={{width: 22, height: 22}} />
              <Text style={CustomHomeDrawerContentStyles.logoutHeadingTxt}>Log-Out</Text>
            </View>

            <Text style={CustomHomeDrawerContentStyles.logoutSubheadingTxt}>Are you sure you want to logout?</Text>

            <View style={CustomHomeDrawerContentStyles.logoutOptionBox}>
              <View onTouchEnd={stayLoginFn} style={CustomHomeDrawerContentStyles.logoutNoOptionBox}>
                <Text style={CustomHomeDrawerContentStyles.logoutYesOptionBoxTxt}>No</Text>
              </View>
              <View onTouchEnd={logoutFn} style={CustomHomeDrawerContentStyles.logoutYesOptionBox}>
                <Text style={CustomHomeDrawerContentStyles.logoutYesOptionBoxTxt}>Yes</Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  )
}

export default CustomHomeDrawerContent

const CustomHomeDrawerContentStyles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.PRIMARY,
    height: "100%",
  },
  closeImgBox: {
    width: 32, 
    height: 32, 
    ...helpersCSS.Mid,
    marginLeft: "auto",
    marginRight: 16,
  },
  closeImg: {
    width: 18, 
    height: 18, 
  },
  contentBox: {
    marginTop: 16,
    marginBottom: 32,
  },
  contentIndivBox: {
    height: 56,
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  contentIndivTxt: {
    fontSize:  16,
    color: "rgba(0, 0, 0, 0.7)",
    fontFamily: FONTS.MontserratSemiBold
  },
  bottomRowBox: {
    height: 80,
    flexDirection: "row",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: COLORS.BLACK,
    borderBottomColor: COLORS.BLACK,
  },
  bottomIndivRowBox1: {
    flex: 1,
    flexDirection: "row",
    ...helpersCSS.Mid,
    borderRightWidth: 1,
    borderColor: COLORS.BLACK,
  },
  bottomIndivRowBox2: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
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
});