import { View, Text, Image, StyleSheet, StatusBar, TouchableOpacity, } from 'react-native'
import React from 'react'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import styles from '../assets/Styles'

const Mobilenum = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>

            <View style={{ flex: 1 }}>
                <StatusBar backgroundColor="black" barStyle="light-content" />

                <View style={styles.cornerimgbox}>
                    <Image style={styles.cornerimg} source={require('../assets/images/left_corner_arc.png')} />
                </View>

                <View>
                    <Image style={styles.logo} source={require('../assets/images/rapidloops_logo.png')} />
                </View>

                <View style={styles.textcontainer}>

                    <Image style={styles.otpglobe} source={require('../assets/images/otp_page_globe.png')} />
                    <Text style={styles.OTPverify}>OTP Verification</Text>

                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <Text style={STYLES.Togetotp}>To get your</Text>
                        <Text style={STYLES.Otptext}>One Time Password</Text>
                    </View>

                    <Text style={STYLES.entermob}>Enter Mobile Number</Text>

                    <TextInput
                        style={STYLES.Mobilenum}
                        placeholderTextColor="black"
                        textAlign="center"
                        selectionColor="#bf841e"
                    />

                    <TouchableOpacity style={styles.OTPButton} onPress={() => navigation.navigate('Otpverify')}>
                        <Text style={styles.ButtonText}>GET OTP</Text>
                    </TouchableOpacity>

                </View>



            </View>
        </ScrollView>
    )
}

export default Mobilenum

const STYLES = StyleSheet.create({

    Mobilenum: {

        width: '79%',
        borderBottomColor: '#D3D3D3',
        borderBottomWidth: 2,
        fontWeight: 'bold',
        fontSize: 22
    },
    Togetotp: { fontFamily: 'Montserrat-Medium', color: '#737170', fontSize: 17 },
    Otptext: { fontFamily: 'Montserrat-SemiBold', marginLeft: 5, color: '#080605', fontSize: 17 },
    entermob: { fontFamily: 'Montserrat-SemiBold', marginTop: 10, color: '#BAB5BA', fontSize: 17 }
})