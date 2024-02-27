import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { ASSIGNTRUCK, BANKINFO, COMPANYINFO, DASHBOARD, LOAD, LOADDETAILS, NOTIFICATION, SETTINGS, TRIPS, TRUCK, USERS } from '../screens';
import AssignTruckScreen from '../screens/App/AssignTruckScreen';
import BankInfoScreen from '../screens/App/BankInfoScreen';
import CompanyInfoScreen from '../screens/App/CompanyInfoScreen';
import HomeScreen from '../screens/App/HomeScreen';
import LoadDetailsScreen from '../screens/App/LoadDetailsScreen';
import LoadScreen from '../screens/App/LoadScreen';
import NotificationScreen from '../screens/App/NotificationScreen';
import SettingsScreen from '../screens/App/SettingsScreen';
import TripsScreen from '../screens/App/TripsScreen';
import TruckScreen from '../screens/App/TruckScreen';
import UsersScreen from '../screens/App/UsersScreen';

const Stack = createNativeStackNavigator();

export const HomeNavigator = () => {    
  return (
    <Stack.Navigator 
      initialRouteName={DASHBOARD}
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name={DASHBOARD} component={HomeScreen} />

      <Stack.Screen name={COMPANYINFO} component={CompanyInfoScreen} />
      <Stack.Screen name={BANKINFO} component={BankInfoScreen} />
      <Stack.Screen name={USERS} component={UsersScreen} />
      <Stack.Screen name={SETTINGS} component={SettingsScreen} />
      <Stack.Screen name={NOTIFICATION} component={NotificationScreen} />
    </Stack.Navigator>
  )
}

export const LoadNavigator = () => {    
  return (
    <Stack.Navigator 
      initialRouteName={LOAD}
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name={LOAD} component={LoadScreen} />
      <Stack.Screen name={LOADDETAILS} component={LoadDetailsScreen} />
      <Stack.Screen name={ASSIGNTRUCK} component={AssignTruckScreen} />

      <Stack.Screen name={COMPANYINFO} component={CompanyInfoScreen} />
      <Stack.Screen name={BANKINFO} component={BankInfoScreen} />
      <Stack.Screen name={USERS} component={UsersScreen} />
      <Stack.Screen name={SETTINGS} component={SettingsScreen} />
      <Stack.Screen name={NOTIFICATION} component={NotificationScreen} />
    </Stack.Navigator>
  )
}

export const TripsNavigator = () => {    
  return (
    <Stack.Navigator 
      initialRouteName={TRIPS}
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name={TRIPS} component={TripsScreen} />

      <Stack.Screen name={COMPANYINFO} component={CompanyInfoScreen} />
      <Stack.Screen name={BANKINFO} component={BankInfoScreen} />
      <Stack.Screen name={USERS} component={UsersScreen} />
      <Stack.Screen name={SETTINGS} component={SettingsScreen} />
      <Stack.Screen name={NOTIFICATION} component={NotificationScreen} />
    </Stack.Navigator>
  )
}

export const TruckNavigator = () => {    
  return (
    <Stack.Navigator 
      initialRouteName={TRUCK}
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name={TRUCK} component={TruckScreen} />

      <Stack.Screen name={COMPANYINFO} component={CompanyInfoScreen} />
      <Stack.Screen name={BANKINFO} component={BankInfoScreen} />
      <Stack.Screen name={USERS} component={UsersScreen} />
      <Stack.Screen name={SETTINGS} component={SettingsScreen} />
      <Stack.Screen name={NOTIFICATION} component={NotificationScreen} />
    </Stack.Navigator>
  )
}
