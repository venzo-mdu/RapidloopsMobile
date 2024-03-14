import React, { useState, useRef } from 'react';
import { View, TextInput, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomDropdown = ({ options }) => {

  const [query, setQuery] = useState('');
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const dropdownRef = useRef(null);

  const handleInputChange = (text) => {
    setQuery(text);
    const filtered = options.filter(option =>
      option.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredOptions(filtered);
  };

  const handleLayout = () => {
    // dropdownRef.current.measure((x, y, width, height, pageX, pageY) => {
    //   setPosition({ top: pageY + height, left: pageX });
    // });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleSelectOption(item)}>
      <Text>{item}</Text>
    </TouchableOpacity>
  );

  const handleSelectOption = (option) => {
    setQuery(option);
    // Do something with the selected option
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Type to search..."
        value={query}
        onChangeText={handleInputChange}
        onLayout={handleLayout}
      />
      {query.length > 0 && (
        <View style={[styles.dropdown, position]} ref={dropdownRef}>
          <FlatList
            data={filteredOptions}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    top: 50,
    backgroundColor: 'wheat',
  },
  dropdown: {
    position: 'absolute',
    // backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 5,
    maxHeight: 150,
    zIndex: 999,
  },
});

export default CustomDropdown;
