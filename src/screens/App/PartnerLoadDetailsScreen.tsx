import { View, Text, Image, ScrollView, TextInput, FlatList, Platform, ToastAndroid } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { AssignTruckScreenStyles, PartnerLoadDetailsScreenStyles } from './AppStyles'
import { API, FONTS, ICONS } from '../../helpers/custom'
import { useNavigation } from '@react-navigation/native'
import CustomDropDown from '../../components/CustomDropDown'
import DropdownCustom from './test';
import { PARTNERLOAD } from '..'
import DeviceInfo from 'react-native-device-info'

const PartnerLoadDetailsScreen = (props) => {

    const navigation = useNavigation();

    useEffect(() => {
        getDataFn("");
        getTruckFn("");
    }, []);

    const getDataFn = async (truckId) => {
        console.log(props.route.params?.loadId,truckId,"truckId")
      try {

        const DeviceId = await DeviceInfo.getUniqueId();

        await fetch(API?.PartnerLoadOne + "?loadId=" + props.route.params?.loadId + "&truckId=" + truckId + "&isTruck=" + "true", {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + global.TOKEN,
            'User-Agent':  DeviceId + "/" + "1.1.3" + "/" + Platform.OS ,
          }
        })
        .then((response) => response.json())
        .then((responseJson) => {
          console.error("PartnerLoadOne responseJson : ",responseJson);
          setPREVIOUSTRIPDATA(responseJson?.data);

          setDRIVERNAMEDATALIST(responseJson?.data?.driverName);
          setDRIVERPHONENUMDATALIST(responseJson?.data?.driverPhoneNumber);
          setDRIVERLICENSENODATALIST(responseJson?.data);
          setDRIVERVESSELNAMEDATALIST(responseJson?.data);
          setDRIVERCONSIGNEEDATALIST(responseJson?.data);
          setDRIVERCONSIGNORDATALIST(responseJson?.data);
        })
        .catch((error) => {
          console.log(error,"error getDataFn");
        });
      } catch (error) {
        console.error("catch : ", error);
      }
    };

    const getTruckFn = async (search) => {
        try { 

            const DeviceId = await DeviceInfo.getUniqueId();

            await fetch(API?.PartnerGetTrucks + "?query=" + search + "&loadId=" + props.route.params?.loadId, {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': 'Bearer ' + global.TOKEN,
                  'User-Agent':  DeviceId + "/" + "1.1.3" + "/" + Platform.OS ,
                }
            })
            .then((response) => response.json())
            .then((responseJson) => {
                console.error("truck list : ",responseJson?.truckInfo?.length);
                setDRIVERDATALIST(responseJson?.truckInfo);
            })
            .catch((error) => {
                console.log(error,"error getTruckFn");
            });
        } catch (error) {
            console.error("catch : ", error);
        }
    };
  
    const [showDropdown, setShowDropdown] = useState(false); 
    const [showDropdown1, setShowDropdown1] = useState(false); 
    const [showDropdown2, setShowDropdown2] = useState(false); 
    const [showDropdown3, setShowDropdown3] = useState(false); 
    const [showDropdown4, setShowDropdown4] = useState(false); 
    const [showDropdown5, setShowDropdown5] = useState(false); 
    const [showDropdown6, setShowDropdown6] = useState(false); 
    const [showDropdown7, setShowDropdown7] = useState(false); 

    const [driverSearch, setDriverSearch] = useState("");
    const [driverDATA, setDriverDATA] = useState(null);

    const [DRIVERDATALIST, setDRIVERDATALIST] = useState([]);
    const [PREVIOUSTRIPDATA, setPREVIOUSTRIPDATA] = useState(null);

    const [DRIVERNAMEDATALIST, setDRIVERNAMEDATALIST] = useState([]);
    const [DRIVERPHONENUMDATALIST, setDRIVERPHONENUMDATALIST] = useState([]);
    const [DRIVERLICENSENODATALIST, setDRIVERLICENSENODATALIST] = useState([]);
    const [DRIVERVESSELNAMEDATALIST, setDRIVERVESSELNAMEDATALIST] = useState([]);
    const [DRIVERCONSIGNEEDATALIST, setDRIVERCONSIGNEEDATALIST] = useState([]);
    const [DRIVERCONSIGNORDATALIST, setDRIVERCONSIGNORDATALIST] = useState([]);

    const [truckerName, setTruckerName] = useState("");
    const [driverName, setDriverName] = useState("Driver Test");
    const [driverMobileNo, setDriverMobileNo] = useState("");
    const [driverLicenceNo, setDriverLicenceNo] = useState("");
    const [consignor, setConsignor] = useState("");
    const [consignee, setConsignee] = useState("");
    const [grossWeight1, setGrossWeight1] = useState("50");
    const [grossWeight2, setGrossWeight2] = useState("000");
    const [tareWeight1, setTareWeight1] = useState("45");
    const [tareWeight2, setTareWeight2] = useState("000");
    const [netWeight1, setNetWeight1] = useState("05");
    const [netWeight2, setNetWeight2] = useState("000");
    const [shipperRefNo, setShipperRefNo] = useState("");
    const [vesselName, setVesselName] = useState("");
    const [eWayBillNo, setEWayBillNo] = useState("");
    const [sellNo, setSellNo] = useState("");
    const [formKKNo, setFormKKNo] = useState("");

    const selectTruckFn = async (item, index) => {
        console.log(item, index);
        setDriverDATA(item);
        setDriverSearch(item?.truckNumber);
        setTruckerName(item?.companyInfo?.companyName);
        setShowDropdown1(false)
        await getDataFn(item?.id);
    };

    const selectDriverNameFn = (item, index) => {
        console.log(item, index);
        setDriverName(item);
        setShowDropdown2(false);
    };

    const selectDriverMobileNoFn = (item, index) => {
        console.log(item, index);
        setDriverMobileNo(item);
        setShowDropdown3(false);
    };

    const selectDriverLicenceNoFn = (item, index) => {
        console.log(item, index);
        setDriverLicenceNo(item);
        setShowDropdown4(false);
    };

    const selectConsignorFn = (item, index) => {
        console.log(item, index);
        setConsignor(item);
        setShowDropdown5(false);
    };

    const selectConsigneeFn = (item, index) => {
        console.log(item, index);
        setConsignee(item);
        setShowDropdown6(false);
    };

    const grossWeight1InputRef = useRef(null);
    const grossWeight2InputRef = useRef(null);

    const searchTruckFn = async (val) => {
        setDriverSearch(val);
        await getTruckFn(val);
    };

    const setDriverNameFn = (val) => {
        setDriverName(val);
        setShowDropdown2(true)
        
        const filteredData = PREVIOUSTRIPDATA?.driverName.filter(item => {
            return Object.values(item).some(value =>
                typeof value === 'string' && value.toLowerCase().includes(val.toLowerCase())
            );
        });
    
        console.log(filteredData)
            
        setDRIVERNAMEDATALIST(filteredData);
    };

    const setDriverMobileNoFn = (val) => {
        setDriverMobileNo(val.replace(/[^0-9]/g, ''))
        setShowDropdown3(true)
        
        const filteredData = PREVIOUSTRIPDATA?.driverPhoneNumber.filter(item => {
            return Object.values(item).some(value =>
                typeof value === 'string' && value.includes(val)
            );
        });
    
        console.log(filteredData)
            
        setDRIVERPHONENUMDATALIST(filteredData);
    };

    const setDriverLicenceNoFn = (val) => {
        setDriverLicenceNo(val.replace(/[^0-9a-zA-Z]/g, ''))
        setShowDropdown4(true)
        
        const filteredData = PREVIOUSTRIPDATA?.drivingLicenseNo.filter(item => {
            return Object.values(item).some(value =>
                typeof value === 'string' && value.toLowerCase().includes(val.toLowerCase())
            );
        });
    
        console.log(filteredData)
            
        setDRIVERLICENSENODATALIST(filteredData);
    };

    const setConsignorFn = (val) => {
        setConsignor(val)
        setShowDropdown5(true)
        
        const filteredData = PREVIOUSTRIPDATA?.consignor.filter(item => {
            return Object.values(item).some(value =>
                typeof value === 'string' && value.toLowerCase().includes(val.toLowerCase())
            );
        });
    
        console.log(filteredData)
            
        setDRIVERCONSIGNORDATALIST(filteredData);
    };

    const setConsigneeFn = (val) => {
        setConsignee(val)
        setShowDropdown6(true)
        
        const filteredData = PREVIOUSTRIPDATA?.consignee.filter(item => {
            return Object.values(item).some(value =>
                typeof value === 'string' && value.toLowerCase().includes(val.toLowerCase())
            );
        });
    
        console.log(filteredData)
            
        setDRIVERCONSIGNEEDATALIST(filteredData);
    };

    const setGrossWeight1Fn = (val) => {
        console.log(val);
        setGrossWeight1(val);
        if (val.length === 2) {
          grossWeight2InputRef.current.focus();
        }
    };

    const setGrossWeight2Fn = (val) => {
        console.log(val);
        setGrossWeight2(val);
        if (val.length === 0) {
          grossWeight1InputRef.current.focus();
        }
    };

    const tareWeight1InputRef = useRef(null);
    const tareWeight2InputRef = useRef(null);

    const setTareWeight1Fn = (val) => {
        setTareWeight1(val);
        if (val.length === 2) {
            tareWeight2InputRef.current.focus();
        }
    };

    const setTareWeight2Fn = (val) => {
        setTareWeight2(val);
        if (val.length === 0) {
            tareWeight1InputRef.current.focus();
        }
    };

    const onCancelFn = () => {
        navigation.goBack();
    };

    const createTripFn = async () => {
        if(driverDATA == null) {
            if(Platform.OS == "ios") {
              
            } else {
              ToastAndroid.show('Select valid trucker', ToastAndroid.SHORT);
            }
        } else if(driverName == "") {
            if(Platform.OS == "ios") {
              
            } else {
              ToastAndroid.show('Enter valid driver name', ToastAndroid.SHORT);
            }
        } else if(driverMobileNo?.length !== 10) {
            if(Platform.OS == "ios") {
              
            } else {
              ToastAndroid.show('Enter valid driver mobile number', ToastAndroid.SHORT);
            }
        } else if(driverLicenceNo == "") {
            if(Platform.OS == "ios") {
              
            } else {
              ToastAndroid.show('Enter valid driver license number', ToastAndroid.SHORT);
            }
        } else if(consignor == "") {
            if(Platform.OS == "ios") {
              
            } else {
              ToastAndroid.show('Enter valid consignor', ToastAndroid.SHORT);
            }
        } else if(consignee == "") {
            if(Platform.OS == "ios") {
              
            } else {
              ToastAndroid.show('Enter valid consignee', ToastAndroid.SHORT);
            }
        } else if(netWeight1 == "" || netWeight2 == "") {
          if(Platform.OS == "ios") {
            
          } else {
            ToastAndroid.show('Enter valid net weight', ToastAndroid.SHORT);
          }
        } else if(grossWeight1 == "" || grossWeight2 == "") {
          if(Platform.OS == "ios") {
            
          } else {
            ToastAndroid.show('Enter valid gross weight', ToastAndroid.SHORT);
          }
        } else if(shipperRefNo == "") {
            if(Platform.OS == "ios") {
              
            } else {
              ToastAndroid.show('Enter valid shipper reference number', ToastAndroid.SHORT);
            }
        } else {
          try {
            const data = JSON.stringify({
                "payloadback": "dream.jpg",
                "backDocExt": "jpeg",
                "file": {
                    "uid": "rc-upload-1710410621280-5"
                },
                "front": "backrounf.jpeg",
                "frontDocExt": "jpeg",
                "isBackDoc": true,
                "isFrontDoc": true,
                "loadWeight": null,
                "loadId": props.route.params?.loadId,
                "netWeight": netWeight1 + "." + netWeight2,
                "shipperRefNumber": shipperRefNo,
                "truckId": driverDATA?.id,
                "driverPhoneNumber": driverMobileNo,
                "driverName": driverName,
                "truckCapacity": grossWeight1 + "." + grossWeight2,
            });

            const DeviceId = await DeviceInfo.getUniqueId();
          
            await fetch(API?.PartnerCreateTrip, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + global.TOKEN,
                'User-Agent':  DeviceId + "/" + "1.1.3" + "/" + Platform.OS ,
              },
              body: data
            })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson,"responseJson");
                ToastAndroid.show(responseJson?.message, ToastAndroid.SHORT);

                if(responseJson?.status) {
                    navigation.navigate(PARTNERLOAD);
                }
            })
            .catch((error) => {
              console.error(error);
            });
    
          } catch (error) {
            console.error("catch : ", error);
          }
        }
      };

    return (
        <View style={PartnerLoadDetailsScreenStyles.container}>
            <ScrollView scrollEnabled={!showDropdown1 && !showDropdown2}>
                <View style={PartnerLoadDetailsScreenStyles.headingBox}>
                    <Text style={PartnerLoadDetailsScreenStyles.headingTxt}>Create Trip</Text>

                    <Text style={PartnerLoadDetailsScreenStyles.imageTotalBoxRowTopTxt}>*</Text>
                    <View style={PartnerLoadDetailsScreenStyles.imageTotalBoxRow}>
                        <View style={PartnerLoadDetailsScreenStyles.imageTotalBox}>
                            <Image source={ICONS.BLACKBIGCAMERA} style={{width: 22, height: 22}} />
                            <Text style={PartnerLoadDetailsScreenStyles.imageTotalBoxTxt}>SD</Text>
                        </View>

                        <View style={PartnerLoadDetailsScreenStyles.imageTotalBox}>
                            <Image source={ICONS.BLACKBIGCAMERA} style={{width: 22, height: 22}} />
                            <Text style={PartnerLoadDetailsScreenStyles.imageTotalBoxTxt}>LR</Text>
                        </View>
                    </View>
                </View>

                <View style={PartnerLoadDetailsScreenStyles.orSeperationBox}>
                    <View style={PartnerLoadDetailsScreenStyles.orSeperationLine} />
                    <Text style={PartnerLoadDetailsScreenStyles.orSeperationLineTxt}>OR</Text>
                    <View style={PartnerLoadDetailsScreenStyles.orSeperationLine} />
                </View>

                <View style={{marginHorizontal: 16, marginTop: 16}}>
                    <View style={PartnerLoadDetailsScreenStyles.searchIPTxtRow}>
                        <TextInput
                            onChangeText={val => searchTruckFn(val)}
                            value={driverSearch}
                            style={PartnerLoadDetailsScreenStyles.searchIPTxt}
                            placeholder={""}
                            placeholderTextColor={"#646464"}
                            onFocus={() => setShowDropdown1(true)}
                            onBlur={() => setShowDropdown1(false)}
                            autoCapitalize='characters'
                        />
                        <Image source={ICONS.BLACKSEARCH} style={{width: 18, height: 18, marginHorizontal: 8}} />
                    </View>

                    {(showDropdown1 && driverSearch?.length > 0) ? (
                        <View style={[PartnerLoadDetailsScreenStyles.customDropdown, {top: 50,}]}>
                            <FlatList data={DRIVERDATALIST}
                                style={{marginTop:0}}
                                renderItem={({item, index}) => 
                                    { 
                                        return (
                                            <View onTouchEnd={selectTruckFn.bind(this,item,index)} style={PartnerLoadDetailsScreenStyles.customDropdownContentRow}>
                                                <View style={PartnerLoadDetailsScreenStyles.customDropdownContentRow1}>
                                                    <Text style={PartnerLoadDetailsScreenStyles.customDropdownContentRowTxt1}>{item?.truckNumber}</Text>
                                                    <Text style={PartnerLoadDetailsScreenStyles.customDropdownContentRowTxt2}>{item?.companyInfo?.companyName}</Text>
                                                </View>

                                                <View style={PartnerLoadDetailsScreenStyles.customDropdownContentRow2}>
                                                    <Text style={PartnerLoadDetailsScreenStyles.customDropdownContentRowTxt3}>{item?.truckType}</Text>
                                                    <Text style={PartnerLoadDetailsScreenStyles.customDropdownContentRowTxt4}>{item?.truckWheels + "W," + item?.truckCapacity + "MT"}</Text>
                                                </View>
                                            </View>
                                        )
                                    }
                                }
                            />
                        </View>
                    ) : null}

                    <View>
                        <Text style={PartnerLoadDetailsScreenStyles.textIPHeadingTxt}>Trucker</Text>
                        <TextInput
                            value={truckerName}
                            style={[PartnerLoadDetailsScreenStyles.textIPTxt, {borderBottomWidth : 0, marginTop: -4, fontSize: 16,fontFamily: FONTS.MontserratBold}]}
                            placeholder={""}
                            placeholderTextColor={"#646464"}
                            editable={false}
                        />
                    </View>

                    <View>
                        <Text style={PartnerLoadDetailsScreenStyles.textIPHeadingTxt}>Driver *</Text>
                        <TextInput
                            onChangeText={val => setDriverNameFn(val)}
                            value={driverName}
                            style={PartnerLoadDetailsScreenStyles.textIPTxt}
                            placeholder={"Eg. Bharani Kumar"}
                            placeholderTextColor={"#646464"}
                            onFocus={
                                () => {
                                    if(DRIVERNAMEDATALIST?.length) {
                                        setShowDropdown2(true)
                                    }
                                }
                            }
                            onBlur={() => setShowDropdown2(false)}
                        />
                    </View>

                    {(showDropdown2) ? (
                        <View style={[PartnerLoadDetailsScreenStyles.customDropdown, {top: 198,}]}>
                            <FlatList data={DRIVERNAMEDATALIST}
                                style={{marginTop:0}}
                                renderItem={({item, index}) => 
                                    { 
                                        return (
                                            <View onTouchEnd={selectDriverNameFn.bind(this,item,index)} style={PartnerLoadDetailsScreenStyles.customDropdownContentRow}>
                                                <Text style={PartnerLoadDetailsScreenStyles.customDropdownContentRowTxt1}>{item}</Text>
                                            </View>
                                        )
                                    }
                                }
                            />
                        </View>
                    ) : null}

                    <View>
                        <Text style={PartnerLoadDetailsScreenStyles.textIPHeadingTxt}>Driver mobile number *</Text>
                        <TextInput
                            onChangeText={val => setDriverMobileNoFn(val)}
                            value={driverMobileNo}
                            style={PartnerLoadDetailsScreenStyles.textIPTxt}
                            placeholder={"Eg. 7904331455"}
                            placeholderTextColor={"#646464"}
                            keyboardType="phone-pad"
                            maxLength={10}
                            onFocus={
                                () => {
                                    if(DRIVERPHONENUMDATALIST?.length) {
                                        setShowDropdown3(true)
                                    }
                                }
                            }
                            onBlur={() => setShowDropdown3(false)}
                        />
                    </View>

                    {(showDropdown3) ? (
                        <View style={[PartnerLoadDetailsScreenStyles.customDropdown, {top: 273,}]}>
                            <FlatList data={DRIVERPHONENUMDATALIST}
                                style={{marginTop:0}}
                                renderItem={({item, index}) => 
                                    { 
                                        return (
                                            <View onTouchEnd={selectDriverMobileNoFn.bind(this,item,index)} style={PartnerLoadDetailsScreenStyles.customDropdownContentRow}>
                                                <Text style={PartnerLoadDetailsScreenStyles.customDropdownContentRowTxt1}>{item}</Text>
                                            </View>
                                        )
                                    }
                                }
                            />
                        </View>
                    ) : null}

                    <View>
                        <Text style={PartnerLoadDetailsScreenStyles.textIPHeadingTxt}>Driver licence number *</Text>
                        <TextInput
                            onChangeText={val => setDriverLicenceNoFn(val)}
                            value={driverLicenceNo}
                            style={PartnerLoadDetailsScreenStyles.textIPTxt}
                            placeholder={"Eg. TN01W2009000768"}
                            placeholderTextColor={"#646464"}
                            autoCapitalize="characters"
                            onFocus={
                                () => {
                                    if(DRIVERLICENSENODATALIST?.length) {
                                        setShowDropdown4(true)
                                    }
                                }
                            }
                            onBlur={() => setShowDropdown4(false)}
                        />
                    </View>

                    {(showDropdown4) ? (
                        <View style={[PartnerLoadDetailsScreenStyles.customDropdown, {top: 348,}]}>
                            <FlatList data={DRIVERLICENSENODATALIST}
                                style={{marginTop:0}}
                                renderItem={({item, index}) => 
                                    { 
                                        return (
                                            <View onTouchEnd={selectDriverLicenceNoFn.bind(this,item,index)} style={PartnerLoadDetailsScreenStyles.customDropdownContentRow}>
                                                <Text style={PartnerLoadDetailsScreenStyles.customDropdownContentRowTxt1}>{item}</Text>
                                            </View>
                                        )
                                    }
                                }
                            />
                        </View>
                    ) : null}

                    <View>
                        <Text style={PartnerLoadDetailsScreenStyles.textIPHeadingTxt}>Consignor *</Text>
                        <TextInput
                            onChangeText={val => setConsignorFn(val)}
                            value={consignor}
                            style={PartnerLoadDetailsScreenStyles.textIPTxt}
                            placeholder={"Eg. Coal Tech Eagle"}
                            placeholderTextColor={"#646464"}
                            onFocus={
                                () => {
                                    if(DRIVERCONSIGNORDATALIST?.length) {
                                        setShowDropdown5(true)
                                    }
                                }
                            }
                            onBlur={() => setShowDropdown5(false)}
                        />
                    </View>

                    {(showDropdown5) ? (
                        <View style={[PartnerLoadDetailsScreenStyles.customDropdown, {top: 423,}]}>
                            <FlatList data={DRIVERCONSIGNORDATALIST}
                                style={{marginTop:0}}
                                renderItem={({item, index}) => 
                                    { 
                                        return (
                                            <View onTouchEnd={selectConsignorFn.bind(this,item,index)} style={PartnerLoadDetailsScreenStyles.customDropdownContentRow}>
                                                <Text style={PartnerLoadDetailsScreenStyles.customDropdownContentRowTxt1}>{index}</Text>
                                            </View>
                                        )
                                    }
                                }
                            />
                        </View>
                    ) : null}

                    <View>
                        <Text style={PartnerLoadDetailsScreenStyles.textIPHeadingTxt}>Consignee *</Text>
                        <TextInput
                            onChangeText={val => setConsigneeFn(val)}
                            value={consignee}
                            style={PartnerLoadDetailsScreenStyles.textIPTxt}
                            placeholder={"Eg. Sandur Manganese"}
                            placeholderTextColor={"#646464"}
                            onFocus={
                                () => {
                                    if(DRIVERCONSIGNEEDATALIST?.length) {
                                        setShowDropdown6(true)
                                    }
                                }
                            }
                            onBlur={() => setShowDropdown6(false)}
                        />
                    </View>

                    {(showDropdown6) ? (
                        <View style={[PartnerLoadDetailsScreenStyles.customDropdown, {top: 498,}]}>
                            <FlatList data={DRIVERCONSIGNEEDATALIST}
                                style={{marginTop:0}}
                                renderItem={({item, index}) => 
                                    { 
                                        return (
                                            <View onTouchEnd={selectConsigneeFn.bind(this,item,index)} style={PartnerLoadDetailsScreenStyles.customDropdownContentRow}>
                                                <Text style={PartnerLoadDetailsScreenStyles.customDropdownContentRowTxt1}>{index}</Text>
                                            </View>
                                        )
                                    }
                                }
                            />
                        </View>
                    ) : null}

                    <View>
                        <Text style={PartnerLoadDetailsScreenStyles.textIPHeadingTxt}>Gross Weight *</Text>
                        <View style={PartnerLoadDetailsScreenStyles.textIPNumberRowBox}>
                            <TextInput
                                onChangeText={val => setGrossWeight1Fn(val)}
                                value={grossWeight1}
                                style={PartnerLoadDetailsScreenStyles.textIPNumber1Txt}
                                placeholder={"00"}
                                placeholderTextColor={"#646464"}
                                keyboardType="numeric"
                                maxLength={2}
                                ref={grossWeight1InputRef}
                            />
                            <View style={PartnerLoadDetailsScreenStyles.textIPNumberSeperatorBox}>
                                <Text style={PartnerLoadDetailsScreenStyles.textIPNumberSeperatorTxt}>.</Text>
                            </View>

                            <TextInput
                                onChangeText={val => setGrossWeight2Fn(val)}
                                value={grossWeight2}
                                style={PartnerLoadDetailsScreenStyles.textIPNumber2Txt}
                                placeholder={"000"}
                                placeholderTextColor={"#646464"}
                                keyboardType="numeric"
                                maxLength={3}
                                ref={grossWeight2InputRef}
                            />
                        </View>
                    </View>

                    <View>
                        <Text style={PartnerLoadDetailsScreenStyles.textIPHeadingTxt}>Tare Weight *</Text>
                        <View style={PartnerLoadDetailsScreenStyles.textIPNumberRowBox}>
                            <TextInput
                                onChangeText={val => setTareWeight1Fn(val)}
                                value={tareWeight1}
                                style={PartnerLoadDetailsScreenStyles.textIPNumber1Txt}
                                placeholder={"00"}
                                placeholderTextColor={"#646464"}
                                keyboardType="numeric"
                                maxLength={2}
                                ref={tareWeight1InputRef}
                            />
                            <View style={PartnerLoadDetailsScreenStyles.textIPNumberSeperatorBox}>
                                <Text style={PartnerLoadDetailsScreenStyles.textIPNumberSeperatorTxt}>.</Text>
                            </View>

                            <TextInput
                                onChangeText={val => setTareWeight2Fn(val)}
                                value={tareWeight2}
                                style={PartnerLoadDetailsScreenStyles.textIPNumber2Txt}
                                placeholder={"000"}
                                placeholderTextColor={"#646464"}
                                keyboardType="numeric"
                                maxLength={3}
                                ref={tareWeight2InputRef}
                            />
                        </View>
                    </View>

                    <View>
                        <Text style={PartnerLoadDetailsScreenStyles.textIPHeadingTxt}>Net Weight *</Text>
                        <View style={PartnerLoadDetailsScreenStyles.textIPNumberRowBox}>
                            <TextInput
                                onChangeText={setNetWeight1}
                                value={netWeight1}
                                style={PartnerLoadDetailsScreenStyles.textIPNumber1Txt}
                                placeholder={"00"}
                                placeholderTextColor={"#646464"}
                                keyboardType="numeric"
                                maxLength={2}
                            />
                            <View style={PartnerLoadDetailsScreenStyles.textIPNumberSeperatorBox}>
                                <Text style={PartnerLoadDetailsScreenStyles.textIPNumberSeperatorTxt}>.</Text>
                            </View>

                            <TextInput
                                onChangeText={setNetWeight2}
                                value={netWeight2}
                                style={PartnerLoadDetailsScreenStyles.textIPNumber2Txt}
                                placeholder={"000"}
                                placeholderTextColor={"#646464"}
                                keyboardType="numeric"
                                maxLength={3}
                            />
                        </View>
                    </View>

                    <View>
                        <Text style={PartnerLoadDetailsScreenStyles.textIPHeadingTxt}>Shipper reference number</Text>
                        <TextInput
                            onChangeText={setShipperRefNo}
                            value={shipperRefNo}
                            style={PartnerLoadDetailsScreenStyles.textIPTxt}
                            placeholder={"Eg. LR# - Lorry Receipt"}
                            placeholderTextColor={"#646464"}
                        />
                    </View>

                    <View>
                        <Text style={PartnerLoadDetailsScreenStyles.textIPHeadingTxt}>Vessel name</Text>
                        <TextInput
                            onChangeText={setVesselName}
                            value={vesselName}
                            style={PartnerLoadDetailsScreenStyles.textIPTxt}
                            placeholder={"Eg. Ennore Gems"}
                            placeholderTextColor={"#646464"}
                            onFocus={
                                () => {
                                    if(DRIVERVESSELNAMEDATALIST?.length) {
                                        setShowDropdown7(true)
                                    }
                                }
                            }
                            onBlur={() => setShowDropdown7(false)}
                        />
                    </View>

                    {(showDropdown7) ? (
                        <View style={[PartnerLoadDetailsScreenStyles.customDropdown, {top: 873,}]}>
                            <FlatList data={DRIVERVESSELNAMEDATALIST}
                                style={{marginTop:0}}
                                renderItem={({item, index}) => 
                                    { 
                                        return (
                                            <View onTouchEnd={selectConsignorFn.bind(this,item,index)} style={PartnerLoadDetailsScreenStyles.customDropdownContentRow}>
                                                <Text style={PartnerLoadDetailsScreenStyles.customDropdownContentRowTxt1}>{item}</Text>
                                            </View>
                                        )
                                    }
                                }
                            />
                        </View>
                    ) : null}

                    <View>
                        <Text style={PartnerLoadDetailsScreenStyles.textIPHeadingTxt}>E-Way bill no</Text>
                        <TextInput
                            onChangeText={setEWayBillNo}
                            value={eWayBillNo}
                            style={PartnerLoadDetailsScreenStyles.textIPTxt}
                            placeholder={"Eg. 13146872708"}
                            placeholderTextColor={"#646464"}
                        />
                    </View>

                    <View>
                        <Text style={PartnerLoadDetailsScreenStyles.textIPHeadingTxt}>Sell no</Text>
                        <TextInput
                            onChangeText={setSellNo}
                            value={sellNo}
                            style={PartnerLoadDetailsScreenStyles.textIPTxt}
                            placeholder={"Eg. 480X6"}
                            placeholderTextColor={"#646464"}
                            keyboardType="phone-pad"
                            inputMode="numeric"
                            maxLength={5}
                        />
                    </View>

                    <View>
                        <Text style={PartnerLoadDetailsScreenStyles.textIPHeadingTxt}>Form KK no</Text>
                        <TextInput
                            onChangeText={val => setFormKKNo(val.replace(/[^0-9]/g, ''))}
                            value={formKKNo}
                            style={PartnerLoadDetailsScreenStyles.textIPTxt}
                            placeholder={"Eg. 7455"}
                            placeholderTextColor={"#646464"}
                            keyboardType="phone-pad"
                            inputMode="numeric"
                            maxLength={4}
                        />
                    </View>
                </View>
            </ScrollView>

            <View style={[AssignTruckScreenStyles.assignTruckRowBox, {marginHorizontal: 16, paddingBottom: 64}]}>
                <View onTouchEnd={onCancelFn} style={[AssignTruckScreenStyles.cancelTruckBox, {backgroundColor: null}]}>
                    <Text style={AssignTruckScreenStyles.cancelTruckBoxTxt}>Cancel</Text>
                </View>
                <View onTouchEnd={createTripFn} style={AssignTruckScreenStyles.assignTruckBox}>
                    <Text style={AssignTruckScreenStyles.assignTruckBoxTxt}>Create Trip</Text>
                </View>
            </View>
        </View>
    )
}

export default PartnerLoadDetailsScreen