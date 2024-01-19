import 'react-native-gesture-handler';
import React from 'react'
import HomeScreen from './src/Screens/HomeScreen';
import SplashScreen from './src/Screens/SplashScreen';
import Mobilenum from './src/Screens/MobilenumScreen';
import OtpverifyScreen from './src/Screens/OtpverifyScreen';
import Load from './src/Screens/LoadScreen';
import Trip from './src/Screens/TripScreen';
import Truck from './src/Screens/TruckScreen';
import CustomDrawerNavigation from './src/Screens/CustomDrawerNavigation';
import CompanyInfo from './src/Screens/CompanyInfo';
import BankInfo from './src/Screens/BankInfo';
import { NavigationContainer } from '@react-navigation/native';
import LoginNav from './src/navigation/LoginNav';


const App = () => {
  return (
    <NavigationContainer>
      <LoginNav />

    </NavigationContainer>
  );
};

export default App
