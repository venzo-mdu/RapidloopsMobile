import { View, Text, ImageBackground, ScrollView, FlatList, RefreshControl } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { API, COLORS, IMAGES } from '../../../helpers/custom';
import { NOTIFICATION } from '../..';
import StatusBarCustom from '../../../components/StatusBarCustom';
import { BankInfoScreenStyles, CompanyInfoScreenStyles, HomeScreenStyles, UserScreenStyles } from '../AppStyles';

const BankInfoScreen = () => {

  const navigation = useNavigation();

  useEffect(() => {
    getDataFn();
  }, []);

  const getDataFn = async () => {
    try {
      await fetch(API?.BankInfo + "?id=" + global.COMPANYID, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + global.TOKEN,
        }
      })
      .then((response) => response.json())
      .then((responseJson) => {
        setBANKINFO([responseJson?.bankInfo]);
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

  const [BANKINFO, setBANKINFO] = useState();

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
            <Text style={CompanyInfoScreenStyles.headingTxt}>Bank Info</Text>
          </View>
        </View>
        
        {BANKINFO?.length > 0 ? (
          <FlatList data={BANKINFO} 
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
                <View style={BankInfoScreenStyles.firstBox}>
                  <View style={BankInfoScreenStyles.firstBoxIndiv1}>
                    <Text style={BankInfoScreenStyles.firstBoxKeyTxt}>Fund Account Id</Text>
                    <Text style={BankInfoScreenStyles.firstBoxValueTxt}>{item?.fundAccountId}</Text>
                  </View>

                  <View style={BankInfoScreenStyles.firstBoxIndiv1}>
                    <Text style={BankInfoScreenStyles.firstBoxKeyTxt}>Account Number</Text>
                    <Text style={BankInfoScreenStyles.firstBoxValueTxt}>{item?.accountNumber}</Text>
                  </View>

                  <View style={BankInfoScreenStyles.firstBoxIndiv1}>
                    <Text style={BankInfoScreenStyles.firstBoxKeyTxt}>Account Name</Text>
                    <Text style={BankInfoScreenStyles.firstBoxValueTxt}>{item?.accountName}</Text>
                  </View>

                  <View style={BankInfoScreenStyles.firstBoxIndiv1}>
                    <Text style={BankInfoScreenStyles.firstBoxKeyTxt}>Branch Name</Text>
                    <Text style={BankInfoScreenStyles.firstBoxValueTxt}>{item?.branchName == "" ? "N/A" : item?.branchName}</Text>
                  </View>

                  <View style={BankInfoScreenStyles.firstBoxIndiv1}>
                    <Text style={BankInfoScreenStyles.firstBoxKeyTxt}>IFSC Code</Text>
                    <Text style={BankInfoScreenStyles.firstBoxValueTxt}>{item?.ifscCode}</Text>
                  </View>

                  <View>
                    <Text style={BankInfoScreenStyles.firstBoxKeyTxt}>Bank Name</Text>
                    <Text style={BankInfoScreenStyles.firstBoxValueTxt}>{item?.bankName}</Text>
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

export default BankInfoScreen