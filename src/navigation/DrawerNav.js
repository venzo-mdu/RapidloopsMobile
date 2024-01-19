import { View, Text } from 'react-native'
import React from 'react'
import CompanyInfo from '../Screens/CompanyInfo'
import BankInfo from '../Screens/BankInfo'
import TabNav from './TabNav'
import CustomDrawerNavigation from '../Screens/CustomDrawerNavigation'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../Screens/HomeScreen'

const Drawer = createDrawerNavigator();
const DrawerNav = () => {
    return (
        // <Drawer.Navigator screenOptions={{ drawerStyle: { width: '87%' }, headerShown: false }}>
        //     <Drawer.Screen name="Tabs" component={TabNav} options={{ headerShown: false }} />
        //     <Drawer.Screen name="CompanyInfo" component={CompanyInfo} />
        //     <Drawer.Screen name="BankInfo" component={BankInfo} />
        // </Drawer.Navigator>
        <Drawer.Navigator screenOptions={{ drawerStyle: { width: '76%', backgroundColor: '#bf841e' } }}

            drawerContent={(props) => <CustomDrawerNavigation {...props} />}
        >
            {/* <Drawer.Navigator initialRouteName="Home"> */}
            <Drawer.Screen name="Tabs" component={TabNav} options={{
                headerShown: false,
                drawerIcon: () => null,

            }} />
        </Drawer.Navigator>
    )
}

export default DrawerNav