import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

import HomeScreen from "../screens/HomeScreen";
import ExploreScreen from "../screens/ExploreScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = ({ navigation }) => (
  <Stack.Navigator
    screenOptions={{
      headerLeft: () => (
        <MaterialCommunityIcons.Button
          name="menu"
          size={25}
          style={{ paddingLeft: 15 }}
          backgroundColor="#2b569a"
          onPress={() => navigation.openDrawer()}
        ></MaterialCommunityIcons.Button>
      ),
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: "#2b569a",
      },
    }}
  >
    <Stack.Screen name="Initial" component={HomeScreen} />
  </Stack.Navigator>
);

const ExploreStack = ({ navigation }) => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="Explore" component={ExploreScreen} />
  </Stack.Navigator>
);

const FavoritesStack = ({ navigation }) => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="Favorites" component={FavoritesScreen} />
  </Stack.Navigator>
);

const AppStack = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#2b569a",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={({ route }) => ({
          tabBarLabel: "Home",
          // tabBarVisible: route.state && route.state.index === 0,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        })}
      />

      <Tab.Screen
        name="Explorer"
        component={ExploreStack}
        options={{
          // tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="routes" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Favorites"
        component={FavoritesStack}
        options={{
          // tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="heart" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppStack;
