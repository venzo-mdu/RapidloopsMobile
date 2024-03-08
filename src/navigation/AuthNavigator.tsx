import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { DRAWERHOME, LAUNCH, PARTNERDRAWERHOME, PARTNERTABHOME, PHONENUMBERLOGIN, PHONENUMBEROTP } from '../screens';
import LaunchScreen from '../screens/Auth/LaunchScreen';
import PhoneNumberLoginScreen from '../screens/Auth/PhoneNumberLoginScreen';
import PhoneNumberOTPScreen from '../screens/Auth/PhoneNumberOTPScreen';
import DrawerHomeNavigator from './DrawerHomeNavigator';
import PartnerDrawerHomeNavigator from './PartnerDrawerHomeNavigator';
import PartnerTabNavigator from './PartnerTabNavigator';

const AuthNavigator = () => {

  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator 
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={LAUNCH} component={LaunchScreen} />
      <Stack.Screen name={PHONENUMBERLOGIN} component={PhoneNumberLoginScreen} />
      <Stack.Screen name={PHONENUMBEROTP} component={PhoneNumberOTPScreen} />

      <Stack.Screen name={DRAWERHOME} component={DrawerHomeNavigator} />
      <Stack.Screen name={PARTNERTABHOME} component={PartnerTabNavigator} />
    </Stack.Navigator>
  )
}

export default AuthNavigator