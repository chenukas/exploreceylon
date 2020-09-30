import * as React from 'react';
import { TouchableOpacity, View, Text, SafeAreaView, StyleSheet, ScrollView, Image, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import places from './places';

const searchCity = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>

      <Text style={styles.titleText}>Search a City</Text>
      {/* <SearchBar
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search}
        /> */}
      <ScrollView>
        <TouchableOpacity style={styles.cards} onPress={() => navigation.navigate("ampara")}>
          <View >
            <Text style={{ fontSize: 20, color: '#222' }}>Ampara</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cards} onPress={() => navigation.navigate("anuradhapura")}>
          <View >
            <Text style={{ fontSize: 20, color: '#222' }}>Anuradhapura</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cards} onPress={() => navigation.navigate("badulla")}>
          <View >
            <Text style={{ fontSize: 20, color: '#222' }}>Badulla</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cards} >
          <View >
            <Text style={{ fontSize: 20, color: '#222' }}>Colombo</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cards} onPress={() => navigation.navigate("galle")}>
          <View >
            <Text style={{ fontSize: 20, color: '#222' }}>Galle</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cards} >
          <View >
            <Text style={{ fontSize: 20, color: '#222' }}>Gampaha</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cards} onPress={() => navigation.navigate("##")}>
          <View >
            <Text style={{ fontSize: 20, color: '#222' }}>Jaffna</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cards} onPress={() => navigation.navigate("##")}>
          <View >
            <Text style={{ fontSize: 20, color: '#222' }}>Kaluthara</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cards} onPress={() => navigation.navigate("##")}>
          <View >
            <Text style={{ fontSize: 20, color: '#222' }}>Kandy</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cards} onPress={() => navigation.navigate("##")}>
          <View >
            <Text style={{ fontSize: 20, color: '#222' }}>Matara</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cards} onPress={() => navigation.navigate("##")}>
          <View >
            <Text style={{ fontSize: 20, color: '#222' }}>Nuwaraeliya</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cards} onPress={() => navigation.navigate("##")}>
          <View >
            <Text style={{ fontSize: 20, color: '#222' }}>Polonnaruwa</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cards} onPress={() => navigation.navigate("##")}>
          <View >
            <Text style={{ fontSize: 20, color: '#222' }}>Rathnapura</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cards} onPress={() => navigation.navigate("##")}>
          <View >
            <Text style={{ fontSize: 20, color: '#222' }}>Trincomalee</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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