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

const NearCategory = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flexGrow: 1, height: "100%" }}>
        <ScrollView>
          <View style={styles.imageContainer}>
            <View style={styles.imageView}>
                <Image
                  source={require("../../assets/hotel1.png")}
                  style={styles.image}
                />
            </View>

            <View style={styles.imageView}>
                <Image
                  source={require("../../assets/restuarant.png")}
                  style={styles.image}
                />
              </View>
            
            <View style={styles.imageView}>
              <Image
                source={require("../../assets/atm.png")}
                style={styles.image}
              />
            </View>
          </View>
          <View style={styles.textContainer}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                color: "#000",
                marginLeft: 45,
              }}
            >
              Hotel
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: "#000",
                fontWeight: "bold",
                marginLeft: 70,
              }}
            >
              Restaurant
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: "#000",
                fontWeight: "bold",
                marginLeft: 70,
              }}
            >
              ATM
            </Text>
          </View>

          <View style={styles.imageContainer}>
            <View style={styles.imageView}>
              <Image
                source={require("../../assets/hospital.png")}
                style={styles.image}
              />
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate("searchNearestPlaces")}
            >
              <View style={styles.imageView}>
              <Image
                source={require("../../assets/super.png")}
                style={styles.image}
              />
              </View>

            </TouchableOpacity>
            
            <View style={styles.imageView}>
              <Image
                source={require("../../assets/bus.png")}
                style={styles.image}
              />
            </View>
          </View>
          <View style={styles.textContainer}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                color: "#000",
                marginLeft: 35,
              }}
            >
              Hospital
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: "#000",
                fontWeight: "bold",
                marginLeft: 50,
              }}
            >
              Super Market
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: "#000",
                fontWeight: "bold",
                marginLeft: 30,
              }}
            >
              Bus Station
            </Text>
          </View>

          <View style={styles.imageContainer}>
            <View style={styles.imageView}>
              <Image
                source={require("../../assets/park.png")}
                style={styles.image}
              />
            </View>
            <View style={styles.imageView}>
              <Image
                source={require("../../assets/pharmacy.png")}
                style={styles.image}
              />
            </View>
            <View style={styles.imageView}>
              <Image
                source={require("../../assets/petrol.png")}
                style={styles.image}
              />
            </View>
          </View>
          <View style={styles.textContainer}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                color: "#000",
                marginLeft: 35,
              }}
            >
              Parking
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: "#000",
                fontWeight: "bold",
                marginLeft: 60,
              }}
            >
              Pharmacy
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: "#000",
                fontWeight: "bold",
                marginLeft: 50,
              }}
            >
              Petrol Shed
            </Text>
          </View>

          <View style={styles.imageContainer}>
            <View style={styles.imageView}>
              <Image
                source={require("../../assets/rail.png")}
                style={styles.image}
              />
            </View>
          </View>
          <View style={styles.textContainer}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                color: "#000",
                marginLeft: 15,
                marginBottom: 20,
              }}
            >
              Railway Station
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
    width: 120,
    height: 120,
    borderWidth: 1,
    borderRadius: 70,
    borderColor: "#fff",
    marginHorizontal: 8,
    backgroundColor: "#fcc221",
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 70,
  },
  ImageText: {
    position: "absolute",
    color: "#000",
    fontSize: 24,
  },
});
