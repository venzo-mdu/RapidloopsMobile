import { Dimensions, NativeModules, Platform, StatusBar, StyleSheet } from "react-native";

const ImagePath = '../assets/images/';
const IconPath = '../assets/icons/';

export const COLORS = {
  WHITE: '#FFF',
  BLACK: '#000',
  PRIMARY: '#BF841E', //rgba(191, 132, 30, 1)
  GREY: '#222',
};

export const FONTS = {
  MontserratBlack: 'Montserrat-Black',
  MontserratBold: 'Montserrat-Bold',
  MontserratExtraBold: 'Montserrat-ExtraBold',
  MontserratLight: 'Montserrat-Light',
  MontserratMedium: 'Montserrat-Medium',
  MontserratRegular: 'Montserrat-Regular',
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
  NOTIFICATIONBGIMG : require(ImagePath + 'notificiation_bg.jpeg'),
  USERCOVERBG : require(ImagePath + 'user_cover_bg.jpeg'),
  LOADSDETAILSBG : require(ImagePath + 'loads_details_bg.png'),
  USERPROFILE : require(ImagePath + 'profile.png'),
  APPLOGINLOGOWHITE : require(ImagePath + 'rapidloop_logo_white.png'),
  PARTNERCOVERBGIMG : require(ImagePath + 'partner_cover_img.png'),
  PARTNERPROFILEIMG : require(ImagePath + 'partner_profile_img.png'),
  
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
  PRIMARYBACK : require(IconPath + 'back_arrow_primary.png'),
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
  LIGHTGREYEYE : require(IconPath + 'eye_lightgrey.png'),
  BLACKDROPDOWN : require(IconPath + 'caret-down.png'),
  WHITELOGOUT : require(IconPath + 'white_logout.png'),
  GREYCAMERA : require(IconPath + 'grey_camera.png'),
  BLACKSEARCH : require(IconPath + 'search_black.png'),
  BLACKCARSTEERING : require(IconPath + 'black_car_steering_wheel.png'),
  BLACKPICKUP : require(IconPath + 'black_pickup_truck.png'),
  BLACKBIGCAMERA : require(IconPath + 'black_camera_big.png'),
  REDROUNDABOUT : require(IconPath + 'red_roundabout.png'),
  LIGHTGREYDELETE : require(IconPath + 'lightgrey_delete.png'),
  LIGHTGREYEDIT : require(IconPath + 'lightgrey_edit.png'),
  LIGHTGREYADDPIC : require(IconPath + 'lightgrey_add_photo.png'),
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

// const BaseURL = 'http://192.168.0.16:3000/api' // test
// const BaseURL = 'http://192.168.192.163:3000/api'

export const API = {
  UserType : BaseURL + '/mobile/user',
  TruckerData : BaseURL + '/mobile/trucker/data',
  Dashboard : BaseURL + '/mobile/trucker/dashboard',
  DashboardIMG : BaseURL + '/mobile/trucker/azure/dashboardImage',
  DashboardDeleteIMG : BaseURL + '/mobile/trucker/azure/deleteImage',

  
  CompanyInfo : BaseURL + '/mobile/trucker/companyInfo',
  BankInfo : BaseURL + '/mobile/trucker/bankInfo',
  TruckList : BaseURL + '/mobile/fleet/trucksByCompany',
  LoadList : BaseURL + '/mobile/load/getAllLoadsByTrucker/v2', // POST
  LoadDetails : BaseURL + '/mobile/load/loadSummary',
  // TripsList : BaseURL + '/mobile/trip/getAllTripsForMobileTrucker/v2', // POST
  TripsList : BaseURL + '/mobile/trip/getAllTripsForMobileTrucker/v2', // POST

  // ActiveShipperList: BaseURL + '/mobile/trucker/activeShipper',
  TruckerFCM : BaseURL + '/mobile/trucker/registrationToken',
  ActiveShipperList: BaseURL + '/mobile/trucker/load/shippers',
  MaterialList : BaseURL + '/mobile/trucker/filter/materials',
  NotificationsList : BaseURL + '/mobile/trucker/notifications',
  NotificationsViewed : BaseURL + '/mobile/trucker/notification/viewed',
  LoadingPointList: BaseURL + '/mobile/load/getAllLoadingPoints',
  AllTrucksList: BaseURL + '/mobile/fleet/trucksByCompany',
  AssignTruck: BaseURL + '/mobile/trip/assignTrip',
  
  PartnerFCM : BaseURL + '/mobile/partner/registrationToken',
  PartnerUpdateDeviceId : BaseURL + '/mobile/partner/updateDeviceId',
  PartnerDashboard : BaseURL + '/mobile/partner/dashboard',
  PartnerDashboardIMG : BaseURL + '/mobile/partner/azure/dashboardImage',
  PartnerDashboardDeleteIMG : BaseURL + '/mobile/partner/azure/deleteImage',
  PartnerAccessAreas : BaseURL + '/mobile/partner/accessAreas',
  PartnerLoadList : BaseURL + '/mobile/partner/getLoads/v2',
  PartnerLoadOne : BaseURL + '/mobile/partner/trip/previousTripData',
  PartnerCreateTrip : BaseURL + '/mobile/partner/trip/v7/create',
  PartnerGetTrucks : BaseURL + '/mobile/partner/getTrucks',
  PartnerUnLoadDoc : BaseURL + '/mobile/partner/v3/unloadDoc',
  
  PartnerTripList : BaseURL + '/mobile/partner/getTrips/v2',
  
};

export const IMAGEBASEURL = 'https://hadrondev.blob.core.windows.net/hadron-rapidloops-com/';

export const WD = Dimensions.get('window').width;
export const HT = Dimensions.get('window').height;