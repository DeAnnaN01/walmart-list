import React from "react";
import { StyleSheet } from "react-native";



export const globalStyles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        fontSize: 20,
        borderRadius: 6,
        margin: 20,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        margin: 10,
        alignContent: 'center'
    },
    textTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 5,
        alignContent: 'center',
    },
    item: {
        padding: 10,
        flex: 1,
        fontSize: 22,
    },
    note: {
        padding: 10,
        flex: 1,
        fontSize: 18
    },
    modalContent: {
        flex: 1,
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


