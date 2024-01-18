import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const CustomDrawerNavigation = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            <View style={styles.headerContainer}>
                {/* <Image style={styles.headerImage} source={require('../assets/openWeatherIcons/splashnew.png')} /> */}
            </View>

            {/* <DrawerItemList {...props} /> */}

            <TouchableOpacity
                style={styles.drawerItem}
                onPress={() => {
                    props.navigation.navigate('Load');
                }}
            >
                {/* <Image style={styles.drawerItemImage} source={require('../assets/openWeatherIcons/calendar.png')} /> */}
                <Text style={styles.drawerItemText}>Daily  Forecast</Text>
            </TouchableOpacity>

        </DrawerContentScrollView>

    );
};

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: 'white',
    },
    headerImage: {
        alignSelf: 'center',
        width: 290,
        height: 290,
        resizeMode: 'contain',
        marginTop: 80,
        marginBottom: 50
    },
    drawerItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 20,
    },
    drawerItemImage: {
        width: 25,
        height: 25,
        marginRight: 50,
    },
    drawerItemText: {
        fontSize: 20,
        color: '#5A5A5A',
        fontWeight: '600'
    },
});

export default CustomDrawerNavigation;
