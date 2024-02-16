import { Dimensions, NativeModules, Platform, StatusBar, StyleSheet } from "react-native";

const ImagePath = '../assets/images/';
const IconPath = '../assets/icons/';

export const COLORS = {
  WHITE: '#FFF',
  BLACK: '#000',
  PRIMARY: '#BF841E',
  GREY: '#222',
};

export const FONTS = {
  MontserratBlack: 'Montserrat-Black',
  MontserratBold: 'Montserrat-Bold',
  MontserratExtraBold: 'Montserrat-ExtraBold',
  MontserratLight: 'Montserrat-Light',
  MontserratMedium: 'Montserrat-Medium',
  MontserratSemiBold: 'Montserrat-SemiBold',
  MontserratSemiBoldItalic: 'Montserrat-SemiBoldItalic',
  MontserratThin: 'Montserrat-Thin',
  Serif72BetaRegular: 'Serif72Beta-Regular',
};

export const IMAGES = {
  LEFTCORNERARC : require(ImagePath + 'left_corner_arc.png'),
  APPLOGINLOGO : require(ImagePath + 'rapidloops_logo.png'),
  OTPGLOBELOGO : require(ImagePath + 'otp_page_globe-removebg.png'),
  APPBARBG : require(ImagePath + 'app_bar_bg.jpeg'),
  HOMEBGIMG : require(ImagePath + 'Home_bg_img.jpeg'),
  USERCOVERBG : require(ImagePath + 'user_cover_bg.jpeg'),
  LOADSDETAILSBG : require(ImagePath + 'loads_details_bg.png'),
  USERPROFILE : require(ImagePath + 'profile.png'),
  
};

export const ICONS = {
  DRAWERHOMEACTIVE : require(IconPath + 'lightgrey_homepage.png'),
  DRAWERHOMEINACTIVE : require(IconPath + 'lightgrey_homepage.png'),
  DRAWERLOADACTIVE : require(IconPath + 'lightgrey_package.png'),
  DRAWERLOADINACTIVE : require(IconPath + 'lightgrey_package.png'),
  DRAWERTRIPSACTIVE : require(IconPath + 'lightgrey_locationpin.png'),
  DRAWERTRIPSINACTIVE : require(IconPath + 'lightgrey_locationpin.png'),
  DRAWERTRUCKACTIVE : require(IconPath + 'lightgrey_cargotruck.png'),
  DRAWERTRUCKINACTIVE : require(IconPath + 'lightgrey_cargotruck.png'),


  WHITEMENU : require(IconPath + 'white_menu.png'),
  WHITEBELL : require(IconPath + 'white_bell.png'),
  WHITESEARCH : require(IconPath + 'white_search.png'),
  BLACKCLOSE : require(IconPath + 'black_close.png'),
  BLACKSETTINGS : require(IconPath + 'black_settings.png'),
  BLACKLOGOUT : require(IconPath + 'black_logout.png'),
  LIGHTGREYLOCATIONPINBOX : require(IconPath + 'lightgrey_truck_location_pin.jpeg'),
  PRIMARYTRUCK : require(IconPath + 'primary_truck.png'),
  PRIMARYLOCATIONPIN : require(IconPath + 'primary_locationpin.png'),
  WHITEPLAINDOWNLOADS : require(IconPath + 'white_downloads.png'),
  BLACKDOWNLOADSFILES : require(IconPath + 'download_file.png'),
  PRIMARYCALENDAR : require(IconPath + 'primary_calendar.png'),
  STARTPIN : require(IconPath + 'start_pin.png'),
  ENDPIN : require(IconPath + 'end_pin.png'),
  CONNECTPIN : require(IconPath + 'connect_pin.png'),
  GREYINFO : require(IconPath + 'grey_info.png'),
  FILEDOWNLOAD : require(IconPath + 'file_download.png'),
  WHITELEFTARR : require(IconPath + 'back_arrow_white.png'),
  WHITECALL : require(IconPath + 'white_call.png'),
  LIGHTGREYUSER : require(IconPath + 'user_lightgrey.png'),
  
};

// Function to get status bar height
export const getStatusBarHeight = () => {
    let statusBarHeight = 0;
  
    if (Platform.OS === 'ios') {
      const { StatusBarManager } = NativeModules;
      if (StatusBarManager) {
        StatusBarManager.getHeight((statusBarFrameData) => {
          statusBarHeight = statusBarFrameData?.height;
        });
      }
    } else {
      statusBarHeight = StatusBar.currentHeight || 0;
    }
  
    return statusBarHeight;
};

const helpersCSS = StyleSheet.create({
  Mid : {
    alignItems: "center",
    justifyContent: "center",
  },
  shadow3: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    
    elevation: 3,
  },
  shadow5: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  }
})

export {helpersCSS};

const BaseURL = 'http://uat-hadron.rapidloops.com/api';

export const API = {
  TruckerData : BaseURL + '/mobile/trucker/data',
  Dashboard : BaseURL + '/mobile/trucker/dashboard',
  CompanyInfo : BaseURL + '/mobile/trucker/companyInfo',
  BankInfo : BaseURL + '/mobile/trucker/bankInfo',
  TruckList : BaseURL + '/mobile/fleet/trucksByCompany',
  LoadList : BaseURL + '/mobile/load/getAllLoadsByTrucker/v2', // POST
  TripsList : BaseURL + '/mobile/trip/getAllTripsForMobileTrucker/v2', // POST
  ActiveShipperList: BaseURL + '/mobile/trucker/activeShipper',
  MaterialList : BaseURL + '/mobile/trucker/filter/materials',
};

export const IMAGEBASEURL = 'https://hadrondev.blob.core.windows.net/hadron-rapidloops-com/';

export const WD = Dimensions.get('window').width;
export const HT = Dimensions.get('window').height;