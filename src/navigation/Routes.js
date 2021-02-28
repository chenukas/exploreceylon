import React, { useContext, useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import auth from "@react-native-firebase/auth";
import { AuthContext } from "./AuthProvider";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { CustomDrawerContent } from "../screens/CustomDrawerContent";
import { createStackNavigator } from "@react-navigation/stack";

import AuthStack from "./AuthStack";
import AppStack from "./AppStack";
import ProfileScreen from "../screens/ProfileScreen";
import EditProfileScreen from "../screens/EditProfileScreen";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Routes = () => {
  const { user, setUser } = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = (user) => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

  const ProfileStack = ({ navigation }) => (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
    </Stack.Navigator>
  );

  return (
    <NavigationContainer>
      {user ? (
        <Drawer.Navigator
          drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
          <Drawer.Screen name="HomeDrawer" component={AppStack} />
          <Drawer.Screen name="Profile" component={ProfileStack} />
        </Drawer.Navigator>
      ) : (
        <AuthStack />
      )}
    </NavigationContainer>
  );
};

export default Routes;
