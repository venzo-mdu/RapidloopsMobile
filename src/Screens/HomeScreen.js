import { View, Text, Image, ScrollView, StatusBar, Button, TouchableOpacity, StyleSheet, ImageBackground, Dimensions } from 'react-native'
import React, { useState } from 'react'
import styles from '../assets/Styles'
import ImagePicker from 'react-native-image-crop-picker';
import { DrawerActions, useNavigation } from '@react-navigation/native';


const HomeScreen = () => {
    const navigation = useNavigation();

    const openDrawer = () => {
        // navigation.dispatch(DrawerActions.openDrawer());
        navigation.openDrawer()
    };
    const Drawer = () => {

        navigation.openDrawer()
    };
    const [pickedImage, setPickedImage] = useState(null);
    const [profileImage, setProfileImage] = useState(null);

    const pickImage = async () => {
        try {
            const response = await ImagePicker.openPicker({
                width: 150,
                height: 115,
                cropping: true,
            });

            setPickedImage(response.path);
        } catch (error) {
            console.log('Error picking image:', error);
        }
    };

    const chooseProfileImage = async () => {
        try {
            const response = await ImagePicker.openPicker({
                width: 150,
                height: 115,
                cropping: true,
            });

            setProfileImage(response.path);
        } catch (error) {
            console.log('Error picking image:', error);
        }
    };
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;


    return (

        <View style={{ flex: 1, backgroundColor: 'white' }}>

            <View>

                <ImageBackground style={{ width: windowWidth, height: windowWidth * (9 / 18), marginTop: -(windowWidth * (9 / 16) * 0.30), marginBottom: -(windowWidth * (9 / 16) * 0.20) }} source={require('../assets/images/app_bar.png')}>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 12, marginTop: (windowWidth * (9 / 16) * 0.30) }}>

                        <View onTouchEnd={Drawer} style={{ width: 64, height: 64, justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ width: 36, height: 34, }} source={require('../assets/icons/menu.png')} />

                        </View>
                        <View style={{ width: windowWidth - 64 - 64, height: windowWidth * (9 / 16) * 0.4, }}>

                            <Image style={{ width: '100%', height: '90%', resizeMode: 'contain' }} source={require('../assets/images/rapidloop_logo_white.png')} />
                        </View>
                        <View style={{ width: 64, height: 64, justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ width: 24, height: 24, }} source={require('../assets/icons/bell.png')} />

                        </View>

                    </View>
                </ImageBackground>

                <View>
                    <TouchableOpacity style={{ backgroundColor: '#dcdcdc', height: 115, borderRadius: 2, marginVertical: 12 }} onPress={pickImage}>
                        {pickedImage && <Image source={{ uri: pickedImage }} style={{ width: 150, alignSelf: 'center', height: 115 }} />}
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                        style={{
                            backgroundColor: 'white',
                            width: 75,
                            height: 75,
                            // bottom: ,
                            // marginBottom: -(windowWidth * (9 / 1) * 0.20),
                            marginBottom: '19%',
                            borderRadius: 15,
                            borderColor: '#bf841e',
                            borderWidth: 2,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        onPress={chooseProfileImage}>
                        {profileImage && <Image source={{ uri: profileImage }} style={{ width: 71, justifyContent: 'center', alignItems: 'center', height: 44 }} />}
                    </TouchableOpacity>


                </View>










            </View>










        </View>











        // <ScrollView style={styles.container}>
        //     <View style={{ flex: 1 }}>
        //         <StatusBar backgroundColor="#bf841e" barStyle="light-content" />

        //         <Image style={{ width: '100%', height: 130, }} source={require('../assets/images/app_bar.png')} />
        //         <Image style={{ width: '49%', height: '18%', alignSelf: 'center', bottom: '15%' }} source={require('../assets/images/rapidloop_logo_white.png')} />

        //         <View style={{ bottom: '58%', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 25 }}>
        //             <TouchableOpacity onPress={openDrawer} >
        //                 <Image style={{ width: 33, height: 33, }} source={require('../assets/icons/menu.png')} />
        //             </TouchableOpacity>
        //             <Image style={{ width: 23, height: 23 }} source={require('../assets/icons/bell.png')} />

        //         </View>

        //         <View>
        //             <TouchableOpacity style={{ bottom: '177%', backgroundColor: '#dcdcdc', height: 115, borderRadius: 2 }} onPress={pickImage}>
        //                 {pickedImage && <Image source={{ uri: pickedImage }} style={{ width: 150, alignSelf: 'center', height: 115 }} />}
        //             </TouchableOpacity>
        //             {/* <View style={{ backgroundColor: 'darkgrey', width: 50, height: 50, borderRadius: 2,  marginLeft:'auto' }} /> */}
        //         </View>
        //         <View>
        //             <TouchableOpacity
        //                 style={{
        //                     backgroundColor: 'white',
        //                     width: 75,
        //                     height: 75,
        //                     bottom: '370%',
        //                     borderRadius: 15,
        //                     borderColor: '#bf841e',
        //                     borderWidth: 2,
        //                     justifyContent: 'center',
        //                     alignItems: 'center',
        //                 }}
        //                 onPress={chooseProfileImage}>
        //                 {profileImage && <Image source={{ uri: profileImage }} style={{ width: 71, justifyContent: 'center', alignItems: 'center', height: 44 }} />}
        //             </TouchableOpacity>


        //         </View>
        //         <View style={{ backgroundColor: '#717171', width: 66, height: 115, bottom: '41.5%', marginLeft: 'auto', }} >
        //             <View >
        //                 <Text style={styles.GreyAreaText}> 1</Text>
        //                 <Text style={styles.GreyAreaText}> User</Text>
        //                 <Text style={styles.GreyAreaText}> 4</Text>
        //                 <Text style={styles.GreyAreaText}> Trucks</Text>
        //             </View>

        //         </View>

        //         <View style={{ bottom: '40%', marginHorizontal: 15, }}>
        //             <Text style={styles.Username} > Test App Kumar</Text>
        //             <Text style={styles.NameInside}> App Kumar </Text>
        //             <View style={{ flexDirection: 'row' }}>
        //                 <Text style={STYLES.Partnersince}> Partner Since</Text>
        //                 <Text style={{ ...STYLES.NameInside, marginLeft: 5, bottom: 5 }}> 04 Dec 2023</Text>
        //             </View>
        //             <View style={STYLES.horizontalLine} />
        //         </View>

        //         <Text style={STYLES.Trips}>Trips</Text>

        //         <View style={{
        //             height: 100, bottom: '86%', flexDirection: 'row',
        //             justifyContent: 'space-between', width: '90%', alignSelf: 'center'
        //         }}>
        //             <View style={{ ...STYLES.column1 }}>
        //                 <Text style={STYLES.Tripnumber} >7</Text>
        //                 <Text style={STYLES.Triptext}>Total</Text>
        //             </View>
        //             <View style={{ ...STYLES.column1 }}>
        //                 <Text style={STYLES.Tripnumber} >0</Text>
        //                 <Text style={STYLES.Triptext}>Last Year</Text>
        //             </View>
        //             <View style={{ ...STYLES.column1 }}>
        //                 <Text style={STYLES.Tripnumber} >1</Text>
        //                 <Text style={STYLES.Triptext}>This Year</Text>
        //             </View>
        //             <View style={{ ...STYLES.column1 }}>
        //                 <Text style={STYLES.Tripnumber} >2</Text>
        //                 <Text style={STYLES.Triptext}>Last Month</Text>
        //             </View>
        //             <View style={{ ...STYLES.column1 }}>
        //                 <Text style={STYLES.Tripnumber} >7</Text>
        //                 <Text style={STYLES.Triptext}>This Month</Text>
        //             </View>
        //         </View>

        //         <Text style={{ ...STYLES.Trips, marginBottom: 5 }} >Earnings</Text>
        //         <View style={{ bottom: '37%', }}>
        //             <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%' }}>
        //                 <View style={STYLES.card}>
        //                     <Text style={styles.Username}>00.0</Text>
        //                     <Text style={styles.NameInside}>Last Year</Text>
        //                 </View>
        //                 <View style={STYLES.card}>
        //                     <Text style={styles.Username}>1550</Text>
        //                     <Text style={styles.NameInside}>This Year</Text>
        //                 </View>
        //             </View>
        //             <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 5 }}>
        //                 <View style={STYLES.card}>
        //                     <Text style={styles.Username}>00.0</Text>
        //                     <Text style={styles.NameInside}>Last Month</Text>
        //                 </View>
        //                 <View style={STYLES.card}>
        //                     <Text style={styles.Username}>450</Text>
        //                     <Text style={styles.NameInside}>This Month</Text>
        //                 </View>
        //             </View>
        //         </View>

        //         <View style={{ ...STYLES.card, width: '93%', bottom: '36%', alignSelf: 'center' }}>
        //             <Text style={styles.Username}>50</Text>
        //             <Text style={styles.NameInside}>Recievable</Text>
        //         </View>


        //     </View>
        // </ScrollView>
    );
};

export default HomeScreen

const STYLES = StyleSheet.create({


    Partnersince: {
        color: '#717171',
        fontSize: 15,
        fontFamily: 'Montserrat-Medium',
    },
    horizontalLine: {
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        alignSelf: 'center',
        width: '150%'

    },
    Trips: {
        color: 'black',
        fontSize: 25,
        fontFamily: 'Montserrat-Bold',
        marginHorizontal: 10,
        bottom: '39%'
    },
    column1: {
        alignItems: 'center',
        justifyContent: 'center'

    },
    Tripnumber: {
        fontSize: 23,
        color: 'black',
        fontFamily: 'Montserrat-Bold'
    },
    Triptext: {
        fontSize: 11,
        color: '#717171',
        marginTop: 15,
        fontFamily: 'Montserrat-Medium'
    },
    card: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '44%',
        backgroundColor: '#f2f2f2',
        borderColor: '#d9d9d9',
        borderWidth: 1,
        borderRadius: 10,
        paddingVertical: 10,
    },
})