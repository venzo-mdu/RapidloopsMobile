import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'
import StatusBarCustom from '../../components/StatusBarCustom'
import { COLORS, ICONS, IMAGES } from '../../helpers/custom'
import { LoadDetailsScreenStyles } from './AppStyles'

const LoadDetailsScreen = () => {
  return (
    <View>
      <StatusBarCustom sb_color={COLORS.PRIMARY} />

      <View style={LoadDetailsScreenStyles.container}>
        <View style={LoadDetailsScreenStyles.appBarBGIMGBox}>
          <ImageBackground source={IMAGES.LOADSDETAILSBG} style={LoadDetailsScreenStyles.appBarBGIMG}>
            
          </ImageBackground>
        </View>

        <View style={LoadDetailsScreenStyles.appHeadingBox}>
          <View style={LoadDetailsScreenStyles.backBtnBox}>
            <Image source={ICONS.WHITELEFTARR} style={{width: 18, height: 18}} />
          </View>
          <View style={LoadDetailsScreenStyles.headerBox}>
            <Text style={LoadDetailsScreenStyles.headingTxt}>Load Detail</Text>
          </View>

        </View>

      </View>
    </View>
  )
}

export default LoadDetailsScreen