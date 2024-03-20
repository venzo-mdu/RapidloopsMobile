import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Dropdown } from 'react-native-element-dropdown'
import { COLORS, FONTS, ICONS } from '../helpers/custom'

const CustomDropDown = (props) => {
  return (
    <View>
      <Dropdown
        data={props.DATA}
        labelField="label"
        valueField="value"
        style={props.dropdownStyle}
        containerStyle={styles.dropdownContainerStyle}
        itemContainerStyle={styles.dropdownItemContainerStyle}
        placeholderStyle={styles.dropdownPlaceholderStyle}
        selectedTextStyle={styles.dropdownSelectedTextStyle}
        inputSearchStyle={styles.dropdownInputSearchStyle}
        iconStyle={styles.dropdownIconStyle}
        search={false}
        maxHeight={200}
        itemTextStyle={styles.dropdownItemTextStyle}
        placeholder={props.placeholder}
        searchPlaceholder="Search..."
        value={props.value}
        // onFocus={() => setIsFocus(true)}
        // onBlur={() => setIsFocus(false)}
        // onChange={item => filterBasedOnShippersFn(item)}
        onChange={item => props.onChange(item)}
        activeColor={"#BF841E99"}
        renderRightIcon={() => (
          <View style={{width: 32, height: 32, alignItems: "flex-end", justifyContent: "center"}}>
            <Image source={ICONS.BLACKDROPDOWN} style={{width: 12, height: 12, marginRight: 6}} />
          </View>
        )}
      />
    </View>
  )
}

export default CustomDropDown

const styles = StyleSheet.create({
  dropdownContainerStyle: {
    backgroundColor: COLORS.WHITE,
  },
  dropdownItemContainerStyle: {
    backgroundColor: COLORS.WHITE,
  },
  dropdownPlaceholderStyle: {
    fontSize: 12,
    color: '#534e45',
    fontFamily: FONTS.MontserratSemiBold,
  },
  dropdownSelectedTextStyle: {
    fontSize: 12,
    color: COLORS.GREY,
    fontFamily: FONTS.MontserratSemiBold,
  },
  dropdownIconStyle: {
    width: 20,
    height: 20,
  },
  dropdownItemTextStyle: {
    fontSize: 12,
    color: COLORS.BLACK,
    fontFamily: FONTS.MontserratMedium,
    marginHorizontal: -15,
    marginVertical: -15,
  },
  dropdownInputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});