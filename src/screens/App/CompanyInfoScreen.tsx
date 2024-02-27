import { View, Text, ImageBackground, ScrollView, Image, FlatList, RefreshControl } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import StatusBarCustom from '../../components/StatusBarCustom';
import { API, COLORS, IMAGEBASEURL, IMAGES } from '../../helpers/custom';
import { CompanyInfoScreenStyles, HomeScreenStyles, UserScreenStyles } from './AppStyles';
import { NOTIFICATION } from '..';

const CompanyInfoScreen = () => {

  const navigation = useNavigation();

  useEffect(() => {
    getDataFn();
  }, []);

  const getDataFn = async () => {
    try {
      await fetch(API?.CompanyInfo + "?id=" + global.COMPANYID, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + global.TOKEN,
        }
      })
      .then((response) => response.json())
      .then((responseJson) => {
        setCOMPANYINFO([responseJson?.companyInfo]);
        setRefreshing(false);
      })
      .catch((error) => {
        console.error(error);
        setRefreshing(false);
      });
    } catch (error) {
      console.error("catch : ", error);
      setRefreshing(false);
    }
  };

  const [COMPANYINFO, setCOMPANYINFO] = useState();

  const [refreshing, setRefreshing] = useState(false);
  
  const onRefresh = async () => {
    setRefreshing(true);
    await getDataFn();
  };

  const NotificationFn = () => {
    navigation.navigate(NOTIFICATION);
  };

  const openDrawer = () => {
    navigation.toggleDrawer();
  };

  return (
    <View>
      <StatusBarCustom sb_color={COLORS.PRIMARY} />

      <View style={HomeScreenStyles.container}>
        <View style={HomeScreenStyles.appBarBGIMGBox}>
          <ImageBackground source={IMAGES.HOMEBGIMG} style={HomeScreenStyles.appBarBGIMG}>
            <View style={HomeScreenStyles.appBarRowBox}>
              <View onTouchEnd={openDrawer} style={HomeScreenStyles.menuBox} />

              <View onTouchEnd={NotificationFn} style={HomeScreenStyles.bellBox} />
            </View>
          </ImageBackground>
        </View>

        <View style={CompanyInfoScreenStyles.bannerBG}>
          <View style={CompanyInfoScreenStyles.headerBox}>
            <Text style={CompanyInfoScreenStyles.headingTxt}>Company Info</Text>
          </View>
        </View>

        {COMPANYINFO?.length > 0 ? (
          <FlatList data={COMPANYINFO} 
            showsVerticalScrollIndicator={false} 
            style={CompanyInfoScreenStyles.scrollBox}
            refreshControl={
              <RefreshControl
                refreshing={refreshing} 
                onRefresh={onRefresh} 
                colors={[COLORS.PRIMARY]} // Customizing spinner colors
                progressBackgroundColor="#ffffff" // Customizing background color
              />
            }
            renderItem={({item, index}) => (
              <>
                <View style={CompanyInfoScreenStyles.firstBox}>
                  <Image source={{uri : IMAGEBASEURL + item?.companyProfilePicture}} style={CompanyInfoScreenStyles.userProfileCoverImg} />
                  <Text style={CompanyInfoScreenStyles.userNameTxt}>{item?.companyName}</Text>
                  <Text style={CompanyInfoScreenStyles.userIDTxt}>{item?.companyCode}</Text>
                </View>

                <View style={CompanyInfoScreenStyles.secondBox}>
                  <View style={CompanyInfoScreenStyles.secondBoxIndiv1}>
                    <Text style={CompanyInfoScreenStyles.secondBoxKeyTxt}>Registered business name</Text>
                    <Text style={CompanyInfoScreenStyles.secondBoxValueTxt}>{item?.registerBusinessName}</Text>
                  </View>

                  <View style={CompanyInfoScreenStyles.secondBoxIndiv2}>
                    <View>
                      <Text style={CompanyInfoScreenStyles.secondBoxKeyTxt}>Company type</Text>
                      <Text style={CompanyInfoScreenStyles.secondBoxValueTxt}>{item?.companyType}</Text>
                    </View>

                    <View>
                      <Text style={CompanyInfoScreenStyles.secondBoxKeyTxt}>No of Truck</Text>
                      <Text style={CompanyInfoScreenStyles.secondBoxValueTxt}>{item?.numberOfTrucks}</Text>
                    </View>

                    <View>
                      <Text style={CompanyInfoScreenStyles.secondBoxKeyTxt}>TDS</Text>
                      <Text style={CompanyInfoScreenStyles.secondBoxValueTxt}>{item?.tds + "%"}</Text>
                    </View>
                  </View>

                  <View style={CompanyInfoScreenStyles.secondBoxIndiv3}>
                    <Text style={CompanyInfoScreenStyles.secondBoxKeyTxt}>Address line</Text>
                    <Text style={[CompanyInfoScreenStyles.secondBoxValueTxt, {textTransform: "capitalize"}]}>{item?.addressLine}</Text>
                  </View>

                  <View style={CompanyInfoScreenStyles.secondBoxIndiv4}>
                    <View style={{flex: 1}}>
                      <View style={CompanyInfoScreenStyles.secondBoxIndiv4a}>
                        <Text style={CompanyInfoScreenStyles.secondBoxKeyTxt}>PAN</Text>
                        <Text style={CompanyInfoScreenStyles.secondBoxValueTxt}>{item?.pan}</Text>
                      </View>

                      <View style={CompanyInfoScreenStyles.secondBoxIndiv4a}>
                        <Text style={CompanyInfoScreenStyles.secondBoxKeyTxt}>PAN Name</Text>
                        <Text style={CompanyInfoScreenStyles.secondBoxValueTxt}>{item?.nameOnPAN}</Text>
                      </View>

                      <View>
                        <Text style={CompanyInfoScreenStyles.secondBoxKeyTxt}>GST Treatment</Text>
                        <Text style={CompanyInfoScreenStyles.secondBoxValueTxt}>{item?.gstTreatment}</Text>
                      </View>
                    </View>

                    <View>
                      <View style={CompanyInfoScreenStyles.secondBoxIndiv4b}>
                        <Text style={CompanyInfoScreenStyles.secondBoxKeyTxt}>PAN Document</Text>

                        <View style={CompanyInfoScreenStyles.secondBoxDocumentBox}>
                          <View style={CompanyInfoScreenStyles.secondBoxDocumentImgBox}>
                            <Image source={{uri : IMAGEBASEURL + item?.panDoc}} style={CompanyInfoScreenStyles.secondBoxDocumentImg} />
                          </View>

                          <View>
                            <Text style={CompanyInfoScreenStyles.secondBoxDocumentBoxTxt}>PAN{"\n"}DOC</Text>
                          </View>
                        </View>
                      </View>

                      <View>
                        <Text style={CompanyInfoScreenStyles.secondBoxKeyTxt}>GST Document</Text>

                        <View style={CompanyInfoScreenStyles.secondBoxDocumentBox}>
                          <View style={CompanyInfoScreenStyles.secondBoxDocumentImgBox}>
                            <Image source={{uri : IMAGEBASEURL + item?.panDoc}} style={CompanyInfoScreenStyles.secondBoxDocumentImg} />
                          </View>

                          <View>
                            <Text style={CompanyInfoScreenStyles.secondBoxDocumentBoxTxt}>GST{"\n"}DOC</Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>

                  <View style={CompanyInfoScreenStyles.secondBoxIndiv5}>
                    <Text style={CompanyInfoScreenStyles.secondBoxKeyTxt}>CSTIN Number</Text>
                    <Text style={CompanyInfoScreenStyles.secondBoxValueTxt}>{item?.pan}</Text>
                  </View>

                  <View style={CompanyInfoScreenStyles.secondBoxIndiv6}>
                    <Text style={CompanyInfoScreenStyles.secondBoxKeyTxt}>Source of Supply</Text>
                    <Text style={CompanyInfoScreenStyles.secondBoxValueTxt}>{item?.sourceOfSupply}</Text>
                  </View>
                </View>
              </>
            )}
          /> 
        ) : (
          <View style={UserScreenStyles.noDataBox}>
            <Text style={UserScreenStyles.noDataBoxTxt}>No data available</Text>
          </View>
        )}
      </View>
    </View>
  )
}

export default CompanyInfoScreen