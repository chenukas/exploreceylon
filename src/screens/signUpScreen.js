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
      <View style={{ padding: 10 }}>
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
              style={{ alignSelf: "center", marginTop: 35, marginBottom: 35 }}
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
              width: "100%",
              alignSelf: "center",
              height: 51,
              paddingLeft: 10,
            }}
            placeholder="Full Name"
            returnKeyType="next"
          ></TextInput>

          <TextInput
            style={{
              borderRadius: 10,
              marginBottom: 10,
              borderColor: "#fcc221",
              backgroundColor: "#fafbfc",
              fontSize: 16,
              width: "100%",
              alignSelf: "center",
              height: 51,
              paddingLeft: 10,
            }}
            placeholder="Birthday(MM-DD-YYYY)"
            returnKeyType="next"
          ></TextInput>

          <TextInput
            style={{
              borderRadius: 10,
              marginBottom: 10,
              borderColor: "#fcc221",
              backgroundColor: "#fafbfc",
              fontSize: 16,
              width: "100%",
              alignSelf: "center",
              height: 51,
              paddingLeft: 10,
            }}
            placeholder="E-mail"
            returnKeyType="next"
          ></TextInput>

          <TextInput
            style={{
              borderRadius: 10,
              marginBottom: 10,
              borderColor: "#fcc221",
              backgroundColor: "#fafbfc",
              fontSize: 16,
              width: "100%",
              alignSelf: "center",
              height: 51,
              paddingLeft: 10,
            }}
            placeholder="Mobile"
            returnKeyType="next"
          ></TextInput>
          <TextInput
            style={{
              borderRadius: 10,
              marginBottom: 10,
              borderColor: "#fcc221",
              backgroundColor: "#fafbfc",
              fontSize: 16,
              width: "100%",
              alignSelf: "center",
              height: 51,
              paddingLeft: 10,
            }}
            placeholder="Password"
            returnKeyType="next"
            secureTextEntry={true}
          ></TextInput>
          <TextInput
            style={{
              borderRadius: 10,
              marginBottom: 10,
              borderColor: "#fcc221",
              backgroundColor: "#fafbfc",
              fontSize: 16,
              width: "100%",
              alignSelf: "center",
              height: 51,
              paddingLeft: 10,
            }}
            placeholder="Confirm Password"
            returnKeyType="done"
            secureTextEntry={true}
          ></TextInput>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("SignInScreen")}>
          <View
            style={{
              backgroundColor: "#fcc221",
              borderColor: "#fcc221",
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
              Sign-up
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default signUpScreen;
