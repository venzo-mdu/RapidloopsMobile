import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, ICONS } from '../helpers/custom'
import { BANKINFO, COMPANYINFO, SETTINGS, USERS } from '../screens';

const CustomHomeDrawerContent = ({ navigation }) => {

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

        <View style={CustomHomeDrawerContentStyles.bottomIndivRowBox2}>
          <Image source={ICONS.BLACKLOGOUT} style={{width: 16, height: 16, marginRight: 10,}} />
          <Text style={CustomHomeDrawerContentStyles.contentIndivTxt}>Logout</Text>
        </View>
      </View>
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
    alignItems: "center",
    justifyContent: "center",
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
    alignItems: "center",
    justifyContent: "center",
    borderRightWidth: 1,
    borderColor: COLORS.BLACK,
  },
  bottomIndivRowBox2: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  }

})