import React from 'react'
import HomeScreen from './src/Screens/HomeScreen';
import SplashScreen from './src/Screens/SplashScreen';
import Mobilenum from './src/Screens/MobilenumScreen';
import OtpverifyScreen from './src/Screens/OtpverifyScreen';
import Load from './src/Screens/LoadScreen';
import Trip from './src/Screens/TripScreen';
import Truck from './src/Screens/TruckScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet } from 'react-native';
// import test from "./src/assets/icons"
// import { createDrawerNavigator } from 'react-navigation-drawer';
// const Drawer = createDrawerNavigator();

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={SplashScreen} screenOptions={{ header: () => null }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Mobile" component={Mobilenum} />
        <Stack.Screen name="Otpverify" component={OtpverifyScreen} />
        <Stack.Screen name="MainHome" component={Tabs}/>
      </Stack.Navigator>
     
    </NavigationContainer>
  )
}




const Tabs = () => {
      return (    
     
            <Tab.Navigator  initialRouteName={HomeScreen} tabBarOptions={{
              labelStyle: { fontSize: 14, fontfamily:'Montserrat-Medium'},  
              activeTintColor: '#bf841e',  
              inactiveTintColor: 'grey',  
              style: { backgroundColor: 'white', }, 
            }}>
                 <Tab.Screen name="Home" component={HomeScreen}
                  options={{
                    title:'Home',
                    tabBarIcon: ({ focused }) => (
                      <Image style={{ width: 25, height: 25, }} source={require('./src/assets/icons/homepage.png')}
                      />
                    ),
                    headerShown: false
                  }} />
                  <Tab.Screen name="Load" component={Load}  options={{
                    title:'Load',
                    tabBarIcon: ({ focused }) => (
                      <Image style={{ width: 20, height: 20 }} source={require('./src/assets/icons/package.png')}
                      />
                    ),
                   headerShown:false
                  }} 
                  
                  />
                  <Tab.Screen name="Trip" component={Trip}   options={{
                    title:'Trip',
                    tabBarIcon:({focused}) => (
                      <Image style={{ width: 23, height: 23 }} source={require('./src/assets/icons/placeholder.png')} />
                    ),
                    headerShown:false
                  }}  />
                  <Tab.Screen name="Truck" component={Truck}   options={{
                    title:'Truck',
                    tabBarIcon:({focused}) => (
                      <Image style={{ width: 23, height: 23 }} source={require('./src/assets/icons/cargo-truck.png')} />
                    ),
                    headerShown:false
                  }}  />
            </Tab.Navigator>        
        );
  
  }
export default App
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