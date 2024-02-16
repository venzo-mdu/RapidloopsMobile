import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { useWindowDimensions } from 'react-native';
import { TABHOME } from '../screens';
import CustomHomeDrawerContent from './CustomHomeDrawerContent';
import TabNavigator from './TabNavigator';

const DrawerHomeNavigator = () => {

  const Drawer = createDrawerNavigator();

  const dimensions = useWindowDimensions();
  const isLargeScreen = dimensions.width >= 768;

  return (
    <Drawer.Navigator 
      drawerContent={(props) => <CustomHomeDrawerContent {...props} />}
      screenOptions={{
        drawerType: isLargeScreen ? 'permanent' : 'front',
        drawerStyle: {
          backgroundColor: '#c6cbef',
          width: "80%",
        },
        overlayColor: 'transparent',
        headerShown: false,
        
      }}
    >
      <Drawer.Screen name={TABHOME} component={TabNavigator} />
    </Drawer.Navigator>
  )
}

export default DrawerHomeNavigator