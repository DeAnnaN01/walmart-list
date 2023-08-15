import React, { useState, useEffect, Dispatch } from 'react';
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    StatusBar,
    Modal,
} from 'react-native'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import {MaterialIcons} from '@expo/vector-icons';


import CardContent3 from '../components/CardContent3';
import { Button } from 'react-native-elements';





const HomeScreen = () => {
    const [showAddItemModal, setShowAddItemModal] = useState(false);

    return (
        <>
            <View style={styles.container}>

                <View style={{margin: 20}}>
                    <Text style={styles.text}>Shopping List</Text>
                </View>


                <Modal visible={showAddItemModal} animationType='slide' >
                        <View style={styles.modalContent} >
                            <MaterialIcons 
                                name='close'
                                size={24}
                                onPress={() => setShowAddItemModal(false)}
                            />
                            <Text style={styles.text} >Add Item</Text>
                        </View>
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
    text: {
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
    modalToggle: {
        marginBottom: 10,
        borderwidth: 1,
        padding: 10,
        alignSelf: 'center'
    }
});

export default HomeScreen;