import {Dimensions, Platform, StyleSheet} from 'react-native';
import { COLORS, FONTS } from '../../helpers/custom';
import { helpersCSS } from '../../helpers/custom';

const WD = Dimensions.get('window').width;
const HT = Dimensions.get('window').height;

const bgHeight = (WD * 0.28);

export const HomeScreenStyles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  appBarBGIMGBox: {
    backgroundColor: COLORS.PRIMARY,
    width: WD,
    paddingTop: Platform.OS == "ios" ? 64 : 0,
  },
  appBarBGIMG: {
    width: WD,
    height: WD * 0.28,
    resizeMode: "cover",
  },
  appBarRowBox: {
    width: WD,
    flexDirection: "row",
    // justifyContent: "space-between",
    marginTop: bgHeight/8,
  },
  menuBox: {
    width: bgHeight/1.75,
    height: bgHeight/1.75,
    alignItems: "center",
    justifyContent: "center",
  },
  searchBox: {
    width: bgHeight/2.25,
    height: bgHeight/1.75,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: bgHeight/10,
  },
  bellBox: {
    width: bgHeight/2.25,
    height: bgHeight/1.75,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: bgHeight/7,
  },
  scrollContainer: {
    backgroundColor: "#faf9f7",
    paddingBottom: 16,
  },
  userBGImgBox: {
    backgroundColor: "#e2e2e2",
    width: WD,
    height: WD * 0.28,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  userProfileImgBox: {
    backgroundColor: COLORS.WHITE,
    width: bgHeight/1.5,
    height: bgHeight/1.5,
    marginTop: "auto",
    borderWidth: 2,
    borderColor: COLORS.PRIMARY,
    borderRadius: 8,
  },
  userProfileImg: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    borderRadius: 8,
  },
  userProfileCoverImgBox: {
    flex:1,
  },
  userProfileCoverImg: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  countBox: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: bgHeight/1.75,
    marginLeft: (bgHeight/1.55) - (bgHeight/1.75),
    height: "100%",
  },
  countIndivBox: {
    flex:1, 
    justifyContent: "flex-end",
  },
  countKeyTxt: {
    fontSize: 14,
    color: COLORS.WHITE,
    fontFamily: FONTS.MontserratMedium,
    textAlign: "center",
    marginTop: 4,
    marginBottom: 2,
  },
  countValueTxt: {
    fontSize: 18,
    color: COLORS.WHITE,
    fontFamily: FONTS.MontserratSemiBold,
    textAlign: "center",
  },
  userDetailsBox: {
    paddingHorizontal: 16,
    paddingTop: 18,
    paddingBottom: 8,
    borderBottomWidth: 2,
    borderBottomColor: "#cbcac8"
  },
  userNameTxt: {
    fontSize: 18,
    color: COLORS.BLACK,
    fontFamily: FONTS.MontserratSemiBold,
  },
  userCompanyTxt: {
    fontSize: 14,
    color: "#747371",
    fontFamily: FONTS.MontserratSemiBold,
    marginTop: 4,
  },
  userPartnerKeyTxt: {
    fontSize: 12,
    color: "#969593",
    fontFamily: FONTS.MontserratMedium,
    marginTop: 4,
  },
  userPartnerValueTxt: {
    fontSize: 14,
    color: "#747371",
    fontFamily: FONTS.MontserratSemiBold,
    marginTop: 4,
  },
  homeSubHeadingTxt: {
    fontSize: 20,
    color: COLORS.BLACK,
    fontFamily: FONTS.MontserratSemiBold,
    marginHorizontal: 16,
    marginTop: 16,
  },
  tripsRowBox: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 16,
    marginTop: 32,
  },
  tripsIndivBox: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tripsIndivValueTxt: {
    fontSize: 18,
    color: COLORS.BLACK,
    fontFamily: FONTS.MontserratSemiBold,
  },
  tripsIndivKeyTxt: {
    fontSize: 10,
    color: "#737270",
    fontFamily: FONTS.MontserratMedium,
    marginTop: 16,
    marginBottom: 4,
  },
  earningsRowBox: {
    flexDirection: "row",
    marginHorizontal: 7,
  },
  earningIndivBox: {
    backgroundColor: "#f5f5f5",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    marginHorizontal: 9,
    marginTop: 12,
    borderWidth: 1,
    borderColor: "#dadada",
    borderRadius: 12,
  },
  earningsRowBottomBox: {
    backgroundColor: "#f5f5f5",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    marginHorizontal: 16,
    marginTop: 12,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: "#dadada",
    borderBottomColor: "#dadada",
  },
  earningIndivValueTxt: {
    fontSize: 20,
    color: COLORS.BLACK,
    fontFamily: FONTS.MontserratSemiBold,
    textAlign: "auto",
  },
  earningIndivKeyTxt: {
    fontSize: 10,
    color: "#737270",
    fontFamily: FONTS.MontserratMedium,
    marginTop: 10,
  },

});

export const CompanyInfoScreenStyles = StyleSheet.create({
  bannerBG: {
    backgroundColor: COLORS.PRIMARY,
    width: WD,
    height: WD * 0.35,
  },
  headerBox: {
    height: 50,
    marginHorizontal: 32,
    marginBottom: 8,
  },
  headingTxt: {
    fontSize: 30,
    color: COLORS.WHITE,
    fontFamily: FONTS.Serif72BetaRegular,
    marginTop:"auto",
  },
  scrollBox: {
    marginTop: -(WD * 0.35 - 50 - 8),
  },
  firstBox: {
    backgroundColor: COLORS.WHITE,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 25,
    paddingBottom: 25,
    marginHorizontal: 16,
    marginBottom: 24,
    borderRadius: 15,

    ...helpersCSS.shadow5,
  },
  userProfileCoverImg: {
    width: "100%",
    height: 100,
    resizeMode: "contain",
  },
  userNameTxt: {
    fontSize: 22,
    color: COLORS.BLACK,
    fontFamily: FONTS.MontserratSemiBold,
    marginTop: 20,
  },
  userIDTxt: {
    fontSize: 16,
    color: COLORS.BLACK,
    fontFamily: FONTS.MontserratLight,
    textTransform: "uppercase",
    marginTop: 10,
  },
  secondBox: {
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: 24,
    paddingVertical: 30,
    marginHorizontal: 16,
    marginBottom: 24,
    borderRadius: 15,

    ...helpersCSS.shadow5,
  },
  secondBoxKeyTxt: {
    fontSize: 12,
    color: "#737270",
    fontFamily: FONTS.MontserratMedium,
  },
  secondBoxValueTxt: {
    fontSize: 18,
    color: COLORS.BLACK,
    fontFamily: FONTS.MontserratMedium,
    marginTop: 2,
  },
  secondBoxIndiv1: {
    marginBottom: 28,
  },
  secondBoxIndiv2: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 28,
  },
  secondBoxIndiv3: {
    marginBottom: 20,
  },
  secondBoxIndiv4: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  secondBoxIndiv4a: {
    marginBottom: 20,
  },
  secondBoxIndiv4b: {
    marginBottom: 20,
  },
  secondBoxDocumentBox: {
    width: 120,
    height: 52,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 6,
    marginTop: 4,
    borderWidth: 1,
    borderRadius: 12,
  },
  secondBoxDocumentImgBox: {
    flex:1,
    marginRight:6,
    marginVertical: 6,
  },
  secondBoxDocumentImg: {
    width: "100%",
    height: "100%",
    borderRadius: 6,
  },
  secondBoxDocumentBoxTxt: {
    fontSize: 18,
    color: COLORS.BLACK,
    fontFamily: FONTS.MontserratMedium,
  },
  secondBoxIndiv5: {
    marginBottom: 20,
  },
  secondBoxIndiv6: {

  },
});

export const BankInfoScreenStyles = StyleSheet.create({
  firstBox: {
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: 24,
    paddingVertical: 30,
    marginHorizontal: 16,
    marginBottom: 24,
    borderRadius: 15,

    ...helpersCSS.shadow5,
  },
  firstBoxKeyTxt: {
    fontSize: 12,
    color: "#737270",
    fontFamily: FONTS.MontserratMedium,
  },
  firstBoxValueTxt: {
    fontSize: 18,
    color: COLORS.BLACK,
    fontFamily: FONTS.MontserratMedium,
    marginTop: 2,
  },
  firstBoxIndiv1: {
    marginBottom: 20,
  },
});

export const UserScreenStyles = StyleSheet.create({
  noDataBox: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  noDataBoxTxt: {
    fontSize: 18,
    color: "#737270",
    fontFamily: FONTS.MontserratSemiBold,
  },
});

export const TruckScreenStyles = StyleSheet.create({
  scrollBox: {
    marginTop: -(WD * 0.35 - 50 - 8),
    // backgroundColor:"pink"
  },
  cardRowBox: {
    backgroundColor: COLORS.WHITE,
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 15,

    ...helpersCSS.shadow5,
  },
  vehicleBox: {
    flex: 2,
  },
  vehicleBoxNoTxt: {
    fontSize: 18,
    color: COLORS.BLACK,
    fontFamily: FONTS.MontserratSemiBold,
  },
  vehicleBoxCapTxt: {
    fontSize: 12,
    color: "#737270",
    fontFamily: FONTS.MontserratMedium,
    marginTop: 2,
  },
  statusBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginRight: 12,
  },
  statusCircle: {
    width: 10,
    height: 10,
    borderRadius: 12,
    marginRight: 6,
  },
  statusTxt: {
    fontSize: 14,
    fontFamily: FONTS.MontserratMedium,
  },
  locationCircleBox: {
    backgroundColor: "#d3d3d3",
    width: 38,
    height: 38,
    borderRadius: 40,
    ...helpersCSS.Mid,
    marginLeft: "auto",
    marginRight: 12,
  }
});

export const LoadListScreenStyles = StyleSheet.create({
  scrollBox: {
    marginTop: -(WD * 0.35 - 50 - 8),
  },
  cardRowBox: {
    backgroundColor: COLORS.WHITE,
    // height: 80,
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 16,
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 15,

    ...helpersCSS.shadow5,
  },
  loadIDTxt: {
    fontSize: 10,
    color: COLORS.BLACK,
    fontFamily: FONTS.MontserratMedium,
  },
  loadLocationRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  loadLocationTxt: {
    fontSize: 16,
    color: "#534e45",
    fontFamily: FONTS.MontserratBold,
  },
  contentRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
  },
  contentRow1: {
    flex: 5,
  },
  contentRow2: {
    flex: 6
  },
  contentRow3: {
    flex: 4
  },
  contentRow11: {
    flexDirection: "row",
  },
  materialTypeBox: {
    backgroundColor: "#f3f3f3",
    maxWidth: WD * 0.13,
    height: 15,
    justifyContent: "center",
    paddingHorizontal: 4,
    marginLeft: 6,
    borderWidth:1,
    borderColor: "#c4c3c2",
    borderRadius: 3,
  },
  materialTypeTxt: {
    fontSize: 8,
    color: "#737270",
    fontFamily: FONTS.MontserratMedium,
  },
  contentRowKeyTxt: {
    fontSize: 10,
    color: "#737270",
    fontFamily: FONTS.MontserratMedium,
  },
  contentRowValue1Txt: {
    fontSize: 14,
    color: COLORS.BLACK,
    fontFamily: FONTS.MontserratMedium,
  },
  contentRowValue2Txt: {
    fontSize: 10,
    color: "#534e45",
    fontFamily: FONTS.MontserratMedium,
  },
  dropdown1: {
    backgroundColor: "#e3c484",
    width: (WD - 16 - 8) * 0.6,
    height: 40,
    paddingLeft: 4,
    paddingRight: 4,
    borderWidth: 2,
    borderColor: COLORS.WHITE,
  },
  dropdown2: {
    backgroundColor: "#e3c484",
    width: (WD - 16 - 8) * 0.4,
    height: 40,
    paddingLeft: 4,
    paddingRight: 4,
    borderWidth: 2,
    borderColor: COLORS.WHITE,
  },
  dropdownPlaceholderStyle: {
    fontSize: 12,
    color: "#534e45",
  },
  dropdownSelectedTextStyle: {
    fontSize: 12,
    color: COLORS.GREY,
    fontFamily: FONTS.MontserratMedium
  },
  dropdownIconStyle: {
    width: 20,
    height: 20,
  },
  dropdownInputSearchStyle: {
    height: 40,
    fontSize: 16,
    backgroundColor:"teal"
  },
});

export const TripsScreenStyles = StyleSheet.create({
  scrollBox: {
    marginTop: -(WD * 0.5 - 50 - 8),
  },
  cardRowBox: {
    backgroundColor: COLORS.WHITE,
    height: 268,
    paddingLeft: 16,
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 15,

    ...helpersCSS.shadow5,
  },
  cardRowBoxTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  vehicleIDRow1: {
    marginTop: 12,
  },
  vehicleIDRow2: {
    flexDirection: "row",
  },
  vehicleIDTxt: {
    fontSize: 16,
    color: "#534e45",
    fontFamily: FONTS.MontserratBold,
  },
  vehicleTypeTxt: {
    fontSize: 12,
    color: COLORS.GREY,
    fontFamily: FONTS.MontserratMedium,
  },
  statusRow: {
    flexDirection: "row",
    marginTop: 8,
  },
  statusIndivBox: {
    alignItems: "center",
    marginHorizontal:4,
  },
  statusIndivBoxKeyTxt: {
    fontSize: 10,
    color: COLORS.GREY,
    fontFamily: FONTS.MontserratMedium,
  },
  statusMoneyCircleBox: {
    width: 12,
    height: 12,
    borderRadius: 12,
    ...helpersCSS.Mid,

    marginTop: 3,
    borderWidth: 0.75,
    borderColor: "#737270",
  },
  statusMoneyCircleBoxTxt: {
    fontSize: 8,
    color: COLORS.GREY,
    fontFamily: FONTS.MontserratMedium,
    marginTop: -0.5,
  },
  cardRowBoxDownloadBox: {
    backgroundColor: COLORS.PRIMARY,
    width: 36,
    height: 36,
    ...helpersCSS.Mid,

    marginLeft: 6,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 3,
    ...helpersCSS.shadow3,
  },
  dateTripQtyRow: {
    flexDirection: "row",
    paddingRight: 16,
    marginTop: 16,
  },
  dateTripQtyRow1: {
    flex: 4,
  },
  dateTripQtyRow2: {
    flex: 5,
  },
  dateTripQtyRow3: {
    flex: 5,
  },
  dateTripQtyRowValueTxt: {
    fontSize: 12,
    color: "#737270",
    fontFamily: FONTS.MontserratMedium,
  },
  contentTxt: {
    fontSize: 12,
    color: "#737270",
    fontFamily: FONTS.MontserratMedium,
    marginTop: 12,
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 16,
    marginTop: 12,
  },
  locationImgRowMajor: {
    marginRight: 8,
  },
  locationImgRowMinor: {
    flexDirection: "row",
    marginTop: 4,
  },
  locationP2PTxt: {
    fontSize: 16,
    color: "#534e45",
    fontFamily: FONTS.MontserratMedium,
  },
  bottomRow1: {
    flexDirection: "row",
    paddingRight: 16,
    marginTop: 16,
  },
  bottomRow11: {
    flex: 1,
  },
  bottomRow111: {
    flexDirection: "row",
    alignItems: "center",
  },
  bottomRow12: {
    flex: 1,
  },
  bottomRow13: {
    flex: 1,
  },
  bottomRow1KeyTxt: {
    fontSize: 12,
    color: "#737270",
    fontFamily: FONTS.MontserratMedium,
  },
  bottomRow1Value1Txt: {
    fontSize: 14,
    color: COLORS.BLACK,
    fontFamily: FONTS.MontserratMedium,
    marginTop: 4,
  },
  bottomRow2: {
    flexDirection: "row",
    paddingRight: 16,
    marginTop: 20,
  },
  bottomRow21: {
    flex: 2,
  },
  bottomRow22: {
    flex: 1,
  },

  calendarBox: {
    backgroundColor: "#e3c484",
    width: (WD - 16 - 8) * 0.6,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 4,
    paddingRight: 4,
    borderWidth: 2,
    borderColor: COLORS.WHITE,
  },
  calendarBoxValueTxt: {
    fontSize: 12,
    color: COLORS.GREY,
    fontFamily: FONTS.MontserratMedium,
    marginRight: 4,
  },
  calendarBoxDashTxt: {
    fontSize: 16,
    color: COLORS.GREY,
    fontFamily: FONTS.MontserratBold,
    marginHorizontal: 4,
  },
});

export const LoadDetailsScreenStyles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  appBarBGIMGBox: {
    backgroundColor: COLORS.PRIMARY,
    width: WD,
    paddingTop: Platform.OS == "ios" ? 64 : 0,
  },
  appBarBGIMG: {
    width: WD,
    height: WD * 0.8,
    resizeMode: "cover",
  },
  appHeadingBox: {
    flexDirection: "row",
    marginHorizontal: 8,
    marginTop: -(WD * 0.8 * 0.65),
    backgroundColor:"cyan"
  },
  backBtnBox: {
    width: 40,
    height: 40,
    ...helpersCSS.Mid, 
    marginHorizontal: 8,
    marginTop:"auto",
    borderWidth: 1,
  },
  headerBox: {
    height: 50,
    // marginHorizontal: 32,
    backgroundColor:"pink"
  },
  headingTxt: {
    fontSize: 30,
    color: COLORS.WHITE,
    fontFamily: FONTS.Serif72BetaRegular,
    marginTop:"auto",
  },
})
