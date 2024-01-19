import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Load from '../Screens/LoadScreen';
import Trip from '../Screens/TripScreen';
import HomeScreen from '../Screens/HomeScreen';
import Truck from '../Screens/TruckScreen';
import { createStackNavigator } from '@react-navigation/stack';
import CompanyInfo from '../Screens/CompanyInfo';
import BankInfo from '../Screens/BankInfo';
const Tab = createBottomTabNavigator();


const Stack = createStackNavigator();


export const HomeNav = () => {
    return (

        <Stack.Navigator initialRouteName={HomeScreen} screenOptions={{ header: () => null }}>

            <Stack.Screen name="DashBoard" component={HomeScreen} />
            <Stack.Screen name="Company" component={CompanyInfo} />
            <Stack.Screen name="Bank" component={BankInfo} />

        </Stack.Navigator>

    )
}

const TabNav = () => {
    return (
        <Tab.Navigator tabBarOptions={{
            labelStyle: { fontSize: 14, fontfamily: 'Montserrat-Medium' },
            activeTintColor: '#bf841e',
            inactiveTintColor: 'grey',
            style: { backgroundColor: 'white', },
        }}>
            <Tab.Screen name="Home" component={HomeNav}
                options={{
                    title: 'Home',
                    tabBarIcon: ({ focused }) => (
                        <Image style={{ width: 25, height: 25, }} source={require('../assets/icons/homepage.png')}
                        />
                    ),
                    headerShown: false
                }} />
            <Tab.Screen name="Load" component={Load} options={{
                title: 'Load',
                tabBarIcon: ({ focused }) => (
                    <Image style={{ width: 20, height: 20 }} source={require('../assets/icons/package.png')}
                    />
                ),
                headerShown: false
            }}

            />
            <Tab.Screen name="Trip" component={Trip} options={{
                title: 'Trip',
                tabBarIcon: ({ focused }) => (
                    <Image style={{ width: 23, height: 23 }} source={require('../assets/icons/placeholder.png')} />
                ),
                headerShown: false
            }} />
            <Tab.Screen name="Truck" component={Truck} options={{
                title: 'Truck',
                tabBarIcon: ({ focused }) => (
                    <Image style={{ width: 23, height: 23 }} source={require('../assets/icons/cargo-truck.png')} />
                ),
                headerShown: false
            }} />
        </Tab.Navigator>
    );

}

export default TabNav
const styles = StyleSheet.create({
    tabBarStyle: {
        position: 'absolute',
        backgroundColor: 'pink',
        height: 65,
        paddingTop: 15
    },
    tabBarLabelStyle: {
        fontSize: 12,
        // fontFamily: 'Montserrat'
        // marginTop: vert),
        // marginBottom: verticalScale(6),
    }
});