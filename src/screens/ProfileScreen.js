import React, { useContext } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StatusBar,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import { AuthContext } from "../navigation/AuthProvider";

const { width, height } = Dimensions.get("window");

const ProfileScreen = ({ navigation }) => {
  const { user, logout } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.footer}>
        <ScrollView
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center",
          }}
          showsVerticalScrollIndicator={false}
        >
          <Image
            style={styles.userImg}
            source={{ uri: "https://i.pravatar.cc/300" }}
          ></Image>
          <Text style={styles.userName}>Chenuka</Text>
          <Text style={[styles.aboutUser, { marginBottom: 5 }]}>Email</Text>
          <Text style={styles.aboutUser}>Phone No</Text>
          <View style={styles.userBtnWrapper}>
            <TouchableOpacity
              style={styles.userBtn}
              onPress={() => {
                navigation.navigate("EditProfile");
              }}
            >
              <Text style={styles.userBtnTxt}>Edit</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.imageContainer}>
            <View style={[styles.imageView, { backgroundColor: "#57aaff" }]}>
              <MaterialIcons
                name="collections"
                size={40}
                color="white"
                style={styles.menuIcon}
              />
              <Text style={styles.menuText}>Gallery</Text>
            </View>
            <View style={[styles.imageView, { backgroundColor: "#660724" }]}>
              <MaterialIcons
                name="event-note"
                size={40}
                color="white"
                style={styles.menuIcon}
              />
              <Text style={styles.menuText}>History</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2b569a",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 10,
  },
  footer: {
    flex: 20,
    backgroundColor: "#fafbfc",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 10,
  },
  userImg: {
    height: 125,
    width: 125,
    borderRadius: 75,
    marginTop: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
  },
  aboutUser: {
    fontSize: 12,
    fontWeight: "600",
    color: "#666",
    textAlign: "center",
    marginBottom: 10,
  },
  userBtnWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    marginBottom: 10,
  },
  userBtn: {
    borderColor: "#2b569a",
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 25,
    marginHorizontal: 5,
  },
  userBtnTxt: {
    color: "#2b569a",
    fontWeight: "bold",
  },
  userInfoWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginVertical: 20,
  },
  userInfoItem: {
    justifyContent: "center",
  },
  userInfoTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
  },
  userInfoSubTitle: {
    fontSize: 12,
    color: "#666",
    textAlign: "center",
  },
  menuIcon: {
    bottom: 2,
  },
  menuText: {
    color: "white",
    fontSize: 14,
    alignSelf: "center",
    fontFamily: "Kanit-Medium",
  },
  imageContainer: {
    flexDirection: "row",
    marginTop: 30,
    alignSelf: "center",
  },
  imageView: {
    width: width / 2 - 15,
    height: height / 6,
    marginHorizontal: 5,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
