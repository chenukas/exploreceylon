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

import Icon from "react-native-vector-icons/MaterialIcons";

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
          {user.displayName}
        </Animatable.Text>
      </View>
      <View style={styles.footer}>
        <ScrollView>
          <SliderBox
            images={dummyData.images}
            sliderBoxHeight={200}
            onCurrentImagePressed={(index) =>
              console.warn(`image ${index} pressed`)
            }
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
            <View style={styles.imageView}>
              <Image
                source={require("../../assets/images/yala.jpg")}
                style={styles.image}
              />
              <View style={styles.ImageOverlay}></View>
              <Icon
                name="location-on"
                size={16}
                color="white"
                style={styles.imageLocationIcon}
              />
              <Text style={styles.ImageText}>Yala</Text>
            </View>
            <View style={styles.imageView}>
              <Image
                source={require("../../assets/images/mirissa.jpg")}
                style={styles.image}
              />
              <View style={styles.ImageOverlay}></View>
              <Icon
                name="location-on"
                size={16}
                color="white"
                style={styles.imageLocationIcon}
              />
              <Text style={styles.ImageText}>Mirissa</Text>
            </View>
            <View style={styles.imageView}>
              <Image
                source={require("../../assets/images/ella.jpg")}
                style={styles.image}
              />
              <View style={styles.ImageOverlay}></View>
              <Icon
                name="location-on"
                size={16}
                color="white"
                style={styles.imageLocationIcon}
              />
              <Text style={styles.ImageText}>Ella</Text>
            </View>
          </View>

          <View style={styles.imageContainer}>
            <View style={styles.imageView}>
              <Image
                source={require("../../assets/images/unawatuna.jpg")}
                style={styles.image}
              />
              <View style={styles.ImageOverlay}></View>
              <Icon
                name="location-on"
                size={16}
                color="white"
                style={styles.imageLocationIcon}
              />
              <Text style={styles.ImageText}>Unawatuna</Text>
            </View>
            <View style={styles.imageView}>
              <Image
                source={require("../../assets/images/diyaluma.jpg")}
                style={styles.image}
              />
              <View style={styles.ImageOverlay}></View>
              <Icon
                name="location-on"
                size={16}
                color="white"
                style={styles.imageLocationIcon}
              />
              <Text style={styles.ImageText}>Haputale</Text>
            </View>

            <View style={styles.imageView}>
              <Image
                source={require("../../assets/images/galle.jpg")}
                style={styles.image}
              />
              <View style={styles.ImageOverlay}></View>
              <Icon
                name="location-on"
                size={16}
                color="white"
                style={styles.imageLocationIcon}
              />
              <Text style={styles.ImageText}>Galle</Text>
            </View>
          </View>

          <View style={styles.imageContainer}>
            <View style={styles.imageView}>
              <Image
                source={require("../../assets/images/hikkaduwa.jpg")}
                style={styles.image}
              />
              <View style={styles.ImageOverlay}></View>
              <Icon
                name="location-on"
                size={16}
                color="white"
                style={styles.imageLocationIcon}
              />
              <Text style={styles.ImageText}>Hikkaduwa</Text>
            </View>
            <View style={styles.imageView}>
              <Image
                source={require("../../assets/images/dalawella.jpg")}
                style={styles.image}
              />
              <View style={styles.ImageOverlay}></View>
              <Icon
                name="location-on"
                size={16}
                color="white"
                style={styles.imageLocationIcon}
              />
              <Text style={styles.ImageText}>Dalawella</Text>
            </View>
            <View style={styles.imageView}>
              <Image
                source={require("../../assets/images/sigiriya.jpg")}
                style={styles.image}
              />
              <View style={styles.ImageOverlay}></View>
              <Icon
                name="location-on"
                size={16}
                color="white"
                style={styles.imageLocationIcon}
              />
              <Text style={styles.ImageText}>Sigiriya</Text>
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
    paddingTop: 30,
    paddingBottom: 10,
  },
  text_header: {
    color: "#fafbfc",
    fontWeight: "bold",
    fontSize: 20,
  },
  text_header_name: {
    color: "#fafbfc",
    fontWeight: "bold",
    fontSize: 25,
  },
  footer: {
    flex: 10,
    backgroundColor: "#fafbfc",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 10,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
    position: "absolute",
  },
  ImageOverlay: {
    width: 110,
    height: 250,
    marginRight: 8,
    borderRadius: 10,
    position: "absolute",
    backgroundColor: "#000",
    opacity: 0.2,
  },
  userText: {
    fontSize: 16,
    fontWeight: "normal",
    color: "white",
  },
  imageLocationIcon: {
    position: "absolute",
    marginTop: 4,
    left: 10,
    bottom: 10,
  },
  ImageText: {
    position: "absolute",
    color: "white",
    marginTop: 4,
    fontSize: 14,
    left: 30,
    bottom: 10,
  },
  imageContainer: {
    flexDirection: "row",
    marginTop: 10,
    alignSelf: "center",
  },
  imageView: {
    width: 110,
    height: 250,

    marginHorizontal: 3,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
});
