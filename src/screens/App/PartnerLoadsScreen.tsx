import { View, Text, Image, ScrollView, ImageBackground, TextInput, FlatList, RefreshControl } from 'react-native'
import React, { useState } from 'react'
import StatusBarCustom from '../../components/StatusBarCustom'
import { COLORS, ICONS, IMAGES } from '../../helpers/custom'
import { PartnerDashboardScreenStyles, PartnerLoadsScreenStyles } from './AppStyles'
import CustomDropDown from '../../components/CustomDropDown'
import { useNavigation } from '@react-navigation/native'
import { PARTNERLOADDETAILS } from '..'

const PartnerLoadsScreen = () => {

  const navigation = useNavigation();

  const [Search, setSearch] = useState("");

  const goToDetailsFn = (item,index) => {
    navigation.navigate(PARTNERLOADDETAILS);
  };

  return (
    <View>
      <StatusBarCustom sb_color={COLORS.BLACK} />

      <View style={PartnerLoadsScreenStyles.container}>
        <View style={PartnerDashboardScreenStyles.appBarBGIMGBox}>
          <View style={PartnerDashboardScreenStyles.appBarIconBox} />
          <View style={PartnerDashboardScreenStyles.appBarBGIMGView}>
            <Image source={IMAGES.APPLOGINLOGOWHITE} style={PartnerDashboardScreenStyles.appBarBGIMG} />
          </View>

          <View style={PartnerDashboardScreenStyles.appBarIconBox}>
            <Image source={ICONS.WHITELOGOUT} style={{width: 24, height: 24}} />
          </View>
        </View>

        <View style={PartnerLoadsScreenStyles.searchBGImgBox}>
          <ImageBackground source={IMAGES.APPBARBG} style={PartnerLoadsScreenStyles.searchBGImg} resizeMode="stretch">
            <View style={PartnerLoadsScreenStyles.headerRow}>
              <View style={PartnerLoadsScreenStyles.headerBox}>
                <Text style={PartnerLoadsScreenStyles.headingTxt}>Loads</Text>
              </View>

              <View style={PartnerLoadsScreenStyles.searchBox}>
                <TextInput
                  onChangeText={setSearch}
                  value={Search}
                  style={[PartnerLoadsScreenStyles.searchIPTxtBox, {fontSize: Search == "" ? 12 : 14}]}
                  placeholder={"Route/Material"}
                  placeholderTextColor={"#646464"}
                  keyboardType="web-search"
                  inputMode="search"
                  autoFocus={false}
                  autoCapitalize="characters"
                />

                <View style={PartnerLoadsScreenStyles.searchIcnBox}>
                  <Image source={ICONS.BLACKSEARCH} style={{width: 20, height: 20}} />
                </View>
              </View>
            </View>

            <CustomDropDown
              DATA={[]}
              dropdownStyle={PartnerLoadsScreenStyles.dropdown1}
              // value={selectedLoadingPoint?.label}
              placeholder={'Loading'}
              // onChange={filterBasedOnLoadingPointFn}
            />

            <CustomDropDown
              DATA={[]}
              dropdownStyle={PartnerLoadsScreenStyles.dropdown1}
              // value={selectedLoadingPoint?.label}
              placeholder={'Loading'}
              // onChange={filterBasedOnLoadingPointFn}
            />
          </ImageBackground>
        </View>

        <FlatList data={[1,2,3,4,5]}
            showsVerticalScrollIndicator={false} 
            // refreshControl={
            //   <RefreshControl 
            //     refreshing={refreshing} 
            //     onRefresh={onRefresh} 
            //     colors={[COLORS.PRIMARY]} // Customizing spinner colors
            //     progressBackgroundColor="#ffffff" // Customizing background color
            //   />
            // }
            renderItem={({item, index}) => 
              { 
                return (
                  <View onTouchEnd={goToDetailsFn.bind(this,item,index)} style={PartnerLoadsScreenStyles.cardContentBox}>
                    <View style={PartnerLoadsScreenStyles.cardContentBoxRow1}>
                      <Text style={PartnerLoadsScreenStyles.loadIDTxt}>5678</Text>

                      <View style={PartnerLoadsScreenStyles.cardContentBoxRow1Column}>
                        <Text style={PartnerLoadsScreenStyles.materialTxt}>Steel</Text>
                        <Text style={PartnerLoadsScreenStyles.materialTypeTxt}>Bulk</Text>
                      </View>
                    </View>

                    <View style={PartnerLoadsScreenStyles.cardContentBoxRow2}>
                      <Image source={ICONS.PRIMARYLOCATIONPIN} style={{width: 16, height: 16, marginRight: 8}} />
                      <Text style={PartnerLoadsScreenStyles.locationTxt}>Madurai - Chennai</Text>
                    </View>

                    <View style={PartnerLoadsScreenStyles.cardContentBoxRow3}>
                      <View style={PartnerLoadsScreenStyles.cardContentBoxRow3a}>
                        <Image source={ICONS.DRAWERTRUCKINACTIVE} style={{width: 18, height: 18, marginRight: 6}} />
                        <Text style={PartnerLoadsScreenStyles.vehicleTxt}>Bulker</Text>
                      </View>

                      <Text style={PartnerLoadsScreenStyles.rateTxt}>{"\u20B9"} 4,000</Text>
                    </View>
                  </View>
                )
              }
            }
          />
      </View>
    </View>
  )
}

export default PartnerLoadsScreen