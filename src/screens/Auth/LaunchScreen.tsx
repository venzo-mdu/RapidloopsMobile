import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import { LaunchStyles } from './AuthStyles'
import { useNavigation } from '@react-navigation/native'
import { DRAWERHOME, PARTNERDRAWERHOME, PARTNERTABHOME, PHONENUMBERLOGIN } from '..'
import { API, COLORS } from '../../helpers/custom'
import StatusBarCustom from '../../components/StatusBarCustom'
import AsyncStorage from '@react-native-async-storage/async-storage'

const LaunchScreen = () => {

  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      getDataFn();
    }, 3000);
  }, []);

  const getDataFn = async () => {

    navigation.navigate(PARTNERTABHOME);
    // var token = await AsyncStorage.getItem('TOKEN');

    // if(token != null) {

    //   var companyId = await AsyncStorage.getItem('COMPANYID');  
    //   var userId = await AsyncStorage.getItem('USERID');  
    //   var phoneNum = await AsyncStorage.getItem('PHONENUM');
  
    //   try {
    //     fetch(API.TruckerData + "?truckerPhoneNumber=" + phoneNum, {
    //       method: 'GET',
    //       headers: {
    //         'Content-Type': 'application/json',
    //         'Authorization': 'Bearer ' + token,
    //       }
    //     })
    //     .then((response) => response.json())
    //     .then((responseJson) => {

    //       if(responseJson?.success) {
    //         global.TOKEN = token;
    //         global.COMPANYID = companyId;
    //         global.USERID = userId;
  
    //         // navigation.navigate(DRAWERHOME);
    //         navigation.navigate(PARTNERTABHOME);
    //       } else {
    //         navigation.navigate(PHONENUMBERLOGIN);
    //       }
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //       navigation.navigate(PHONENUMBERLOGIN);
    //     });
    //   } catch (error) {
    //     console.error("catch : ", error);
    //     navigation.navigate(PHONENUMBERLOGIN);
    //   }
    // } else {
    //   navigation.navigate(PHONENUMBERLOGIN);
    // }
  };

  return (
    <View style={LaunchStyles.container}>
      <StatusBarCustom sb_color={COLORS.BLACK} />
      <Text style={LaunchStyles.textPart1}>RAPID<Text style={LaunchStyles.textPart2}>TRUCK</Text></Text>
    </View>
  )
}

export default LaunchScreen