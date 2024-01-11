import { View, Text, Image, ScrollView, StatusBar } from 'react-native'
import React from 'react'
import styles from '../assets/Styles'

const HomeScreen = () => {

    return (
        <ScrollView style={styles.container}>

            <View style={{ flex: 1 }}>
                <StatusBar backgroundColor="#bf841e" barStyle="light-content" />

                <View style={{ backgroundColor: 'red', flex: 1 }}>
                    <Image style={{ width: '100%', height: 130 }} source={require('../assets/images/app_bar.png')} />
                    <Image style={{ width: '43%', height: '78%', alignSelf: 'center', bottom: '86%' }} source={require('../assets/images/rapidloop_logo_white.png')} />
                </View>


                <View style={{ flexDirection: 'row', bottom: '20%', justifyContent: 'space-between', marginHorizontal: 25 }}>
                    <Image style={{ width: 33, height: 33, }} source={require('../assets/icons/menu.png')} />
                    <Image style={{ width: 23, height: 23 }} source={require('../assets/icons/bell.png')} />

                </View>
                <View style={{}}>

                </View>






            </View>
        </ScrollView>
    )
}

export default HomeScreen