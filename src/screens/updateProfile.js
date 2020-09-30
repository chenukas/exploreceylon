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

const updateProfile = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <View style={{ alignItems: "flex-start" }}>
          <Image
            style={{
              width: 150,
              height: 150,
              borderRadius: 80,
              borderWidth: 2,
              borderColor: "#fcc221",
              marginTop: 30,
            }}
            source={require("../../assets/images/user.jpg")}
          ></Image>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("updateProfile")}>
          <View
            style={{
              backgroundColor: "#fcc221",
              height: 45,
              borderRadius: 20,
              width: "50%",
              alignSelf: "flex-end",
              marginRight: 10,
              marginTop: 1,
              marginBottom: 10,
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
              Upload Picture
            </Text>
          </View>
        </TouchableOpacity>
        <View>
          <Text
            style={{
              color: "#000000",
              fontSize: 20,
            }}
          >
            Name
          </Text>
          <Text
            style={{
              borderWidth: 1,
              borderRadius: 10,
              margin: 4,
              borderColor: "#fafbfc",
              backgroundColor: "#fafbfc",
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Chamodi Thennakoon
          </Text>
          <Text
            style={{
              color: "#000000",
              fontSize: 20,
            }}
          >
            E-Mail
          </Text>
          <Text
            style={{
              borderWidth: 1,
              borderRadius: 10,
              margin: 4,
              borderColor: "#fafbfc",
              backgroundColor: "#fafbfc",
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            chamodi@gmail.com
          </Text>
          <Text
            style={{
              color: "#000000",
              fontSize: 20,
            }}
          >
            Phone Number
          </Text>
          <Text
            style={{
              borderWidth: 1,
              borderRadius: 10,
              margin: 4,
              borderColor: "#fafbfc",
              backgroundColor: "#fafbfc",
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            071XXXXXXX
          </Text>
          <Text
            style={{
              color: "#000000",
              fontSize: 20,
            }}
          >
            Password
          </Text>
          <Text
            style={{
              borderWidth: 1,
              borderRadius: 10,
              margin: 4,
              borderColor: "#fafbfc",
              backgroundColor: "#fafbfc",
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            ........
          </Text>
          <Text
            style={{
              color: "#000000",
              fontSize: 20,
            }}
          >
            Confirm Password
          </Text>
          <Text
            style={{
              borderWidth: 1,
              borderRadius: 10,
              margin: 4,
              borderColor: "#fafbfc",
              backgroundColor: "#fafbfc",
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            ........
          </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("userProfile")}>
          <View
            style={{
              backgroundColor: "#fcc221",
              borderRadius: 10,
              height: 51,
              width: "40%",
              alignSelf: "flex-start",
              marginRight: 10,
              marginTop: 10,
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
        <TouchableOpacity onPress={() => navigation.navigate("userProfile")}>
          <View
            style={{
              backgroundColor: "#fcc221",
              borderRadius: 10,
              height: 51,
              width: "40%",
              alignSelf: "flex-end",
              justifyContent: "center",
              marginBottom: 20,
              marginRight: 10,
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
              Cancle
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default updateProfile;
