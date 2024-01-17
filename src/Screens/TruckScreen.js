
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Truck = () => {
    return (
        <View style={styles.container}>
            <Text style={{fontSize:29, fontFamily:'Montserrat-Bold',color:'black',}}>Truck</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#2c3e50',
    },
});


export default Truck;
