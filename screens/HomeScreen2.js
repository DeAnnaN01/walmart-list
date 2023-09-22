import React, {useState} from "react";
import {SafeAreaView, View, StyleSheet, Text, TouchableOpacity} from "react-native";
import {MaterialIcons} from "@expo/vector-icons";
import Modal from "react-native-modal";
import CardContent from "../components/CardContent2";
import AddItem from "../components/AddItem";
import {Button} from 'react-native-elements';

const HomeScreen = () => {
    const [showAddItemModal, setShowAddItemModal] = useState(false);

    const toggleModal = () => {
        setShowAddItemModal(!showAddItemModal);
    };

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity >
                <Text style={styles.textHeader}>Shopping List</Text>
                <View style={{flexDirection: 'column', flex: 1}}>
                    <Button title="Add Item" color="secondary" onPress={toggleModal} style={styles.button}>
                        Add Item
                    </Button>
                </View>
                <View>
                    <Modal
                        isVisible={showAddItemModal}
                        animationIn="slideInUp"
                        animationOut="slideOutDown"
                        avoidKeyboard={true}
                    >
                        <View style={styles.modalContent}>
                            <MaterialIcons name="close" size={30} onPress={toggleModal} style={styles.modalToggle}/>
                        </View>
                        <View style={styles.modalContent}>
                            <AddItem props/>
                        </View>
                    </Modal>
                </View>
                <View style={styles.cardContent}>
                    <CardContent />
                </View>
            </TouchableOpacity>
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
        margin: 15,
        flexShrink: 1,
    },
    modalContent: {
        padding: 10,
        verticalAlign: 'top',
        flexDirection: 'column',
    },
    modalToggle: {
        marginTop: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: "#f2f2f2",
        padding: 0,
        borderRadius: 10,
        flexShrink: 1,
    },
    cardContent: {
        margin: 10,
    },
});

export default HomeScreen;
