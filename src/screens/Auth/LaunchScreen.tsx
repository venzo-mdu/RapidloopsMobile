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

    var token = await AsyncStorage.getItem('TOKEN');
    console.log("launch token : ",token)

    if(token != null) {

      var companyId = await AsyncStorage.getItem('COMPANYID');  
      console.log(companyId,"companyId")
      var userId = await AsyncStorage.getItem('USERID');  
      var phoneNum = await AsyncStorage.getItem('PHONENUM');
      
      global.TOKEN = token;
      global.COMPANYID = companyId;
      global.USERID = userId;

      try {
        const data = JSON.stringify({
          userId: userId,
        });

        fetch(API.UserType, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
          },
          body: data
        })
        .then((res) => res.json())
        .then((resJson) => {
          console.log("USER TYPE RES= ",resJson?.data?.userTypeId, resJson?.status)

          if (resJson?.status) {
            if (resJson?.data?.userTypeId == 5 || resJson?.data?.userTypeId == 6) {
              navigation.navigate(DRAWERHOME);
            } else if (resJson?.data?.userTypeId == 8) {
              navigation.navigate(PARTNERTABHOME);
            } else {
              console.warn("wrong")
              navigation.navigate(PHONENUMBERLOGIN);
            }
          } else {
            console.warn("wrong");
            navigation.navigate(PHONENUMBERLOGIN);
          }
        })
        .catch((error) => {
          console.error(error);
          navigation.navigate(PHONENUMBERLOGIN);
        });
      } catch (error) {
        console.error("catch : ", error);
        navigation.navigate(PHONENUMBERLOGIN);
      }
  
      // try {
      //   fetch(API.TruckerData + "?truckerPhoneNumber=" + phoneNum, {
      //     method: 'GET',
      //     headers: {
      //       'Content-Type': 'application/json',
      //       'Authorization': 'Bearer ' + token,
      //     }
      //   })
      //   .then((response) => response.json())
      //   .then((responseJson) => {
      //     console.log(responseJson,"= launch")

      //     if(responseJson?.success) {
      //     } else {
      //     }
      //   })
      //   .catch((error) => {
      //     console.error(error);
      //     navigation.navigate(PHONENUMBERLOGIN);
      //   });
      // } catch (error) {
      //   console.error("catch : ", error);
      //   navigation.navigate(PHONENUMBERLOGIN);
      // }
    } else {
      navigation.navigate(PHONENUMBERLOGIN);
    }
  };

  return (
    <View style={LaunchStyles.container}>
      <StatusBarCustom sb_color={COLORS.BLACK} />
      <Text style={LaunchStyles.textPart1}>RAPID<Text style={LaunchStyles.textPart2}>LOOPS</Text></Text>
    </View>
  )
}

export default LaunchScreen