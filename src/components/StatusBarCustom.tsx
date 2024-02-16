import React from 'react'
import { StatusBar } from 'react-native'

const StatusBarCustom = (props) => {
  return (
    <StatusBar backgroundColor={props.sb_color} barStyle={props.dark ? "dark-content" : "light-content"} />
  )
}

export default StatusBarCustom