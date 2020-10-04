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

import CheckBox from "@react-native-community/checkbox";

const { width, height } = Dimensions.get("window");

const payHotel = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <View style={{ height: height - 75 }}>
          <View
            style={{
              backgroundColor: "#ffffff",
              borderRadius: 10,
              margin: 10,
              height: 209,
            }}
          >
            <Text style={{ margin: 10, fontSize: 25, fontWeight: "bold" }}>
              To complete reservation...
            </Text>
            <Text
              style={{ fontSize: 20, fontWeight: "300", alignSelf: "center" }}
            >
              You have to pay,
            </Text>
            <Text
              style={{
                fontSize: 45,
                fontWeight: "bold",
                alignSelf: "center",
                margin: 12,
                color: "#fcc221",
              }}
            >
              $312.19
            </Text>
            <Text style={{ margin: 10, alignSelf: "flex-end" }}>
              *includes taxes and charges
            </Text>
          </View>

          <View
            style={{
              backgroundColor: "#ffffff",
              borderRadius: 10,
              marginRight: 10,
              marginLeft: 10,
              height: 140,
              marginBottom: 10,
            }}
          >
            <Text style={{ margin: 10, fontSize: 18, fontWeight: "bold" }}>
              Payments
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
                Pay at the property
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
                Credit/Debit Card
              </Text>
            </View>
          </View>

          <View
            style={{
              backgroundColor: "#ffffff",
              borderRadius: 10,
              marginRight: 10,
              marginLeft: 10,
              height: 230,
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
                  margin: 4,
                  borderColor: "#fafbfc",
                  backgroundColor: "#fafbfc",
                  fontSize: 16,
                  width: "100%",
                }}
                placeholder="Name on the card"
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
                  margin: 4,
                  borderColor: "#fafbfc",
                  backgroundColor: "#fafbfc",
                  fontSize: 16,
                  width: "100%",
                }}
                placeholder="Card No."
                maxLength={19}
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
                  width: "56%",
                  borderColor: "#fafbfc",
                  backgroundColor: "#fafbfc",
                  fontSize: 16,
                }}
                placeholder="Expire Date(MM-YY)"
                maxLength={5}
                keyboardType="number-pad"
                returnKeyType="next"
              ></TextInput>
              <TextInput
                style={{
                  borderWidth: 1,
                  borderRadius: 10,
                  margin: 3,
                  width: "42%",
                  borderColor: "#fafbfc",
                  backgroundColor: "#fafbfc",
                  fontSize: 16,
                }}
                placeholder="CVV"
                maxLength={3}
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
                  margin: 4,
                  borderColor: "#fafbfc",
                  backgroundColor: "#fafbfc",
                  fontSize: 16,
                  width: "100%",
                }}
                placeholder="Amount"
                maxLength={12}
                keyboardType="number-pad"
                returnKeyType="done"
              ></TextInput>
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("completedBooking")}
        >
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
              Pay
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default payHotel;
