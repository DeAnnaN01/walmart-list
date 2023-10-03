import React, {useState} from "react";
import {View, Text, Pressable, StyleSheet} from "react-native";
import {Card} from "react-native-elements";
import ShoppingList from "../shared/ShoppingList";
import { ScrollView } from "react-native";

const CardContent = (props) => {
    const [selectedItems, setSelectedItems] = useState([]);

    const toggleItem = (item) => {
        if (selectedItems.includes(item)) {
            setSelectedItems(selectedItems.filter((i) => i !== item));
        } else {
            setSelectedItems([...selectedItems, item]);
        }
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
        <ScrollView>
            {Object.entries(categoryMap).map(([categoryId, categoryTitle]) => {
                const filteredItems = ShoppingList.filter((sList) => sList.categoryId === parseInt(categoryId));

                return (
                    <Card key={categoryId} style={{alignContent: "center"}}>
                        <Card.Title>
                            {categoryId}: {categoryTitle}
                        </Card.Title>
                        <Card.Divider />
                        {filteredItems.map((sList, i) => (
                            <Pressable
                                key={i}
                                onPress={() => toggleItem(sList.item)}
                                style={[styles.text, isItemSelected(sList.item) && styles.selectedText]}
                            >
                                <View style={{padding: 10, flex: 1}}>
                                    <Text style={{fontSize: 24, color: "blue", fontWeight: "regular"}}>
                                        {sList.item}
                                    </Text>
                                    <Text style={{fontSize: 18, flex: 1, paddingLeft: 25, color: "purple"}}>
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
});

export default CardContent;
