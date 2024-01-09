import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from './src/Screens/HomeScreen'
import SplashScreen from './src/Screens/SplashScreen'
import Mobilenum from './src/Screens/Mobilenum';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={SplashScreen} screenOptions={{ header: () => null }}>

        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Mobile" component={Mobilenum} />
        <Stack.Screen name="Home" component={HomeScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App