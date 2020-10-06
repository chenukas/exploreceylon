import React from "react";
import { View, StyleSheet, Image, ImageBackground, Text } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

import { AuthContext } from "../components/context";

import Icon from "react-native-vector-icons/Feather";

export function DrawerContent(props) {
  const { signOut } = React.useContext(AuthContext);

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <ImageBackground
              source={require("../../assets/images/back.jpg")}
              style={{ width: undefined, padding: 10 }}
            >
              <View style={{ marginTop: 15, paddingLeft: 6 }}>
                <Image
                  source={require("../../assets/images/user.jpg")}
                  style={styles.profile}
                />
              </View>
              <View>
                <Text style={styles.name}>Natalie Eleanor</Text>
              </View>
            </ImageBackground>

            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="home" color={"#fcc221"} size={size} />
              )}
              label="Home"
              onPress={() => {
                props.navigation.navigate("HomeScreen");
              }}
            />

            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="map-pin" color={"#fcc221"} size={size} />
              )}
              label="Cities"
              onPress={() => {
                props.navigation.navigate("searchCity");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="briefcase" color={"#fcc221"} size={size} />
              )}
              label="Bookings"
              onPress={() => {
                props.navigation.navigate("searchHotel");
              }}
            />

            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="navigation" color={"#fcc221"} size={size} />
              )}
              label="Nearby Places"
              onPress={() => {
                props.navigation.navigate("NearCategory");
              }}
            />

            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="heart" color={"#fcc221"} size={size} />
              )}
              label="Favorites"
              onPress={() => {
                props.navigation.navigate("favorites");
              }}
            />

            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="user" color={"#fcc221"} size={size} />
              )}
              label="Profile"
              onPress={() => {
                props.navigation.navigate("userProfile");
              }}
            />

            <DrawerItem
              icon={({ color, size }) => (
                <Icon name="log-out" color={"#fcc221"} size={size} />
              )}
              label="Sign-out"
              onPress={() => {
                signOut();
              }}
            />
          </View>
        </View>
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  profile: {
    width: 150,
    height: 150,
    borderRadius: 80,
    borderWidth: 2,
    borderColor: "#fcc221",
  },
  name: {
    color: "#000",
    fontSize: 20,
    fontWeight: "900",
    marginVertical: 8,
    paddingTop: 10,
    paddingLeft: 10,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
});
