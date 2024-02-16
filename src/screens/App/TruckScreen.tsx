import { View, Text, ImageBackground, Image, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import StatusBarCustom from '../../components/StatusBarCustom';
import { API, COLORS, ICONS, IMAGES } from '../../helpers/custom';
import { CompanyInfoScreenStyles, HomeScreenStyles, TruckScreenStyles } from './AppStyles';

const TruckScreen = () => {

  const navigation = useNavigation();

  useEffect(() => {
    console.log("TRUCK LIST",global.COMPANYID)
    getDataFn();
  }, []);

  const getDataFn = async () => {
    try {
      await fetch(API?.TruckList + "?id=" + global.COMPANYID, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + global.TOKEN,
        }
      })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log("TRUCK LIST APIs : ",responseJson);
        setTRUCKLIST(responseJson?.truckInfo);
      })
      .catch((error) => {
        console.log(error);
      });
    } catch (error) {
      console.error("catch : ", error);
    }
  };

  const [TRUCKLIST, setTRUCKLIST] = useState();

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

              <View style={HomeScreenStyles.searchBox}>
                <Image source={ICONS.WHITESEARCH} style={{width:22, height:22, marginTop:2}} />
              </View>

              <View style={[HomeScreenStyles.bellBox, {marginLeft:0}]} />
            </View>
          </ImageBackground>
        </View>

        <View style={CompanyInfoScreenStyles.bannerBG}>
          <View style={CompanyInfoScreenStyles.headerBox}>
            <Text style={CompanyInfoScreenStyles.headingTxt}>Trucks</Text>
          </View>
        </View>

        <FlatList data={TRUCKLIST}
          showsVerticalScrollIndicator={false} 
          style={TruckScreenStyles.scrollBox}
          contentContainerStyle={{paddingBottom: 8}}
          renderItem={({item, index}) => 
            { 
              return (
                <View style={TruckScreenStyles.cardRowBox}>
                  <Image source={ICONS.PRIMARYTRUCK} style={{width: 28, height: 28, marginLeft: 20, marginRight: 12}} />

                  <View style={TruckScreenStyles.vehicleBox}>
                    <Text style={TruckScreenStyles.vehicleBoxNoTxt}>{item?.truckNumber}</Text>
                    <Text style={TruckScreenStyles.vehicleBoxCapTxt}>{item?.truckType + " " + item?.truckCapacity + " MT"}</Text>
                  </View>

                  <View style={TruckScreenStyles.statusBox}>
                    <View style={[TruckScreenStyles.statusCircle, {backgroundColor: item?.status == "ACTIVE_IDLE" ? "#0300fb" : "#11a92f"}]} />
                    <Text style={[TruckScreenStyles.statusTxt, {color: item?.status == "ACTIVE_IDLE" ? "#0300fb" : "#11a92f"}]}>{item?.status == "ACTIVE_IDLE" ? "Idle" : "On Trip"}</Text>
                  </View>

                  <View style={TruckScreenStyles.locationCircleBox}>
                    <Image source={ICONS.LIGHTGREYLOCATIONPINBOX} style={{width: 26, height: 26, marginBottom: 2}} />
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

export default TruckScreen