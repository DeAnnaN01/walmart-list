import React, {useState} from "react";
import {SafeAreaView, View, StyleSheet, Text, Button} from "react-native";
import {MaterialIcons} from "@expo/vector-icons";
import Modal from "react-native-modal";
import CardContent from "../components/CardContent2";
import AddItem from "./AddItemScreen";

const HomeScreen = () => {
    const [showAddItemModal, setShowAddItemModal] = useState(false);

    const toggleModal = () => {
        setShowAddItemModal(!showAddItemModal);
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.textHeader}>Shopping List</Text>
            <Button title="Add Item" color="secondary" onPress={toggleModal} style={styles.button} />
            <Modal
                isVisible={showAddItemModal}
                animationIn="slideInUp"
                animationOut="slideOutDown"
                avoidKeyboard={true}
            >
                <View style={styles.modalContent}>
                    <MaterialIcons name="close" size={28} onPress={toggleModal} style={styles.modalToggle} />
                    <AddItem />
                </View>
            </Modal>
            <View style={styles.cardContent}>
                <CardContent />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        margin: 5,
    },
    textHeader: {
        fontSize: 32,
        fontWeight: "bold",
        textAlign: "center",
        color: "blue",
        padding: 5,
        alignSelf: "center",
    },
    button: {
        fontWeight: "bold",
        fontSize: 20,
        marginHorizontal: 15,
    },
    modalContent: {
        padding: 10,
    },
    modalToggle: {
        marginTop: 30,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: "#f2f2f2",
        padding: 10,
        borderRadius: 10,
        alignSelf: "center",
    },
    cardContent: {
        margin: 10,
    },
});

export default HomeScreen;
