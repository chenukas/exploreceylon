import * as React from 'react';
import { TouchableOpacity, Button, View, Text, SafeAreaView, StyleSheet, ScrollView, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import places from './places';

const searchCity = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <View >
        <Text style={styles.titleText}>Search a City</Text> 
        <Button
        title="Go to Details"
        onPress={() => navigation.navigate("places")}
      />
      </View> 
        
    </SafeAreaView>
  );
}

function back() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="City">
        <Stack.Screen name="City" component={searchCity} />
        {/* <Stack.Screen name="place" component={searchPlace} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  titleText: {
    color: "#000",
    fontSize: 28,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 5,
  }
});

export default searchCity;