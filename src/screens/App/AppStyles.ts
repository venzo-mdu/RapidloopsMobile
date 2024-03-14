import {Dimensions, Platform, StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../helpers/custom';
import {helpersCSS} from '../../helpers/custom';

const WD = Dimensions.get('window').width;
const HT = Dimensions.get('window').height;

const bgHeight = WD * 0.28;

export const HomeScreenStyles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  appBarBGIMGBox: {
    backgroundColor: COLORS.PRIMARY,
    width: WD,
    paddingTop: Platform.OS == 'ios' ? 64 : 0,
  },
  appBarBGIMG: {
    width: WD,
    height: WD * 0.28,
    resizeMode: 'cover',
  },
  appBarRowBox: {
    width: WD,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: "space-between",
    marginTop: bgHeight / 8,
  },
  menuBox: {
    width: bgHeight / 1.75,
    height: bgHeight / 1.75,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBox: {
    width: bgHeight / 2.25,
    height: bgHeight / 1.75,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: bgHeight / 10,
  },
  searchIPBox: {
    flex: 1,
    height: 40,
    flexDirection: 'row',
    marginHorizontal: 5,
    marginTop: 5,
    borderRadius: 9,
    backgroundColor: COLORS.WHITE,
  },
  searchIPBackBox: {
    width: 40,
    height: 40,
    ...helpersCSS.Mid,
  },
  searchIPTxtBox: {
    fontSize: 14,
    color: COLORS.BLACK,
    fontFamily: FONTS.MontserratSemiBold,
  },
  bellBox: {
    width: bgHeight / 2.25,
    height: bgHeight / 1.75,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: bgHeight / 7,
  },
  scrollContainer: {
    backgroundColor: '#faf9f7',
    paddingBottom: 16,
  },
  userBGImgBox: {
    backgroundColor: '#e2e2e2',
    width: WD,
    height: WD * 0.28,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userProfileImgBox: {
    backgroundColor: COLORS.WHITE,
    width: bgHeight / 1.5,
    height: bgHeight / 1.5,
    marginTop: 'auto',
    borderWidth: 2,
    borderColor: COLORS.PRIMARY,
    borderRadius: 8,
  },
  userProfileImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    borderRadius: 8,
  },
  userProfileCoverImgBox: {
    flex: 1,
  },
  userProfileCoverImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  countBox: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: bgHeight / 1.75,
    marginLeft: bgHeight / 1.55 - bgHeight / 1.75,
    height: '100%',
  },
  countIndivBox: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  countKeyTxt: {
    fontSize: 14,
    color: COLORS.WHITE,
    fontFamily: FONTS.MontserratMedium,
    textAlign: 'center',
    marginTop: 4,
    marginBottom: 2,
  },
  countValueTxt: {
    fontSize: 18,
    color: COLORS.WHITE,
    fontFamily: FONTS.MontserratSemiBold,
    textAlign: 'center',
  },
  userDetailsBox: {
    paddingHorizontal: 16,
    paddingTop: 18,
    paddingBottom: 8,
    borderBottomWidth: 2,
    borderBottomColor: '#cbcac8',
  },
  userNameTxt: {
    fontSize: 18,
    color: COLORS.BLACK,
    fontFamily: FONTS.MontserratSemiBold,
  },
  userCompanyTxt: {
    fontSize: 14,
    color: '#747371',
    fontFamily: FONTS.MontserratSemiBold,
    marginTop: 4,
  },
  userPartnerKeyTxt: {
    fontSize: 12,
    color: '#969593',
    fontFamily: FONTS.MontserratMedium,
    marginTop: 4,
  },
  userPartnerValueTxt: {
    fontSize: 14,
    color: '#747371',
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
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 16,
    marginTop: 32,
  },
  tripsIndivBox: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tripsIndivValueTxt: {
    fontSize: 18,
    color: COLORS.BLACK,
    fontFamily: FONTS.MontserratSemiBold,
  },
  tripsIndivKeyTxt: {
    fontSize: 10,
    color: '#737270',
    fontFamily: FONTS.MontserratMedium,
    marginTop: 16,
    marginBottom: 4,
  },
  earningsRowBox: {
    flexDirection: 'row',
    marginHorizontal: 7,
  },
  earningIndivBox: {
    backgroundColor: '#f5f5f5',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    marginHorizontal: 9,
    marginTop: 12,
    borderWidth: 1,
    borderColor: '#dadada',
    borderRadius: 12,
  },
  earningsRowBottomBox: {
    backgroundColor: '#f5f5f5',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    marginHorizontal: 16,
    marginTop: 12,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: '#dadada',
    borderBottomColor: '#dadada',
  },
  earningIndivValueTxt: {
    fontSize: 20,
    color: COLORS.BLACK,
    fontFamily: FONTS.MontserratSemiBold,
    textAlign: 'auto',
  },
  earningIndivKeyTxt: {
    fontSize: 10,
    color: '#737270',
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
    marginTop: 'auto',
  },
  scrollBox: {
    marginTop: -(WD * 0.35 - 50 - 8),
  },
  firstBox: {
    backgroundColor: COLORS.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 25,
    paddingBottom: 25,
    marginHorizontal: 16,
    marginBottom: 24,
    borderRadius: 15,

    ...helpersCSS.shadow5,
  },
  userProfileCoverImg: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
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
    textTransform: 'uppercase',
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
    color: '#737270',
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 28,
  },
  secondBoxIndiv3: {
    marginBottom: 20,
  },
  secondBoxIndiv4: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 6,
    marginTop: 4,
    borderWidth: 1,
    borderRadius: 12,
  },
  secondBoxDocumentImgBox: {
    flex: 1,
    marginRight: 6,
    marginVertical: 6,
  },
  secondBoxDocumentImg: {
    width: '100%',
    height: '100%',
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
  secondBoxIndiv6: {},
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
    color: '#737270',
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
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  noDataBoxTxt: {
    fontSize: 16,
    color: '#737270',
    fontFamily: FONTS.MontserratSemiBold,
    textAlign: 'center',
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 15,

    ...helpersCSS.shadow5,
  },
  vehicleBox: {
    flex: 3,
  },
  vehicleBoxNoTxt: {
    fontSize: 18,
    color: COLORS.BLACK,
    fontFamily: FONTS.MontserratSemiBold,
  },
  vehicleBoxCapTxt: {
    fontSize: 12,
    color: '#737270',
    fontFamily: FONTS.MontserratMedium,
    marginTop: 2,
  },
  statusBox: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 8,
    // marginRight: 12,
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
    backgroundColor: '#d3d3d3',
    width: 38,
    height: 38,
    borderRadius: 40,
    ...helpersCSS.Mid,
    marginLeft: 'auto',
    marginRight: 12,
  },
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
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  loadLocationTxt: {
    fontSize: 16,
    color: '#534e45',
    fontFamily: FONTS.MontserratBold,
  },
  contentRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
  },
  contentRow1: {
    flex: 5,
  },
  contentRow2: {
    flex: 6,
  },
  contentRow3: {
    flex: 4,
  },
  contentRow11: {
    flexDirection: 'row',
  },
  materialTypeBox: {
    backgroundColor: '#f3f3f3',
    maxWidth: WD * 0.13,
    height: 15,
    justifyContent: 'center',
    paddingHorizontal: 4,
    marginLeft: 6,
    borderWidth: 1,
    borderColor: '#c4c3c2',
    borderRadius: 3,
  },
  materialTypeTxt: {
    fontSize: 8,
    color: '#737270',
    fontFamily: FONTS.MontserratMedium,
  },
  contentRowKeyTxt: {
    fontSize: 10,
    color: '#737270',
    fontFamily: FONTS.MontserratMedium,
  },
  contentRowValue1Txt: {
    fontSize: 14,
    color: COLORS.BLACK,
    fontFamily: FONTS.MontserratMedium,
  },
  contentRowValue2Txt: {
    fontSize: 10,
    color: '#534e45',
    fontFamily: FONTS.MontserratMedium,
  },
  dropdown1: {
    backgroundColor: '#e3c484',
    width: (WD - 16 - 8) * 0.6,
    height: 40,
    paddingLeft: 4,
    paddingRight: 4,
    borderWidth: 2,
    borderColor: COLORS.WHITE,
  },
  dropdown2: {
    backgroundColor: '#e3c484',
    width: (WD - 16 - 8) * 0.4,
    height: 40,
    paddingLeft: 4,
    paddingRight: 4,
    borderWidth: 2,
    borderColor: COLORS.WHITE,
  },
  dropdownContainerStyle: {
    backgroundColor: COLORS.WHITE,
  },
  dropdownItemContainerStyle: {
    backgroundColor: COLORS.WHITE,
  },
  dropdownPlaceholderStyle: {
    fontSize: 12,
    color: '#534e45',
    fontFamily: FONTS.MontserratSemiBold,
  },
  dropdownSelectedTextStyle: {
    fontSize: 12,
    color: COLORS.GREY,
    fontFamily: FONTS.MontserratSemiBold,
  },
  dropdownIconStyle: {
    width: 20,
    height: 20,
  },
  dropdownItemTextStyle: {
    fontSize: 12,
    color: COLORS.BLACK,
    fontFamily: FONTS.MontserratMedium,
    marginHorizontal: -15,
    marginVertical: -15,
  },
  dropdownInputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

export const TripsScreenStyles = StyleSheet.create({
  downloadBigBox: {
    width: 40,
    height: 38,
    ...helpersCSS.Mid,
    marginTop: 'auto',
    // backgroundColor:"pink"
  },
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
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  vehicleIDRow1: {
    marginTop: 12,
  },
  vehicleIDRow2: {
    flexDirection: 'row',
  },
  vehicleIDTxt: {
    fontSize: 16,
    color: '#534e45',
    fontFamily: FONTS.MontserratBold,
  },
  vehicleTypeTxt: {
    fontSize: 12,
    color: COLORS.GREY,
    fontFamily: FONTS.MontserratMedium,
  },
  statusRow: {
    flexDirection: 'row',
    marginTop: 8,
  },
  statusIndivBox: {
    alignItems: 'center',
    marginHorizontal: 4,
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
    borderColor: '#737270',
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
    height: 38,
    ...helpersCSS.Mid,

    marginLeft: 6,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 3,
    ...helpersCSS.shadow3,
  },
  dateTripQtyRow: {
    flexDirection: 'row',
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
    color: '#737270',
    fontFamily: FONTS.MontserratMedium,
  },
  contentTxt: {
    fontSize: 12,
    color: '#737270',
    fontFamily: FONTS.MontserratMedium,
    marginTop: 12,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 16,
    marginTop: 12,
  },
  locationImgRowMajor: {
    marginRight: 8,
  },
  locationImgRowMinor: {
    flexDirection: 'row',
    marginTop: 4,
  },
  locationP2PTxt: {
    fontSize: 16,
    color: '#534e45',
    fontFamily: FONTS.MontserratMedium,
  },
  bottomRow1: {
    flexDirection: 'row',
    paddingRight: 16,
    marginTop: 16,
  },
  bottomRow11: {
    flex: 1,
  },
  bottomRow111: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomRow12: {
    flex: 1,
  },
  bottomRow13: {
    flex: 1,
  },
  bottomRow1KeyTxt: {
    fontSize: 12,
    color: '#737270',
    fontFamily: FONTS.MontserratMedium,
  },
  bottomRow1Value1Txt: {
    fontSize: 14,
    color: COLORS.BLACK,
    fontFamily: FONTS.MontserratMedium,
    marginTop: 4,
  },
  bottomRow2: {
    flexDirection: 'row',
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
    backgroundColor: '#e3c484',
    width: (WD - 16 - 8) * 0.6,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
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

  modalBG: {
    flex: 1,
    backgroundColor: '#00000099',
    ...helpersCSS.Mid,
  },
  billContainer: {
    backgroundColor: COLORS.WHITE,
    paddingLeft: 8,
    paddingRight: 12,
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: 16,
  },
  billHeading: {
    fontSize: 20,
    color: COLORS.BLACK,
    fontFamily: FONTS.MontserratBold,
    marginBottom: 6,
  },
  rowBox: {
    flexDirection: "row"
  },
  billBox: {
    flexDirection: 'row',
  },
  billDot: {
    backgroundColor: COLORS.PRIMARY,
    width: 9,
    height: 9,
    borderRadius: 3,
  },
  billDotLine: {
    borderLeftWidth: 1,
    borderLeftColor: '#d2d2d2',
    borderStyle: 'dashed',
    height: 160,
    marginHorizontal: 4,
  },
  totalBillBox: {
    flexDirection: 'row',
    alignItems: 'center', 
    marginLeft: 9,
    marginTop: 9,
  },
  totalBillValueTxt: {
    fontSize: 16,
    color: "#6e6c68",
    fontFamily: FONTS.MontserratBold,
  },
  totalBillKeyTxt: {
    fontSize: 10,
    color: "#6e6c68",
    fontFamily: FONTS.MontserratRegular,
  },
  freightBox: {
    flexDirection: 'row', 
    alignItems: 'center', 
    marginTop: 36
  },
  freightLine: {
    borderTopWidth: 1, 
    borderTopColor: "#d2d2d2", 
    borderStyle: "dashed", 
    width: 28, 
    marginLeft: -4
  },
  freightValueTxt: {
    fontSize: 12, 
    color: "#57554d",
    fontFamily: FONTS.MontserratMedium
  },
  freightKeyTxt: {
    fontSize: 9, 
    color: "#7c7c7c",
    fontFamily: FONTS.MontserratRegular
  },
  billTotalBox: {
    flexDirection: "row", 
    marginLeft: 72, 
    marginTop: 2
  },
  subLineVertical: {
    borderLeftWidth: 1, 
    borderLeftColor: "#d2d2d2", 
    borderStyle: "dashed", 
    height: 60
  },
  weightBox: {
    flexDirection: "row", 
    alignItems: "center", 
    marginTop: 20
  },
  weightline: {
    borderTopWidth: 1, 
    borderTopColor: "#d2d2d2", 
    borderStyle: "dashed",
    width: 16, 
    marginLeft: 2
  },
  midTxtBox: {
    marginLeft: 4, 
    marginTop: -2, 
    marginBottom: -2
  },
  unitRateBox: {
    flexDirection: "row", 
    alignItems: "center"
  },
  unitRateLine: {
    borderTopWidth: 1, 
    borderTopColor: "#d2d2d2", 
    borderStyle: "dashed", 
    width: 16, 
    marginLeft: 2
  },
  gstBox: {
    flexDirection: "row", 
    alignItems: "center", 
    marginTop: 12
  },
  gstLine: {
    borderTopWidth: 1, 
    borderTopColor: "#d2d2d2", 
    borderStyle: "dashed", 
    width: 28, 
    marginLeft: -4
  },
  modalCloseBox: {
    backgroundColor: COLORS.WHITE,
    width: 40,
    height: 40,
    borderRadius: 40,
    ...helpersCSS.Mid,
    marginLeft: -20,
    marginTop: -20,
    ...helpersCSS.shadow5,
  },
  paymentDotLine: {
    borderLeftWidth: 1,
    borderLeftColor: '#d2d2d2',
    borderStyle: 'dashed',
    height: 148,
    marginHorizontal: 4,
  },
  paymentMadeBox: {
    marginLeft: 9,
  },
  paymentLineBox: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
  },
  paymentLine: {
    borderTopWidth: 1, 
    borderTopColor: "#d2d2d2", 
    borderStyle: "dashed", 
    width: 28, 
    marginLeft: -4
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
    paddingTop: Platform.OS == 'ios' ? 64 : 0,
  },
  appBarBGIMG: {
    width: WD,
    height: WD * 0.75,
    resizeMode: 'cover',
  },
  appHeadingBox: {
    flexDirection: 'row',
    marginHorizontal: 8,
    marginTop: -(WD * 0.75 * 0.65),
    marginBottom: WD * 0.05,
  },
  backBtnBox: {
    width: 40,
    height: 40,
    ...helpersCSS.Mid,
    marginHorizontal: 4,
    marginTop: 'auto',
  },
  headerBox: {
    height: 50,
  },
  headingTxt: {
    fontSize: 30,
    color: COLORS.WHITE,
    fontFamily: FONTS.Serif72BetaRegular,
    marginTop: 'auto',
  },
  cardBox1: {
    backgroundColor: COLORS.WHITE,
    flexDirection: 'row',
    paddingHorizontal: 12,
    marginHorizontal: 8,
    marginBottom: 16,
    borderRadius: 12,

    ...helpersCSS.shadow3,
  },
  cardBox1a: {
    flex: 5,
  },
  cardBox1b: {
    flex: 2,
  },
  cardBox1KeyTxt: {
    fontSize: 10,
    color: '#737270',
    fontFamily: FONTS.MontserratMedium,
    marginTop: 12,
  },
  cardBox1Value1Txt: {
    fontSize: 14,
    color: COLORS.BLACK,
    fontFamily: FONTS.MontserratMedium,
    marginBottom: 12,
  },
  cardBox1Value2Txt: {
    fontSize: 10,
    color: '#5d5d5d',
    fontFamily: FONTS.MontserratRegular,
  },
  cardBox2: {
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: 12,
    marginHorizontal: 8,
    marginBottom: 16,
    borderRadius: 12,

    ...helpersCSS.shadow3,
  },
  cardBox2HeadingTxt: {
    fontSize: 12,
    color: COLORS.PRIMARY,
    fontFamily: FONTS.MontserratMedium,
    marginTop: 12,
    marginBottom: 3,
  },
  cardBox2LocationTxt: {
    fontSize: 12,
    color: '#999999',
    fontFamily: FONTS.MontserratRegular,
  },
  cardBox2LocationCityTxt: {
    fontSize: 12,
    color: '#9e9d9c',
    fontFamily: FONTS.MontserratMedium,
  },
  cardBox2Row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
  },
  cardBox2ProfileBox: {
    backgroundColor: '#cfcfcf',
    width: 36,
    height: 38,
    ...helpersCSS.Mid,
    marginRight: 9,
    borderRadius: 9,
  },
  cardBox2ProfileTxtBox: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  cardBox2ProfileNameTxt: {
    fontSize: 12,
    color: COLORS.BLACK,
    fontFamily: FONTS.MontserratMedium,
  },
  cardBox2ProfilePositionTxt: {
    fontSize: 12,
    color: '#9e9d9c',
    fontFamily: FONTS.MontserratRegular,
  },
  cardBox2CallBox: {
    backgroundColor: COLORS.PRIMARY,
    width: 32,
    height: 32,
    ...helpersCSS.Mid,
    borderRadius: 32,
  },
  cardBox4: {
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: 12,
    marginHorizontal: 8,
    marginBottom: 16,
    borderRadius: 12,

    ...helpersCSS.shadow3,
  },
  cardBox4Row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 3,
    marginBottom: 12,
  },
  cardBox4RowTxt: {
    fontSize: 10,
    color: COLORS.BLACK,
    fontFamily: FONTS.MontserratRegular,
  },

  bottomStickRow: {
    backgroundColor: COLORS.WHITE,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  bottomStickRowBox: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginHorizontal: 24,
  },
  bottomStickRowBoxKeyTxt: {
    fontSize: 10,
    color: '#737270',
    fontFamily: FONTS.MontserratMedium,
  },
  bottomStickRowBoxValueTxt: {
    fontSize: 14,
    color: COLORS.BLACK,
    fontFamily: FONTS.MontserratSemiBold,
  },
  bottomStickRowBoxValue1Txt: {
    fontSize: 12,
    color: '#737270',
    fontFamily: FONTS.MontserratRegular,
  },
  bottomStickCreateTripBox: {
    backgroundColor: COLORS.PRIMARY,
    width: 150,
    height: 46,
    ...helpersCSS.Mid,
    borderRadius: 16,
    ...helpersCSS.shadow3,
  },
  bottomStickCreateTripBoxTxt: {
    fontSize: 14,
    color: COLORS.WHITE,
    fontFamily: FONTS.MontserratSemiBold,
  },
});

export const AssignTruckScreenStyles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    width: '100%',
    height: '100%',
    padding: 16,
  },
  containerHeadingTxt: {
    fontSize: 14,
    color: COLORS.BLACK,
    fontFamily: FONTS.MontserratSemiBold,
    marginBottom: 16,
  },
  containerSubHeadingTxt: {
    fontSize: 9,
    color: '#534e45',
    fontFamily: FONTS.MontserratRegular,
  },
  dropdown1Box: {
    marginTop: 12,
    marginBottom: 16,
  },
  dropdown1: {
    width: WD - 32,
    // height: 40,
    // paddingLeft: 16,
    // paddingRight: 16,
    borderBottomWidth: 2,
    borderBottomColor: '#e3e3e3',
  },
  inputputBox: {
    marginTop: 4,
    marginBottom: 16,
  },
  driverNameBox: {
    height: 40,
    fontSize: 14,
    color: COLORS.BLACK,
    fontFamily: FONTS.MontserratMedium,
    borderBottomWidth: 2,
    borderBottomColor: '#e3e3e3',
  },
  assignTruckRowBox: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginVertical: 12,
  },
  cancelTruckBox: {
    backgroundColor: COLORS.WHITE,
    width: 100,
    height: 46,
    ...helpersCSS.Mid,
    marginHorizontal: 8,
  },
  cancelTruckBoxTxt: {
    fontSize: 14,
    color: COLORS.PRIMARY,
    fontFamily: FONTS.MontserratSemiBold,
  },
  assignTruckBox: {
    backgroundColor: COLORS.PRIMARY,
    width: 150,
    height: 46,
    ...helpersCSS.Mid,
    borderRadius: 16,
    ...helpersCSS.shadow3,
  },
  assignTruckBoxTxt: {
    fontSize: 14,
    color: COLORS.WHITE,
    fontFamily: FONTS.MontserratSemiBold,
  },
  customDropdown: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 3,

    ...helpersCSS.shadow5,
  },
  customIndivDropdownBox: {
    backgroundColor: COLORS.WHITE,
    height: 50,
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
  customDropdownValue1Txt: {
    fontSize: 16,
    color: COLORS.PRIMARY,
    fontFamily: FONTS.MontserratMedium,
  },
  customDropdownValue2Txt: {
    fontSize: 12,
    color: COLORS.BLACK,
    fontFamily: FONTS.MontserratRegular,
  },
});

export const NotificationScreenStyles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  appBarBGIMGBox: {
    backgroundColor: COLORS.PRIMARY,
    width: WD,
    paddingTop: Platform.OS == 'ios' ? 64 : 0,
  },
  appBarBGIMG: {
    width: WD,
    height: WD * 0.28,
    resizeMode: 'cover',
  },
  bannerBG: {
    backgroundColor: COLORS.PRIMARY,
    width: WD,
    height: WD * 0.35,
  },
  appHeadingBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  backBtnBox: {
    width: 40,
    height: 40,
    ...helpersCSS.Mid,
    marginHorizontal: 4,
  },
  headingTxt: {
    fontSize: 30,
    color: COLORS.WHITE,
    fontFamily: FONTS.Serif72BetaRegular,
    marginTop: 'auto',
  },
  msgCard: {
    backgroundColor: COLORS.WHITE,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    paddingVertical: 10,
    marginHorizontal: 16,
    marginBottom: 12,
    borderRadius: 12,
    ...helpersCSS.shadow5,
  },
  msgCard1: {
    flex: 1,
  },
  msgCard2: {
    width: 40,
    height: 40,
    ...helpersCSS.Mid,
  },
  subHeadingTxt: {
    fontSize: 16,
    color: COLORS.PRIMARY,
    fontFamily: FONTS.MontserratSemiBold,
    textTransform: 'capitalize',
    marginHorizontal: 32,
    marginBottom: 8,
  },
  timeTxt: {
    fontSize: 10,
    color: '#737270',
    fontFamily: FONTS.MontserratRegular,
    textTransform: 'lowercase',
  },
  msgTxt: {
    fontSize: 12,
    color: COLORS.BLACK,
    fontFamily: FONTS.MontserratMedium,
    marginTop: 12,
  },
});


export const PartnerDashboardScreenStyles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    width: '100%',
    height: '100%',
  },
  appBarBGIMGBox: {
    backgroundColor: COLORS.PRIMARY,
    width: WD,
    paddingTop: Platform.OS == 'ios' ? 64 : 0,
    height: 64,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  appBarBGIMGView: {
    width: 112,
    height: 56,
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: "auto",
    marginBottom: 2,
  },
  appBarBGIMG: {
    width: 102,
    height: 50,
    resizeMode: 'contain',
  },
  appBarIconBox: {
    width: 48,
    height: 48,
    ...helpersCSS.Mid,
  },
  partnerCoverImgBox: {
    width: WD,
    height: WD * (9/16) * 0.7,
  },
  partnerCoverImg: {
    width: "100%",
    height: "100%",
    resizeMode: "stretch",
  },
  partnerProfileImgCenterBox: {
    width: 104, 
    height: 104, 
    alignSelf: "center",
    flexDirection: "row",
    marginTop: 4,
    marginBottom: 8,
  },
  partnerProfileImgBox: {
    width: 104, 
    height: 104, 
    ...helpersCSS.Mid,
    borderWidth: 1,
    borderColor: "#acacac",
    borderRadius: 104,
  },
  partnerProfileImg: {
    backgroundColor: COLORS.WHITE,
    width: 100, 
    height: 100, 
    borderRadius: 100,
  },
  partnerProfileImgEditBox: {
    backgroundColor: COLORS.WHITE,
    width: 34, 
    height: 34, 
    borderRadius: 34, 
    marginLeft: -34,
    marginTop: "auto",
    ...helpersCSS.Mid,
    ...helpersCSS.shadow5,
  },
  userNameTxt: {
    fontSize: 18,
    color: COLORS.BLACK,
    fontFamily: FONTS.MontserratSemiBold,
    textAlign: "center",
    marginBottom: 4,
  },
  userPartnerKeyTxt: {
    fontSize: 12,
    color: '#969593',
    fontFamily: FONTS.MontserratMedium,
    textAlign: "center",
    marginTop: 4,
  },
  userPartnerValueTxt: {
    fontSize: 14,
    color: '#747371',
    fontFamily: FONTS.MontserratSemiBold,
    marginTop: 4,
  },
  earningsRowBox: {
    flexDirection: 'row',
    marginHorizontal: 7,
  },
  earningIndivBox: {
    backgroundColor: COLORS.WHITE,
    width: (WD - (7 * 2) - (9 * 4) - (1 * 4))/2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    marginHorizontal: 9,
    marginTop: 12,
    borderWidth: 1,
    borderColor: '#dadada',
    borderRadius: 12,
  },
  earningIndivKeyTxt: {
    fontSize: 10,
    color: '#737270',
    fontFamily: FONTS.MontserratMedium,
  },
  earningIndivValueTxt: {
    fontSize: 20,
    color: COLORS.BLACK,
    fontFamily: FONTS.MontserratSemiBold,
    textAlign: 'auto',
    marginTop: 10,
  },

});

export const PartnerLoadsScreenStyles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.PRIMARY,
    width: '100%',
    height: '100%',
  },
  searchBGImgBox: {
    backgroundColor: COLORS.PRIMARY,
    width: WD,
    height: 180,
  },
  searchBGImg: {
    width: WD,
    height: 152,
  },
  headerRow: {
    flexDirection: "row",
    marginLeft: 20,
    marginRight: 8,
    marginTop: 8,
    marginBottom: 8,
  },
  headerBox: {
    width: 100,
    height: 50,
  },
  headingTxt: {
    fontSize: 30,
    color: COLORS.WHITE,
    fontFamily: FONTS.Serif72BetaRegular,
    marginTop: 'auto',
  },
  searchBox: {
    backgroundColor: '#e3c484',
    flex: 1,
    height: 40,
    flexDirection: "row",
    paddingLeft: 4,
    paddingRight: 4,
    marginTop: 'auto',
    borderWidth: 2,
    borderColor: COLORS.WHITE,
  },
  searchIPTxtBox: {
    flex: 1,
    height: 38,
    fontSize: 14,
    color: COLORS.BLACK,
    fontFamily: FONTS.MontserratSemiBold,
  },
  searchIcnBox: {
    width: 32,
    height: 38,
    ...helpersCSS.Mid,
  },
  dropdown1: {
    backgroundColor: '#e3c484',
    width: (WD - 16),
    height: 40,
    paddingLeft: 4,
    paddingRight: 4,
    marginHorizontal: 8,
    marginTop: 8,
    borderWidth: 2,
    borderColor: COLORS.WHITE,
  },
  fakeDropdown1: {
    backgroundColor: '#e3c484',
    width: (WD - 16),
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 4,
    paddingRight: 4,
    marginHorizontal: 8,
    marginTop: 8,
    borderWidth: 2,
    borderColor: COLORS.WHITE,
  },
  fakeDropdown1TextStyle: {
    fontSize: 12,
    color: COLORS.GREY,
    fontFamily: FONTS.MontserratSemiBold,
  },
  cardContentBox: {
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginHorizontal: 8,
    marginBottom: 16,
    borderRadius: 15,

    ...helpersCSS.shadow5,
  },
  cardContentBoxRow1: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  loadIDTxt: {
    fontSize: 14,
    color: COLORS.BLACK,
    fontFamily: FONTS.MontserratRegular,
  },
  cardContentBoxRow1Column: {
    flexDirection: "column",
    alignItems: "flex-end",
  },
  materialTxt: {
    fontSize: 14,
    color: '#534e45',
    fontFamily: FONTS.MontserratBold,
  },
  materialTypeTxt: {
    fontSize: 12,
    color: '#737270',
    fontFamily: FONTS.MontserratMedium,
  },
  cardContentBoxRow2: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  locationTxt: {
    fontSize: 14,
    color: COLORS.BLACK,
    fontFamily: FONTS.MontserratBold,
  },
  cardContentBoxRow3: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardContentBoxRow3a: {
    flexDirection: "row",
    alignItems: "center",
  },
  vehicleTxt: {
    fontSize: 12,
    color: '#737270',
    fontFamily: FONTS.MontserratMedium,
  },
  rateTxt: {
    fontSize: 14,
    color: '#534e45',
    fontFamily: FONTS.MontserratBold,
  },

  shipperdropContainer: {
    paddingHorizontal: 8,
    paddingVertical: 12,
  },
  shipperdropTxt1: {
    fontSize: 16,
    color: COLORS.BLACK,
    fontFamily: FONTS.MontserratBold,
    marginBottom: 6
  },
  shipperdropTxt2Row: {
    flexDirection: "row",
    alignItems: "center",
  },
  shipperdropTxt2: {
    fontSize: 16,
    color: '#737270',
    fontFamily: FONTS.MontserratSemiBold,
  },

  emptyBox: {
    flex: 1,
    ...helpersCSS.Mid,
    marginBottom: 64,
  },
  emptyBoxTxt: {
    fontSize: 16,
    color: COLORS.WHITE,
    fontFamily: FONTS.MontserratSemiBold,
  },
});

export const PartnerTripsScreenStyles = StyleSheet.create({
  cardContentBox: {
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginHorizontal: 8,
    marginBottom: 16,
    borderRadius: 15,

    ...helpersCSS.shadow5,
  },
  cardContentBoxRow1: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  vehicleNoTxt: {
    fontSize: 14,
    color: COLORS.BLACK,
    fontFamily: FONTS.MontserratBold,
  },
  cardContentBoxRow1a: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
  },
  vehicleNoTxt1: {
    flex: 1,
    fontSize: 12,
    color: '#737270',
    fontFamily: FONTS.MontserratMedium,
    textAlign: "right",
    marginRight: 4,
    marginTop: 2,
  },
  cardContentBoxRow2: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  vehicleTypeTxt: {
    fontSize: 12,
    color: '#737270',
    fontFamily: FONTS.MontserratRegular,
  },
  cardContentBoxRow2a: {
    flex: 1,
  },
  cardContentBoxRow2b: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 2,
  },
  cardContentBoxRow3: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  locationTxt: {
    fontSize: 14,
    color: COLORS.BLACK,
    fontFamily: FONTS.MontserratBold,
  },
  cardContentBoxRow4: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 40,
  },
  cardContentBoxRow4a: {
    height: 40,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  materialTxt: {
    fontSize: 14,
    color: '#534e45',
    fontFamily: FONTS.MontserratBold,
  },
  materialTypeTxt: {
    fontSize: 12,
    color: '#534e45',
    fontFamily: FONTS.MontserratMedium,
  },
  tripIDTxt: {
    fontSize: 12,
    color: '#737270',
    fontFamily: FONTS.MontserratMedium,
  },
  cardContentBoxRow4b: {
    height: 40,
    flexDirection: "row",
  },
  cardContentBoxRow4ba: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  tripDateTxt: {
    fontSize: 13,
    color: COLORS.BLACK,
    fontFamily: FONTS.MontserratMedium,
    textAlign: "center",
  },
  shipperRefNumberTxt: {
    fontSize: 12,
    color: '#737270',
    fontFamily: FONTS.MontserratMedium,
    textAlign: "center",
  },
  cardContentBoxRow4bRow: {
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 20,
  },
  cardContentBoxRow4bRowaa: {
    height: 40,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardContentBoxRow4bRowCircleR: {
    width: 22,
    height: 22,
    borderRadius: 22,
    ...helpersCSS.Mid,
  },
  cardContentBoxRow4bRowCircle: {
    width: 22,
    height: 22,
    borderRadius: 22,
    ...helpersCSS.Mid,
    borderWidth: 1.5,
    borderColor: '#757575',
  },
  cardContentBoxRow4bRowCircleTxtB: {
    fontSize: 10,
    color: COLORS.BLACK,
    fontFamily: FONTS.MontserratBold,
    marginLeft: 2,
    marginTop: -2,
  },
  cardContentBoxRow4bRowCircleTxtW: {
    fontSize: 12,
    color: COLORS.WHITE,
    fontFamily: FONTS.MontserratBold,
    marginTop: -1,
  },
  loadingValueTxt: {
    fontSize: 12,
    color: '#737270',
    fontFamily: FONTS.MontserratMedium,
    textAlign: "center",
  },
});

export const PartnerLoadDetailsScreenStyles = StyleSheet.create({
  container: {
    backgroundColor: "#fafafa",
    width: "100%",
    height: "100%",
  },
  headingBox: {
    padding: 16,
  },
  headingTxt: {
    fontSize: 16,
    color: '#534e45',
    fontFamily: FONTS.MontserratBold,
    marginBottom: 4,
  },
  imageTotalBoxRowTopTxt: {
    fontSize: 18,
    color: '#7c7376',
    fontFamily: FONTS.MontserratSemiBold,
    marginHorizontal: 16,
    marginBottom: -8,
  },
  imageTotalBoxRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 16,
  },
  imageTotalBox: {
    backgroundColor: COLORS.WHITE,
    width: 80,
    height: 48,
    flexDirection: "row",
    ...helpersCSS.Mid,
    borderWidth: 1,
    borderColor: COLORS.PRIMARY,
    borderRadius: 9,
  },
  imageTotalBoxTxt: {
    fontSize: 12,
    color: COLORS.PRIMARY,
    fontFamily: FONTS.MontserratBold,
    marginLeft: 12,
  },

  orSeperationBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  orSeperationLine: {
    flex:1,
    borderBottomWidth: 2,
    borderBottomColor: "#d1d1d1",
    borderStyle: "dashed",
  },
  orSeperationLineTxt: {
    fontSize: 12,
    color: '#737270',
    fontFamily: FONTS.MontserratMedium,
  },
  textIPHeadingTxt: {
    fontSize: 10,
    color: '#737270',
    fontFamily: FONTS.MontserratMedium,
    marginBottom: 5,
  },
  searchIPTxtRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#e3e3e3',
  },
  searchIPTxt: {
    // width: "100%",
    height: 40,
    fontSize: 14,
    color: COLORS.BLACK,
    fontFamily: FONTS.MontserratMedium,
    paddingBottom: -4,
  },
  customDropdown: {
    position: 'absolute',
    zIndex: 1,
    backgroundColor: COLORS.WHITE,
    top: 50, // Adjust this value according to your layout
    width: WD - (16 * 2),
    maxHeight: (WD - (16 * 2)) * 0.6,
    marginTop: -15,
    borderRadius: 3,
    ...helpersCSS.shadow3,
  },
  customDropdownContentRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 4,
    paddingVertical: 4,
  },
  customDropdownContentRow1: {
    // flex: 3,
  },
  customDropdownContentRow2: {
    // flex: 2,
    alignItems: "flex-end",
  },
  customDropdownContentRowTxt1: {
    fontSize: 14,
    color: COLORS.PRIMARY,
    fontFamily: FONTS.MontserratBold,
  },
  customDropdownContentRowTxt2: {
    fontSize: 12,
    color: '#737270',
    fontFamily: FONTS.MontserratSemiBold,
  },
  customDropdownContentRowTxt3: {
    fontSize: 12,
    color: '#534e45',
    fontFamily: FONTS.MontserratSemiBold,
  },
  customDropdownContentRowTxt4: {
    fontSize: 12,
    color: COLORS.BLACK,
    fontFamily: FONTS.MontserratRegular,
  },
  textIPTxt: {
    height: 40,
    fontSize: 14,
    color: COLORS.BLACK,
    fontFamily: FONTS.MontserratSemiBold,
    paddingBottom: -4,
    marginBottom: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#e3e3e3',
  },
  textIPNumberRowBox: {
    flexDirection: "row"
  },
  textIPNumber1Txt: {
    width: 27.5,
    height: 40,
    fontSize: 14,
    color: COLORS.BLACK,
    fontFamily: FONTS.MontserratMedium,
    paddingBottom: -4,
    marginBottom: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#e3e3e3',
  },
  textIPNumberSeperatorBox: {
    marginTop: "auto",
    marginBottom: "auto"
  },
  textIPNumberSeperatorTxt: {
    fontSize: 14,
    color: COLORS.BLACK,
    fontFamily: FONTS.MontserratBold,
    marginHorizontal: 7,
  },
  textIPNumber2Txt: {
    width: 37.5,
    height: 40,
    fontSize: 14,
    color: COLORS.BLACK,
    fontFamily: FONTS.MontserratMedium,
    paddingBottom: -4,
    marginBottom: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#e3e3e3',
  },
});

export const PartnerPODScreenStyles = StyleSheet.create({
  headingTxt: {
    fontSize: 28,
    color: COLORS.WHITE,
    fontFamily: FONTS.Serif72BetaRegular,
    textAlign: "center",
    marginTop: 20,
  },
  searchBGImgBox: {
    backgroundColor: COLORS.PRIMARY,
    width: WD,
    height: 160,
  },
  searchBGImg: {
    width: WD,
    height: 152,
  },
  tonBoxRow: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent:"center",
    marginTop: 32,
  },
  tonBox: {
    backgroundColor: COLORS.WHITE,
    width: WD - 64 - 64,
    height: 50,
    alignSelf: "center",
    borderRadius: 9,
  },
  searchIPTxtBox: {
    flex: 1,
    height: 38,
    fontSize: 14,
    color: COLORS.BLACK,
    fontFamily: FONTS.MontserratSemiBold,
    textAlign: "center"
  },
  tonBoxRowTxtBox: {
    width: 64,
    ...helpersCSS.Mid,
  },
  tonBoxRowTxt: {
    backgroundColor: COLORS.PRIMARY,
    width: 64,
    fontSize: 16,
    color: COLORS.WHITE,
    fontFamily: FONTS.Serif72BetaRegular,
    textAlign: "center",
  },
  cameraCardBox: {
    backgroundColor: COLORS.WHITE,
    height: 134,
    alignItems: "center",
    justifyContent: "flex-end",
    marginHorizontal: 48,
    marginBottom: 16,
    borderRadius: 9,
    ...helpersCSS.shadow3,
  },
  cameraCardBoxTxt: {
    fontSize: 18,
    color: COLORS.BLACK,
    fontFamily: FONTS.MontserratMedium,
    textAlign: "center",
    marginBottom: 16,
  },
  okBtnBox: {
    backgroundColor: COLORS.WHITE,
    width: 128,
    height: 50,
    alignSelf: "center",
    ...helpersCSS.Mid,
    marginTop: 16,
    marginBottom: 16,
    borderRadius: 9,
    ...helpersCSS.shadow3,
  },
  okBtnBoxTxt: {
    fontSize: 18,
    color: COLORS.BLACK,
    fontFamily: FONTS.MontserratBold,
  },
});
