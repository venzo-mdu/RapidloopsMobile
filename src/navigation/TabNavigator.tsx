import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeNavigator, LoadNavigator, TripsNavigator, TruckNavigator } from './HomeStackNavigator';
import { HOMESTACK, LOADSTACK, TRIPSSTACK, TRUCKSTACK } from '../screens';
import CustomTabBar from './CustomTabBar';

const TabNavigator = () => {

  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator 
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name={HOMESTACK} component={HomeNavigator} />
      <Tab.Screen name={LOADSTACK} component={LoadNavigator} />
      <Tab.Screen name={TRIPSSTACK} component={TripsNavigator} />
      <Tab.Screen name={TRUCKSTACK} component={TruckNavigator} />
    </Tab.Navigator>
  )
}

export default TabNavigator