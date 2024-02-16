import { Dimensions, Platform, StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../helpers/custom";

const WD = Dimensions.get('window').width;
const HT = Dimensions.get('window').height;

export const LaunchStyles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.WHITE,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    textPart1: {
        fontSize: 32,
        color: COLORS.PRIMARY,
        fontFamily: FONTS.MontserratSemiBold,
    },
    textPart2: {
        fontSize: 32,
        color: COLORS.BLACK,
        fontFamily: FONTS.MontserratMedium,
    }
});

export const PhoneNumberLoginStyles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.WHITE,
        flex: 1,
    },
    topRow: {
        flexDirection: "row", 
        justifyContent: "space-between",
    },
    topLeftImgBox: {
        width: (WD * 0.33),
        height: (WD * 0.3) * 1.7,
    },
    topLeftImg: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    },
    centerLogoImgBox: {
        width: (WD * 0.3),
        height: (WD * 0.3),
        alignItems: "center",
        justifyContent: "center",
        marginTop: Platform.OS == "ios" ? (WD * 0.075) : null,
    },
    centerLogoImg: {
        width: "90%",
        height: "90%",
        resizeMode: "contain",
    },
    otpGlobeLogoImgBox: {
        width: (WD * 0.35),
        height: (WD * 0.35),
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        marginTop: -((WD * 0.3) * 0.1),
    },
    otpGlobeLogoImg: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
    },
    headingTxt: {
        fontSize: 24,
        color: COLORS.BLACK,
        fontFamily: FONTS.MontserratBold,
        marginTop: 6,
    },
    subHeadingTxt1: {
        fontSize: 16,
        color: COLORS.GREY,
        fontFamily: FONTS.MontserratLight,
        marginTop: 12,
    },
    subHeadingTxt2: {
        color: COLORS.BLACK,
        fontFamily: FONTS.MontserratSemiBold,
    },
    placeHolderTxt: {
        fontSize: 16,
        color: 'rgba(116,124,124,0.8)',
        fontFamily: FONTS.MontserratSemiBold,
        marginTop: 12,
    },
    phoneNumberBox: {
        width: WD - (32 * 2),
        height: 50, 
        alignSelf: "center",
        marginTop: 10,
        borderBottomWidth: 2,
        borderBottomColor: 'rgba(116,124,124,0.2)',
    },
    phoneNumberBoxIP: {
        width: "100%",
        height: 50,
        fontSize: 22,
        color: COLORS.BLACK,
        fontFamily: FONTS.MontserratSemiBold,
        textAlign: "center",
    },
    submitBtn: {
        backgroundColor: COLORS.PRIMARY,
        width: WD - (38 * 2),
        height: 60, 
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 15,
        marginBottom: 45,
        borderRadius: 10,
    },
    submitTxt: {
        fontSize: 16,
        color: COLORS.WHITE,
        fontFamily: FONTS.MontserratBold,
        textTransform: "uppercase",
    }
})

export const PhoneNumberOTPStyles = StyleSheet.create({
    otpContainer : {
        width: (WD - (32 * 2)),
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 32,
        marginTop: 10,
    },
    inputOTP: {
        width: WD/8,
        height: WD/8,
        fontSize: 22,
        color: COLORS.BLACK,
        fontFamily: FONTS.MontserratSemiBold,
        textAlign: "center",
        borderBottomWidth: 2,
        borderBottomColor: 'rgba(116,124,124,0.2)',
    },
    resendOTPTxt1: {
        fontSize: 16,
        color:'rgba(116,124,124,0.8)',
        fontFamily: FONTS.MontserratMedium,
        marginTop: 18,
    },
    resendOTPTxt2: {
        color: '#FD8A73',
        fontFamily: FONTS.MontserratSemiBold,
    },
    
})