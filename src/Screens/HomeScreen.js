import { View, Text, Image, ScrollView, StatusBar } from 'react-native'
import React from 'react'
import styles from '../assets/Styles'

const HomeScreen = () => {

    return (
        <ScrollView style={styles.container}>

            <View style={{ flex: 1 }}>
                <StatusBar backgroundColor="#bf841e" barStyle="light-content" />

                <Image style={{ width: '100%', height: 130 }} source={require('../assets/images/app_bar.png')} />
                <Image style={{ alignSelf: 'center', width: '50%', }} source={require('../assets/images/rapidloops_logo.png')} />
            </View>
        </ScrollView>
    )
}

export default HomeScreen