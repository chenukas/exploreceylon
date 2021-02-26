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

const SignInScreen = ({ navigation }) => {
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
              height: 50,
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
              height: 50,
              paddingLeft: 10,
            }}
            placeholder="Password"
            returnKeyType="done"
            secureTextEntry={true}
          ></TextInput>

          <View
            style={{
              borderRadius: 10,
              height: 50,
              width: "95%",
              backgroundColor: "#fcc221",
              borderWidth: 1,
              borderColor: "white",
              marginTop: 15,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                signIn();
              }}
            >
              <View>
                <Text
                  style={{
                    alignSelf: "center",
                    margin: 10,
                    fontSize: 20,
                    color: "white",
                  }}
                >
                  Sign-in
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{ alignSelf: "center" }}>
            <Text
              style={{
                color: "#000000",
                fontSize: 16,
                marginTop: 20,
                position: "absolute",
              }}
            >
              Don't have an account?
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("SignUpScreen")}
            >
              <Text
                style={{
                  fontSize: 16,
                  color: "white",
                  fontWeight: "bold",
                  alignSelf: "flex-end",
                  marginTop: 20,
                  marginLeft: 170,
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
