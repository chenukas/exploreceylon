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
            padding: 10,
            backgroundColor: "#ffffff",
            margin: 10,
            borderRadius: 10,
            marginTop: 40,
          }}
        >
          <Image
            style={{
              width: 150,
              height: 150,
              borderRadius: 80,
              borderWidth: 2,
              borderColor: "#fcc221",
            }}
            source={require("../../assets/images/logo.png")}
          ></Image>
        </View>
        <View>
          <Text
            style={{
              color: "#000000",
              fontSize: 20,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            E-Mail
          </Text>
          <TextInput
            style={{
              borderWidth: 1,
              borderRadius: 10,
              margin: 4,
              borderColor: "#fcc221",
              backgroundColor: "#fafbfc",
              fontSize: 20,
              paddingLeft: 10,
            }}
            placeholder="E-mail"
            returnKeyType="next"
          ></TextInput>
          <Text
            style={{
              color: "#000000",
              fontSize: 20,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Password
          </Text>
          <TextInput
            style={{
              borderWidth: 1,
              borderRadius: 10,
              margin: 4,
              borderColor: "#fcc221",
              backgroundColor: "#fafbfc",
              fontSize: 20,
              paddingLeft: 10,
            }}
            placeholder="Password"
            returnKeyType="next"
            secureTextEntry={true}
          ></TextInput>
        </View>
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
              alignSelf: "center",
              marginRight: 10,
              justifyContent: "center",
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
              fontWeight: "bold",
              textAlign: "left",
              marginTop: 10,
            }}
          >
            Don't Have An Account?
          </Text>
        </View>

        <TouchableOpacity>
          <View
            style={{
              backgroundColor: "#fcc221",
              height: 51,
              width: "50%",
              alignSelf: "center",
              marginRight: 10,
              justifyContent: "center",
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

export default signInScreen;
