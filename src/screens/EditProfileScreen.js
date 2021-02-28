import React, { useEffect, useContext, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,
  Alert,
  ScrollView,
} from "react-native";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";

import ImagePicker from "react-native-image-crop-picker";

import LinearGradient from "react-native-linear-gradient";

import { AuthContext } from "../navigation/AuthProvider";
import firestore from "@react-native-firebase/firestore";
import storage from "@react-native-firebase/storage";

const EditProfileScreen = () => {
  const { user, logout } = useContext(AuthContext);
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);
  const [userData, setUserData] = useState(null);

  const getUser = async () => {
    const currentUser = await firestore()
      .collection("users")
      .doc(user.uid)
      .get()
      .then((documentSnapshot) => {
        if (documentSnapshot.exists) {
          console.log("User Data", documentSnapshot.data());
          setUserData(documentSnapshot.data());
        }
      });
  };

  const handleUpdate = async () => {
    let imgUrl = await uploadImage();

    if (imgUrl == null && userData.userImg) {
      imgUrl = userData.userImg;
    }

    firestore()
      .collection("users")
      .doc(user.uid)
      .update({
        fname: userData.fname,
        lname: userData.lname,
        phone: userData.phone,
        country: userData.country,
        userImg: imgUrl,
      })
      .then(() => {
        console.log("User Updated!");
        Alert.alert("Your profile has been updated successfully.");
      });
  };

  const uploadImage = async () => {
    if (image == null) {
      return null;
    }
    const uploadUri = image;
    let filename = uploadUri.substring(uploadUri.lastIndexOf("/") + 1);

    // Add timestamp to File Name
    const extension = filename.split(".").pop();
    const name = filename.split(".").slice(0, -1).join(".");
    filename = name + Date.now() + "." + extension;

    setUploading(true);
    setTransferred(0);

    const storageRef = storage().ref(`photos/${filename}`);
    const task = storageRef.putFile(uploadUri);

    // Set transferred state
    task.on("state_changed", (taskSnapshot) => {
      console.log(
        `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`
      );

      setTransferred(
        Math.round(taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) *
          100
      );
    });

    try {
      await task;

      const url = await storageRef.getDownloadURL();

      setUploading(false);
      setImage(null);

      // Alert.alert(
      //   'Image uploaded!',
      //   'Your image has been uploaded to the Firebase Cloud Storage Successfully!',
      // );
      return url;
    } catch (e) {
      console.log(e);
      return null;
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then((image) => {
      console.log(image);
      setImage(image.path);
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.footer}>
          <TouchableOpacity onPress={() => choosePhotoFromLibrary()}>
            <View
              style={{
                height: 100,
                width: 100,
                borderRadius: 15,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <ImageBackground
                source={{
                  uri: image
                    ? image
                    : userData
                    ? userData.userImg ||
                      "http://brownmead.academy/wp-content/uploads/2017/01/avatar.jpg"
                    : "http://brownmead.academy/wp-content/uploads/2017/01/avatar.jpg",
                }}
                style={{ height: 100, width: 100 }}
                imageStyle={{ borderRadius: 15 }}
              >
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <MaterialCommunityIcons
                    name="camera"
                    size={35}
                    color="#fff"
                    style={{
                      opacity: 0.7,
                      alignItems: "center",
                      justifyContent: "center",
                      borderWidth: 1,
                      borderColor: "#fff",
                      borderRadius: 10,
                    }}
                  />
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>
          <Text style={{ marginTop: 10, fontSize: 18, fontWeight: "bold" }}>
            {userData ? userData.fname : ""} {userData ? userData.lname : ""}
          </Text>
          <Text style={styles.text_footer}>First Name</Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#333333" size={20} />
            <TextInput
              placeholder="Enter your first name here..."
              autoCorrect={false}
              value={userData ? userData.fname : ""}
              onChangeText={(txt) => setUserData({ ...userData, fname: txt })}
              style={styles.textInput}
            />
          </View>

          <Text style={[styles.text_footer, { marginTop: 15 }]}>Last Name</Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#333333" size={20} />
            <TextInput
              placeholder="Enter your last name here..."
              value={userData ? userData.lname : ""}
              onChangeText={(txt) => setUserData({ ...userData, lname: txt })}
              autoCorrect={false}
              style={styles.textInput}
            />
          </View>

          <Text style={[styles.text_footer, { marginTop: 15 }]}>Mobile</Text>
          <View style={styles.action}>
            <Feather name="phone" color="#333333" size={20} />
            <TextInput
              placeholder="Enter your mobile number here..."
              keyboardType="number-pad"
              autoCorrect={false}
              value={userData ? userData.phone : ""}
              onChangeText={(txt) => setUserData({ ...userData, phone: txt })}
              style={styles.textInput}
              maxLength={10}
            />
          </View>

          <Text style={[styles.text_footer, { marginTop: 15 }]}>Country</Text>
          <View style={styles.action}>
            <FontAwesome name="globe" color="#333333" size={20} />
            <TextInput
              placeholder="Enter your country here..."
              autoCorrect={false}
              value={userData ? userData.country : ""}
              onChangeText={(txt) => setUserData({ ...userData, country: txt })}
              style={styles.textInput}
            />
          </View>
          <TouchableOpacity
            style={styles.signIn}
            onPress={() => handleUpdate()}
          >
            <LinearGradient
              colors={["#3e639e", "#2b569a"]}
              style={styles.signIn}
            >
              <Text style={[styles.textSign, { color: "#fafbfc" }]}>
                Update
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default EditProfileScreen;

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
    paddingHorizontal: 20,
    paddingVertical: 30,
    paddingTop: 10,
    alignItems: "center",
  },
  text_footer: {
    color: "#2b569a",
    fontSize: 18,
    alignSelf: "flex-start",
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#000",
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#FF6347",
    alignItems: "center",
    marginTop: 10,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#333333",
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 15,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
