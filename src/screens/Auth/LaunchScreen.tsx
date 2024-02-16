import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import { LaunchStyles } from './AuthStyles'
import { useNavigation } from '@react-navigation/native'
import { PHONENUMBERLOGIN } from '..'
import { COLORS } from '../../helpers/custom'
import StatusBarCustom from '../../components/StatusBarCustom'

const LaunchScreen = () => {

  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(PHONENUMBERLOGIN);
    }, 3000);
  }, []);

  return (
    <View style={LaunchStyles.container}>
      <StatusBarCustom sb_color={COLORS.BLACK} />
      <Text style={LaunchStyles.textPart1}>RAPID<Text style={LaunchStyles.textPart2}>TRUCK</Text></Text>
    </View>
  )
}

export default LaunchScreen