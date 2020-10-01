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
              width: 150,
              height: 150,
              borderRadius: 80,
              borderWidth: 2,
              borderColor: "#fcc221",
            }}
            source={require("../../assets/images/user.jpg")}
          ></Image>
        </View>
        <View style={{ position: "absolute" }}>
          <Text
            style={{
              color: "#000",
              fontSize: 30,
              fontWeight: "bold",
              marginTop: 45,
              marginLeft: 23,
            }}
          >
            Natalie Eleanor
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("updateProfile")}
          >
            <View
              style={{
                backgroundColor: "#fcc221",
                height: 40,
                borderRadius: 40,
                width: "70%",
                alignSelf: "center",
                marginLeft: 25,
              }}
            >
              <Text
                style={{
                  alignSelf: "center",
                  fontSize: 20,
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
                style={{ alignSelf: "center", marginTop: 20 }}
                size={50}
              />
              <View>
                <Text
                  style={{
                    alignSelf: "center",
                    fontSize: 24,
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
                width: 130,
                height: 130,
                borderRadius: 80,
                backgroundColor: "#fafbfc",
                borderWidth: 2,
                borderColor: "#fcc221",
              }}
            >
              <Icon
                name="map-pin"
                color={"#fcc221"}
                style={{ alignSelf: "center", marginTop: 20 }}
                size={50}
              />
              <View>
                <Text
                  style={{
                    alignSelf: "center",
                    fontSize: 24,
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
                width: 130,
                height: 130,
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
                style={{ alignSelf: "center", marginTop: 20 }}
                size={50}
              />
              <View>
                <Text
                  style={{
                    alignSelf: "center",
                    fontSize: 24,
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
