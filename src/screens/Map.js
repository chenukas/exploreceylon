import * as React from "react";
import { View, Text, SafeAreaView, StyleSheet, Image } from "react-native";

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
              width: 405,
              height: 590,
              borderWidth: 2,
              borderRadius: 10,
              borderColor: "#fcc221",
              alignSelf: "center",
            }}
            source={require("../../assets/images/map.png")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Map;

const styles = StyleSheet.create({
  Text: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 10,
    textAlign: "center",
  },
});
