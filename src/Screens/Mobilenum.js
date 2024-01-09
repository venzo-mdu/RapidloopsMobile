import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const Mobilenum = () => {
    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={STYLES.container}>

                <Image style={STYLES.cornerimg} source={require('../assets/images/left_corner_arc.png')} />
                <Image style={STYLES.logo} source={require('../assets/images/rapidloops_logo.png')} />
                <Text>Mobilenum</Text>

            </ScrollView>
        </View>
    )
}

export default Mobilenum

const STYLES = StyleSheet.create({
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginVertical: 14
        // , backgroundColor: 'pink'
    },
    container: {
        backgroundColor: 'white', height: '100%', width: '100%'
    },
    cornerimg: {
        // backgroundColor: 'pink',
        left: 0, top: 0,
        width: 200,
        height: 200,
        marginLeft: -40,

    }

})