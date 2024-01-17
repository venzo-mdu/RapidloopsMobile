//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Load = () => {
    return (
        <View style={styles.container}>
            <Text style={{alignSelf:'center', color:'black',fontSize:29, fontFamily:'Montserrat-Bold',}}>Load</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        fontFamily:'Montserrat-Bold',

        alignItems: 'center',
        backgroundColor: 'white',
    },
});

export default Load;
