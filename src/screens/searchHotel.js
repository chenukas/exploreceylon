import * as React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";

const searchHotel = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Text>Search Hotel</Text>
      </View>
    </SafeAreaView>
  );
};

export default searchHotel;
