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

import { AuthContext } from "../components/context";

const signInScreen = ({ navigation }) => {
  const { signIn } = React.useContext(AuthContext);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Text>signInScreen</Text>
        <TouchableOpacity
          onPress={() => {
            signIn();
          }}
        >
          <View
            style={{
              backgroundColor: "#fcc221",
              height: 51,
              width: "50%",
              alignSelf: "flex-end",
              marginRight: 10,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                alignSelf: "center",
                margin: 11,
                fontSize: 20,
                color: "white",
              }}
            >
              Sign-in
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default signInScreen;
