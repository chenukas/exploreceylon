import "react-native-gesture-handler";

import * as React from "react";
import { View, TouchableOpacity } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import NearCategory from "./src/screens/NearCategory";
import { DrawerContent } from "./src/screens/DrawerContent";
import HomeScreen from "./src/screens/HomeScreen";
import searchNearestPlaces from "./src/screens/searchNearestPlaces";
import Map from "./src/screens/Map";
import searchHotel from "./src/screens/searchHotel";
import userProfile from "./src/screens/userProfile";
import viewFavorites from "./src/screens/viewFavorites";
import searchCity from "./src/screens/searchCity";
import leGrand from "./src/screens/leGrand";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props) => {
  //Structure for the navigation Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity onPress={() => toggleDrawer()}></TouchableOpacity>
    </View>
  );
};

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <DrawerContent {...props} />}
        drawerContentOptions={{
          activeTintColor: "#e91e63",
          itemStyle: { marginVertical: 5 },
        }}
      >
        <Drawer.Screen name="HomeScreen" component={HomeScreen} />
        <Drawer.Screen name="NearCategory" component={NearCategory} />
        <Drawer.Screen
          name="searchNearestPlaces"
          component={searchNearestPlaces}
        />
        <Drawer.Screen
          name="Map"
          component={Map}
        />
        <Drawer.Screen name="searchHotel" component={searchHotel} />
        <Drawer.Screen name="leGrand" component={leGrand} />
        <Drawer.Screen name="userProfile" component={userProfile} />
        <Drawer.Screen name="viewFavorites" component={viewFavorites} />
        <Drawer.Screen name="searchCity" component={searchCity} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
