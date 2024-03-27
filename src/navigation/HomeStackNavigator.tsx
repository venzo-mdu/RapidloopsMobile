import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { ASSIGNTRUCK, BANKINFO, COMPANYINFO, DASHBOARD, LOAD, LOADDETAILS, NOTIFICATION, SETTINGS, TRIPS, TRUCK, USERS } from '../screens';
import HomeScreen from '../screens/App/Trucker/HomeScreen';
import CompanyInfoScreen from '../screens/App/Trucker/CompanyInfoScreen';
import BankInfoScreen from '../screens/App/Trucker/BankInfoScreen';
import UsersScreen from '../screens/App/Trucker/UsersScreen';
import SettingsScreen from '../screens/App/Trucker/SettingsScreen';
import NotificationScreen from '../screens/App/Trucker/NotificationScreen';
import LoadScreen from '../screens/App/Trucker/LoadScreen';
import LoadDetailsScreen from '../screens/App/Trucker/LoadDetailsScreen';
import AssignTruckScreen from '../screens/App/Trucker/AssignTruckScreen';
import TripsScreen from '../screens/App/Trucker/TripsScreen';
import TruckScreen from '../screens/App/Trucker/TruckScreen';
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
