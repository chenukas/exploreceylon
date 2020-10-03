import * as React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
} from "react-native";

import Icon from "react-native-vector-icons/Feather";

const signUpScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <View>
          <Text
            style={{
              color: "#000000",
              fontSize: 30,
              fontWeight: "bold",
              marginTop: 10,
              marginLeft: 20,
            }}
          >
            Sign Up
          </Text>
        </View>
        <TouchableOpacity style={{ alignSelf: "center" }}>
          <View
            style={{
              alignSelf: "center",
              marginTop: 20,
              width: 130,
              height: 130,
              borderRadius: 80,
              backgroundColor: "#fafbfc",
              borderWidth: 2,
              borderColor: "#fcc221",
            }}
          >
            <Icon
              name="image"
              color={"#fcc221"}
              style={{ alignSelf: "center", marginTop: 35 }}
              size={50}
            />
          </View>
        </TouchableOpacity>

        <View>
          <TextInput
            style={{
              borderRadius: 10,
              marginTop: 20,
              marginBottom: 10,
              borderColor: "#fcc221",
              backgroundColor: "#fafbfc",
              fontSize: 16,
              width: "95%",
              alignSelf: "center",
              height: 51,
              paddingLeft: 10,
            }}
            placeholder="Enter Your Name"
            returnKeyType="next"
          ></TextInput>

          <TextInput
            style={{
              borderRadius: 10,
              marginBottom: 10,
              borderColor: "#fcc221",
              backgroundColor: "#fafbfc",
              fontSize: 16,
              width: "95%",
              alignSelf: "center",
              height: 51,
              paddingLeft: 10,
            }}
            placeholder="Enter Your Birthday"
            returnKeyType="next"
          ></TextInput>

          <TextInput
            style={{
              borderRadius: 10,
              marginBottom: 10,
              borderColor: "#fcc221",
              backgroundColor: "#fafbfc",
              fontSize: 16,
              width: "95%",
              alignSelf: "center",
              height: 51,
              paddingLeft: 10,
            }}
            placeholder="Enter Your E-mail"
            returnKeyType="next"
          ></TextInput>

          <TextInput
            style={{
              borderRadius: 10,
              marginBottom: 10,
              borderColor: "#fcc221",
              backgroundColor: "#fafbfc",
              fontSize: 16,
              width: "95%",
              alignSelf: "center",
              height: 51,
              paddingLeft: 10,
            }}
            placeholder="Enter Your Phone Number"
            returnKeyType="next"
          ></TextInput>
          <TextInput
            style={{
              borderRadius: 10,
              marginBottom: 10,
              borderColor: "#fcc221",
              backgroundColor: "#fafbfc",
              fontSize: 16,
              width: "95%",
              alignSelf: "center",
              height: 51,
              paddingLeft: 10,
            }}
            placeholder="Enter Your Password"
            returnKeyType="next"
          ></TextInput>
          <TextInput
            style={{
              borderRadius: 10,
              marginBottom: 10,
              borderColor: "#fcc221",
              backgroundColor: "#fafbfc",
              fontSize: 16,
              width: "95%",
              alignSelf: "center",
              height: 51,
              paddingLeft: 10,
            }}
            placeholder="Confirm Password"
            returnKeyType="done"
          ></TextInput>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("userProfile")}>
          <View
            style={{
              backgroundColor: "#fcc221",
              borderColor: "#ffffff",
              borderWidth: 2,
              height: 51,
              width: 390,
              alignSelf: "center",
              borderRadius: 10,
              marginTop: 20,
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
              Sign-Up
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default signUpScreen;
