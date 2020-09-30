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

const userProfile = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <View style={{ alignItems: "flex-end" }}>
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
        <View style={{ position: "absolute" }}>
          <Text
            style={{
              color: "#000",
              fontSize: 35,
              fontWeight: "900",
              marginTop: 100,
              marginLeft: 10,
            }}
          >
            Natalie Eleanor
          </Text>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("updateProfile")}>
          <View
            style={{
              backgroundColor: "#fcc221",
              height: 45,
              borderRadius: 20,
              width: "50%",
              alignSelf: "flex-start",
              marginRight: 10,
              marginTop: 1,
              marginBottom: 20,
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
              Edit Profile
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View>
            <Icon
              name="image"
              color={"#fcc221"}
              style={{ alignSelf: "center" }}
              size={55}
            />
            <View>
              <Text
                style={{ alignSelf: "center", fontSize: 30, color: "#000" }}
              >
                My Travel Gallery
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={{ marginTop: 50 }}>
            <Icon
              name="map-pin"
              color={"#fcc221"}
              style={{ alignSelf: "center" }}
              size={55}
            />
            <View>
              <Text
                style={{ alignSelf: "center", fontSize: 30, color: "#000" }}
              >
                My Travel History
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={{ marginTop: 60 }}>
            <Icon
              name="plus-circle"
              color={"#fcc221"}
              style={{ alignSelf: "center" }}
              size={55}
            />
            <View>
              <Text
                style={{ alignSelf: "center", fontSize: 30, color: "#000" }}
              >
                New Plans
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default userProfile;
