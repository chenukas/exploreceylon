import * as React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  ImageBackground,
} from "react-native";

const searchHotel = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flexGrow: 1, height: "100%" }}>
        <View>
          <ImageBackground
            style={{ width: "100%", height: 275 }}
            imageStyle={{ borderBottomRightRadius: 65 }}
          >
            <View style={styles.darkOverlay}>
              <Text>Hello World</Text>
            </View>
          </ImageBackground>
        </View>

        <ScrollView>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              borderRadius: 10,
              borderWidth: 2,
              borderColor: "#fcc221",
              width: "95%",
              alignSelf: "center",
            }}
          >
            <Image
              source={require("../../assets/images/legrand.jpg")}
              style={{ width: 100, height: 100, margin: 5, borderRadius: 50 }}
            ></Image>
            <View style={{ flex: 1, flexDirection: "column", height: 100 }}>
              <Text style={styles.hotelNames}>Le Grand Galle</Text>
              <Text style={styles.prices}>$250/per night</Text>
            </View>
          </View>
          <View style={{ height: 3, backgroundColor: "#ffffff" }}></View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              borderRadius: 10,
              borderWidth: 2,
              borderColor: "#fcc221",
              width: "95%",
              alignSelf: "center",
            }}
          >
            <Image
              source={require("../../assets/images/jetwinglighthouse.jpg")}
              style={{ width: 100, height: 100, margin: 5, borderRadius: 50 }}
            ></Image>
            <View style={{ flex: 1, flexDirection: "column", height: 100 }}>
              <Text style={styles.hotelNames}>Jetwing Lighthouse</Text>
              <Text style={styles.prices}>$400/per night</Text>
            </View>
          </View>
          <View style={{ height: 3, backgroundColor: "#ffffff" }}></View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              borderRadius: 10,
              borderWidth: 2,
              borderColor: "#fcc221",
              width: "95%",
              alignSelf: "center",
            }}
          >
            <Image
              source={require("../../assets/images/amarigalle.jpg")}
              style={{ width: 100, height: 100, margin: 5, borderRadius: 50 }}
            ></Image>
            <View style={{ flex: 1, flexDirection: "column", height: 100 }}>
              <Text style={styles.hotelNames}>Amari Galle</Text>
              <Text style={styles.prices}>$350/per night</Text>
            </View>
          </View>
          <View style={{ height: 3, backgroundColor: "#ffffff" }}></View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              borderRadius: 10,
              borderWidth: 2,
              borderColor: "#fcc221",
              width: "95%",
              alignSelf: "center",
            }}
          >
            <Image
              source={require("../../assets/images/tamarindhill.jpg")}
              style={{ width: 100, height: 100, margin: 5, borderRadius: 50 }}
            ></Image>
            <View style={{ flex: 1, flexDirection: "column", height: 100 }}>
              <Text style={styles.hotelNames}>Tamarind Hill</Text>
              <Text style={styles.prices}>$175/per night</Text>
            </View>
          </View>
          <View style={{ height: 3, backgroundColor: "#ffffff" }}></View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              borderRadius: 10,
              borderWidth: 2,
              borderColor: "#fcc221",
              width: "95%",
              alignSelf: "center",
            }}
          >
            <Image
              source={require("../../assets/images/jetwingkurulubedda.jpg")}
              style={{ width: 100, height: 100, margin: 5, borderRadius: 50 }}
            ></Image>
            <View style={{ flex: 1, flexDirection: "column", height: 100 }}>
              <Text style={styles.hotelNames}>Jetwing Kurulubedda</Text>
              <Text style={styles.prices}>$750/per night</Text>
            </View>
          </View>
          <View style={{ height: 3, backgroundColor: "#ffffff" }}></View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default searchHotel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  darkOverlay: {
    position: "absolute",
    top: 5,
    right: 5,
    left: 7,
    height: 250,
    width: "97%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: "#fcc221",
    alignSelf: "center",
  },
  hotelNames: {
    padding: 5,
    fontWeight: "bold",
    fontSize: 24,
    paddingTop: 20,
  },
  prices: {
    fontSize: 16,
    padding: 5,
    paddingTop: 15,
    alignSelf: "flex-end",
    paddingRight: 20,
    fontWeight: "bold",
  },
});
