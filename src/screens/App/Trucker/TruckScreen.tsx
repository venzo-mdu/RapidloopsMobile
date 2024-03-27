import { View, Text, ImageBackground, Image, FlatList, TextInput, Animated, Button, StyleSheet } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { API, COLORS, ICONS, IMAGES } from '../../../helpers/custom';
import { NOTIFICATION } from '../..';
import StatusBarCustom from '../../../components/StatusBarCustom';
import { CompanyInfoScreenStyles, HomeScreenStyles, TruckScreenStyles } from '../AppStyles';

const TruckScreen = () => {

  const navigation = useNavigation();

  useEffect(() => {
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
        setTRUCKLIST(responseJson?.truckInfo);
        setREALTRUCKLIST(responseJson?.truckInfo);
      })
      .catch((error) => {
        console.error(error);
      });
    } catch (error) {
      console.error("catch : ", error);
    }
  };

  const [REALTRUCKLIST, setREALTRUCKLIST] = useState();
  const [TRUCKLIST, setTRUCKLIST] = useState();

  const openDrawer = () => {
    navigation.toggleDrawer();
  };

  const NotificationFn = () => {
    navigation.navigate(NOTIFICATION);
  };

  const [showSearch, setShowSearch] = useState(false);
  const [Search, setSearch] = useState("");

  const filterFn1 = (value) => {
    setSearch(value);
    // setShowSearchList(true);

    let filteredData = REALTRUCKLIST.filter(
      function (item) {
        return item?.truckNumber.toLowerCase().includes(value.toLowerCase());
      }
    );
      
    setTRUCKLIST(filteredData);
  };

  const filterFn = (value) => {
    setSearch(value);

    let filteredData = REALTRUCKLIST.filter(
      function (item) {
        return item?.truckNumber.toLowerCase().includes(value.toLowerCase());
      }
    );
      
    setTRUCKLIST(filteredData);
  };

  // fadeAnim will be used as the value for opacity. Initial Value: 0
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    // console.log(fadeAnim)
    // // Will change fadeAnim value to 1 in 5 seconds
    // Animated.timing(fadeAnim, {
    //   toValue: 1,
    //   duration: 5000,
    //   useNativeDriver: true,
    // }).start();

    setShowSearch(true)
    // console.log(fadeAnim)
  };

  const fadeOut = () => {
    // console.log(fadeAnim)
    // // Will change fadeAnim value to 0 in 3 seconds
    // Animated.timing(fadeAnim, {
    //   toValue: 0,
    //   duration: 3000,
    //   useNativeDriver: true,
    // }).start();

    setTRUCKLIST(REALTRUCKLIST);
    setSearch("");
    setShowSearch(false)
    // console.log(fadeAnim)
  };

  return (
    <View>
      <StatusBarCustom sb_color={COLORS.PRIMARY} />

      <View style={HomeScreenStyles.container}>
        <View style={HomeScreenStyles.appBarBGIMGBox}>
          <ImageBackground source={IMAGES.HOMEBGIMG} style={HomeScreenStyles.appBarBGIMG}>
            <View style={HomeScreenStyles.appBarRowBox}>
              <View onTouchEnd={openDrawer} style={HomeScreenStyles.menuBox} />

              {showSearch ? (
                <View style={[HomeScreenStyles.searchIPBox,
                  // {
                  //   // Bind opacity to animated value
                  //   opacity: fadeAnim,
                  // },
                ]}>
                  <View onTouchEnd={fadeOut} style={HomeScreenStyles.searchIPBackBox}>
                    <Image source={ICONS.PRIMARYBACK} style={{width:18, height:18}} />
                  </View>

                  <View style={{flex: 1}}>
                    <TextInput
                      onChangeText={value => filterFn(value)}
                      value={Search}
                      style={HomeScreenStyles.searchIPTxtBox}
                      placeholder={"Search"}
                      placeholderTextColor={"#646464"}
                      keyboardType="web-search"
                      inputMode="search"
                      autoFocus={true}
                      autoCapitalize="characters"
                    />
                  </View>
                </View>
              ) : (
                <View onTouchEnd={fadeIn} style={HomeScreenStyles.searchBox}>
                  <Image source={ICONS.WHITESEARCH} style={{width:22, height:22, marginTop:2}} />
                </View>
              )}
              
              <View onTouchEnd={NotificationFn} style={[HomeScreenStyles.bellBox, {marginLeft:0}]} />
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
          contentContainerStyle={{paddingBottom: 80}}
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
                    <View style={[TruckScreenStyles.statusCircle, {backgroundColor: item?.status == "ACTIVE_IDLE" ? "#0300fb" : item?.status == "ACTIVE_ONGOING" ? "#11a92f" : "#faaa00"}]} />
                    <Text style={[TruckScreenStyles.statusTxt, {color: item?.status == "ACTIVE_IDLE" ? "#0300fb" : item?.status == "ACTIVE_ONGOING" ? "#11a92f" : "#faaa00"}]}>{item?.status == "ACTIVE_IDLE" ? "Idle" : item?.status == "ACTIVE_ONGOING" ? "On Trip" : item?.status == "ACTIVE_ASSIGNED" ? "Assigned" : null}</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fadingContainer: {
    padding: 20,
    backgroundColor: 'powderblue',
  },
  fadingText: {
    fontSize: 28,
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: 'space-evenly',
    marginVertical: 16,
  },
});