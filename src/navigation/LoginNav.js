import { View, Text } from 'react-native'
import React from 'react'
import SplashScreen from '../Screens/SplashScreen';
import Mobilenum from '../Screens/MobilenumScreen';
import OtpverifyScreen from '../Screens/OtpverifyScreen';
import CompanyInfo from '../Screens/CompanyInfo';
import BankInfo from '../Screens/BankInfo';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNav from './DrawerNav';

const Stack = createStackNavigator();


const LoginNav = () => {
    return (

        <Stack.Navigator initialRouteName={SplashScreen} screenOptions={{ header: () => null }}>

            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Mobile" component={Mobilenum} />
            <Stack.Screen name="Otpverify" component={OtpverifyScreen} />

            {/* <Stack.Screen name="tabsnew" component={Tabs} /> */}
            <Stack.Screen name="MaHome" component={DrawerNav} />

        </Stack.Navigator>

    )
}

export default LoginNav