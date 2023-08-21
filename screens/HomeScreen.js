import React, { useState, useEffect, Dispatch } from 'react';
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    StatusBar,
    Modal,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import {MaterialIcons} from '@expo/vector-icons';


import CardContent3 from '../components/CardContent3';
import { Button } from 'react-native-elements';
import AddItemForm from './AddItemForm';
import ShoppingList from '../shared/ShoppingList';





const HomeScreen = () => {
    const [showAddItemModal, setShowAddItemModal] = useState(false);
    const [sList, setSList] = useState(ShoppingList);

    const addListItem = (listItem) => {
        listItem.key = sList.length;
        setSList((currentSList) => {
            return [listItem, ...currentSList];
        });
        setShowAddItemModal(false);
    }

    
    return (
        <>
            <View style={styles.container}>

                <View style={{margin: 20}}>
                    <Text style={styles.textHeader}>Shopping List</Text>
                </View>


                <Modal visible={showAddItemModal} animationType='slide' >
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss} >    
                        <View style={styles.modalContent} >
                            <MaterialIcons 
                                name='close'
                                size={28}
                                onPress={() => setShowAddItemModal(false)}
                                style={styles.modalToggle}
                            />
                            <Text  style={styles.modalContent}>
                                <AddItemForm addListItem={addListItem} />
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>

                <View style={{margin: 10}} >
                    <Button 
                        title='Add Item'
                        color='secondary'
                        onPress={() => setShowAddItemModal(true)}
                        style={{
                            flex: 1,
                            fontWeight: 'bold',
                            fontSize: 20,
                        }}
                    />
                </View>

                <View style={{margin: 10}} >
                    <CardContent3 />
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'top',
        justifyContent: 'center',
        margin: 20,
    },
    textHeader: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'blue',
        padding: 5,
        alignContent: 'top',
    },
    item: {
        padding: 10,
        flex: 1,
        fontSize: 24,
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