import 'react-native-gesture-handler';

import * as React from 'react';
import { View, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import NearCategory from './src/screens/NearCategory';
import { DrawerContent } from './src/screens/DrawerContent';
import HomeScreen from './src/screens/HomeScreen';
import searchNearestPlaces from './src/screens/searchNearestPlaces';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props)=> {
  //Structure for the navigation Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={()=> toggleDrawer()}>
      </TouchableOpacity>
    </View>
  );  
}

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}
      drawerContentOptions={{
        activeTintColor: '#e91e63',
        itemStyle: { marginVertical: 5 },
      }}>
      <Drawer.Screen
          name="HomeScreen"
          component={HomeScreen} />
        <Drawer.Screen
          name="NearCategory"
          component={NearCategory} />
          <Drawer.Screen
          name="searchNearestPlaces"
          component={searchNearestPlaces} />
      </Drawer.Navigator>  
    </NavigationContainer>   
  );
}

export default App;
