import { View, Text, ImageBackground, Image, FlatList, Platform, Button, TextInput, Animated, Modal, RefreshControl } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';
import { API, COLORS, ICONS, IMAGES, WD } from '../../../helpers/custom';
import { NOTIFICATION } from '../..';
import StatusBarCustom from '../../../components/StatusBarCustom';
import { CompanyInfoScreenStyles, HomeScreenStyles, LoadListScreenStyles, TripsScreenStyles, UserScreenStyles } from '../AppStyles';
import CustomDropDown from '../../../components/CustomDropDown';

const TripsScreen = () => {

  const navigation = useNavigation();

  useEffect(() => {
    const firstDay = moment().startOf('month').toDate();
    setMinimumDate(firstDay);
    setMaximumDate(new Date());
    
    // Create a new Date object
    var today = new Date();
    setTodayDate(new Date());

    today.setDate(1);
    setFirstMonthDate(today);
    // new Date(2024, 1, 21)

    getDataFn(firstDay, new Date(), "all", "all", "all");
    getActiveShipperListFn();
    getMaterialsListFn();
    getAllTrucksListFn();
  }, []);

  const [maximumDate, setMaximumDate] = useState();
  const [minimumDate, setMinimumDate] = useState();

  const [todayDate, setTodayDate] = useState(new Date());
  const [firstMonthDate, setFirstMonthDate] = useState("");

  const getDataFn = async (fromDate, toDate , shipperID, materialsID, trucksID) => {
    
    try {
      const data = JSON.stringify({
        "filters": [
          {
            "name": "tripCreated",
            "data": {
              "from": moment(fromDate).format("MM-DD-YYYY"),
              "to": moment(toDate).format("MM-DD-YYYY"),
            }
          },
          {
            "name": "shippers",
            "data": shipperID !== "all" ? [shipperID] : ""
          },
          {
            "name": "materials",
            "data": materialsID !== "all" ? [materialsID] : ""
          },
          {
            "name": "trucks",
            "data": trucksID !== "all" ? [trucksID] : ""
          }
        ],
        "query": "",
        "limit": 10,
        "offset": 0 
      });

      await fetch(API?.TripsList + "?id=" + global.COMPANYID, {
        // await fetch(API?.TripsList + "?id=" + "0bcd49f4-642b-4a99-9190-85fbe5d637eb", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + global.TOKEN,
        },
        body: data,
      })
      .then((response) => response.json())
      .then((responseJson) => {
        setTRIPSLIST(responseJson?.billList);
        setREALTRIPSLIST(responseJson?.billList);

        setRefreshing(false);
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

  const getMaterialsListFn = async () => {
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
        var arr = [];
        arr.push({ label: "Any Material", value: "all" });

        for (let i = 0; i < responseJson?.list.length; i++) {
          arr.push({ label: responseJson?.list[i]?.materialName, value: responseJson?.list[i]?.materialId });
        }
        setALLMATERIALLIST(arr);
        setSelectedMaterial(arr[0]);
      })
      .catch((error) => {
        console.error(error);
      });
    } catch (error) {
      console.error("catch : ", error);
    }
  };

  const getAllTrucksListFn = async () => {
    try {
      await fetch(API?.AllTrucksList + "?id=" + global.COMPANYID, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + global.TOKEN,
        }
      })
      .then((response) => response.json())
      .then((responseJson) => {
        var arr = [];
        arr.push({ label: "All Trucks", value: "all" });
        
        for (let i = 0; i < responseJson?.truckInfo.length; i++) {
          arr.push({ label: responseJson?.truckInfo[i]?.truckNumber, value: responseJson?.truckInfo[i]?.id });
        }
        setALLTRUCKSLIST(arr);
        setSelectedTruck(arr[0]);
      })
      .catch((error) => {
        console.error(error);
      });
    } catch (error) {
      console.error("catch : ", error);
    }
  };

  const [TRIPSLIST, setTRIPSLIST] = useState([]);
  const [REALTRIPSLIST, setREALTRIPSLIST] = useState([]);

  const [ALLACTIVESHIPPERLIST, setALLACTIVESHIPPERLIST] = useState([]);
  const [ALLMATERIALLIST, setALLMATERIALLIST] = useState([]);
  const [ALLTRUCKSLIST, setALLTRUCKSLIST] = useState([]);

  const openDrawer = () => {
    navigation.toggleDrawer();
  };

  const [selectedShipper, setSelectedShipper] = useState(null);
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [selectedTruck, setSelectedTruck] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const NotificationFn = () => {
    navigation.navigate(NOTIFICATION);
  };

  const [tripDate, setTripDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const selectDateFn = async (event, selectedDate) => {
    setShow(false);
    setMaximumDate(selectedDate);
    setTripDate(selectedDate);

    await getDataFn(minimumDate, selectedDate, selectedShipper?.value, selectedMaterial?.value, selectedTruck?.value);
  };

  const showDatepicker = () => {
    setShow(true);
  };

  const filterBasedOnShipperFn = async (item) => {
    setSelectedShipper({label: item?.label, value: item?.value});
    setIsFocus(false);

    await getDataFn(minimumDate, tripDate, item?.value, selectedMaterial?.value, selectedTruck?.value);
  };

  const filterBasedOnMaterialFn = async (item) => {
    setSelectedMaterial({label: item?.label, value: item?.value});
    setIsFocus(false);

    await getDataFn(minimumDate, tripDate, selectedShipper?.value, item?.value, selectedTruck?.value);
  };

  const filterBasedOnTrucksFn = async (item) => {
    setSelectedTruck({label: item?.label, value: item?.value});
    setIsFocus(false);

    await getDataFn(minimumDate, tripDate, selectedShipper?.value, selectedMaterial?.value, item?.value);
  };

  const [showSearch, setShowSearch] = useState(false);
  const [Search, setSearch] = useState("");

  const filterFn = (value) => {
    setSearch(value);
    // setShowSearchList(true);

    let filteredData = REALTRIPSLIST.filter(
      function (item) {
        return item?.tripCode.toLowerCase().includes(value.toLowerCase());
      }
    );
      
    setTRIPSLIST(filteredData);
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

    setTRIPSLIST(REALTRIPSLIST);
    setSearch("");
    setShowSearch(false)
    // console.log(fadeAnim)
  };

  const [showBillValue, setShowBillValue] = useState(false);
  const [BILLVALUEBREAKUP, setBILLVALUEBREAKUP] = useState([]);

  const showBillValueBreakUpFn = (item) => {
    setBILLVALUEBREAKUP([item?.bill?.billValueBreakUp]);
    setShowBillValue(true);
  };

  const closeBillValueBreakUpFn = () => {
    setShowBillValue(false);
  };

  const [showPaymentValue, setShowPaymentValue] = useState(false);
  const [PAYMENTVALUEBREAKUP, setPAYMENTVALUEBREAKUP] = useState([]);

  const showPaymentValueBreakUpFn = (item) => {
    setPAYMENTVALUEBREAKUP([item?.bill?.paymentDetails]);
    setShowPaymentValue(true);
  };

  const closePaymentValueBreakUpFn = () => {
    setShowPaymentValue(false);
  };

  const [refreshing, setRefreshing] = useState(false);
  
  const onRefresh = async () => {
    setRefreshing(true);
    await getDataFn(minimumDate, tripDate, "", "", "");
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

        <View style={[CompanyInfoScreenStyles.bannerBG, {height: WD * 0.5,}]}>
          <View style={[CompanyInfoScreenStyles.headerBox, {flexDirection: "row", justifyContent: "space-between"}]}>
            <Text style={CompanyInfoScreenStyles.headingTxt}>Trips</Text>

            {TRIPSLIST?.length > 0 ? (
              <View style={TripsScreenStyles.downloadBigBox}>
                <Image source={ICONS.FILEDOWNLOAD} style={{width: 28, height: 28}} />
              </View>
            ) : null}
          </View>
        </View>

        <View style={[TripsScreenStyles.scrollBox, {flexDirection: "row", justifyContent: "space-between", marginHorizontal: 8, marginBottom: 10}]}>
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
            placeholder={ALLACTIVESHIPPERLIST[0]?.label}
            searchPlaceholder="Search..."
            value={selectedShipper}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => filterBasedOnShipperFn(item)}
            activeColor={"#BF841E99"}
            renderRightIcon={() => (
              <DropdownBox />
            )}
          />

          <Dropdown
            data={ALLMATERIALLIST}
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
            placeholder={ALLMATERIALLIST[0]?.label}
            searchPlaceholder="Search..."
            value={selectedMaterial}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => filterBasedOnMaterialFn(item)}
            activeColor={"#BF841E99"}
            renderRightIcon={() => (
              <DropdownBox />
            )}
          /> */}

          <CustomDropDown
            DATA={ALLACTIVESHIPPERLIST}
            dropdownStyle={LoadListScreenStyles.dropdown1}
            value={selectedShipper}
            placeholder={ALLACTIVESHIPPERLIST[0]?.label}
            onChange={filterBasedOnShipperFn}
          />

          <CustomDropDown
            DATA={ALLMATERIALLIST}
            dropdownStyle={LoadListScreenStyles.dropdown2}
            value={selectedMaterial}
            placeholder={ALLMATERIALLIST[0]?.label}
            onChange={filterBasedOnMaterialFn}
          />
        </View>

        <View style={{flexDirection: "row", justifyContent: "space-between", marginHorizontal: 8, marginBottom: 16}}>
          <View onTouchEnd={showDatepicker} style={TripsScreenStyles.calendarBox}>
            <Image source={ICONS.PRIMARYCALENDAR} style={{width: 16, height: 16, marginLeft: 4,marginRight: 6}} />
            <Text style={TripsScreenStyles.calendarBoxValueTxt}>{moment(minimumDate).format("DD/MM/YY")}</Text>
            <Text style={TripsScreenStyles.calendarBoxDashTxt}>–</Text>
            <Image source={ICONS.PRIMARYCALENDAR} style={{width: 16, height: 16, marginLeft: 4,marginRight: 6}} />
            <Text style={TripsScreenStyles.calendarBoxValueTxt}>{moment(maximumDate).format("DD/MM/YY")}</Text>
          </View>

          <CustomDropDown
            DATA={ALLTRUCKSLIST}
            dropdownStyle={LoadListScreenStyles.dropdown2}
            value={selectedTruck?.value}
            placeholder={ALLTRUCKSLIST[0]?.label}
            onChange={filterBasedOnTrucksFn}
          />

          {/* <Dropdown
            data={ALLTRUCKSLIST}
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
            placeholder={ALLTRUCKSLIST[0]?.label}
            searchPlaceholder="Search..."
            value={selectedTruck?.value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => filterBasedOnTrucksFn(item) }
            renderRightIcon={() => (
              <DropdownBox />
            )}
          /> */}
        </View>
        {/* #f58331 */}

        <>
          {show && (
            <DateTimePicker
              value={tripDate}
              onChange={selectDateFn}
              mode="date"
              minimumDate={minimumDate}
              maximumDate={todayDate}
              timeZoneName={'Asia/Kolkata'}
              // positiveButton={{label: 'OK', textColor: COLORS.PRIMARY}}
              // negativeButton={{label: 'Cancel', textColor: COLORS.PRIMARY}}
              minuteInterval={30}
              style={{ flex: 1 }}
              testID="dateTimePicker"
            />
          )}
        </>

        {TRIPSLIST?.length > 0 ? (
          <FlatList data={TRIPSLIST}
            showsVerticalScrollIndicator={false} 
            contentContainerStyle={{paddingBottom: 80}}
            refreshControl={
              <RefreshControl 
                refreshing={refreshing} 
                onRefresh={onRefresh} 
              />
            }
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

                            <View style={[TripsScreenStyles.statusMoneyCircleBox, {backgroundColor: item?.podStatus == "UNLOADING_DOCUMENT_VERIFIED" ?  "#f58331" : null}]}>
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
                        <View onTouchEnd={showBillValueBreakUpFn.bind(this,item)} style={TripsScreenStyles.bottomRow111}>
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
                        <View onTouchEnd={showPaymentValueBreakUpFn.bind(this,item)} style={TripsScreenStyles.bottomRow111}>
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
        ) : (
          <View style={UserScreenStyles.noDataBox}>
            <Text style={UserScreenStyles.noDataBoxTxt}>No invoices are available in this range</Text>
          </View>
        )}
      </View>

      <Modal
        transparent={true}
        animationType={"none"}
        visible={showBillValue}
        onRequestClose={closeBillValueBreakUpFn}
      >
        <View style={TripsScreenStyles.modalBG}>
          <View style={TripsScreenStyles.rowBox}>
            <View style={TripsScreenStyles.billContainer}>
              <Text style={TripsScreenStyles.billHeading}>Bill Value Break-Up</Text>

              <View>
                {BILLVALUEBREAKUP.map((item) => {
                  return (
                    <View style={TripsScreenStyles.billBox}>
                      <View>
                        <View style={TripsScreenStyles.billDot} />
                        <View style={TripsScreenStyles.billDotLine} />
                      </View>

                      <View style={{flex:1}}>
                        <View style={TripsScreenStyles.totalBillBox}>
                          <Text style={TripsScreenStyles.totalBillValueTxt}>{item?.billAmount}</Text>
                          <Text style={TripsScreenStyles.totalBillKeyTxt}> Total Bill</Text>
                        </View>

                        <View style={TripsScreenStyles.freightBox}>
                          <View style={TripsScreenStyles.freightLine} />
                          <Text style={TripsScreenStyles.freightValueTxt}>{item?.freight} <Text style={TripsScreenStyles.freightKeyTxt}>Freight</Text></Text>
                        </View>

                        <View style={TripsScreenStyles.billTotalBox}>
                          <View style={TripsScreenStyles.subLineVertical} />
                          
                          <View>
                            <View style={TripsScreenStyles.weightBox}>
                              <View style={TripsScreenStyles.weightline} />
                              <Text style={TripsScreenStyles.freightValueTxt}>{item?.weight} MT <Text style={TripsScreenStyles.freightKeyTxt}>weight</Text></Text>
                            </View>

                            <View style={TripsScreenStyles.midTxtBox}>
                              <Text style={TripsScreenStyles.freightValueTxt}>X</Text>
                            </View>

                            <View style={TripsScreenStyles.unitRateBox}>
                              <View style={TripsScreenStyles.unitRateLine} />
                              <Text style={TripsScreenStyles.freightValueTxt}>{item?.unitRate} <Text style={TripsScreenStyles.freightKeyTxt}>unit Rate</Text></Text>
                            </View>
                          </View>
                        </View>

                        <View style={TripsScreenStyles.gstBox}>
                          <View style={TripsScreenStyles.gstLine} />
                          <Text style={TripsScreenStyles.freightValueTxt}>{item?.gst}</Text>
                        </View>
                      </View>
                    </View>
                  );
                })}
              </View>
            </View>
            
            <View onTouchEnd={closeBillValueBreakUpFn} style={TripsScreenStyles.modalCloseBox}>
              <Image source={ICONS.BLACKCLOSE} style={{width: 12, height: 12}} />
            </View>
          </View>
        </View>
      </Modal>

      <Modal
        transparent={true}
        animationType={"none"}
        visible={showPaymentValue}
        onRequestClose={closePaymentValueBreakUpFn}
      >
        <View style={TripsScreenStyles.modalBG}>
          <View style={TripsScreenStyles.rowBox}>
            <View style={TripsScreenStyles.billContainer}>
              <Text style={TripsScreenStyles.billHeading}>Payment Break-Up</Text>

              <View>
                {PAYMENTVALUEBREAKUP.map((item) => {
                  return (
                    <View style={TripsScreenStyles.billBox}>
                      <View>
                        <View style={TripsScreenStyles.billDot} />
                        <View style={TripsScreenStyles.paymentDotLine} />
                      </View>

                      <View style={{flex:1}}>
                        <View style={TripsScreenStyles.paymentMadeBox}>
                          <Text style={TripsScreenStyles.totalBillValueTxt}>{item?.ondeliveryPaymentValue}</Text>
                          <Text style={TripsScreenStyles.totalBillKeyTxt}>Payment Made</Text>
                        </View>

                        <View style={TripsScreenStyles.paymentLineBox}>
                          <View style={TripsScreenStyles.paymentLine} />
                          <View>
                            <Text style={TripsScreenStyles.freightKeyTxt}>Advance</Text>
                            <Text style={TripsScreenStyles.freightValueTxt}>{item?.advancePaymentValue}</Text>
                          </View>
                        </View>

                        <View style={TripsScreenStyles.paymentLineBox}>
                          <View style={TripsScreenStyles.paymentLine} />
                          <View>
                            <Text style={TripsScreenStyles.freightKeyTxt}>On-Delivery</Text>
                            <Text style={TripsScreenStyles.freightValueTxt}>{item?.ondeliveryPaymentValue}</Text>
                          </View>
                        </View>

                        <View style={TripsScreenStyles.paymentLineBox}>
                          <View style={TripsScreenStyles.paymentLine} />
                          <View>
                            <Text style={TripsScreenStyles.freightKeyTxt}>POD</Text>
                            <Text style={TripsScreenStyles.freightValueTxt}>{item?.podPaymentValue}</Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  );
                })}
              </View>
            </View>
            
            <View onTouchEnd={closePaymentValueBreakUpFn} style={TripsScreenStyles.modalCloseBox}>
              <Image source={ICONS.BLACKCLOSE} style={{width: 12, height: 12}} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default TripsScreen