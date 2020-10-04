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
  Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("window");

const updateProfile = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <View style={{ height: height - 75 }}>
          <View
            style={{
              height: 160,
              backgroundColor: "#ffffff",
              margin: 10,
              borderRadius: 10,
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("updateProfile")}
            >
              <View
                style={{
                  backgroundColor: "#fcc221",
                  height: 40,
                  borderRadius: 40,
                  width: "45%",
                  alignSelf: "flex-end",
                  marginTop: 60,
                  marginRight: 20,
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    alignSelf: "center",
                    margin: 10,
                    fontSize: 18,
                    color: "white",
                  }}
                >
                  Upload Picture
                </Text>
              </View>
            </TouchableOpacity>
            <Image
              style={{
                width: 130,
                height: 130,
                borderRadius: 80,
                borderWidth: 2,
                borderColor: "#fcc221",
                marginTop: 15,
                marginLeft: 15,
                position: "absolute",
              }}
              source={require("../../assets/images/user.jpg")}
            ></Image>
          </View>
          <View
            style={{
              margin: 10,
              backgroundColor: "#ffffff",
              borderRadius: 10,
              padding: 10,
            }}
          >
            <TextInput
              style={{
                borderWidth: 1,
                borderRadius: 10,
                margin: 4,
                borderColor: "#fafbfc",
                backgroundColor: "#fafbfc",
                fontSize: 16,
                paddingLeft: 10,
              }}
              placeholder="Full Name"
              returnKeyType="next"
            >
              Natalie Eleanor
            </TextInput>
            <TextInput
              style={{
                borderWidth: 1,
                borderRadius: 10,
                margin: 4,
                borderColor: "#fafbfc",
                backgroundColor: "#fafbfc",
                fontSize: 16,
                paddingLeft: 10,
              }}
              placeholder="Birthday(MM-DD-YYYY)"
              returnKeyType="next"
              maxLength={10}
            >
              06-04-1997
            </TextInput>
            <TextInput
              style={{
                borderWidth: 1,
                borderRadius: 10,
                margin: 4,
                borderColor: "#fafbfc",
                backgroundColor: "#fafbfc",
                fontSize: 16,
                paddingLeft: 10,
              }}
              placeholder="E-mail"
              returnKeyType="next"
            >
              natalie.e@gmail.com
            </TextInput>
            <TextInput
              style={{
                borderWidth: 1,
                borderRadius: 10,
                margin: 4,
                borderColor: "#fafbfc",
                backgroundColor: "#fafbfc",
                fontSize: 16,
                paddingLeft: 10,
              }}
              placeholder="Mobile"
              returnKeyType="next"
              maxLength={10}
            >
              0760000000
            </TextInput>
            <TextInput
              style={{
                borderWidth: 1,
                borderRadius: 10,
                margin: 4,
                borderColor: "#fafbfc",
                backgroundColor: "#fafbfc",
                fontSize: 16,
                paddingLeft: 10,
              }}
              placeholder="Password"
              returnKeyType="next"
              secureTextEntry={true}
            >
              hellosliit123
            </TextInput>
            <TextInput
              style={{
                borderWidth: 1,
                borderRadius: 10,
                margin: 4,
                borderColor: "#fafbfc",
                backgroundColor: "#fafbfc",
                fontSize: 16,
                paddingLeft: 10,
              }}
              placeholder="Confirm Password"
              returnKeyType="done"
              secureTextEntry={true}
            >
              hellosliit123
            </TextInput>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("userProfile")}>
          <View
            style={{
              backgroundColor: "#fcc221",
              height: 51,
              borderTopRightRadius: 10,
              borderTopLeftRadius: 30,
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
              Update
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default updateProfile;
