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

const { width, height } = Dimensions.get("window");

const NearCategory = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flexGrow: 1, height: "100%" }}>
        <ScrollView
          style={{
            width: width - 10,
            alignSelf: "center",
            borderRadius: 10,
            backgroundColor: "#ffffff",
            margin: 10,
          }}
        >
          <View style={styles.imageContainer}>
            <View style={styles.imageView}>
              <Image
                source={require("../../assets/images/015-hotel.png")}
                style={styles.image}
              />
            </View>

            <View style={styles.imageView}>
              <Image
                source={require("../../assets/images/028-restaurant.png")}
                style={styles.image}
              />
            </View>

            <View style={styles.imageView}>
              <Image
                source={require("../../assets/images/002-atm.png")}
                style={styles.image}
              />
            </View>
          </View>
          <View style={styles.textContainer}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "bold",
                color: "#000",
                marginLeft: 40,
              }}
            >
              Hotels
            </Text>
            <Text
              style={{
                fontSize: 15,
                color: "#000",
                fontWeight: "bold",
                marginLeft: 60,
              }}
            >
              Restaurants
            </Text>
            <Text
              style={{
                fontSize: 15,
                color: "#000",
                fontWeight: "bold",
                marginLeft: 60,
              }}
            >
              ATMs
            </Text>
          </View>

          <View style={styles.imageContainer}>
            <View style={styles.imageView}>
              <Image
                source={require("../../assets/images/014-hospital.png")}
                style={styles.image}
              />
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate("searchNearestPlaces")}
            >
              <View style={styles.imageView}>
                <Image
                  source={require("../../assets/images/032-shopping.png")}
                  style={styles.image}
                />
              </View>
            </TouchableOpacity>

            <View style={styles.imageView}>
              <Image
                source={require("../../assets/images/004-bus-stop.png")}
                style={styles.image}
              />
            </View>
          </View>
          <View style={styles.textContainer}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "bold",
                color: "#000",
                marginLeft: 30,
              }}
            >
              Hospitals
            </Text>
            <Text
              style={{
                fontSize: 15,
                color: "#000",
                fontWeight: "bold",
                marginLeft: 30,
              }}
            >
              Super Markets
            </Text>
            <Text
              style={{
                fontSize: 15,
                color: "#000",
                fontWeight: "bold",
                marginLeft: 20,
              }}
            >
              Bus Stations
            </Text>
          </View>

          <View style={styles.imageContainer}>
            <View style={styles.imageView}>
              <Image
                source={require("../../assets/images/023-parking.png")}
                style={styles.image}
              />
            </View>
            <View style={styles.imageView}>
              <Image
                source={require("../../assets/images/026-police-station.png")}
                style={styles.image}
              />
            </View>
            <View style={styles.imageView}>
              <Image
                source={require("../../assets/images/024-petrol-station.png")}
                style={styles.image}
              />
            </View>
          </View>
          <View style={styles.textContainer}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "bold",
                color: "#000",
                marginLeft: 30,
              }}
            >
              Parkings
            </Text>
            <Text
              style={{
                fontSize: 15,
                color: "#000",
                fontWeight: "bold",
                marginLeft: 35,
              }}
            >
              Police Stations
            </Text>
            <Text
              style={{
                fontSize: 15,
                color: "#000",
                fontWeight: "bold",
                marginLeft: 15,
              }}
            >
              Petrol Sheds
            </Text>
          </View>

          <View style={styles.imageContainer}>
            <View style={styles.imageView}>
              <Image
                source={require("../../assets/images/036-train.png")}
                style={styles.image}
              />
            </View>
            <View style={styles.imageView}>
              <Image
                source={require("../../assets/images/001-airport.png")}
                style={styles.image}
              />
            </View>
            <View style={styles.imageView}>
              <Image
                source={require("../../assets/images/011-education.png")}
                style={styles.image}
              />
            </View>
          </View>
          <View style={styles.textContainer}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "bold",
                color: "#000",
                marginLeft: 5,
              }}
            >
              Railway Stations
            </Text>
            <Text
              style={{
                fontSize: 15,
                color: "#000",
                fontWeight: "bold",
                marginLeft: 25,
              }}
            >
              Airports
            </Text>
            <Text
              style={{
                fontSize: 15,
                color: "#000",
                fontWeight: "bold",
                marginLeft: 65,
              }}
            >
              Schools
            </Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default NearCategory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    flexDirection: "row",
    marginTop: 10,
    alignSelf: "center",
  },
  textContainer: {
    flexDirection: "row",
    marginTop: 5,
  },
  Text: {
    fontSize: 14,
    fontWeight: "bold",
    left: 30,
  },
  imageView: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderRadius: 70,
    borderColor: "#fff",
    marginHorizontal: 8,
    backgroundColor: "#fcc221",
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 70,
    alignSelf: "center",
    marginTop: 5,
  },
  ImageText: {
    position: "absolute",
    color: "#000",
    fontSize: 24,
  },
});
