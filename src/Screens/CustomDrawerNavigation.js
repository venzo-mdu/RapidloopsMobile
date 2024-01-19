import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Settings } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const CustomDrawerNavigation = (props) => {
    const closeDrawer = () => {
        props.navigation.closeDrawer();
    };
    return (
        <DrawerContentScrollView {...props}>
            <View style={styles.headerContainer}>



                <TouchableOpacity
                    onPress={closeDrawer}>
                    <Image
                        style={{ width: 20, height: 25, marginLeft: 'auto', marginRight: 20, marginVertical: 20 }}
                        source={require('../assets/icons/close.png')}
                    />
                </TouchableOpacity>
                {/* <View style={{ flex: 1, backgroundColor: '#bf841e' }}> */}
                <View style={styles.drawerscreens}>
                    <TouchableOpacity
                        style={styles.drawerItem}
                        onPress={() => {
                            props.navigation.navigate('Company');
                        }}
                    >

                        <Text style={styles.drawerItemText}>Company Info</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.drawerItem}
                        onPress={() => {
                            props.navigation.navigate('Bank');
                        }}
                    >

                        <Text style={styles.drawerItemText}>Bank Info</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.drawerItem}
                        onPress={() => {
                            props.navigation.navigate('Bank');
                        }}
                    >

                        <Text style={styles.drawerItemText}>Users</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.settingsContainer}>
                    <View>
                        <TouchableOpacity style={styles.settingsItem}>
                            <Image
                                style={{ width: 20, height: 20, marginVertical: 20 }}
                                source={require('../assets/icons/settings.png')}
                            />
                            <Text style={styles.settingstext}>Settings</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginLeft: 44 }}>
                        <TouchableOpacity style={styles.settingsItem}>
                            <Image
                                style={{ width: 20, height: 20 }}
                                source={require('../assets/icons/logout.png')}
                            />
                            <Text style={styles.settingstext}>Logout</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {/* </View> */}

        </DrawerContentScrollView>

    );
};

const styles = StyleSheet.create({
    drawerscreens: {
        marginVertical: 20
    },
    headerContainer: {
        // backgroundColor: '#bf841e',

    },

    drawerItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 20,
    },
    drawerItemImage: {
        width: 25,
        height: 25,
        marginRight: 50,
    },
    drawerItemText: {
        fontSize: 16,
        fontFamily: 'Montserrat-Bold',
        color: '#202020',
        fontWeight: '600'
    },
    settingstext: {
        fontSize: 18,
        fontFamily: 'Montserrat-Regular',
        color: 'black',
        alignSelf: 'center',
        marginLeft: 10
    },
    settingsContainer: {
        flexDirection: 'row',
        marginVertical: 5,
        // padding: 10,
        // alignSelf: 'center',

    },
    settingsItem: {
        borderColor: 'black',
        borderWidth: 1,
        width: '135%',
        height: '40%',
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,

    },
});

export default CustomDrawerNavigation;
