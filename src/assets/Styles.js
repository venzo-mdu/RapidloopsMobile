import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        backgroundColor: 'white', flex: 1
    },
    cornerimgbox: {
        width: 150,
        height: 200,

    },
    cornerimg: {

        width: 125,
        height: 200,

    },
    logo: {
        bottom: '77%',
        width: '28%',
        height: '40%',
        alignItems: 'center',
        alignSelf: 'center',

    },
    otpglobe: {

        width: '40%',
        height: '27%',
    },
    textcontainer: {
        alignItems: 'center',
        bottom: '82%',
        marginTop: '40%',
        height: '100%'
    },
    OTPverify: {
        fontFamily: 'Montserrat-ExtraBold',
        color: 'black',
        fontSize: 25,
        marginTop: 10,

    },
    OTPButton: {
        backgroundColor: '#bf841e',
        borderRadius: 9,
        paddingVertical: 16,
        width: '80%',
        height: '9%',
        marginTop: 10,
        alignSelf: 'center'
    },

    ButtonText: {
        color: 'white',
        fontSize: 17,
        alignSelf: 'center',
        fontFamily: 'Montserrat-Bold'

    },
    GreyAreaText: {
        top:5,
        marginTop:5,
        color: 'white',
        fontSize: 15,
        alignSelf: 'center',
        fontFamily: 'Montserrat-Medium'

    },


});

export default styles;
