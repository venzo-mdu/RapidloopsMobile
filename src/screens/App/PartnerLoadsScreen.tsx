import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useRef, useState } from 'react'
import { FlatList, Image, ImageBackground, Modal, Text, TextInput, UIManager, View, findNodeHandle } from 'react-native'
import { PARTNERLOADDETAILS } from '..'
import CustomDropDown from '../../components/CustomDropDown'
import StatusBarCustom from '../../components/StatusBarCustom'
import { API, COLORS, ICONS, IMAGES, helpersCSS } from '../../helpers/custom'
import { PartnerDashboardScreenStyles, PartnerLoadsScreenStyles } from './AppStyles'

const PartnerLoadsScreen = () => {

  const navigation = useNavigation();

  useEffect(() => {
    getDataFn();
  }, []);

  const getDataFn = async () => {
    try {
      await fetch(API?.PartnerAccessAreas + "?id=" + global.USERID, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + global.TOKEN,
        }
      })
      .then((response) => response.json())
      .then((responseJson) => {
        console.error("Partner AccessAreas : ",responseJson?.list?.length);

        loadShipperFn(responseJson?.list[0]); // location dropdown
        
        setLOADSHIPPERLIST(responseJson?.list); // shipper dropdown

        getLoadDataFn(responseJson?.list[0]?.companyId, responseJson?.list[0]?.loadingPoint[0], "");

      })
      .catch((error) => {
        console.log(error);
      });
    } catch (error) {
      console.error("catch : ", error);
    }
  };

  const loadShipperFn = (loadShipperList) => {
    console.log("loadShipperList : ",loadShipperList?.loadingPoint?.length)
    setLOADSHIPPER(loadShipperList);

    var city = loadShipperList?.loadingPoint;
    var arr = [];

    for (let i = 0; i < city?.length; i++) {
      arr.push({ label: city[i], value: city[i] });
    }
    console.log("arr", arr?.length, arr);

    setLOADPOINT(arr[0]);

    setLOADPOINTLIST(arr);
  };

  const getLoadDataFn = async (companyId, loadingPoint, search) => {
    console.warn("body :: ", companyId, loadingPoint, search)
    try {
      await fetch(API?.PartnerLoadList + "?companyId=" + companyId + "&loadingPoint=" + loadingPoint + "&query=" + search + "&offset=" + 0 + "&limit=" + 10000 , {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + global.TOKEN,
        },
      })
      .then((res) => res.json())
      .then((resJson) => {
        console.warn("load list : ",resJson?.list?.length);
        setLOADLIST(resJson?.list);
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

  const [LOADLIST, setLOADLIST] = useState([]);

  const [Search, setSearch] = useState("");

  const [showDropdown, setShowDropdown] = useState(false);

  const CloseCustomDropdownFn = () => {
    setShowDropdown(false);
  };

  const onSelectShipperFn = async (item, index) => {
    console.log(item, index);
    loadShipperFn(item);
    await getLoadDataFn(item?.companyId, item?.loadingPoint[0], "");
    CloseCustomDropdownFn();
  };

  const onSelectLoadingPointFn = async (item) => {
    console.log("filter BasedOnLoadingPointFn", item);
    setLOADPOINT({label: item?.label, value: item?.value});
    await getLoadDataFn(LOADSHIPPER?.companyId, item?.value, "");
  };

  const SearchFn = async (val) => {
    setSearch(val);
    await getLoadDataFn(LOADSHIPPER?.companyId, LOADPOINT?.value, val);
  };

  const goToDetailsFn = (item,index) => {
    console.log(item)
    const loadId = item?.loadId;
    console.log(loadId)
    navigation.navigate(PARTNERLOADDETAILS, {loadId});
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
                <Text style={PartnerLoadsScreenStyles.headingTxt}>Loads</Text>
              </View>

              <View style={PartnerLoadsScreenStyles.searchBox}>
                <TextInput
                  onChangeText={val => SearchFn(val)}
                  value={Search}
                  style={[PartnerLoadsScreenStyles.searchIPTxtBox, {fontSize: Search == "" ? 12 : 14}]}
                  placeholder={"Route/Material"}
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
  
        {LOADLIST?.length > 0 ? (
          <FlatList data={LOADLIST}
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
                  <View onTouchEnd={goToDetailsFn.bind(this,item,index)} style={PartnerLoadsScreenStyles.cardContentBox}>
                    <View style={PartnerLoadsScreenStyles.cardContentBoxRow1}>
                      <Text style={PartnerLoadsScreenStyles.loadIDTxt}>{item?.loadTag}</Text>

                      <View style={PartnerLoadsScreenStyles.cardContentBoxRow1Column}>
                        <Text style={PartnerLoadsScreenStyles.materialTxt}>{item?.material?.materialName}</Text>
                        <Text style={PartnerLoadsScreenStyles.materialTypeTxt}>{item?.material?.materialCategory}</Text>
                      </View>
                    </View>

                    <View style={PartnerLoadsScreenStyles.cardContentBoxRow2}>
                      <Image source={ICONS.PRIMARYLOCATIONPIN} style={{width: 16, height: 16, marginRight: 8}} />
                      <Text style={PartnerLoadsScreenStyles.locationTxt}>{item?.sourceCity + " - " + item?.destinationCity}</Text>
                    </View>

                    <View style={PartnerLoadsScreenStyles.cardContentBoxRow3}>
                      <View style={PartnerLoadsScreenStyles.cardContentBoxRow3a}>
                        <Image source={ICONS.DRAWERTRUCKINACTIVE} style={{width: 18, height: 18, marginRight: 6}} />
                        <Text style={PartnerLoadsScreenStyles.vehicleTxt}>{item?.loadTruckTypes[0]?.truckType}</Text>
                      </View>

                      <Text style={PartnerLoadsScreenStyles.rateTxt}>{"\u20B9" + " " + Number(item?.truckerRate).toLocaleString()}</Text>
                    </View>
                  </View>
                )
              }
            }
          />
        ) : (
          <View style={PartnerLoadsScreenStyles.emptyBox}>
            <Text style={PartnerLoadsScreenStyles.emptyBoxTxt}>No Loads Available</Text>
          </View>
        )}
      </View>

      <Modal
        transparent={true}
        animationType={"none"}
        visible={showDropdown}
        onRequestClose={CloseCustomDropdownFn}
      >
        <View onTouchEnd={CloseCustomDropdownFn} style={{ flex: 1, paddingLeft: (viewPosition?.x * 0.75), paddingRight: (viewPosition?.x * 5), paddingTop: (viewPosition?.y) - (viewPosition?.x)}}>
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

export default PartnerLoadsScreen