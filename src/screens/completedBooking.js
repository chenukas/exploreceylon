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

import Icon from "react-native-vector-icons/Feather";

const completedBooking = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Text
          style={{
            alignSelf: "center",
            marginTop: 250,
            fontSize: 26,
            fontWeight: "bold",
          }}
        >
          You are all set!
        </Text>
        <Icon
          name="check-circle"
          color={"#42e342"}
          style={{ alignSelf: "center" }}
          size={40}
        />
      </View>
    </SafeAreaView>
  );
};

export default completedBooking;
