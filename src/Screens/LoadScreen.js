import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';



const Load = () => {
    return (
        <View style={styles.container}>
            <Text>hiiiiiiii</Text>
            <View>
                <Image style={{ width: '100%', height: 130, }} source={require('../assets/images/app_bar.png')} />
                <Image style={{ width: '40%', height: '18%', alignSelf: 'center', }} source={require('../assets/images/rapidloop_logo_white.png')} />

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 25 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('MaHome')} >
                        <Image style={{ width: 33, height: 33, }} source={require('../assets/icons/menu.png')} />
                    </TouchableOpacity>
                    <Image style={{ width: 23, height: 23 }} source={require('../assets/icons/bell.png')} />

                </View>
            </View>




        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        fontFamily: 'Montserrat-Bold',

        alignItems: 'center',
        backgroundColor: 'white',
    },
});

export default Load;
