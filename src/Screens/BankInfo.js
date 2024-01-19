import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, ImageBackground, Dimensions } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import styles from '../assets/Styles'; 'react'

const BankInfo = () => {
    const navigation = useNavigation();
    const Drawer = () => {

        navigation.openDrawer()
    };

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>

            <View>

                <ImageBackground style={{ width: windowWidth, height: windowWidth * (9 / 16), marginTop: -(windowWidth * (9 / 16) * 0.30), marginBottom: -(windowWidth * (9 / 16) * 0.20) }} source={require('../assets/images/app_bar.png')}>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 12, marginTop: (windowWidth * (9 / 16) * 0.30) }}>

                        <View onTouchEnd={Drawer} style={{ width: 64, height: 64, justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ width: 36, height: 34, }} source={require('../assets/icons/menu.png')} />

                        </View>
                        <View style={{ width: windowWidth - 64 - 64, height: windowWidth * (9 / 16) * 0.4, }}>

                            <Image style={{ width: '100%', height: '90%', resizeMode: 'contain' }} source={require('../assets/images/rapidloop_logo_white.png')} />
                        </View>
                        <View style={{ width: 64, height: 64, justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ width: 24, height: 24, }} source={require('../assets/icons/bell.png')} />

                        </View>

                    </View>
                </ImageBackground>



            </View>
            <View style={{ backgroundColor: '#bf841e', width: '100%', height: windowWidth * (9 / 16) * 0.6, }}>
                <Text style={STYLES.companyinfo}>Bank Info</Text>

            </View>

            <ScrollView style={{ marginTop: -((windowWidth * (9 / 16) * 0.6) - 28 - 16 - 28), }} contentContainerStyle={{ paddingBottom: 32 }}>



                <View style={STYLES.SecondcardContainer}>
                    <View style={{ marginLeft: 20 }}>
                        <Text style={STYLES.companyinfotext}>Registered Business Name </Text>
                        <Text style={STYLES.textinside} >Test Kumar</Text>

                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between', width: '90%',
                        }}>
                            <View style={{ ...STYLES.column1 }}>
                                <Text style={STYLES.textinside} >Company Type</Text>
                                <Text style={STYLES.companyinfotext}>Private LTd</Text>
                            </View>
                            <View style={{ ...STYLES.column1 }}>
                                <Text style={STYLES.textinside}>No Of Truck</Text>
                                <Text style={STYLES.companyinfotext}>0-9</Text>
                            </View>
                            <View style={{ ...STYLES.column1 }}>
                                <Text style={STYLES.textinside} >TDS</Text>
                                <Text style={STYLES.companyinfotext}>0%</Text>
                            </View>

                        </View>


                        <Text style={{ ...styles.NameInside, marginTop: 10 }}>TN-47R674 </Text>
                        <Text style={STYLES.companyinfotext} >Test App Kumar</Text>
                        <Text style={STYLES.textinside}>Address LIne </Text>


                        <Text style={STYLES.textinside}>Registered Business Name </Text>
                        <Text style={STYLES.companyinfotext} > Test Kumar</Text>

                        <Text style={STYLES.textinside}>Source of Supply</Text>
                        <Text style={STYLES.companyinfotext} > Tamil Nadu</Text>
                    </View>
                </View>

            </ScrollView>
        </View>

    )
}

export default BankInfo
const STYLES = StyleSheet.create({
    companyinfotext: {
        color: 'black',
        fontSize: 17,
        fontFamily: 'Montserrat-SemiBold',
        marginTop: 5
    },
    textinside: {
        color: '#717171',
        fontSize: 14,
        fontFamily: 'Montserrat-Medium',
        marginBottom: 5,
        marginTop: 15
    },
    companyinfo: {
        fontSize: 28,
        fontFamily: 'Montserrat-Regular',
        color: 'white',
        marginHorizontal: 15,
        marginVertical: 10
    },

    SecondcardContainer: {
        marginTop: 10,
        backgroundColor: 'white',
        borderRadius: 8,
        width: '90%',
        height: 430,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        alignSelf: 'center'
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    settingsItem: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 12,
        width: 95,
        height: 40,
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,

    },
    column1: {
        alignItems: 'center',
        justifyContent: 'center'

    },
})