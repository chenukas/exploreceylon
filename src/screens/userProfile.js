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
        <View
          style={{
            alignItems: "flex-end",
            padding: 10,
            backgroundColor: "#ffffff",
            margin: 10,
            borderRadius: 10,
          }}
        >
          <Image
            style={{
              width: 135,
              height: 135,
              borderRadius: 80,
              borderWidth: 2,
              borderColor: "#fcc221",
            }}
            source={require("../../assets/images/user.jpg")}
          ></Image>
        </View>
        <View style={{ position: "absolute", width: "50%" }}>
          <Text
            style={{
              color: "#000",
              fontSize: 20,
              fontWeight: "bold",
              marginTop: 25,
              marginLeft: 23,
              alignSelf: "center",
            }}
          >
            Natalie Eleanor
          </Text>
          <Text
            style={{
              fontSize: 16,
              marginTop: 4,

              alignSelf: "center",
            }}
          >
            04-June-1997
          </Text>
          <Text
            style={{
              fontSize: 16,
              marginTop: 4,
              alignSelf: "center",
              marginBottom: 10,
            }}
          >
            23y/old
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("updateProfile")}
          >
            <View
              style={{
                backgroundColor: "#fcc221",
                height: 35,
                borderRadius: 50,
                width: "60%",
                alignSelf: "center",
              }}
            >
              <Text
                style={{
                  alignSelf: "center",
                  fontSize: 15,
                  color: "white",
                  padding: 5,
                }}
              >
                Edit Profile
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            padding: 10,
            backgroundColor: "#ffffff",
            marginTop: 0,
            margin: 10,
            borderRadius: 10,
          }}
        >
          <TouchableOpacity style={{ alignSelf: "center" }}>
            <View
              style={{
                alignSelf: "center",
                marginTop: 5,
                width: 115,
                height: 115,
                borderRadius: 80,
                backgroundColor: "#fafbfc",
                borderWidth: 2,
                borderColor: "#fcc221",
              }}
            >
              <Icon
                name="image"
                color={"#fcc221"}
                style={{ alignSelf: "center", marginTop: 25 }}
                size={35}
              />
              <View>
                <Text
                  style={{
                    alignSelf: "center",
                    fontSize: 18,
                    color: "#000",
                    fontWeight: "bold",
                  }}
                >
                  Gallery
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={{ alignSelf: "center" }}>
            <View
              style={{
                alignSelf: "center",
                marginTop: 20,
                width: 115,
                height: 115,
                borderRadius: 80,
                backgroundColor: "#fafbfc",
                borderWidth: 2,
                borderColor: "#fcc221",
              }}
            >
              <Icon
                name="map-pin"
                color={"#fcc221"}
                style={{ alignSelf: "center", marginTop: 25 }}
                size={35}
              />
              <View>
                <Text
                  style={{
                    alignSelf: "center",
                    fontSize: 18,
                    color: "#000",
                    fontWeight: "bold",
                  }}
                >
                  History
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={{ alignSelf: "center" }}>
            <View
              style={{
                alignSelf: "center",
                marginTop: 20,
                width: 115,
                height: 115,
                borderRadius: 80,
                backgroundColor: "#fafbfc",
                borderWidth: 2,
                borderColor: "#fcc221",
                marginBottom: 5,
              }}
            >
              <Icon
                name="plus-circle"
                color={"#fcc221"}
                style={{ alignSelf: "center", marginTop: 25 }}
                size={35}
              />
              <View>
                <Text
                  style={{
                    alignSelf: "center",
                    fontSize: 18,
                    color: "#000",
                    fontWeight: "bold",
                  }}
                >
                  Plans
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default userProfile;
