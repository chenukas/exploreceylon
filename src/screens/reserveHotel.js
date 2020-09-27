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

import CheckBox from "@react-native-community/checkbox";

const reserveHotel = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <View
          style={{
            backgroundColor: "#ffffff",
            borderRadius: 10,
            margin: 10,
            height: 250,
          }}
        >
          <Text style={{ margin: 10, fontSize: 25, fontWeight: "bold" }}>
            To make reservation...
          </Text>
          <TextInput
            style={{
              borderWidth: 1,
              borderRadius: 10,
              margin: 4,
              borderColor: "#fafbfc",
              backgroundColor: "#fafbfc",
              fontSize: 16,
            }}
            placeholder="Full Name"
            returnKeyType="next"
          ></TextInput>
          <TextInput
            style={{
              borderWidth: 1,
              borderRadius: 10,
              margin: 4,
              borderColor: "#fafbfc",
              backgroundColor: "#fafbfc",
              fontSize: 16,
            }}
            placeholder="NIC"
            maxLength={12}
            keyboardType="number-pad"
            returnKeyType="next"
          ></TextInput>
          <TextInput
            style={{
              borderWidth: 1,
              borderRadius: 10,
              margin: 4,
              borderColor: "#fafbfc",
              backgroundColor: "#fafbfc",
              fontSize: 16,
            }}
            placeholder="Mobile"
            maxLength={10}
            keyboardType="number-pad"
            returnKeyType="next"
          ></TextInput>
        </View>
        <View
          style={{
            backgroundColor: "#ffffff",
            borderRadius: 10,
            marginRight: 10,
            marginLeft: 10,
            marginBottom: 10,
            height: 150,
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignSelf: "center",
              margin: 3,
            }}
          >
            <TextInput
              style={{
                borderWidth: 1,
                borderRadius: 10,
                margin: 3,
                width: "49%",
                borderColor: "#fafbfc",
                backgroundColor: "#fafbfc",
                fontSize: 16,
              }}
              placeholder="Check-in(MM-DD-YYYY)"
              maxLength={10}
              keyboardType="number-pad"
              returnKeyType="next"
            ></TextInput>
            <TextInput
              style={{
                borderWidth: 1,
                borderRadius: 10,
                margin: 3,
                width: "49%",
                borderColor: "#fafbfc",
                backgroundColor: "#fafbfc",
                fontSize: 16,
              }}
              placeholder="Check-out(MM-DD-YYYY)"
              maxLength={10}
              keyboardType="number-pad"
              returnKeyType="next"
            ></TextInput>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignSelf: "center",
              margin: 3,
            }}
          >
            <TextInput
              style={{
                borderWidth: 1,
                borderRadius: 10,
                margin: 3,
                width: "49%",
                borderColor: "#fafbfc",
                backgroundColor: "#fafbfc",
                fontSize: 16,
              }}
              placeholder="No. of People"
              keyboardType="number-pad"
              returnKeyType="next"
            ></TextInput>
            <TextInput
              style={{
                borderWidth: 1,
                borderRadius: 10,
                margin: 3,
                width: "49%",
                borderColor: "#fafbfc",
                backgroundColor: "#fafbfc",
                fontSize: 16,
              }}
              placeholder="No. of Rooms"
              keyboardType="number-pad"
              returnKeyType="done"
            ></TextInput>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#ffffff",
            borderRadius: 10,
            marginRight: 10,
            marginLeft: 10,
            height: 179,
          }}
        >
          <Text style={{ margin: 10, fontSize: 18, fontWeight: "bold" }}>
            Meals
          </Text>
          <View>
            <CheckBox
              disabled={true}
              onCheckColor={"#fcc221"}
              style={{ margin: 5 }}
            />
            <Text
              style={{
                position: "absolute",
                margin: 10,
                marginLeft: 40,
                fontSize: 15,
              }}
            >
              Breakfast
            </Text>
          </View>
          <View>
            <CheckBox
              disabled={true}
              onCheckColor={"#fcc221"}
              style={{ margin: 5 }}
            />
            <Text
              style={{
                position: "absolute",
                margin: 10,
                marginLeft: 40,
                fontSize: 15,
              }}
            >
              Half Board
            </Text>
          </View>
          <View>
            <CheckBox
              disabled={true}
              onCheckColor={"#fcc221"}
              style={{ margin: 5 }}
            />
            <Text
              style={{
                position: "absolute",
                margin: 10,
                marginLeft: 40,
                fontSize: 15,
              }}
            >
              Full Board
            </Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("payHotel")}>
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
              Proceed
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default reserveHotel;
