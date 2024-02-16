import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import StatusBarCustom from '../../components/StatusBarCustom'
import { COLORS, IMAGES } from '../../helpers/custom'
import { CompanyInfoScreenStyles, HomeScreenStyles, UserScreenStyles } from './AppStyles'
import { useNavigation } from '@react-navigation/native'

const UsersScreen = () => {

  const navigation = useNavigation();

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

        <View style={CompanyInfoScreenStyles.bannerBG}>
          <View style={CompanyInfoScreenStyles.headerBox}>
            <Text style={CompanyInfoScreenStyles.headingTxt}>Users</Text>
          </View>
        </View>

        <View style={UserScreenStyles.noDataBox}>
          <Text style={UserScreenStyles.noDataBoxTxt}>No data available</Text>
        </View>
      </View>
    </View>
  )
}

export default UsersScreen