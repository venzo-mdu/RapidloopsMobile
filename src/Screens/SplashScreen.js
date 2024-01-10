import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'


const Splash = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Mobile');
        }, 1000);
    }, []);

    return (
        <View style={STYLES.Splashcontainer}>

            <Text style={{
                ...STYLES.Splashtext, fontFamily: 'Montserrat-SemiBold',
            }}>RAPID</Text>
            < Text style={{ ...STYLES.Splashtext, color: 'black' }}>TRUCK</Text>

        </View >
    )
}

export default Splash;
const STYLES = StyleSheet.create({
    Splashcontainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        flexDirection: 'row', backgroundColor: 'white'
    },
    Splashtext: {
        color: '#bf841e',
        fontSize: 45,
        fontFamily: 'Montserrat-Medium',
    },
})