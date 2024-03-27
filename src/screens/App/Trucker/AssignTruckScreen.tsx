import { View, Text, TextInput, FlatList, StyleSheet, Modal, Alert, Pressable, UIManager, findNodeHandle, Platform, ToastAndroid, ScrollView } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import StatusBarCustom from '../../../components/StatusBarCustom';
import { API, COLORS, FONTS, WD } from '../../../helpers/custom';
import { AssignTruckScreenStyles, LoadListScreenStyles } from '../AppStyles';
import { Dropdown } from 'react-native-element-dropdown';
import { ASSIGNTRUCK } from '../..';

const AssignTruckScreen = (props) => {

  const navigation = useNavigation();
  
  useEffect(() => {
    getAllTrucksListFn();
  }, []);

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
        var status = "";
        for (let i = 0; i < responseJson?.truckInfo.length; i++) {
          if("ACTIVE_IDLE" == responseJson?.truckInfo[i]?.status && status == "") {
            status = { label1: responseJson?.truckInfo[i]?.truckNumber, label2: responseJson?.truckInfo[i]?.truckType , value: responseJson?.truckInfo[i]?.id, status: responseJson?.truckInfo[i]?.status }
          }
          arr.push({ label1: responseJson?.truckInfo[i]?.truckNumber, label2: responseJson?.truckInfo[i]?.truckType , value: responseJson?.truckInfo[i]?.id, status: responseJson?.truckInfo[i]?.status });
          // arr.push({ label: responseJson?.truckInfo[i]?.truckNumber + `${"\n"}` + responseJson?.truckInfo[i]?.truckType , value: responseJson?.truckInfo[i]?.id, status: responseJson?.truckInfo[i]?.status });
        }
        setALLTRUCKSLIST(arr);
        setSelectedTruck(status);
      })
      .catch((error) => {
        console.error(error);
      });
    } catch (error) {
      console.error("catch : ", error);
    }
  };

  const [ALLTRUCKSLIST, setALLTRUCKSLIST] = useState([]);

  const CreateTripFn = async () => {
    if(selectedTruck?.value == null) {
      if(Platform.OS == "ios") {
      //   setToast("Enter valid phone number");
      //   setVisible(true);
      } else {
        ToastAndroid.show('Select valid truck', ToastAndroid.SHORT);
      }
    } else if (driverName == "") {
      if(Platform.OS == "ios") {
        //   setToast("Enter valid phone number");
        //   setVisible(true);
      } else {
        ToastAndroid.show('Enter valid driver name', ToastAndroid.SHORT);
      }
    } else if (driverMobileNumber?.length != 10) {
      if(Platform.OS == "ios") {
        //   setToast("Enter valid phone number");
        //   setVisible(true);
      } else {
        ToastAndroid.show('Enter valid driver mobile number', ToastAndroid.SHORT);
      }
    } else {
      try {
        const data = JSON.stringify({
          "truckId" : selectedTruck?.value,
          "loadId" : props.route.params?.loadID,
          "driverPhoneNumber" : driverMobileNumber,
          "driverName": driverName,
        });

        console.log(data,"data")
      
        await fetch(API?.AssignTruck, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + global.TOKEN,
          },
          body: data
        })
        .then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson,"responseJson")
          if(Platform.OS == "ios") {
            //   setToast("Enter valid phone number");
            //   setVisible(true);
          } else {
            ToastAndroid.show(responseJson?.message, ToastAndroid.SHORT);
          }

          if(responseJson?.status == true) {
            navigation.navigate(ASSIGNTRUCK);
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

  const [selectedTruck, setSelectedTruck] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const CloseCustomDropdownFn = () => {
    setIsFocus(false);
  };

  const [driverName, setDriverName] = useState("");
  const [driverMobileNumber, setDriverMobileNumber] = useState("");


  const [viewPosition, setViewPosition] = useState({ x: 0, y: 0 });
  const viewRef = useRef(null);

  useEffect(() => {
    if (viewRef.current) {
      const handle = findNodeHandle(viewRef.current);
      UIManager.measure(handle, (x, y, width, height, pageX, pageY) => {
        setViewPosition({ x: pageX, y: pageY });
      });
    }
  }, []);

  const selectTruckFn = (item, index) => {
    if (item?.status === "ACTIVE_IDLE") {
      setSelectedTruck(item);
      setIsFocus(false);
    } else {
    }
  };

  return (
    <View>
      <StatusBarCustom sb_color={COLORS.PRIMARY} />

      <View style={AssignTruckScreenStyles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={AssignTruckScreenStyles.containerHeadingTxt}>Assign Truck</Text>

          <View>
            <Text style={AssignTruckScreenStyles.containerSubHeadingTxt}>Select truck *</Text>

            <View onTouchEnd={() => setIsFocus(true)} style={AssignTruckScreenStyles.dropdown1Box}>
              <View ref={viewRef} style={AssignTruckScreenStyles.dropdown1}>
                <View style={AssignTruckScreenStyles?.customIndivDropdownBox}>
                  <Text style={AssignTruckScreenStyles?.customDropdownValue1Txt}>{selectedTruck?.label1}</Text>
                  <Text style={AssignTruckScreenStyles?.customDropdownValue2Txt}>{selectedTruck?.label2}</Text>
                </View>
              </View>
            </View>
          </View>

          <View>
            <Text style={AssignTruckScreenStyles.containerSubHeadingTxt}>Driver name *</Text>

            <View style={AssignTruckScreenStyles.inputputBox}>
              <TextInput
                onChangeText={setDriverName}
                value={driverName}
                style={AssignTruckScreenStyles.driverNameBox}
                placeholder={"Eg. Bharai Kumar"}
                placeholderTextColor={"#646464"}
              />
            </View>
          </View>

          <View>
            <Text style={AssignTruckScreenStyles.containerSubHeadingTxt}>Driver mobile number *</Text>

            <View style={AssignTruckScreenStyles.inputputBox}>
              <TextInput
                onChangeText={val => setDriverMobileNumber(val.replace(/[^0-9]/g, ''))}
                value={driverMobileNumber}
                style={AssignTruckScreenStyles.driverNameBox}
                placeholder={"Eg. 7904331455"}
                placeholderTextColor={"#646464"}
                keyboardType="phone-pad"
                inputMode="numeric"
                maxLength={10}
              />
            </View>
          </View>

          <View style={AssignTruckScreenStyles.assignTruckRowBox}>
            <View style={AssignTruckScreenStyles.cancelTruckBox}>
              <Text style={AssignTruckScreenStyles.cancelTruckBoxTxt}>Cancel</Text>
            </View>
            <View onTouchEnd={CreateTripFn} style={AssignTruckScreenStyles.assignTruckBox}>
              <Text style={AssignTruckScreenStyles.assignTruckBoxTxt}>Assign Truck</Text>
            </View>
          </View>
        </ScrollView>
      </View>

      <Modal
        transparent={true}
        animationType={"none"}
        visible={isFocus}
        onRequestClose={CloseCustomDropdownFn}
      >
        <View style={{ flex: 1, paddingLeft: viewPosition?.x * 1.5, paddingTop: viewPosition?.y}}>
          <View style={{width: (WD - 16 - 16 - 64), maxHeight: 200,}}>
            <FlatList data={ALLTRUCKSLIST}
              style={AssignTruckScreenStyles?.customDropdown}
              renderItem={({item, index}) => 
                { 
                  return (
                    <View onTouchEnd={selectTruckFn.bind(this, item, index)} style={[AssignTruckScreenStyles?.customIndivDropdownBox, {backgroundColor: item?.status !== "ACTIVE_IDLE" ? "#ebebe3" : COLORS.WHITE}]}>
                      <Text style={AssignTruckScreenStyles?.customDropdownValue1Txt}>{item?.label1}</Text>
                      <Text style={AssignTruckScreenStyles?.customDropdownValue2Txt}>{item?.label2}</Text>
                    </View>
                  )
                }
              }
            />
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default AssignTruckScreen

  