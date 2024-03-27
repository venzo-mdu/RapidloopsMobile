import { View, Text, ImageBackground, Image, ScrollView, FlatList, Linking } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import moment from 'moment'
import { API, COLORS, ICONS, IMAGES } from '../../../helpers/custom'
import { ASSIGNTRUCK } from '../..'
import StatusBarCustom from '../../../components/StatusBarCustom'
import { LoadDetailsScreenStyles } from '../AppStyles'

const LoadDetailsScreen = (props) => {

  const navigation = useNavigation();

  useEffect(() => {
    getDataFn();
  }, []);

  const getDataFn = async () => {
    try {
      await fetch(API?.LoadDetails + "?id=" + props.route.params?.loadID, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + global.TOKEN,
        }
      })
      .then((response) => response.json())
      .then((responseJson) => {
        setLOADDETAILS([responseJson?.list]);
        setAvailableQuantity(parseInt(responseJson?.list?.availableQuantity).toFixed(3));
      })
      .catch((error) => {
        console.error(error);
      });
    } catch (error) {
      console.error("catch : ", error);
    }
  };

  const [LOADDETAILS, setLOADDETAILS] = useState();
  const [availableQuantity, setAvailableQuantity] = useState();

  const CreateTripFn = () => {
    const loadID = props.route.params?.loadID
    navigation.navigate(ASSIGNTRUCK, {loadID});
  };

  const CallFn = (phoneNumber) => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  const goBackFn = () => {
    navigation.goBack();
  };

  return (
    <View>
      <StatusBarCustom sb_color={COLORS.PRIMARY} />

      <View style={LoadDetailsScreenStyles.container}>
        <View style={LoadDetailsScreenStyles.appBarBGIMGBox}>
          <ImageBackground source={IMAGES.LOADSDETAILSBG} style={LoadDetailsScreenStyles.appBarBGIMG}>
            
          </ImageBackground>
        </View>

        <View style={LoadDetailsScreenStyles.appHeadingBox}>
          <View onTouchEnd={goBackFn} style={LoadDetailsScreenStyles.backBtnBox}>
            <Image source={ICONS.WHITELEFTARR} style={{width: 16, height: 16}} />
          </View>
          <View style={LoadDetailsScreenStyles.headerBox}>
            <Text style={LoadDetailsScreenStyles.headingTxt}>Load Detail</Text>
          </View>
        </View>

        <FlatList data={LOADDETAILS}
          showsVerticalScrollIndicator={false} 
          renderItem={({item, index}) => 
            { 
              return (
                <View>
                  <View style={LoadDetailsScreenStyles.cardBox1}>
                    <View style={LoadDetailsScreenStyles.cardBox1a}>
                      <View>
                        <Text style={LoadDetailsScreenStyles.cardBox1KeyTxt}>Material</Text>
                        <Text style={LoadDetailsScreenStyles.cardBox1Value1Txt}>{item?.material?.materialName} <Text style={LoadDetailsScreenStyles.cardBox1Value2Txt}>{item?.material?.materialCategory}</Text></Text>
                      </View>

                      <View>
                        <Text style={LoadDetailsScreenStyles.cardBox1KeyTxt}>Load availabilty date and time</Text>
                        <Text style={LoadDetailsScreenStyles.cardBox1Value1Txt}>{moment(item?.availabilityDataAndTime).format("DD/MM/YYYY")} <Text style={LoadDetailsScreenStyles.cardBox1Value2Txt}>{moment(item?.availabilityDataAndTime).format("hh:mm a")}</Text></Text>
                      </View>
                    </View>

                    <View style={LoadDetailsScreenStyles.cardBox1b}>
                      <View>
                        <Text style={LoadDetailsScreenStyles.cardBox1KeyTxt}>Rate</Text>
                        <Text style={LoadDetailsScreenStyles.cardBox1Value1Txt}>{parseInt(item?.ratePerUnit).toFixed(2)} <Text style={LoadDetailsScreenStyles.cardBox1Value2Txt}>/MT</Text></Text>
                      </View>

                      <View>
                        <Text style={LoadDetailsScreenStyles.cardBox1KeyTxt}>Tolerance</Text>
                        <Text style={LoadDetailsScreenStyles.cardBox1Value1Txt}>{item?.tolerance + " " + "%"}</Text>
                      </View>
                    </View>
                  </View>

                  <View style={LoadDetailsScreenStyles.cardBox2}>
                    <Text style={LoadDetailsScreenStyles.cardBox2HeadingTxt}>Loading Point</Text>
                    <Text style={LoadDetailsScreenStyles.cardBox2LocationTxt}>{item?.sourceLocationAddress}</Text>
                    <Text style={LoadDetailsScreenStyles.cardBox2LocationCityTxt}>{item?.sourceCity}</Text>
                    <Text style={LoadDetailsScreenStyles.cardBox2LocationTxt}>{item?.sourceState}</Text>

                    <View style={LoadDetailsScreenStyles.cardBox2Row}>
                      <View style={LoadDetailsScreenStyles.cardBox2ProfileBox}>
                        <Image source={ICONS.LIGHTGREYUSER} style={{width: 16, height: 16}} />
                      </View>

                      <View style={LoadDetailsScreenStyles.cardBox2ProfileTxtBox}>
                        <Text style={LoadDetailsScreenStyles.cardBox2ProfileNameTxt}>{item?.sourceSupervisorName}</Text>
                        <Text style={LoadDetailsScreenStyles.cardBox2ProfilePositionTxt}>Supervisor</Text>
                      </View>

                      <View onTouchEnd={CallFn.bind(this,item?.sourcePhoneNumber)} style={LoadDetailsScreenStyles.cardBox2CallBox}>
                        <Image source={ICONS.WHITECALL} style={{width: 12, height: 12}} />
                      </View>
                    </View>
                  </View>

                  <View style={LoadDetailsScreenStyles.cardBox2}>
                    <Text style={LoadDetailsScreenStyles.cardBox2HeadingTxt}>Unloading Point</Text>
                    <Text style={LoadDetailsScreenStyles.cardBox2LocationTxt}>{item?.destinationLocationAddress}</Text>
                    <Text style={LoadDetailsScreenStyles.cardBox2LocationCityTxt}>{item?.destinationCity}</Text>
                    <Text style={LoadDetailsScreenStyles.cardBox2LocationTxt}>{item?.destinationState}</Text>

                    <View style={LoadDetailsScreenStyles.cardBox2Row}>
                      <View style={LoadDetailsScreenStyles.cardBox2ProfileBox}>
                        <Image source={ICONS.LIGHTGREYUSER} style={{width: 16, height: 16}} />
                      </View>

                      <View style={LoadDetailsScreenStyles.cardBox2ProfileTxtBox}>
                        <Text style={LoadDetailsScreenStyles.cardBox2ProfileNameTxt}>{item?.destinationSupervisorName}</Text>
                        <Text style={LoadDetailsScreenStyles.cardBox2ProfilePositionTxt}>Supervisor</Text>
                      </View>

                      <View onTouchEnd={CallFn.bind(this,item?.destinationPhoneNumber)} style={LoadDetailsScreenStyles.cardBox2CallBox}>
                        <Image source={ICONS.WHITECALL} style={{width: 12, height: 12}} />
                      </View>
                    </View>
                  </View>

                  <View style={LoadDetailsScreenStyles.cardBox4}>
                    <Text style={LoadDetailsScreenStyles.cardBox2HeadingTxt}>Required truck type</Text>
                    <View style={LoadDetailsScreenStyles.cardBox4Row}>
                      <Image source={ICONS.DRAWERTRUCKINACTIVE} style={{width: 14, height: 14, marginRight: 5}} />
                      <Text style={LoadDetailsScreenStyles.cardBox4RowTxt}>{item?.loadTruckTypes[0]?.truckType}</Text>
                    </View>
                  </View>
                </View>
              )
            }
          }
        />

        <View style={[LoadDetailsScreenStyles.bottomStickRow,{paddingBottom: 80}]}>
          <View style={LoadDetailsScreenStyles.bottomStickRowBox}>
            <Text style={LoadDetailsScreenStyles.bottomStickRowBoxKeyTxt}>Available Quantity</Text>
            <Text style={LoadDetailsScreenStyles.bottomStickRowBoxValueTxt}>{availableQuantity} <Text style={LoadDetailsScreenStyles.bottomStickRowBoxValue1Txt}>MT</Text></Text>
          </View>

          <View onTouchEnd={CreateTripFn} style={LoadDetailsScreenStyles.bottomStickCreateTripBox}>
            <Text style={LoadDetailsScreenStyles.bottomStickCreateTripBoxTxt}>Create Trip</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default LoadDetailsScreen