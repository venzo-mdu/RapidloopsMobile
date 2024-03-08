import { View, Text, Image, ImageBackground, TextInput, FlatList } from 'react-native'
import React, { useState } from 'react'
import StatusBarCustom from '../../components/StatusBarCustom'
import { COLORS, ICONS, IMAGES } from '../../helpers/custom'
import { PartnerDashboardScreenStyles, PartnerLoadsScreenStyles, PartnerTripsScreenStyles } from './AppStyles'
import CustomDropDown from '../../components/CustomDropDown'

const PartnerTripsScreen = () => {

  const [Search, setSearch] = useState("");

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
                <Text style={PartnerLoadsScreenStyles.headingTxt}>Trips</Text>
              </View>

              <View style={PartnerLoadsScreenStyles.searchBox}>
                <TextInput
                  onChangeText={setSearch}
                  value={Search}
                  style={[PartnerLoadsScreenStyles.searchIPTxtBox, {fontSize: Search == "" ? 12 : 14}]}
                  placeholder={"Ref No/Truck No/Trucer Name/Route Name"}
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
                  <View style={PartnerTripsScreenStyles.cardContentBox}>
                    <View style={PartnerTripsScreenStyles.cardContentBoxRow1}>
                      <Text style={PartnerTripsScreenStyles.vehicleNoTxt}>TN01KK9990</Text>

                      <View style={PartnerTripsScreenStyles.cardContentBoxRow1a}>
                        <Text style={PartnerTripsScreenStyles.vehicleNoTxt1}>sam</Text>
                        <Image source={ICONS.BLACKCARSTEERING} style={{width: 14, height: 14, marginLeft: 7}} />
                      </View>
                    </View>

                    <View style={PartnerTripsScreenStyles.cardContentBoxRow2}>
                      <Text style={PartnerTripsScreenStyles.vehicleTypeTxt}>Bulker 20MT</Text>

                      <View style={PartnerTripsScreenStyles.cardContentBoxRow1a}>
                        <Text style={PartnerTripsScreenStyles.vehicleNoTxt1}>Superman</Text>
                        <Image source={ICONS.BLACKPICKUP} style={{width: 22, height: 22, marginLeft: 4, marginRight: -4}} />
                      </View>
                    </View>

                    <View style={PartnerTripsScreenStyles.cardContentBoxRow3}>
                      <Image source={ICONS.PRIMARYLOCATIONPIN} style={{width: 16, height: 16, marginRight: 8}} />
                      <Text style={PartnerTripsScreenStyles.locationTxt}>Madurai - Chennai</Text>
                    </View>

                    <View style={PartnerTripsScreenStyles.cardContentBoxRow4}>
                      <View style={PartnerTripsScreenStyles.cardContentBoxRow4a}>
                        <Text style={PartnerTripsScreenStyles.materialTxt}>Hhh <Text style={PartnerTripsScreenStyles.materialTypeTxt}>Bulk</Text></Text>
                        <Text style={PartnerTripsScreenStyles.tripIDTxt}>TP-676862</Text>
                      </View>

                      <View style={PartnerTripsScreenStyles.cardContentBoxRow4b}>
                        <Text style={PartnerTripsScreenStyles.tripDateTxt}>17-02-24</Text>

                        <View style={PartnerTripsScreenStyles.cardContentBoxRow4bRow}>
                          <View style={PartnerTripsScreenStyles.cardContentBoxRow4bRowCircle}>
                            <Text style={PartnerTripsScreenStyles.cardContentBoxRow4bRowCircleTxt}>L</Text>
                          </View>

                          <View style={[PartnerTripsScreenStyles.cardContentBoxRow4bRowCircle, {marginLeft: 22}]}>
                            <Text style={PartnerTripsScreenStyles.cardContentBoxRow4bRowCircleTxt}>U</Text>
                          </View>
                        </View>
                      </View>
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

export default PartnerTripsScreen