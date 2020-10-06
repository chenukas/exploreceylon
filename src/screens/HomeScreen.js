import * as React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ImageBackground,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("window");

import Icon from "react-native-vector-icons/MaterialIcons";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flexGrow: 1, height: "100%" }}>
        <View>
          <ImageBackground
            style={{ width: "100%", height: 120 }}
            imageStyle={{ borderBottomRightRadius: 65 }}
          >
            <View style={styles.DarkOverlay}>
              <View>
                <Image
                  source={require("../../assets/images/logo.png")}
                  style={styles.logo}
                />
              </View>
            </View>
          </ImageBackground>
          <View>
            <Text
              style={{
                color: "#000",
                fontSize: 28,
                fontWeight: "bold",
                fontFamily: "courier",
                alignSelf: "center",
              }}
            >
              Top Trending Places
            </Text>
          </View>
        </View>

        <ScrollView>
          <View style={{ width: width - 10, alignSelf: "center" }}>
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
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
  },
  DarkOverlay: {
    position: "absolute",

    margin: 10,
    height: 100,
    width: "95%",
    borderRadius: 20,
    backgroundColor: "#fcc221",
    alignSelf: "center",
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
