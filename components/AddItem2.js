import React, { useState, SetState } from "react";
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    Button,
    TextInput,
} from "react-native";
import {Input} from 'react-native-elements';
import { Picker } from "@react-native-picker/picker";
import ShoppingList from "../shared/ShoppingList";

const AddItem = () => {
    const [item, setItem] = useState("");
    const [notes, setNotes] = useState("");
    const [categoryId, setCategoryId] = useState(8);
    const [sListItem, setSListItem] = useState(ShoppingList);

    // const handleChange = (value, name) => {
    //     if (name === "item") {
    //         setItem(value);
    //     } else if (name === "notes") {
    //         setNotes(value);
    //     }
    // };

    const handleAddItem = () => {
        const newSListItem = sListItem.concat({
            item,
            notes,
            categoryId,
        });
        console.log(`Added item: ${item}`);
        console.log(`Added notes: ${notes}`);
        console.log(`Added category: ${categoryId}`);
        console.log({
            newSListItem,
        });
        setSListItem(newSListItem);
        return sListItem;
    };

    const resetForm = () => {
        setItem("");
        setNotes("");
        setCategoryId(8);
    };

    return (
        <ScrollView>
            <View style={styles.formRow}>
                <Text style={styles.formLabel}>Item:</Text>
                <Input
                    style={styles.formInput}
                    type="text"
                    name="item"
                    value={item}
                    placeholder='Item'
                    onChangeText={(item) => setItem(item)}
                />
            </View>
            <View style={styles.formRow}>
                <Text style={styles.formLabel}>Notes:</Text>
                <Input
                    style={styles.formInput}
                    type="text"
                    name="notes"
                    value={notes}
                    placeholder='Notes'
                    onChangeText={(notes) => setNotes(notes)}
                />
            </View>
            <View style={styles.formRow}>
                <Text style={styles.formLabel}>Category:</Text>
                <Picker
                    style={styles.formItem}
                    selectedValue={categoryId}
                    onValueChange={(itemValue) => {
                        setCategoryId(itemValue);
                    }}
                >
                    <Picker.Item label="1: Pharmacy" value="1" />
                    <Picker.Item label="2: Beverages" value="2" />
                    <Picker.Item label="3: Non-Food" value="3" />
                    <Picker.Item label="4: General" value="4" />
                    <Picker.Item label="5: Meat/Cheese" value="5" />
                    <Picker.Item label="6: Frozen" value="6" />
                    <Picker.Item label="7: Produce/Bakery" value="7" />
                    <Picker.Item label="8: Unknown" value="8" />
                </Picker>
            </View>
            <View style={styles.formRow}>
                <Button
                    onPress={() => handleAddItem()}
                    title="Add"
                    color="purple"
                    accessibilityLabel="Tap me to add this item to your Shopping List"
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    formRow: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        flexDirection: "row",
        margin: 20,
    },
    formLabel: {
        fontSize: 18,
        flex: 2,
    },
    formItem: {
        flex: 1,
    },
});


export default AddItem;
