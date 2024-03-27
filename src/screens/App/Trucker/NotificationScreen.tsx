import { View, Text, ImageBackground, Image, ScrollView, FlatList, RefreshControl } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import moment from 'moment'
import { API, COLORS, ICONS, IMAGES } from '../../../helpers/custom'
import { TRIPSSTACK } from '../..'
import StatusBarCustom from '../../../components/StatusBarCustom'
import { NotificationScreenStyles } from '../AppStyles'

const NotificationScreen = () => {

  const navigation = useNavigation();

  useEffect(() => {
    getDataFn();
  }, []);

  const getDataFn = async () => {
    try {
      await fetch(API?.NotificationsList + "?id=" + global.COMPANYID, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + global.TOKEN,
        }
      })
      .then((response) => response.json())
      .then((responseJson) => {
        setNOTIFICATION(responseJson?.list);
        setRefreshing(false);
      })
      .catch((error) => {
        console.log(error);
        setRefreshing(false);
      });
    } catch (error) {
      console.error("catch : ", error);
      setRefreshing(false);
    }
  };

  const [NOTIFICATION, setNOTIFICATION] = useState();

  const viewNotificationFn = async (item) => {
    if(!item?.isViewed) {
      try {
        await fetch(API?.NotificationsViewed + "?id=" + item?.notificationId, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + global.TOKEN,
          }
        })
        .then((response) => response.json())
        .then((responseJson) => {
        })
        .catch((error) => {
          console.error(error);
        });
      } catch (error) {
        console.error("catch : ", error);
      }
      await getDataFn();
    
      navigation.navigate(TRIPSSTACK, {screen: TRIPS});
    }
  };
  
  const [refreshing, setRefreshing] = useState(false);
  
  const onRefresh = async () => {
    setRefreshing(true);
    await getDataFn();
  };

  const goBackFn = () => {
    navigation.goBack();
  };

  return (
    <View>
      <StatusBarCustom sb_color={COLORS.PRIMARY} />

      <View style={NotificationScreenStyles.container}>
        <View style={NotificationScreenStyles.appBarBGIMGBox}>
          <ImageBackground source={IMAGES.NOTIFICATIONBGIMG} style={NotificationScreenStyles.appBarBGIMG}>
          
          </ImageBackground>
        </View>

        <View style={NotificationScreenStyles.bannerBG}>
          <View style={NotificationScreenStyles.appHeadingBox}>
            <View onTouchEnd={goBackFn} style={NotificationScreenStyles.backBtnBox}>
              <Image source={ICONS.WHITELEFTARR} style={{width: 16, height: 16}} />
            </View>
            
            <View>
              <Text style={NotificationScreenStyles.headingTxt}>Notifications</Text>
            </View>
          </View>
        </View>

        <FlatList data={NOTIFICATION}
          contentContainerStyle={{paddingTop: 16, paddingBottom: 80}}
          refreshControl={
            <RefreshControl
              refreshing={refreshing} 
              onRefresh={onRefresh} 
              colors={[COLORS.PRIMARY]} // Customizing spinner colors
              progressBackgroundColor="#ffffff" // Customizing background color
            />
          }
          renderItem={({item, index}) => 
            { 
              return (
                <View onTouchEnd={viewNotificationFn.bind(this, item)}>
                  {moment(NOTIFICATION[index]?.createdAt).format("DD-MMM") != moment(NOTIFICATION[index - 1]?.createdAt).format("DD-MMM") ? (
                    <>
                      <Text style={NotificationScreenStyles.subHeadingTxt}>{moment(item?.createdAt).format("DD-MMM")}</Text>
                    </>
                  ) : null}
                  
                  <View style={NotificationScreenStyles.msgCard}>
                    <View style={NotificationScreenStyles.msgCard1}>
                      <Text style={NotificationScreenStyles.timeTxt}>{moment(item?.createdAt).format("hh:mm a")}</Text>
                      <Text style={NotificationScreenStyles.msgTxt}>{item?.description}</Text>
                    </View>

                    {item?.isViewed ? (
                      <View style={NotificationScreenStyles.msgCard2}>
                        <Image source={ICONS.LIGHTGREYEYE} style={{width: 16, height: 16}} />
                      </View>
                    ) : (
                      <View style={NotificationScreenStyles.msgCard2} />
                    )}
                  </View>
                </View>
              )
            }
          }
        />
      </View>
    </View>
  )
}

export default NotificationScreen