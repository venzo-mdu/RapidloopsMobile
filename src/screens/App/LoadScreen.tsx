import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { FlatList, Image, ImageBackground, Text, View } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown'
import StatusBarCustom from '../../components/StatusBarCustom'
import { API, COLORS, FONTS, ICONS, IMAGES } from '../../helpers/custom'
import { CompanyInfoScreenStyles, HomeScreenStyles, LoadListScreenStyles } from './AppStyles'
import { LOADDETAILS } from '..'

const LoadScreen = () => {

  const navigation = useNavigation();

  useEffect(() => {
    console.log("LOAD",global.COMPANYID)
    getDataFn();
  }, []);

  const getDataFn = async () => {
    try {
      await fetch(API?.LoadList + "?id=" + global.COMPANYID, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + global.TOKEN,
        }
      })
      .then((response) => response.json())
      .then((responseJson) => {
        setLOADSLIST(responseJson?.list);
        getActiveShipperListFn();
      })
      .catch((error) => {
        console.log(error);
      });
    } catch (error) {
      console.error("catch : ", error);
    }
  };

  const getActiveShipperListFn = async () => {
    try {
      await fetch(API?.ActiveShipperList, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + global.TOKEN,
        }
      })
      .then((response) => response.json())
      .then((responseJson) => {
        var arr = [];
        for (let i = 0; i < responseJson?.list.length; i++) {
          arr.push({ label: responseJson?.list[i]?.companyName, value: responseJson?.list[i]?.companyId });
        }
        console.log(arr?.length)
        setALLACTIVESHIPPERLIST(arr);
      })
      .catch((error) => {
        console.log(error);
      });
    } catch (error) {
      console.error("catch : ", error);
    }
  };

  const [LOADSLIST, setLOADSLIST] = useState([]);
  const [ALLACTIVESHIPPERLIST, setALLACTIVESHIPPERLIST] = useState([]);

  const openDrawer = () => {
    navigation.toggleDrawer();
  };

  const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
  ];

  const [selectedShipper, setSelectedShipper] = useState(null);
  const [selectedLoadingPoint, setSelectedLoadingPoint] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const viewLoadDetailsFn = (item, index) => {
    console.log(item, index);
    navigation.navigate(LOADDETAILS);
  }

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
            <Text style={CompanyInfoScreenStyles.headingTxt}>Loads</Text>
          </View>
        </View>

        <View style={[LoadListScreenStyles.scrollBox, {flexDirection: "row", justifyContent: "space-between", marginHorizontal: 8, marginBottom: 16}]}>
          <Dropdown
            data={ALLACTIVESHIPPERLIST}
            labelField="label"
            valueField="value"
            style={LoadListScreenStyles.dropdown1}
            containerStyle={{backgroundColor: COLORS.WHITE}}
            itemContainerStyle={{backgroundColor: COLORS.WHITE}}
            placeholderStyle={LoadListScreenStyles.dropdownPlaceholderStyle}
            selectedTextStyle={LoadListScreenStyles.dropdownSelectedTextStyle}
            inputSearchStyle={LoadListScreenStyles.dropdownInputSearchStyle}
            iconStyle={LoadListScreenStyles.dropdownIconStyle}
            search={false}
            maxHeight={200}
            itemTextStyle={{fontSize: 12, color: COLORS.BLACK, fontFamily: FONTS.MontserratMedium, marginHorizontal:-15,marginVertical:-15}}
            placeholder={'All Shippers'}
            searchPlaceholder="Search..."
            value={selectedShipper}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setSelectedShipper(item?.value);
              setIsFocus(false);
            }}
          />

          <Dropdown
            data={data}
            labelField="label"
            valueField="value"
            style={LoadListScreenStyles.dropdown2}
            containerStyle={{backgroundColor: COLORS.WHITE}}
            itemContainerStyle={{backgroundColor: COLORS.WHITE}}
            placeholderStyle={LoadListScreenStyles.dropdownPlaceholderStyle}
            selectedTextStyle={LoadListScreenStyles.dropdownSelectedTextStyle}
            inputSearchStyle={LoadListScreenStyles.dropdownInputSearchStyle}
            iconStyle={LoadListScreenStyles.dropdownIconStyle}
            search={false}
            maxHeight={200}
            itemTextStyle={{fontSize: 12, color: COLORS.BLACK, fontFamily: FONTS.MontserratMedium, marginHorizontal:-15,marginVertical:-15}}
            placeholder={'Loading Point'}
            searchPlaceholder="Search..."
            value={selectedLoadingPoint}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setSelectedLoadingPoint(item?.value);
              setIsFocus(false);
            }}
          />
        </View>

        <FlatList data={LOADSLIST}
          showsVerticalScrollIndicator={false} 
          contentContainerStyle={{paddingBottom: 8}}
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
      </View>
    </View>
  )
}

export default LoadScreen