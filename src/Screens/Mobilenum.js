import { View, Text, Image, StyleSheet, StatusBar, TouchableOpacity, } from 'react-native'
import React from 'react'
import { ScrollView, TextInput} from 'react-native-gesture-handler'

const Mobilenum = () => {
    return (
        <ScrollView style={STYLES.container}>
        <View style={{flex:1}}>
            <StatusBar backgroundColor="black" barStyle="light-content" />
           
              <View>
                <Image style={STYLES.cornerimg} source={require('../assets/images/left_corner_arc.png')} />
              </View>

            <View>               
                <Image style={STYLES.logo} source={require('../assets/images/rapidloops_logo.png')} />
           </View>  


         <View style={{alignItems:'center',bottom:'75%',marginTop:'40%',height:'100%'}}>  
                 <Image style={STYLES.otpglobe} source={require('../assets/images/otp_page_globe.png')} />
                 <Text style={{fontFamily:'Montserrat-Bold',color:'black',fontSize:30}}>OTP Verfication</Text>
                <View style={{flexDirection:'row',marginTop:10}}>
                 <Text style={{fontFamily:'Montserrat-Medium',color:'grey',fontSize:22}}>To get your</Text>
                 <Text style={{fontFamily:'Montserrat-Medium',marginLeft:5,color:'black',fontSize:22}}>One Time Password</Text>
                </View>
                <Text style={{fontFamily:'Montserrat-Medium',marginTop:10,color:'grey',fontSize:23}}>Enter Mobile Number</Text>
                <TextInput
                    style={STYLES.Mobilenum} 
                    placeholderTextColor="grey"
                    textAlign="center"
                    selectionColor="#bf841e"
                />
                 <TouchableOpacity style={STYLES.cloudButton} >
                <Text style={STYLES.buttonText}>GET OTP</Text>
            </TouchableOpacity>

         </View>
           

         
     </View>
      </ScrollView>  
    )
}

export default Mobilenum

const STYLES = StyleSheet.create({
    cornerimg: {
        // backgroundColor:'pink',
        left: 0, top: 0,
        width: 200,
        height: 200,
        marginLeft: -40,
        

    },
    logo: {
        bottom:180,        
        width:'30%',
        height: '36%',
        alignItems:'center',
        alignSelf: 'center',       
        
    },

    otpglobe:{
     
        width:'44%',
        height: '30%',
      },

    Mobilenum:{
       
        width: '80%',
        borderBottomColor: 'grey',
        borderBottomWidth: 3,
    },
   

    container: {
        backgroundColor: 'white', flex: 1
    },
   
    cloudButton: {
        backgroundColor: '#bf841e',
        borderRadius: 9,
        // paddingHorizontal: 32,
        paddingVertical: 16,
        width:'75%',
        height:'10%',
        marginTop: 25,
        alignSelf: 'center'
    },
 buttonText: {
        color: 'white',
        fontSize: 17,       
        alignSelf: 'center',
        fontFamily:'Montserrat-Bold'
       


    },
})