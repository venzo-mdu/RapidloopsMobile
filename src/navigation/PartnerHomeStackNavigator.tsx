import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { PARTNERDASHBOARD, PARTNERLOAD, PARTNERLOADDETAILS, PARTNERPOD, PARTNERTRIPS } from '../screens';
import PartnerDashboardScreen from '../screens/App/Partner/PartnerDashboardScreen';
import PartnerLoadsScreen from '../screens/App/Partner/PartnerLoadsScreen';
import PartnerTripsScreen from '../screens/App/Partner/PartnerTripsScreen';
import PartnerLoadDetailsScreen from '../screens/App/Partner/PartnerLoadDetailsScreen';
import PartnerPODScreen from '../screens/App/Partner/PartnerPODScreen';

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
      <Stack.Screen name={PARTNERPOD} component={PartnerPODScreen} />
    </Stack.Navigator>
  )
}
