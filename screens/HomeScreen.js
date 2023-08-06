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

import ShoppingList from '../shared/ShoppingList';
import CardContent from '../components/CardContent';




// const sList = ({item, notes}) => (
//     ShoppingList.map(() => {
//         <View style={styles.container} >
//             <Text style={styles.item}>{item}</Text>
//             <Text style={styles.note} >{notes}</Text>
//         </View>
//     })
// );


const HomeScreen = () => {
    // const [sList, setSList] = useState(ShoppingList);


    // const renderItem = ({ item: sList }) => {
    //     const { item, notes } = sList; // Destructure the properties from sList
    //     return (
    //         <View style={styles.item}>
    //             <Text style={styles.itemText}>
    //                 Item: {item}\n
    //                 Notes: {notes}
    //             </Text>
    //         </View>
    //     );
    // };

    return (
        <>
            <View>
                <View style={styles.container}>
                    <Text style={styles.text}>Shopping List</Text>
                </View>
                <View style={{padding: 10}} >
                    <CardContent />
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
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