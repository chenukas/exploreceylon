import * as React from 'react';
import { TouchableOpacity, View, Text, SafeAreaView, StyleSheet, ScrollView, Image } from 'react-native';

const searchNearestPlaces = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View>
          <Text style={styles.userText}>Where are you now?</Text>
        </View>
        <View>
         
        </View>
      </View>
    </SafeAreaView>
  );
}

export default searchNearestPlaces;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userText: {
    margin: 6,
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000'
  },
  imageContainer: {
    flexDirection: "row",
    marginTop: 10
  },
  textContainer: {
    flexDirection: "row",
    marginTop: 5,
  },
  Text:{
    fontSize: 14,
    fontWeight: "bold",
    left: 30
  },
  imageView: {
    width: 120,
    height: 120,
    borderWidth: 1,
    borderRadius: 70,
    borderColor: "#000",
    marginHorizontal: 8,
    backgroundColor: "#FBB469"
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 70
  },
  ImageText: {
    position: 'absolute',
    color: '#000',
    fontSize: 24
  }

});