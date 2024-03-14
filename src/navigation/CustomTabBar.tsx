// CustomTabBar.js
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image, Platform } from 'react-native';
import { COLORS, FONTS, ICONS } from '../helpers/custom';
import { LOADDETAILS } from '../screens';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const CustomTabBar = ({ state, descriptors, navigation }) => {

  return (
    <View style={CustomTabBarStyles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel !== undefined ? options.tabBarLabel : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <>
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              style={[CustomTabBarStyles.individualTab, index == 0 ? {borderTopLeftRadius: 20,} : null, index == 2 ? {borderTopRightRadius: 20,} : null]}
            >
              {index == 0 ? (
                <View>
                  <Image source={isFocused ? ICONS.DRAWERHOMEACTIVE : ICONS.DRAWERHOMEINACTIVE} style={{ width: 20, height: 20}} />
                </View>
              ) : index == 1 ? (
                <View>
                  <Image source={isFocused ? ICONS.DRAWERLOADACTIVE : ICONS.DRAWERLOADINACTIVE} style={{ width: 20, height: 20}} />
                </View>
              ) : index == 2 ? (
                <View>
                  <Image source={isFocused ? ICONS.DRAWERTRIPSACTIVE : ICONS.DRAWERTRIPSINACTIVE} style={{ width: 20, height: 20}} />
                </View>
              ) : index == 3 ? (
                <View>
                  <Image source={isFocused ? ICONS.DRAWERTRUCKACTIVE : ICONS.DRAWERTRUCKINACTIVE} style={{ width: 20, height: 20}} />
                </View>
              ) : null}
              <Text style={{ fontSize: 12, color: isFocused ? COLORS.PRIMARY : '#a49f99', fontFamily: FONTS.MontserratSemiBold, marginTop: 4 }}>{label}</Text>
            </TouchableOpacity>
            
            {/* {(LOADDETAILS == getFocusedRouteNameFromRoute(route) ?? "") ? (
              <>
              <Text>1</Text>
              </>
            ) : (
              <>
              <Text>2</Text>
              </>
            )} */}
          </>
        );
      })}
    </View>
  );
};

export default CustomTabBar;

const CustomTabBarStyles = StyleSheet.create({
  container: { 
    backgroundColor: "transparent",
    // height: Platform.OS == "ios" ? 96 : 64, // add 24
    height: 0,
    flexDirection: 'row',
    paddingBottom: Platform.OS == "ios" ? 12 : 0, // add 12
    bottom:64,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // backgroundColor: "pink"
  },
  individualTab: { 
    backgroundColor: COLORS.WHITE,
    height: Platform.OS == "ios" ? 96 : 64, // add 24
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    paddingTop: 4,
  }
})
