import React, { useState, useEffect, Dispatch } from 'react';
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    StatusBar,
} from 'react-native'; 
import AsyncStorage from '@react-native-async-storage/async-storage';

import CardContent3 from '../components/CardContent3';
import { Button } from 'react-native-elements';





const HomeScreen = () => {

    return (
        <>
            <View style={styles.container}>
                <View style={{margin: 20}}>
                    <Text style={styles.text}>Shopping List</Text>
                </View>
                <View style={{margin: 10}} >
                    <Button 
                        title='Add Item'
                        color='secondary'
                        onPress={() => {}}
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
});

export default HomeScreen;