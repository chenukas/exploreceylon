import * as React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import Carousel from "../components/Carousel";
import { dummyData } from "../data/Data";

const { width, heigth } = Dimensions.get("window");

const leGrand = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Carousel data={dummyData} />
        <ScrollView>
          <View
            style={{
              backgroundColor: "yellow",
              borderRadius: 10,
              height: 325,
              margin: 10,
            }}
          >
            <Text>Hello</Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default leGrand;
