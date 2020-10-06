import * as React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("window");

const Map = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flexGrow: 1, height: "100%" }}>
        <View>
          <Text style={styles.Text}>Super Markets</Text>
        </View>
        <View>
          <Image
            style={{
              width: width - 10,
              height: height - 90,
              borderWidth: 2,
              borderRadius: 10,
              borderColor: "#fcc221",
              alignSelf: "center",
            }}
            source={require("../../assets/images/map.jpg")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Map;

const styles = StyleSheet.create({
  Text: {
    fontSize: 25,
    fontWeight: "bold",
    margin: 10,
    textAlign: "center",
  },
});
