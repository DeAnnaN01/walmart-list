import React from "react";
import {View, Text} from "react-native";
import {Card} from "react-native-elements";
import ShoppingList from "../shared/ShoppingList";
import Categories from "../shared/Categories";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CardContent2 = (props) => {
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
        <>
            {Object.entries(categoryMap).map(([categoryId, categoryTitle]) => {
                const filteredItems = ShoppingList.filter((sList) => sList.categoryId === parseInt(categoryId));

                return (
                    <Card key={categoryId} style={{alignContent: "center"}}>
                        <Card.Title>
                            {categoryId}: {categoryTitle}
                        </Card.Title>
                        <Card.Divider />
                        {filteredItems.map((sList, i) => (
                            <View key={i} style={{padding: 10, flex: 1}}>
                                <Text style={{fontSize: 20}}>{sList.item}</Text>
                                <Text style={{fontSize: 14, flex: 1, paddingLeft: 20}}>{sList.notes}</Text>
                            </View>
                        ))}
                    </Card>
                );
            })}
        </>
    );
};

export default CardContent2;
