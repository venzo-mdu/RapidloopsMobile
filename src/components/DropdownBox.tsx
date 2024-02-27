import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ICONS } from '../helpers/custom'

const DropdownBox = (props) => {
  return (
    <View style={{width: 32, height: 32, alignItems: "flex-end", justifyContent: "center"}}>
      <Image source={ICONS.BLACKDROPDOWN} style={{width: 12, height: 12, marginRight: 6}} />
    </View>
  )
}

export default DropdownBox