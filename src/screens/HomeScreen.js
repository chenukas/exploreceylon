import React, { useContext, useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
  StatusBar,
} from "react-native";

import * as Animatable from "react-native-animatable";

const { width, height } = Dimensions.get("window");

import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import { AuthContext } from "../navigation/AuthProvider";

import { SliderBox } from "react-native-image-slider-box";
import { dummyData } from "../data/Data";

const HomeScreen = ({ navigation }) => {
  const { user } = useContext(AuthContext);
  const [currentHour, setCurrentHour] = useState();

  useEffect(() => {
    let hour = new Date().getHours();
    setCurrentHour(hour);
  });

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#2b569a" barStyle="dark-content" />
      <View style={styles.header}>
        {currentHour < 12 ? (
          <Animatable.Text animation="fadeInDown" style={styles.text_header}>
            Good Morning,
          </Animatable.Text>
        ) : (
          <Animatable.Text animation="fadeInDown" style={styles.text_header}>
            Good Evening,
          </Animatable.Text>
        )}
        <Animatable.Text animation="fadeInDown" style={styles.text_header_name}>
          {user.fname}
        </Animatable.Text>
      </View>
      <View style={styles.footer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <SliderBox
            images={dummyData.images}
            sliderBoxHeight={200}
            dotColor="#2b569a"
            inactiveDotColor="#f5f5f5"
            paginationBoxVerticalPadding={20}
            autoplay
            circleLoop
            resizeMethod={"resize"}
            resizeMode={"cover"}
            paginationBoxStyle={{
              position: "absolute",
              bottom: 0,
              padding: 0,
              alignItems: "center",
              alignSelf: "center",
              justifyContent: "center",
              paddingVertical: 10,
            }}
            dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 5,
              marginHorizontal: 0,
              padding: 0,
              margin: 0,
              backgroundColor: "rgba(128, 128, 128, 0.92)",
            }}
            ImageComponentStyle={{
              borderRadius: 15,
              width: "95%",
              marginTop: 5,
            }}
            imageLoadingColor="#88a9dd"
          />

          <View style={styles.imageContainer}>
            <View style={[styles.imageView, { backgroundColor: "#57aaff" }]}>
              <MaterialIcons
                name="hotel"
                size={40}
                color="white"
                style={styles.menuIcon}
              />
              <Text style={styles.menuText}>Hotels</Text>
            </View>
            <View style={[styles.imageView, { backgroundColor: "#660724" }]}>
              <MaterialIcons
                name="directions-car"
                size={40}
                color="white"
                style={styles.menuIcon}
              />
              <Text style={styles.menuText}>Taxi</Text>
            </View>
          </View>

          <View style={styles.imageContainer}>
            <View style={[styles.imageView, { backgroundColor: "#eba123" }]}>
              <MaterialIcons
                name="timeline"
                size={40}
                color="white"
                style={styles.menuIcon}
              />
              <Text style={styles.menuText}>Trip Planner</Text>
            </View>
            <View style={[styles.imageView, { backgroundColor: "#217338" }]}>
              <MaterialIcons
                name="library-books"
                size={40}
                color="white"
                style={styles.menuIcon}
              />
              <Text style={styles.menuText}>Blog</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2b569a",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 10,
  },
  text_header: {
    color: "#fafbfc",
    fontSize: 25,
    fontFamily: "Kanit-Thin",
  },
  text_header_name: {
    color: "#fafbfc",
    fontSize: 25,
    fontFamily: "Kanit-Medium",
  },
  footer: {
    flex: 10,
    backgroundColor: "#fafbfc",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 10,
  },
  menuIcon: {
    bottom: 2,
  },
  menuText: {
    color: "white",
    fontSize: 14,
    alignSelf: "center",
    fontFamily: "Kanit-Medium",
  },
  imageContainer: {
    flexDirection: "row",
    marginTop: 10,
    alignSelf: "center",
  },
  imageView: {
    width: width / 2 - 15,
    height: height / 6,
    marginHorizontal: 5,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
