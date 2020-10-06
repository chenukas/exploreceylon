import * as React from "react";
import {
    TouchableOpacity,
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    ScrollView,
    Image,
    Dimensions,
} from "react-native";

const badulla = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Text style={styles.titleText}>Choose Place</Text>
            <ScrollView>
                <TouchableOpacity onPress={() => navigation.navigate("ella")}>
                    <View
                        style={{
                            flex: 1,
                            flexDirection: "row",
                            borderRadius: 10,
                            borderWidth: 2,
                            borderColor: "#fcc221",
                            width: "95%",
                            alignSelf: "center",
                        }}
                    >
                        <Image
                            source={require("../../assets/images/ella2.jpg")}
                            style={{ width: 100, height: 100, margin: 5, borderRadius: 50 }}
                        ></Image>
                        <View style={{ flex: 1, flexDirection: "column", height: 100 }}>
                            <Text style={styles.hotelNames}>Ella</Text>
                            <Text style={styles.prices}>Badulla</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={{ height: 3 }}></View>
                <View
                    style={{
                        flex: 1,
                        flexDirection: "row",
                        borderRadius: 10,
                        borderWidth: 2,
                        borderColor: "#fcc221",
                        width: "95%",
                        alignSelf: "center",
                    }}
                >
                    <Image
                        source={require("../../assets/images/namunukula.jpg")}
                        style={{ width: 100, height: 100, margin: 5, borderRadius: 50 }}
                    ></Image>
                    <View style={{ flex: 1, flexDirection: "column", height: 100 }}>
                        <Text style={styles.hotelNames}>Namunukula</Text>
                        <Text style={styles.prices}>Badulla</Text>
                    </View>
                </View>
                <View style={{ height: 3 }}></View>
                <View
                    style={{
                        flex: 1,
                        flexDirection: "row",
                        borderRadius: 10,
                        borderWidth: 2,
                        borderColor: "#fcc221",
                        width: "95%",
                        alignSelf: "center",
                    }}
                >
                    <Image
                        source={require("../../assets/images/rawana.jpg")}
                        style={{ width: 100, height: 100, margin: 5, borderRadius: 50 }}
                    ></Image>
                    <View style={{ flex: 1, flexDirection: "column", height: 100 }}>
                        <Text style={styles.hotelNames}>Ravana Falls</Text>
                        <Text style={styles.prices}>Badulla</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    itemStyle: {
        padding: 10,
    },
    titleText: {
        color: "#000",
        fontSize: 28,
        fontWeight: "bold",
        paddingLeft: 20,
        paddingTop: 5,
        marginBottom: 20,
    },

    cards: {
        padding: 15,
        borderColor: "#fcc221",
        borderRadius: 10,
        borderWidth: 1,
        marginVertical: 2,
        marginHorizontal: 16,
    },

    hotelNames: {
        padding: 5,
        fontWeight: "bold",
        fontSize: 22,
        paddingTop: 20,
    },
    
    prices: {
        fontSize: 14,
        padding: 5,
        paddingTop: 15,
        alignSelf: "flex-end",
        paddingRight: 20,
        fontWeight: "bold",
    },
});

export default badulla;