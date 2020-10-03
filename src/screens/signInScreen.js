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

import { AuthContext } from "../components/context";

const signInScreen = ({ navigation }) => {
  const { signIn } = React.useContext(AuthContext);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <View
          style={{
            alignItems: "center",
            backgroundColor: "#fcc221",
            width: "100%",
            height: "100%",
          }}
        >
          <Image
            style={{
              marginTop: 70,
              width: 150,
              height: 150,
              marginBottom: 50,
              alignSelf: "center",
            }}
            source={require("../../assets/images/logo.png")}
          ></Image>

          <TextInput
            style={{
              borderRadius: 10,
              marginBottom: 10,
              borderColor: "#fafbfc",
              backgroundColor: "#fafbfc",
              fontSize: 16,
              width: "95%",
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
              borderColor: "#fafbfc",
              backgroundColor: "#fafbfc",
              fontSize: 16,
              width: "95%",
              alignSelf: "center",
              height: 51,
              paddingLeft: 10,
            }}
            placeholder="Password"
            returnKeyType="done"
            secureTextEntry={true}
          ></TextInput>
          <TouchableOpacity
            onPress={() => {
              signIn();
            }}
          >
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
                Sign-in
              </Text>
            </View>
          </TouchableOpacity>
          <View>
            <Text
              style={{
                color: "#000000",
                fontSize: 20,
                alignSelf: "center",
                marginTop: 20,
              }}
            >
              Don't have an account?
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("SignUpScreen")}
            >
              <Text
                style={{
                  fontSize: 20,
                  color: "white",
                  fontWeight: "bold",
                  alignSelf: "center",
                }}
              >
                Click here...
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default signInScreen;
