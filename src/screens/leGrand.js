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
import Carousel from "../components/Carousel";
import { dummyData } from "../data/Data";

const leGrand = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Carousel data={dummyData} />
      </View>
    </SafeAreaView>
  );
};

export default leGrand;
