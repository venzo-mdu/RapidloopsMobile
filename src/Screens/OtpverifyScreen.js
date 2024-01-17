import { View, Text, Image, StyleSheet, StatusBar, TouchableOpacity, } from 'react-native'
import React from 'react'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import Clipboard from '@react-native-clipboard/clipboard';
import styles from '../assets/Styles'

const OtpverifyScreen = ({ navigation }) => {

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
                    <Text style={styles.OTPverify}>OTP Verfication</Text>

                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <Text style={STYLES.enterotp}>Enter the OTP sent to </Text>
                        <Text style={{ ...STYLES.enterotp, marginLeft: 5 }}>9999999991</Text>
                    </View>
                    <OTPInputView
                        style={STYLES.OTPInputView}
                        pinCount={6}
                        selectionColor="#bf841e"
                        autoFocusOnLoad
                        codeInputFieldStyle={{
                            width: 40,
                            height: 45,
                            borderWidth: 0,
                            borderBottomWidth: 3,
                            color: 'black',
                            marginHorizontal: 3,
                            fontWeight: 'bold',
                            fontSize: 22
                        }}
                        codeInputHighlightStyle={{
                            borderColor: '#D3D3D3'
                        }}
                    // onCodeFilled={(code => {
                    //     console.log(`Code is ${code}, you are good to go!`)
                    // })}
                    />

                    <View style={{ flexDirection: 'row', marginTop: 30 }}>
                        <Text style={STYLES.didntrecieve}>Didn't recieved the OTP? </Text>
                        <Text style={STYLES.resendotp}>RESEND OTP</Text>
                    </View>
                    <TouchableOpacity style={styles.OTPButton} onPress={() => navigation.navigate('MainHome')}>
                        <Text style={styles.ButtonText}>VERIFY & PROCEED</Text>
                    </TouchableOpacity>

                </View>



            </View>
        </ScrollView>
    )
}

export default OtpverifyScreen

const STYLES = StyleSheet.create({

    OTPInputView:
        { width: '78%', height: 20, marginTop: 20, },

    enterotp: {
        fontFamily: 'Montserrat-Medium', color: '#737170', fontSize: 17
    },
    didntrecieve: { fontFamily: 'Montserrat-Bold', color: '#A9A9A9', fontSize: 15 },
    resendotp: { fontFamily: 'Montserrat-Bold', marginLeft: 5, color: '#FD8A73', bottom: 2, fontSize: 18 }
})