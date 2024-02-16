import { View, Text, ImageBackground, Image, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import StatusBarCustom from '../../components/StatusBarCustom';
import { API, COLORS, FONTS, ICONS, IMAGES, WD } from '../../helpers/custom';
import { CompanyInfoScreenStyles, HomeScreenStyles, LoadListScreenStyles, TripsScreenStyles } from './AppStyles';
import { Dropdown } from 'react-native-element-dropdown';
import moment from 'moment';

const TripsScreen = () => {

  const navigation = useNavigation();

  useEffect(() => {
    console.log("LOAD",global.COMPANYID);
    getDataFn();
  }, []);

  const [todayDate, setTodayDate] = useState(new Date());
  const [firstMonthDate, setFirstMonthDate] = useState("");

  const getDataFn = async () => {
    try {
      await fetch(API?.TripsList + "?id=" + global.COMPANYID, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + global.TOKEN,
        }
      })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log("responseJson : responseJsonresponseJson : ",responseJson)
        setTRIPSLIST(responseJson?.billList);
        getActiveShipperListFn();
        getMaterialsListFn();
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

  const getMaterialsListFn = async () => {
    // Create a new Date object
    var today = new Date();
    setTodayDate(new Date());

    today.setDate(1);
    console.log(today)
    setFirstMonthDate(today);

    try {
      await fetch(API?.MaterialList, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + global.TOKEN,
        }
      })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(" responseJson",responseJson)
        var arr = [];
        for (let i = 0; i < responseJson?.list.length; i++) {
          arr.push({ label: responseJson?.list[i]?.materialName, value: responseJson?.list[i]?.materialId });
        }
        console.log(arr?.length)
        setALLMATERIALLIST(arr);
      })
      .catch((error) => {
        console.log(error);
      });
    } catch (error) {
      console.error("catch : ", error);
    }
  };

  const [TRIPSLIST, setTRIPSLIST] = useState([]);
  const [ALLACTIVESHIPPERLIST, setALLACTIVESHIPPERLIST] = useState([]);
  const [ALLMATERIALLIST, setALLMATERIALLIST] = useState([]);

  const openDrawer = () => {
    navigation.toggleDrawer();
  };

  const data = [
    { label: 'All Trucks', value: '01' },
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

        <View style={[CompanyInfoScreenStyles.bannerBG, {height: WD * 0.5,}]}>
          <View style={[CompanyInfoScreenStyles.headerBox, {flexDirection: "row", justifyContent: "space-between"}]}>
            <Text style={CompanyInfoScreenStyles.headingTxt}>Trips</Text>
            <Image source={ICONS.FILEDOWNLOAD} style={{width: 28, height: 28, marginTop:"auto", marginBottom: 6}} />
          </View>
        </View>

        <View style={[TripsScreenStyles.scrollBox, {flexDirection: "row", justifyContent: "space-between", marginHorizontal: 8, marginBottom: 10}]}>
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
            data={ALLMATERIALLIST}
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
            placeholder={'Any Material'}
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

        <View style={{flexDirection: "row", justifyContent: "space-between", marginHorizontal: 8, marginBottom: 16}}>
          <View style={TripsScreenStyles.calendarBox}>
            <Image source={ICONS.PRIMARYCALENDAR} style={{width: 16, height: 16, marginLeft: 4,marginRight: 6}} />
            <Text style={TripsScreenStyles.calendarBoxValueTxt}>{moment(firstMonthDate).format("DD/MM/YY")}</Text>
            <Text style={TripsScreenStyles.calendarBoxDashTxt}>–</Text>
            <Image source={ICONS.PRIMARYCALENDAR} style={{width: 16, height: 16, marginLeft: 4,marginRight: 6}} />
            <Text style={TripsScreenStyles.calendarBoxValueTxt}>{moment(todayDate).format("DD/MM/YY")}</Text>
          </View>

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
            placeholder={'All Trucks'}
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
        {/* #f58331 */}

        <FlatList data={TRIPSLIST}
          showsVerticalScrollIndicator={false} 
          contentContainerStyle={{paddingBottom: 8}}
          renderItem={({item, index}) => 
            { 
              return (
                <View style={TripsScreenStyles.cardRowBox}>
                  <View style={TripsScreenStyles.cardRowBoxTopRow}>
                    <View style={TripsScreenStyles.vehicleIDRow1}>
                      <Text style={TripsScreenStyles.vehicleIDTxt}>{item?.truck?.truckNumber + "  "}<Text style={TripsScreenStyles.vehicleTypeTxt}>{item?.truck?.truckType}</Text></Text>
                    </View>

                    <View style={TripsScreenStyles.vehicleIDRow2}>
                      <View style={TripsScreenStyles.statusRow}>
                        <View style={TripsScreenStyles.statusIndivBox}>
                          <Text style={TripsScreenStyles.statusIndivBoxKeyTxt}>A</Text>

                          <View style={TripsScreenStyles.statusMoneyCircleBox}>
                            <Text style={TripsScreenStyles.statusMoneyCircleBoxTxt}>&#8377;</Text>
                          </View>
                        </View>

                        <View style={TripsScreenStyles.statusIndivBox}>
                          <Text style={TripsScreenStyles.statusIndivBoxKeyTxt}>D</Text>

                          <View style={TripsScreenStyles.statusMoneyCircleBox}>
                            <Text style={TripsScreenStyles.statusMoneyCircleBoxTxt}>&#8377;</Text>
                          </View>
                        </View>

                        <View style={TripsScreenStyles.statusIndivBox}>
                          <Text style={TripsScreenStyles.statusIndivBoxKeyTxt}>F</Text>

                          <View style={TripsScreenStyles.statusMoneyCircleBox}>
                            <Text style={TripsScreenStyles.statusMoneyCircleBoxTxt}>&#8377;</Text>
                          </View>
                        </View>
                      </View>

                      <View style={TripsScreenStyles.cardRowBoxDownloadBox}>
                        <Image source={ICONS.WHITEPLAINDOWNLOADS} style={{width:14, height:14}} />
                      </View>
                    </View>
                  </View>

                  <View style={TripsScreenStyles.dateTripQtyRow}>
                    <View style={TripsScreenStyles.dateTripQtyRow1}>
                      <Text style={TripsScreenStyles.dateTripQtyRowValueTxt}>{moment(item?.tripStartDateAndTime).format("DD-MM-YY")}</Text>
                    </View>
                    
                    <View style={TripsScreenStyles.dateTripQtyRow2}>
                      <Text style={TripsScreenStyles.dateTripQtyRowValueTxt}>{item?.tripCode}</Text>
                    </View>

                    <View style={TripsScreenStyles.dateTripQtyRow3}>
                      <Text style={TripsScreenStyles.dateTripQtyRowValueTxt}>{item?.bill?.quantity} MT</Text>
                    </View>
                  </View>

                  <View>
                    <Text style={TripsScreenStyles.contentTxt}>{item?.load?.materialName}</Text>
                  </View>

                  <View style={TripsScreenStyles.locationRow}>
                    <View style={TripsScreenStyles.locationImgRowMajor}>
                      <View style={TripsScreenStyles.locationImgRowMinor}>
                        <Image source={ICONS.STARTPIN} style={{width:9, height:9, marginRight: 1}} />
                        <Image source={ICONS.ENDPIN} style={{width:10, height:10, marginLeft: 1}} />
                      </View>

                      <Image source={ICONS.CONNECTPIN} style={{width:16, height:16, alignSelf: "center", marginTop: -4}} />
                    </View>

                    <Text style={TripsScreenStyles.locationP2PTxt}>{item?.load?.sourceCity} - {item?.load?.destinationCity}</Text>
                  </View>

                  <View style={TripsScreenStyles.bottomRow1}>
                    <View style={TripsScreenStyles.bottomRow11}>
                      <View style={TripsScreenStyles.bottomRow111}>
                        <Text style={TripsScreenStyles.bottomRow1KeyTxt}>Bill Value</Text>
                        <Image source={ICONS.GREYINFO} style={{width:10, height:10, marginLeft: 5}} />
                      </View>
                      <Text style={TripsScreenStyles.bottomRow1Value1Txt}>{item?.bill?.billValueBreakUp?.billAmount}</Text>
                    </View>

                    <View style={TripsScreenStyles.bottomRow12}>
                      <Text style={TripsScreenStyles.bottomRow1KeyTxt}>TDS</Text>
                      <Text style={TripsScreenStyles.bottomRow1Value1Txt}>{item?.bill?.billValueBreakUp?.deduction?.tds}</Text>
                    </View>

                    <View style={TripsScreenStyles.bottomRow13}>
                      <Text style={TripsScreenStyles.bottomRow1KeyTxt}>Debit Note</Text>
                      <Text style={[TripsScreenStyles.bottomRow1Value1Txt, {color: "#933e2e"}]}>{item?.bill?.billValueBreakUp?.deduction?.debitNoteValue}</Text>
                    </View>
                  </View>

                  <View style={TripsScreenStyles.bottomRow2}>
                    <View style={TripsScreenStyles.bottomRow21}>
                      <View style={TripsScreenStyles.bottomRow111}>
                        <Text style={TripsScreenStyles.bottomRow1KeyTxt}>Payment made</Text>
                        <Image source={ICONS.GREYINFO} style={{width:10, height:10, marginLeft: 5}} />
                      </View>
                      <Text style={TripsScreenStyles.bottomRow1Value1Txt}>{item?.bill?.paymentDetails?.advancePaymentValue}</Text>
                    </View>

                    <View style={TripsScreenStyles.bottomRow22}>
                      <Text style={TripsScreenStyles.bottomRow1KeyTxt}>Balance</Text>
                      <Text style={TripsScreenStyles.bottomRow1Value1Txt}>{item?.bill?.balancePayableAmount}</Text>
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

export default TripsScreen