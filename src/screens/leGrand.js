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

const { width, height } = Dimensions.get("window");

const leGrand = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <View style={{ height: height - 75 }}>
          <Carousel data={dummyData} />
          <View
            style={{
              backgroundColor: "#fafbfc",
              borderRadius: 10,
              height: height - 359,
              marginTop: 10,
              marginLeft: 10,
              marginRight: 10,
            }}
          >
            <Text style={{ margin: 10 }}>
              Set in Galle, 300 m from Galle International Cricket Stadium, Le
              Grand Galle By Asia Leisure has a number of amenities including an
              outdoor swimming pool, a fitness centre, a garden and free WiFi.
              The property is situated 600 m from Dutch Church Galle, a 9-minute
              walk from Galle Fort and 1.1 km from Galle Light house. The
              property is 600 m from Galle Fort National Museum.
            </Text>
            <Text style={{ margin: 10 }}>
              From a spectacular view of the ocean and the iconic UNESCO
              Heritage site, Galle Fort to invigorating architecture, plush
              interiors, lavish suites with private plunge pools and the
              finest-in-class service, Le Grand is truly yours.
            </Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("reserveHotel")}>
          <View
            style={{
              backgroundColor: "#fcc221",
              height: 51,
              borderTopRightRadius: 10,
              borderTopLeftRadius: 30,
              width: "50%",
              alignSelf: "flex-end",
              marginRight: 10,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                alignSelf: "center",
                margin: 11,
                fontSize: 20,
                color: "white",
              }}
            >
              Reserve
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default leGrand;
