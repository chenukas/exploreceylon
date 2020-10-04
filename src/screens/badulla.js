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
            <Text style={styles.titleText}>Choose a Place</Text>
            <ScrollView>
                <TouchableOpacity style={styles.cards}>
                    <Text>
                        Diyaluma
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("ella")} style={styles.cards}>
                    <Text>
                        Ella
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.cards}>
                    <Text>
                        Ravana
                    </Text>
                </TouchableOpacity>
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
});

export default badulla;