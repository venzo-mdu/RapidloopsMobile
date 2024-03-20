import { View, Text, Image, ImageBackground, TextInput, FlatList, findNodeHandle, UIManager, Modal, Platform } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import StatusBarCustom from '../../components/StatusBarCustom'
import { API, COLORS, ICONS, IMAGES, helpersCSS } from '../../helpers/custom'
import { PartnerDashboardScreenStyles, PartnerLoadsScreenStyles, PartnerTripsScreenStyles } from './AppStyles'
import CustomDropDown from '../../components/CustomDropDown'
import { useNavigation } from '@react-navigation/native'
import moment from 'moment'
import { PARTNERPOD } from '..'
import DeviceInfo from 'react-native-device-info'

const PartnerTripsScreen = () => {

  const navigation = useNavigation();

  useEffect(() => {
    getDataFn();
  }, []);

  const getDataFn = async () => {
    try {

      const DeviceId = await DeviceInfo.getUniqueId();

      await fetch(API?.PartnerAccessAreas + "?id=" + global.USERID, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + global.TOKEN,
          'User-Agent':  DeviceId + "/" + "1.1.3" + "/" + Platform.OS ,
        }
      })
      .then((response) => response.json())
      .then((responseJson) => {

        const data = responseJson?.list[3];

        loadShipperFn(data); // location dropdown
        
        setLOADSHIPPERLIST(responseJson?.list); // shipper dropdown

        getLoadDataFn(data?.companyId, data?.loadingPoint[0], "");

      })
      .catch((error) => {
        console.log(error);
      });
    } catch (error) {
      console.error("catch : ", error);
    }
  };

  const loadShipperFn = (loadShipperList) => {
    setLOADSHIPPER(loadShipperList);

    var city = loadShipperList?.loadingPoint;
    var arr = [];

    for (let i = 0; i < city?.length; i++) {
      arr.push({ label: city[i], value: city[i] });
    }

    setLOADPOINT(arr[0]);

    setLOADPOINTLIST(arr);
  };

  const getLoadDataFn = async (companyId, loadingPoint, search) => {

    try {

      const DeviceId = await DeviceInfo.getUniqueId();

      await fetch(API?.PartnerTripList + "?companyId=" + companyId + "&loadingPoint=" + loadingPoint + "&query=" + search + "&offset=" + 0 + "&limit=" + 10000 , {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + global.TOKEN,
          'User-Agent':  DeviceId + "/" + "1.1.3" + "/" + Platform.OS ,
        },
      })
      .then((res) => res.json())
      .then((resJson) => {
        setTRIPSLIST(resJson?.list);
      })
      .catch((error) => {
        console.log(error);
      });
    } catch (error) {
      console.error("catch : ", error);
    }
  };

  const [LOADSHIPPER, setLOADSHIPPER] = useState(null);
  const [LOADSHIPPERLIST, setLOADSHIPPERLIST] = useState([]);

  const [LOADPOINT, setLOADPOINT] = useState(null);
  const [LOADPOINTLIST, setLOADPOINTLIST] = useState([]);

  const [TRIPSLIST, setTRIPSLIST] = useState([]);

  const [Search, setSearch] = useState("");

  const [showDropdown, setShowDropdown] = useState(false);

  const CloseCustomDropdownFn = () => {
    setShowDropdown(false);
  };

  const onSelectShipperFn = async (item, index) => {
    loadShipperFn(item);
    await getLoadDataFn(item?.companyId, item?.loadingPoint[0], "");
    CloseCustomDropdownFn();
  };

  const onSelectLoadingPointFn = async (item) => {
    setLOADPOINT({label: item?.label, value: item?.value});
    await getLoadDataFn(LOADSHIPPER?.companyId, item?.value, "");
  };

  const SearchFn = async (val) => {
    setSearch(val);
    await getLoadDataFn(LOADSHIPPER?.companyId, LOADPOINT?.value, val);
  };

  const goToPODFn = (item,index) => {
    navigation.navigate(PARTNERPOD);
  };

  const [viewPosition, setViewPosition] = useState({ x: 0, y: 0 });
  const viewRef = useRef(null);

  useEffect(() => {
    if (viewRef.current) {
      const handle = findNodeHandle(viewRef.current);
      UIManager.measure(handle, (x, y, width, height, pageX, pageY) => {
        setViewPosition({ x: pageX, y: pageY });
      });
    }
  }, []);

  return (
    <View>
      <StatusBarCustom sb_color={COLORS.BLACK} />

      <View style={PartnerLoadsScreenStyles.container}>
        <View style={PartnerDashboardScreenStyles.appBarBGIMGBox}>
          <View style={PartnerDashboardScreenStyles.appBarIconBox} />
          <View style={PartnerDashboardScreenStyles.appBarBGIMGView}>
            <Image source={IMAGES.APPLOGINLOGOWHITE} style={PartnerDashboardScreenStyles.appBarBGIMG} />
          </View>

          <View style={PartnerDashboardScreenStyles.appBarIconBox}>
            <Image source={ICONS.WHITELOGOUT} style={{width: 24, height: 24}} />
          </View>
        </View>

        <View style={PartnerLoadsScreenStyles.searchBGImgBox}>
          <ImageBackground source={IMAGES.APPBARBG} style={PartnerLoadsScreenStyles.searchBGImg} resizeMode="stretch">
            <View style={PartnerLoadsScreenStyles.headerRow}>
              <View style={PartnerLoadsScreenStyles.headerBox}>
                <Text style={PartnerLoadsScreenStyles.headingTxt}>Trips</Text>
              </View>

              <View style={PartnerLoadsScreenStyles.searchBox}>
                <TextInput
                  onChangeText={val => SearchFn(val)}
                  value={Search}
                  style={[PartnerLoadsScreenStyles.searchIPTxtBox, {fontSize: Search == "" ? 12 : 14}]}
                  placeholder={"Ref No/Truck No/Trucer Name/Route Name"}
                  placeholderTextColor={"#646464"}
                  keyboardType="web-search"
                  inputMode="search"
                  autoFocus={false}
                  autoCapitalize="characters"
                />

                <View style={PartnerLoadsScreenStyles.searchIcnBox}>
                  <Image source={ICONS.BLACKSEARCH} style={{width: 20, height: 20}} />
                </View>
              </View>
            </View>

            <View ref={viewRef} onTouchEnd={() => setShowDropdown(true)} style={PartnerLoadsScreenStyles.fakeDropdown1}>
              <View style={{flex: 1, justifyContent: "center"}}>
                <Text style={PartnerLoadsScreenStyles.fakeDropdown1TextStyle}>{LOADSHIPPER?.companyInfo?.companyName}</Text>
              </View>

              <View style={{width: 32, height: 32, alignItems: "flex-end", justifyContent: "center"}}>
                <Image source={ICONS.BLACKDROPDOWN} style={{width: 12, height: 12, marginRight: 6}} />
              </View>
            </View>

            <CustomDropDown
              DATA={LOADPOINTLIST}
              dropdownStyle={PartnerLoadsScreenStyles.dropdown1}
              value={LOADPOINT?.label}
              placeholder={LOADPOINTLIST[0]?.label}
              onChange={onSelectLoadingPointFn}
            />
          </ImageBackground>
        </View>
  
        {TRIPSLIST?.length > 0 ? (
          <FlatList data={TRIPSLIST}
            showsVerticalScrollIndicator={false} 
            contentContainerStyle={{paddingBottom: 80}}
            // refreshControl={
            //   <RefreshControl 
            //     refreshing={refreshing} 
            //     onRefresh={onRefresh} 
            //     colors={[COLORS.PRIMARY]} // Customizing spinner colors
            //     progressBackgroundColor="#ffffff" // Customizing background color
            //   />
            // }
            renderItem={({item, index}) => 
              { 
                return (
                  <View onTouchEnd={goToPODFn.bind(this, item,index)} style={PartnerTripsScreenStyles.cardContentBox}>
                    <View style={PartnerTripsScreenStyles.cardContentBoxRow1}>
                      <Text style={PartnerTripsScreenStyles.vehicleNoTxt}>{item?.truck?.truckNumber}</Text>

                      <View style={PartnerTripsScreenStyles.cardContentBoxRow1a}>
                        <Text style={PartnerTripsScreenStyles.vehicleNoTxt1}>{item?.driverName}</Text>
                        <Image source={ICONS.BLACKCARSTEERING} style={{width: 14, height: 14, marginLeft: 7}} />
                      </View>
                    </View>

                    <View style={PartnerTripsScreenStyles.cardContentBoxRow2}>
                      <View style={PartnerTripsScreenStyles.cardContentBoxRow2a}>
                        <Text style={PartnerTripsScreenStyles.vehicleTypeTxt}>{item?.truck?.truckType + " " + item?.truck?.truckCapacity + "MT"}</Text>
                      </View>

                      <View style={PartnerTripsScreenStyles.cardContentBoxRow2b}>
                        <Text style={PartnerTripsScreenStyles.vehicleNoTxt1}>{item?.truck?.companyInfo?.companyName}</Text>
                        <Image source={ICONS.BLACKPICKUP} style={{width: 22, height: 22, marginLeft: 4, marginRight: -4}} />
                      </View>
                    </View>

                    <View style={PartnerTripsScreenStyles.cardContentBoxRow3}>
                      <Image source={ICONS.PRIMARYLOCATIONPIN} style={{width: 16, height: 16, marginRight: 8}} />
                      <Text style={PartnerTripsScreenStyles.locationTxt}>{item?.load?.sourceCity + " - " + item?.load?.destinationCity}</Text>
                    </View>

                    <View style={PartnerTripsScreenStyles.cardContentBoxRow4}>
                      <View style={PartnerTripsScreenStyles.cardContentBoxRow4a}>
                        <Text style={PartnerTripsScreenStyles.materialTxt}>{item?.load?.material?.materialName} <Text style={PartnerTripsScreenStyles.materialTypeTxt}>{item?.load?.material?.materialCategory}</Text></Text>
                        <Text style={PartnerTripsScreenStyles.tripIDTxt}>{item?.tripCode}</Text>
                      </View>

                      <View style={PartnerTripsScreenStyles.cardContentBoxRow4b}>
                        <View style={PartnerTripsScreenStyles.cardContentBoxRow4ba}>
                          <Text style={PartnerTripsScreenStyles.tripDateTxt}>{moment(item?.createdAt).format("DD-MM-YY")}</Text>
                          <Text style={PartnerTripsScreenStyles.shipperRefNumberTxt}>{item?.shipperRefNumber}</Text>
                        </View>

                        <View style={PartnerTripsScreenStyles.cardContentBoxRow4bRow}>
                          <View style={PartnerTripsScreenStyles.cardContentBoxRow4bRowaa}>
                            {(item?.podStatus == "LOADING_DOCUMENT_REJECTED_AND_UNLOADING_DOCUMENT_VERIFICATION_PENDING") ? (
                              <View>
                                <ImageBackground source={ICONS.REDROUNDABOUT} style={PartnerTripsScreenStyles.cardContentBoxRow4bRowCircleR}>
                                  <Text style={PartnerTripsScreenStyles.cardContentBoxRow4bRowCircleTxtB}>L</Text>
                                </ImageBackground>
                              </View>
                            ) : (
                              <View style={[PartnerTripsScreenStyles.cardContentBoxRow4bRowCircle, (item?.podStatus == "LOADING_DOCUMENT_VERIFIED" || item?.podStatus == "UNLOADING_DOCUMENT_VERIFICATION_PENDING") ? {backgroundColor: "#21a441", borderColor: "#106211"} : {backgroundColor: "#f16a10", borderColor: "#fcb45c"}]}>
                                <Text style={PartnerTripsScreenStyles.cardContentBoxRow4bRowCircleTxtW}>L</Text>
                              </View>
                            )}
                            <Text style={PartnerTripsScreenStyles.loadingValueTxt}>{((10 > parseInt(item?.loadingQuantity) && 0 <= parseInt(item?.loadingQuantity)) || item?.loadingQuantity == null) ? "0" : null}{Number(item?.loadingQuantity).toFixed(3)}</Text>
                          </View>

                          <View style={[PartnerTripsScreenStyles.cardContentBoxRow4bRowaa, {marginLeft: 12}]}>
                            {(item?.podStatus == "") ? (
                              <View>
                                <ImageBackground source={ICONS.REDROUNDABOUT} style={PartnerTripsScreenStyles.cardContentBoxRow4bRowCircleR}>
                                  <Text style={PartnerTripsScreenStyles.cardContentBoxRow4bRowCircleTxtB}>L</Text>
                                </ImageBackground>
                              </View>
                            ) : (
                              <View style={[PartnerTripsScreenStyles.cardContentBoxRow4bRowCircle, (item?.podStatus == "LOADING_DOCUMENT_VERIFIED" || item?.podStatus == "UNLOADING_DOCUMENT_VERIFICATION_PENDING") ? {backgroundColor: "#21a441", borderColor: "#106211"} : {backgroundColor: "#f16a10", borderColor: "#fcb45c"},]}>
                                <Text style={PartnerTripsScreenStyles.cardContentBoxRow4bRowCircleTxtW}>U</Text>
                              </View>
                            )}
                            <Text style={PartnerTripsScreenStyles.loadingValueTxt}>{((10 > parseInt(item?.unloadingQuantity) && 0 <= parseInt(item?.unloadingQuantity)) || item?.unloadingQuantity == null) ? "0" : null}{Number(item?.unloadingQuantity).toFixed(3)}</Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                )
              }
            }
          />
        ) : (
          <View style={PartnerLoadsScreenStyles.emptyBox}>
            <Text style={PartnerLoadsScreenStyles.emptyBoxTxt}>No Trips Available</Text>
          </View>
        )}
      </View>

      <Modal
        transparent={true}
        animationType={"none"}
        visible={showDropdown}
        onRequestClose={CloseCustomDropdownFn}
      >
        <View style={{ flex: 1, paddingLeft: (viewPosition?.x * 0.75), paddingRight: (viewPosition?.x * 5), paddingTop: (viewPosition?.y) - (viewPosition?.x)}}>
          <View style={{flex: 1, marginBottom: viewPosition?.x, borderRadius: 9,backgroundColor: COLORS.WHITE, ...helpersCSS.shadow3}}>
            <FlatList data={LOADSHIPPERLIST}
              renderItem={({item, index}) => 
                { 
                  return (
                    <View onTouchEnd={onSelectShipperFn.bind(this,item,index)} style={[PartnerLoadsScreenStyles.shipperdropContainer, index !== 0 ? {borderTopWidth: 2, borderTopColor: COLORS.PRIMARY} : null]}>
                      <Text style={PartnerLoadsScreenStyles.shipperdropTxt1}>{item?.companyInfo?.companyName}</Text>
                      <View style={PartnerLoadsScreenStyles.shipperdropTxt2Row}>
                        <Image source={ICONS.PRIMARYLOCATIONPIN} style={{width: 16, height: 16, marginRight: 4}} />
                        <Text style={PartnerLoadsScreenStyles.shipperdropTxt2}>{item?.companyInfo?.city}</Text>
                      </View>
                    </View>
                  )
                }
              }
            />
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default PartnerTripsScreen