import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useRef, useState } from 'react'
import { Animated, FlatList, Image, ImageBackground, RefreshControl, ScrollView, Text, TextInput, View } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown'
import StatusBarCustom from '../../components/StatusBarCustom'
import { API, COLORS, FONTS, ICONS, IMAGES } from '../../helpers/custom'
import { CompanyInfoScreenStyles, HomeScreenStyles, LoadListScreenStyles, UserScreenStyles } from './AppStyles'
import { LOADDETAILS, NOTIFICATION } from '..'
import DropdownBox from '../../components/DropdownBox'
import CustomDropDown from '../../components/CustomDropDown'

const LoadScreen = () => {

  const navigation = useNavigation();

  useEffect(() => {
    getDataFn("", "");
    getActiveShipperListFn();
    getLoadingPointListFn();
  }, []);

  const getDataFn = async (shipperID, loadingPointID) => {

    try {
      const data = JSON.stringify({
        "filters": [
          {
            "name": "shipper",
            "data": shipperID !== "all" ? shipperID : ""
          },
          {
            "name": "loadingPoint",
            "data": loadingPointID !== "all" ? loadingPointID : ""
          }
        ]
      });

      await fetch(API?.LoadList + "?limit=" + 10000 + "&offset=0" + "&sortBy=DESC" + "&sortColumn=createdAt", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + global.TOKEN,
        },
        body: data,
      })
      .then((response) => response.json())
      .then((responseJson) => {
        setLOADSLIST(responseJson?.list);
        setREALLOADSLIST(responseJson?.list);
        setRefreshing(false);
        console.error(responseJson?.list?.length)
      })
      .catch((error) => {
        console.error(error);
        setRefreshing(false);
      });
    } catch (error) {
      console.error("catch : ", error);
      setRefreshing(false);
    }
  };

  const getActiveShipperListFn = async () => {
    try {
      await fetch(API?.ActiveShipperList + "?id=" + global.COMPANYID, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + global.TOKEN,
        }
      })
      .then((response) => response.json())
      .then((responseJson) => {

        var arr = [];
        arr.push({ label: "All Shippers", value: "all" });
        for (let i = 0; i < responseJson?.list.length; i++) {
          arr.push({ label: responseJson?.list[i]?.companyName, value: responseJson?.list[i]?.companyId });
        }
        setALLACTIVESHIPPERLIST(arr);
        setSelectedShipper(arr[0]);
      })
      .catch((error) => {
        console.error(error);
      });
    } catch (error) {
      console.error("catch : ", error);
    }
  };

  const getLoadingPointListFn = async () => {
    try {
      await fetch(API?.LoadingPointList, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + global.TOKEN,
        }
      })
      .then((response) => response.json())
      .then((responseJson) => {
        var arr = [];
        arr.push({ label: "Loading Point", value: "all" });
        for (let i = 0; i < responseJson?.list.length; i++) {
          arr.push({ label: responseJson?.list[i]?.sourceCity, value: responseJson?.list[i]?.sourceCity });
        }
        setALLLOADINGPOINTLIST(arr);
        setSelectedLoadingPoint(arr[0]);
      })
      .catch((error) => {
        console.error(error);
      });
    } catch (error) {
      console.error("catch : ", error);
    }
  };

  const [REALLOADSLIST, setREALLOADSLIST] = useState([]);
  const [LOADSLIST, setLOADSLIST] = useState([]);

  const [ALLACTIVESHIPPERLIST, setALLACTIVESHIPPERLIST] = useState([]);
  const [ALLLOADINGPOINTLIST, setALLLOADINGPOINTLIST] = useState([]);

  const openDrawer = () => {
    navigation.toggleDrawer();
  };

  const [selectedShipper, setSelectedShipper] = useState(null);
  const [selectedLoadingPoint, setSelectedLoadingPoint] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const viewLoadDetailsFn = (item, index) => {
    const loadID = item?.loadId;
    navigation.navigate(LOADDETAILS, {loadID});
  };

  const NotificationFn = () => {
    navigation.navigate(NOTIFICATION);
  };

  const filterBasedOnShippersFn = async (item) => {
    setSelectedShipper({label: item?.label, value: item?.value});
    setIsFocus(false);

    await getDataFn(item?.value, selectedLoadingPoint?.value);
  };

  const filterBasedOnLoadingPointFn = async (item) => {
    setSelectedLoadingPoint({label: item?.label, value: item?.value});
    setIsFocus(false);
    
    await getDataFn(selectedShipper?.value, item?.value);
    console.log("1")
  };

  const [showSearch, setShowSearch] = useState(false);
  const [Search, setSearch] = useState("");

  const filterFn = (value) => {
    setSearch(value);
    // setShowSearchList(true);

    let filteredData = REALLOADSLIST.filter(
      function (item) {
        return item?.loadCode.toLowerCase().includes(value.toLowerCase());
      }
    );
      
    setLOADSLIST(filteredData);
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

    setLOADSLIST(REALLOADSLIST);
    setSearch("");
    setShowSearch(false)
    // console.log(fadeAnim)
  };

  const [refreshing, setRefreshing] = useState(false);
  
  const onRefresh = async () => {
    setRefreshing(true);
    await getDataFn("", "");
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
            <Text style={CompanyInfoScreenStyles.headingTxt}>Loads</Text>
          </View>
        </View>

        <View style={[LoadListScreenStyles.scrollBox, {flexDirection: "row", justifyContent: "space-between", marginHorizontal: 8, marginBottom: 16}]}>
          {/* <Dropdown
            data={ALLACTIVESHIPPERLIST}
            labelField="label"
            valueField="value"
            style={LoadListScreenStyles.dropdown1}
            containerStyle={LoadListScreenStyles.dropdownContainerStyle}
            itemContainerStyle={LoadListScreenStyles.dropdownItemContainerStyle}
            placeholderStyle={LoadListScreenStyles.dropdownPlaceholderStyle}
            selectedTextStyle={LoadListScreenStyles.dropdownSelectedTextStyle}
            inputSearchStyle={LoadListScreenStyles.dropdownInputSearchStyle}
            iconStyle={LoadListScreenStyles.dropdownIconStyle}
            search={false}
            maxHeight={200}
            itemTextStyle={LoadListScreenStyles.dropdownItemTextStyle}
            placeholder={'All Shippers'}
            searchPlaceholder="Search..."
            value={selectedShipper}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => filterBasedOnShippersFn(item)}
            activeColor={"#BF841E99"}
            renderRightIcon={() => (
              <DropdownBox />
            )}
          /> */}

          {/* <Dropdown
            data={ALLLOADINGPOINTLIST}
            labelField="label"
            valueField="value"
            style={LoadListScreenStyles.dropdown2}
            containerStyle={LoadListScreenStyles.dropdownContainerStyle}
            itemContainerStyle={LoadListScreenStyles.dropdownItemContainerStyle}
            placeholderStyle={LoadListScreenStyles.dropdownPlaceholderStyle}
            selectedTextStyle={LoadListScreenStyles.dropdownSelectedTextStyle}
            inputSearchStyle={LoadListScreenStyles.dropdownInputSearchStyle}
            iconStyle={LoadListScreenStyles.dropdownIconStyle}
            search={false}
            maxHeight={200}
            itemTextStyle={LoadListScreenStyles.dropdownItemTextStyle}
            placeholder={'Loading Point'}
            searchPlaceholder="Search..."
            value={selectedLoadingPoint?.label}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => filterBasedOnLoadingPointFn(item)}
            activeColor={"#BF841E99"}
            renderRightIcon={() => (
              <DropdownBox />
            )}
          /> */}

          <CustomDropDown
            DATA={ALLACTIVESHIPPERLIST}
            dropdownStyle={LoadListScreenStyles.dropdown1}
            value={selectedShipper}
            placeholder={'All Shippers'}
            onChange={filterBasedOnShippersFn}
          />

          <CustomDropDown
            DATA={ALLLOADINGPOINTLIST}
            dropdownStyle={LoadListScreenStyles.dropdown2}
            value={selectedLoadingPoint?.label}
            placeholder={'Loading Point'}
            onChange={filterBasedOnLoadingPointFn}
          />
        </View>

        {LOADSLIST?.length > 0 ? (
          <FlatList data={LOADSLIST}
            showsVerticalScrollIndicator={false} 
            contentContainerStyle={{paddingBottom: 80}}
            refreshControl={
              <RefreshControl 
                refreshing={refreshing} 
                onRefresh={onRefresh} 
                colors={[COLORS.PRIMARY]} // Customizing spinner colors
                progressBackgroundColor="#ffffff" // Customizing background color
              />
            }
            renderItem={({item, index}) => 
              { 
                return (
                  <View onTouchEnd={viewLoadDetailsFn.bind(this, item, index)} style={LoadListScreenStyles.cardRowBox}>
                    <Text style={LoadListScreenStyles.loadIDTxt}>{item?.loadCode}</Text>

                    <View style={LoadListScreenStyles.loadLocationRow}>
                      <Image source={ICONS.PRIMARYLOCATIONPIN} style={{width: 16, height: 16, marginRight: 2}} />
                      <Text style={LoadListScreenStyles.loadLocationTxt}>{item?.sourceCity} - {item?.destinationCity}</Text>
                    </View>

                    <View style={LoadListScreenStyles.contentRow}>
                      <View style={LoadListScreenStyles.contentRow1}>
                        <View style={LoadListScreenStyles.contentRow11}>
                          <Text style={LoadListScreenStyles.contentRowKeyTxt}>Material</Text>
                          <View style={LoadListScreenStyles.materialTypeBox}>
                            <Text numberOfLines={1} style={LoadListScreenStyles.materialTypeTxt}>{item?.material?.materialCategory}</Text>
                          </View>
                        </View>
                        <Text style={LoadListScreenStyles.contentRowValue1Txt}>{item?.material?.materialName}</Text>
                      </View>

                      <View style={LoadListScreenStyles.contentRow2}>
                        <Text style={LoadListScreenStyles.contentRowKeyTxt}>Available Quantity</Text>
                        <Text style={LoadListScreenStyles.contentRowValue1Txt}>{parseInt(item?.availableQuantity).toFixed(3)} <Text style={LoadListScreenStyles.contentRowValue2Txt}>MT</Text></Text>
                      </View>

                      <View style={LoadListScreenStyles.contentRow3}>
                        <Text style={LoadListScreenStyles.contentRowKeyTxt}>Rate</Text>
                        <Text style={LoadListScreenStyles.contentRowValue1Txt}>{parseInt(item?.ratePerUnit).toFixed(2)} <Text style={LoadListScreenStyles.contentRowValue2Txt}>/MT</Text></Text>
                      </View>
                    </View>
                  </View>
                )
              }
            }
          />
        ) : (
          <View style={UserScreenStyles.noDataBox}>
            <Text style={UserScreenStyles.noDataBoxTxt}>No data available</Text>
          </View>
        )}
      </View>
    </View>
  )
}

export default LoadScreen