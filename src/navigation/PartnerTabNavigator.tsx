import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { PARTNERHOMESTACK, PARTNERLOADSTACK, PARTNERTRIPSSTACK } from '../screens';
import CustomTabBar from './CustomTabBar';
import { PartnerHomeNavigator, PartnerLoadNavigator, PartnerTripsNavigator } from './PartnerHomeStackNavigator';

const PartnerTabNavigator = () => {

  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator 
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name={PARTNERHOMESTACK} component={PartnerHomeNavigator} />
      <Tab.Screen name={PARTNERLOADSTACK} component={PartnerLoadNavigator} />
      <Tab.Screen name={PARTNERTRIPSSTACK} component={PartnerTripsNavigator} />
    </Tab.Navigator>
  )
}

export default PartnerTabNavigator