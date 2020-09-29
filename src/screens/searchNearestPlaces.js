import * as React from 'react';
import { TouchableOpacity, View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import Icon from "react-native-vector-icons/MaterialIcons";

const  data = [
  {
    city: "Anuradhapura"
  },
  {
    city: "Ambalangoda"
  },
  {
    city: "Ampara"
  },
  {
    city: "Balangoda"
  },
  {
    city: "Badulla"
  },
  {
    city: "Colombo"
  },
  {
    city: "Dambulla"
  },
  {
    city: "Damdeniya"
  },
  {
    city: "ella"
  },
  {
    city: "Galle"
  },
  {
    city: "Gampaha"
  },
  {
    city: "Hambanthota"
  },
  {
    city: "Haton"
  },
  {
    city: "Jaffna"
  },
  {
    city: "Ja-Ela"
  },
  {
    city: "Kaluthara"
  },
  {
    city: "Kandy"
  },
  {
    city: "Kurunagala"
  },
  {
    city: "Monaragala"
  },
  {
    city: "Mannarama"
  },
  {
    city: "NuwaraEliya"
  },
  {
    city: "Negambo"
  },
  {
    city: "Puttalam"
  },
  {
    city: "Pinnawala"
  },
  {
    city: "Rathnapura"
  },
  {
    city: "Sigiriya"
  },
  {
    city: "Seethawaka"
  },
  {
    city: "Trincomalee"
  },
  {
    city: "Udawalawa"
  },
  {
    city: "Wallawatte"
  },
  {
    city: "Waththala"
  }
];

export default class searchNearestPlaces extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      searchKey: '',
    }
  }
  

  render(){
    const { navigate } = this.props.navigation;
    const filteredData = data.filter((item) => {
      return item.city.indexOf(this.state.searchKey) >= 0
    })

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, padding: 16 }}>
          <View searchBar rounded style={{flexDirection:"row",
            borderRadius: 10,
            borderWidth: 2,
            borderColor: "#000",
            width: "100%"}}>
           <TextInput placeholder="Search your City" onChangeText={(value) => this.setState({searchKey : value})}></TextInput>
           <Icon name="search" color={"#000"} style={{marginTop: 10, marginLeft: 200}} size={30}/>
          </View>
          <ScrollView>
            <TouchableOpacity
              onPress={() => navigate("Map")}>
                <View style={{margin: 20}}>
                  { filteredData.map((item, index) => {
                    return(
                    <View
                    style={{
                      flex: 1,
                      height: 50,
                      borderRadius: 10,
                      borderWidth: 2,
                      borderColor: "#fcc221",
                      width: "100%",
                      alignSelf: "center",
                      marginBottom: 10
                    }}>
                      <Text style={{fontSize:20, color: "#000", marginLeft:10, marginTop:7}}>{item.city}</Text>
                    </View>
                    )
                  })
                  }
              </View>

            </TouchableOpacity>
          
  
          </ScrollView>
        </View>
      </SafeAreaView>
    )
  }
}


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
    width: 70,
    height: 70,
    borderRadius: 70
  },
  ImageText: {
    position: 'absolute',
    color: '#000',
    fontSize: 24
  }

});