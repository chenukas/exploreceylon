import "react-native-gesture-handler";

import * as React from "react";
import { View, TouchableOpacity } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { SearchBar } from 'react-native-elements';

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
import reserveHotel from "./src/screens/reserveHotel";
import payHotel from "./src/screens/payHotel";
import completedBooking from "./src/screens/completedBooking";
import badulla from "./src/screens/badulla";
import galle from "./src/screens/galle";
import ampara from "./src/screens/ampara";
import anuradhapura from "./src/screens/anuradhapura";

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
        <Drawer.Screen name="reserveHotel" component={reserveHotel} />
        <Drawer.Screen name="payHotel" component={payHotel} />
        <Drawer.Screen name="completedBooking" component={completedBooking} />
        <Drawer.Screen name="userProfile" component={userProfile} />
        <Drawer.Screen name="viewFavorites" component={viewFavorites} />
        <Drawer.Screen name="searchCity" component={searchCity} />
        <Drawer.Screen name="badulla" component={badulla} />
        <Drawer.Screen name="galle" component={galle} />
        <Drawer.Screen name="ampara" component={ampara} />
        <Drawer.Screen name="anuradhapura" component={anuradhapura} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
