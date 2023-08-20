import React from "react";
import {StyleSheet, Button, TextInput, View, Text} from "react-native";
import {globalStyles} from "../styles/global";
import {Formik} from "formik";

const AddItemForm = () => {
    return (
        <View style={globalStyles.container}>
            <Formik
                initialValues={{item: "", notes: "", categoryId: ""}}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                {(props) => (
                        <View style={{margin: 30, flex: 1, alignContent: "space-between"}}>
                            <TextInput
                                label="Item"
                                style={globalStyles.input}
                                placeholder="Item"
                                onChangeText={props.handleChange("item")}
                                value={props.values.item}
                            />

                            <TextInput
                                label="Notes"
                                multiline
                                style={globalStyles.input}
                                placeholder="Notes"
                                onChangeText={props.handleChange("notes")}
                                value={props.values.notes}
                            />

                            <TextInput
                                label="Category ID"
                                style={globalStyles.input}
                                placeholder="Category Number"
                                onChangeText={props.handleChange("categoryId")}
                                value={props.values.categoryId}
                                keyboardType="numeric"
                            />

                            <Button title="Submit" color="purple" onPress={props.handleSubmit} />
                        </View>
                )}
            </Formik>
        </View>
    );
};

export default AddItemForm;
