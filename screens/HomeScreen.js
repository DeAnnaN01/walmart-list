import React, { useState} from 'react';
import {
    SafeAreaView,
    View,
    StyleSheet,
    Text,
} from 'react-native'; 
import {MaterialIcons} from '@expo/vector-icons';
import Modal from "react-native-modal";


import CardContent from '../components/CardContent2';
import { Button } from 'react-native-elements';
import AddItem from './AddItemScreen';





const HomeScreen = () => {
    const [showAddItemModal, setShowAddItemModal] = useState(false);

    const toggleModal = () => {
        setShowAddItemModal(!showAddItemModal);
    }
    
    return (
        <>
            <SafeAreaView>
                <View style={styles.container}>

                    {/* Title of my page */}
                    <View style={{margin: 20}}>
                        <Text style={styles.textHeader}>Shopping List</Text>
                    </View>
                        
                    {/* Button to activate the modal */}
                    <View style={{padding: 10}} >
                        <Button 
                            title='Add Item'
                            color='secondary'
                            onPress={toggleModal}
                            style={{
                                flex: 1,
                                fontWeight: 'bold',
                                fontSize: 20,
                                marginLeft: 15,
                                marginRight: 15
                            }}
                        />
                    </View>


                    {/* Modal to add item to the Shopping List */}
                    <Modal 
                        isVisible={showAddItemModal} 
                        animationIn='slideInUp'
                        animationOut='slideOutDown'
                        avoidKeyboard={true}
                    >
                        <View style={styles.modalContent} >
                            <MaterialIcons 
                                name='close'
                                size={28}
                                onPress={toggleModal}
                                style={styles.modalToggle}
                            />
                            <Text  style={styles.modalContent}>
                                <AddItem />
                            </Text>
                        </View>
                    </Modal>
                    
                    {/* Displays the Shopping List */}
                    <View style={{margin: 10}} >
                        <CardContent />
                    </View>
                </View>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignContent: 'center',
        justifyContent: 'center',
        margin: 5,
    },
    textHeader: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'blue',
        padding: 5,
        alignContent: 'center',
    },
    item: {
        paddingBottom: 10,
        flex: 1,
        fontSize: 20,
    },
    note: {
        padding: 10,
        flex: 1,
        fontSize: 18
    },
    modalContent: {
        flex: 1,
        padding: 10
    },
    modalToggle: {
        marginTop: 30,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center'
    }
});

export default HomeScreen;