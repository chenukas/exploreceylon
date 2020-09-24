import * as React from 'react';
import { View, Text, SafeAreaView, Image, ImageBackground, StyleSheet, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{flexGrow: 1, height: "100%"}}>
        <View>
            <ImageBackground
            style={{width: '100%', height: 300}}
            imageStyle={{borderBottomRightRadius:65}}
            >
                <View style={styles.DarkOverlay}>
                    <View>
                    <Image source={require("../../assets/logo.jpg")} style={styles.logo} />
                    </View>
                    <Text style={{color: '#69036B', fontSize: 36, fontWeight: 'bold', paddingLeft: 70}}>Tour in SriLanka</Text>
                    <Text style={{color: '#000', fontSize: 14, fontWeight: 'normal', paddingLeft: 40, paddingRight: 20}}>The best story about a place that captures its essence and reveals its attractions, making the reader want to go there.
                    With new hotels, tours and cruises launching daily, your next trip is just a tap away.</Text>
                </View>

            </ImageBackground>
            <View>
                <Text style={{color: '#000', paddingLeft: 10, fontSize: 22, fontWeight: 'bold', fontFamily: 'courier'}}>Top Trending Places</Text>
            </View>
        </View>

        <ScrollView>
        <View style={styles.imageContainer}>
          <View style={styles.imageView}>
              <Image source={require("../../assets/sigiriya.jpg")} style={styles.image}/>
              <View style={styles.ImageOverlay}></View>
              <Icon name="location-on" size={16} color='white' style={styles.imageLocationIcon} />
              <Text style={styles.ImageText}>Sigiriya</Text>
          </View>
          <View style={styles.imageView}>
              <Image source={require("../../assets/mirissa.jpeg")} style={styles.image}/>
              <View style={styles.ImageOverlay}></View>
              <Icon name="location-on" size={16} color='white' style={styles.imageLocationIcon} />
              <Text style={styles.ImageText}>Mirissa</Text>
          </View>
          <View style={styles.imageView}>
              <Image source={require("../../assets/Ella.jpg")} style={styles.image}/>
              <View style={styles.ImageOverlay}></View>
              <Icon name="location-on" size={16} color='white' style={styles.imageLocationIcon} />
              <Text style={styles.ImageText}>Ella</Text>
          </View>
        </View>

        <View style={styles.imageContainer}>
          <View style={styles.imageView}>
              <Image source={require("../../assets/nuwaraeliya1.jpg")} style={styles.image}/>
              <View style={styles.ImageOverlay}></View>
              <Icon name="location-on" size={16} color='white' style={styles.imageLocationIcon} />
              <Text style={styles.ImageText}>Nuwara Eliya</Text>
          </View>
          <View style={styles.imageView}>
              <Image source={require("../../assets/hikkaduwa.jpg")} style={styles.image}/>
              <View style={styles.ImageOverlay}></View>
              <Icon name="location-on" size={16} color='white' style={styles.imageLocationIcon} />
              <Text style={styles.ImageText}>Hikkaduwa</Text>
          </View>
          <View style={styles.imageView}>
              <Image source={require("../../assets/galle.jpg")} style={styles.image}/>
              <View style={styles.ImageOverlay}></View>
              <Icon name="location-on" size={16} color='white' style={styles.imageLocationIcon} />
              <Text style={styles.ImageText}>Galle</Text>
          </View>
        </View>

        <View style={styles.imageContainer}>
          <View style={styles.imageView}>
              <Image source={require("../../assets/badulla.png")} style={styles.image}/>
              <View style={styles.ImageOverlay}></View>
              <Icon name="location-on" size={16} color='white' style={styles.imageLocationIcon} />
              <Text style={styles.ImageText}>Badulla</Text>
          </View>
          <View style={styles.imageView}>
              <Image source={require("../../assets/horton.jpg")} style={styles.image}/>
              <View style={styles.ImageOverlay}></View>
              <Icon name="location-on" size={16} color='white' style={styles.imageLocationIcon} />
              <Text style={styles.ImageText}>Horton Plains</Text>
          </View>
          <View style={styles.imageView}>
              <Image source={require("../../assets/9arch.jpg")} style={styles.image}/>
              <View style={styles.ImageOverlay}></View>
              <Icon name="location-on" size={16} color='white' style={styles.imageLocationIcon} />
              <Text style={styles.ImageText}>9 Arch Bridge</Text>
          </View>
        </View>

        </ScrollView>
        
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    DarkOverlay: {
      position: 'absolute',
      top: 0,
      right: 0,
      left: 0,
      height: 280,
      borderBottomRightRadius: 65,
      backgroundColor: "#BFF2F3"
    },
    logo: {
      width: 140,
      height: 140,
      marginLeft: 120,
      marginTop: 10,
      borderRadius: 80,
      borderWidth: 3,
      borderColor: "#fff"
    },
    ImageOverlay: {
      width: 130,
      height: 250,
      marginRight: 8,
      borderRadius: 10,
      position: 'absolute',
      backgroundColor: '#000',
      opacity: 0.2
    },
    userText: {
      fontSize: 16,
      fontWeight: 'normal',
      color: 'white'
    },
    imageLocationIcon: {
      position: 'absolute',
      marginTop: 4,
      left: 10,
      bottom: 10
    },
    ImageText: {
      position: 'absolute',
      color: 'white',
      marginTop: 4,
      fontSize: 14,
      left: 30,
      bottom: 10
    },
    imageContainer: {
      flexDirection: "row",
      marginTop: 10
    },
    imageView: {
      width: 130,
      height: 250,
      borderWidth: 1,
      borderColor: "#fff",
      marginHorizontal: 3
    },
    image: {
      width: "100%",
      height: "100%",
      borderRadius: 10
    }
  
  });