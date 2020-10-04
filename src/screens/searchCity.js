// Searching using Search Bar Filter in React Native List View
// https://aboutreact.com/react-native-search-bar-filter-on-listview/

import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, StyleSheet, View, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { cityData } from '../data/citiesData';

const searchCity = ({ navigation }) => {
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  useEffect(() => {
    setFilteredDataSource(cityData);
    setMasterDataSource(cityData);
  }, []);

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const ItemView = ({ item,navigation }) => {
    return (
      // Flat List Item
      <TouchableOpacity onPress={() => navigation.navigate("badulla")} style={styles.cards}>
        <Text>
          {item.title.toUpperCase()}
        </Text>
      </TouchableOpacity>

    );
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={styles.titleText}>Search a City</Text>
      <SearchBar
        round
        lightTheme
        searchIcon={{ size: 24 }}
        onChangeText={(text) => searchFilterFunction(text)}
        onClear={(text) => searchFilterFunction('')}
        placeholder="Type Here..."
        value={search}
      />
      <ScrollView>
        <FlatList
          data={filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  itemStyle: {
    padding: 10,
  },
  titleText: {
    color: "#000",
    fontSize: 28,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 5,
    marginBottom: 20,
  },

  cards: {
    padding: 15,
    borderColor: "#fcc221",
    borderRadius: 10,
    borderWidth: 1,
    marginVertical: 2,
    marginHorizontal: 16,
  },
});

export default searchCity;
