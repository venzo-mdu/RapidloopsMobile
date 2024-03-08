import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { PARTNERDASHBOARD, PARTNERLOAD, PARTNERLOADDETAILS, PARTNERTRIPS } from '../screens';
import PartnerDashboardScreen from '../screens/App/PartnerDashboardScreen';
import PartnerLoadsScreen from '../screens/App/PartnerLoadsScreen';
import PartnerTripsScreen from '../screens/App/PartnerTripsScreen';
import PartnerLoadDetailsScreen from '../screens/App/PartnerLoadDetailsScreen';

const Stack = createNativeStackNavigator();

export const PartnerHomeNavigator = () => {
  return (
    <Stack.Navigator 
      initialRouteName={PARTNERDASHBOARD}
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name={PARTNERDASHBOARD} component={PartnerDashboardScreen} />
    </Stack.Navigator>
  )
}

export const PartnerLoadNavigator = () => {
  return (
    <Stack.Navigator 
      initialRouteName={PARTNERLOAD}
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name={PARTNERLOAD} component={PartnerLoadsScreen} />
      <Stack.Screen name={PARTNERLOADDETAILS} component={PartnerLoadDetailsScreen} />
    </Stack.Navigator>
  )
}

export const PartnerTripsNavigator = () => {
  return (
    <Stack.Navigator 
      initialRouteName={PARTNERTRIPS}
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name={PARTNERTRIPS} component={PartnerTripsScreen} />
    </Stack.Navigator>
  )
}
