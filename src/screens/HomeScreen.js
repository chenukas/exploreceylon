import React, { useContext } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  ScrollView,
  Dimensions,
  StatusBar,
} from "react-native";

const { width, height } = Dimensions.get("window");

import Icon from "react-native-vector-icons/MaterialIcons";

import { AuthContext } from "../navigation/AuthProvider";

import VerticalCarousel from "../components/VerticalCarousel";
import { dummyData } from "../data/Data";

const HomeScreen = ({ navigation }) => {
  const { user, logout } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#3a7072" barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Hello! {user.displayName},</Text>
      </View>
      <View style={styles.footer}>
        <ScrollView>
          <VerticalCarousel data={dummyData} />
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
    backgroundColor: "#3a7072",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  footer: {
    flex: 10,
    backgroundColor: "#f9f1f1",
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
