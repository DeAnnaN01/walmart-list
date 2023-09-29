import React, {useState} from "react";
import {View, Text, Pressable, StyleSheet, ScrollView} from "react-native";
import {Card} from "react-native-elements";
import ShoppingList from "../shared/ShoppingList";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const CardContent = (props) => {
    const [selectedItems, setSelectedItems] = useState([]);

    const toggleItem = (item) => {
        setSelectedItems((prevItems) => {
            if (prevItems.includes(item)) {
                return prevItems.filter((i) => i !== item);
            } else {
                return [...prevItems, item];
            }
        });
    };

    const isItemSelected = (item) => selectedItems.includes(item);

    const categoryMap = {
        1: "Pharmacy",
        2: "Beverages",
        3: "Non-Food",
        4: "General",
        5: "Meat/Cheese",
        6: "Frozen",
        7: "Produce/Bakery",
        8: "Unknown",
    };

    return (
        <ScrollView style={{flex: 1}}>
            {/* This is what sorts my list by categoryId */}
            {Object.entries(categoryMap).map(([categoryId, categoryTitle]) => {
                const filteredItems = ShoppingList.filter((sList) => sList.categoryId === parseInt(categoryId));

                return (
                        <Card key={categoryId}>
                            <Card.Title>
                                {categoryId}: {categoryTitle}
                            </Card.Title>
                            <Card.Divider />
                            {filteredItems.map((sList, index) => (
                                <Pressable
                                    key={index}
                                    onPress={() => toggleItem(sList.item)}
                                    style={[styles.text, isItemSelected(sList.item) && styles.selectedText]}
                                >
                                    <View style={{padding: 10, flex: 1}}>
                                        <Text style={styles.itemText}>
                                            <BouncyCheckbox fillColor={'purple'} />
                                                {sList.item}
                                        </Text>
                                        <Text style={styles.notesText}>
                                            {sList.notes}
                                        </Text>
                                    </View>
                                </Pressable>
                            ))}
                        </Card>
                );
            })}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    text: {
        textDecorationLine: "none",
    },
    selectedText: {
        textDecorationLine: "line-through",
    },
    itemText: {
        fontSize: 24,
        color: "blue",
        fontWeight: "normal",
    },
    notesText: {
        fontSize: 18,
        paddingLeft: 45,
        color: "purple",
    },
});

export default CardContent;
