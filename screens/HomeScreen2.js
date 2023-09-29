import React, {useState} from "react";
import {SafeAreaView, View, StyleSheet, Text, TouchableOpacity, Modal, ScrollView, Button} from "react-native";
// import {MaterialIcons} from "@expo/vector-icons";
// import Modal from "react-native-modal";
import CardContent from "../components/CardContent2";
import AddItem from "../components/AddItem2";
// import {Button} from 'react-native-elements';

const HomeScreen = () => {
    const [showAddItemModal, setShowAddItemModal] = useState(false);

    const toggleModal = () => {
        setShowAddItemModal(!showAddItemModal);
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView  style={{padding: 0}}>
                <TouchableOpacity >
                    <Text style={styles.textHeader}>Shopping List</Text>
                    <View style={{flexDirection: 'column', flex: 1}}>
                        <Button 
                            title="Add Item" 
                            color="purple" 
                            onPress={toggleModal} 
                            style={styles.button}
                        />
                    </View>
                    <View>
                        <Modal
                            animationType='slide'
                            transparent={false}
                            visible={showAddItemModal}
                            onRequestClose={() => toggleModal}
                        >
                            <View style={styles.modal}>
                                {/* <MaterialIcons name="close" size={30} onPress={toggleModal} style={styles.modalToggle}/> */}
                                <Text style={styles.modalTitle} >
                                    Add Item to Shopping List
                                </Text>
                                <AddItem />
                                <Button  
                                    onPress={toggleModal}
                                    color='purple'
                                    title='Close'
                                />
                            </View>
                        </Modal>
                    </View>
                    <View style={styles.cardContent}>
                        <CardContent />
                    </View>
                </TouchableOpacity>
            </ScrollView>
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
    modal: {
        justifyContent: 'center',
        margin: 20
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        backgroundColor: '#5637DD',
        textAlign: 'center',
        color: '#fff',
        marginBottom: 20
    },
    modalText: {
        fontSize: 18,
        margin: 10
    },
});

export default HomeScreen;
