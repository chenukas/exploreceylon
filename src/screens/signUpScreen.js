import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Platform,
  TextInput,
  ScrollView,
} from "react-native";
import * as Animatable from "react-native-animatable";
import LinearGradient from "react-native-linear-gradient";
import FeatherIcons from "react-native-vector-icons/Feather";

import { AuthContext } from "../navigation/AuthProvider";

const SignUpScreen = ({ navigation }) => {
  const [fname, setFname] = useState();
  const [lname, setLname] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();

  const { register } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#2b569a" barStyle="dark-content" />
      <View style={styles.header}>
        {/*<Text style={styles.text_header}>Register Now!</Text> */}
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.text_footer}>First Name</Text>
          <View style={styles.action}>
            <FeatherIcons name="user" color="#2b569a" size={20} />
            <TextInput
              placeholder="Enter your first name here..."
              returnKeyType="next"
              style={styles.textInput}
              autoCapitalize="words"
              value={fname}
              onChangeText={(fname) => setFname(fname)}
            />
          </View>

          <Text style={[styles.text_footer, { marginTop: 25 }]}>Last Name</Text>
          <View style={styles.action}>
            <FeatherIcons name="tag" color="#2b569a" size={20} />
            <TextInput
              placeholder="Enter your last name here..."
              returnKeyType="next"
              style={styles.textInput}
              autoCapitalize="words"
              value={lname}
              onChangeText={(lname) => setLname(lname)}
            />
          </View>

          <Text style={[styles.text_footer, { marginTop: 25 }]}>Email</Text>
          <View style={styles.action}>
            <FeatherIcons name="mail" color="#2b569a" size={18} />
            <TextInput
              placeholder="Enter your e-mail here..."
              style={styles.textInput}
              autoCapitalize="none"
              keyboardType="email-address"
              returnKeyType="next"
              value={email}
              onChangeText={(email) => setEmail(email)}
            />
          </View>

          <Text style={[styles.text_footer, { marginTop: 25 }]}>Mobile</Text>
          <View style={styles.action}>
            <FeatherIcons name="smartphone" color="#2b569a" size={18} />
            <TextInput
              placeholder="Enter your mobile number here..."
              keyboardType="phone-pad"
              maxLength={10}
              returnKeyType="next"
              style={styles.textInput}
              value={phone}
              onChangeText={(phone) => setPhone(phone)}
            />
          </View>

          <Text style={[styles.text_footer, { marginTop: 25 }]}>Password</Text>
          <View style={styles.action}>
            <FeatherIcons name="lock" color="#2b569a" size={20} />
            <TextInput
              placeholder="Enter your password here..."
              secureTextEntry={true}
              style={styles.textInput}
              autoCapitalize="none"
              returnKeyType="done"
              value={password}
              onChangeText={(password) => setPassword(password)}
            />
          </View>
          <View style={styles.textPrivate}>
            <Text style={styles.color_textPrivate}>
              By clicking Sign Up, you agree to Explore Ceylon's
            </Text>
            <Text style={[styles.color_textPrivate, { fontWeight: "bold" }]}>
              Terms of service,
            </Text>
            <Text style={[styles.color_textPrivate, { fontWeight: "bold" }]}>
              {" "}
              Privacy Policy
            </Text>
            <Text style={styles.color_textPrivate}> and</Text>
            <Text style={[styles.color_textPrivate, { fontWeight: "bold" }]}>
              {" "}
              Cookie Policy.
            </Text>
          </View>
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.signIn}
              onPress={() => register(fname, lname, email, phone, password)}
            >
              <LinearGradient
                colors={["#3e639e", "#2b569a"]}
                style={styles.signIn}
              >
                <Text style={[styles.textSign, { color: "#fafbfc" }]}>
                  Sign Up
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Animatable.View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2b569a",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  footer: {
    flex: 20,
    backgroundColor: "#fafbfc",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "#b15b77",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    color: "#2b569a",
    fontSize: 18,
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
    color: "#000",
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
  },
  button: {
    alignItems: "center",
    marginTop: 20,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
  textPrivate: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
  },
  color_textPrivate: {
    color: "grey",
  },
});
