import { View, Text, Image } from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";
import ShoppingList from "../shared/ShoppingList";
import Categories from "../shared/Categories";
import AsyncStorage from '@react-native-async-storage/async-storage';


Categories.id = ShoppingList.categoryId;





const CardContent2 = (props) => {

    ShoppingList.map((sList, i) => {
        const {item, categoryId, notes} = sList;

        return (
            <>
                <Card style={{ alignContent: "center" }}>
                    <Card.Title categoryId={1} >1: Pharmacy</Card.Title>
                    <Card.Divider />
                    {
                        if (sList.catagoryId === 1) {
                            return (
                                <View
                                    key={i}
                                    style={{
                                        padding: 10,
                                        flex: 1,
                                    }}
                                >
                                    <Text style={{ fontSize: 20 }}>
                                        {sList.item}
                                    </Text>
                                    <Text
                                        style={{
                                            fontSize: 16,
                                            flex: 1,
                                        }}
                                    >
                                        {sList.notes}
                                    </Text>
                                </View>
                            );
                        }
                    }
                </Card>
                <Card style={{ alignContent: "center" }}>
                    <Card.Title>2: Beverages</Card.Title>
                    <Card.Divider />
                    {
                        if (sList.catagoryId === 2) {
                            return (
                                <View
                                    key={i}
                                    style={{
                                        padding: 10,
                                        flex: 1,
                                    }}
                                >
                                    <Text style={{ fontSize: 20 }}>
                                        {sList.item}
                                    </Text>
                                    <Text
                                        style={{
                                            fontSize: 16,
                                            flex: 1,
                                        }}
                                    >
                                        {sList.notes}
                                    </Text>
                                </View>
                            );
                        }
                    }
                </Card>
                <Card style={{ alignContent: "center" }}>
                    <Card.Title>3: Non-Food</Card.Title>
                    <Card.Divider />
                    {
                        if (sList.catagoryId === 3) {
                            return (
                                <View
                                    key={i}
                                    style={{
                                        padding: 10,
                                        flex: 1,
                                    }}
                                >
                                    <Text style={{ fontSize: 20 }}>
                                        {sList.item}
                                    </Text>
                                    <Text
                                        style={{
                                            fontSize: 16,
                                            flex: 1,
                                        }}
                                    >
                                        {sList.notes}
                                    </Text>
                                </View>
                            );
                        }
                    }
                </Card>
                <Card style={{ alignContent: "center" }}>
                    <Card.Title>4: General</Card.Title>
                    <Card.Divider />
                    {
                        if (sList.catagoryId === 4) {
                            return (
                                <View
                                    key={i}
                                    style={{
                                        padding: 10,
                                        flex: 1,
                                    }}
                                >
                                    <Text style={{ fontSize: 20 }}>
                                        {sList.item}
                                    </Text>
                                    <Text
                                        style={{
                                            fontSize: 16,
                                            flex: 1,
                                        }}
                                    >
                                        {sList.notes}
                                    </Text>
                                </View>
                            );
                        }
                    }
                </Card>
                <Card style={{ alignContent: "center" }}>
                    <Card.Title>5: Meat/Cheese</Card.Title>
                    <Card.Divider />
                    {
                        if (sList.catagoryId === 5) {
                            return (
                                <View
                                    key={i}
                                    style={{
                                        padding: 10,
                                        flex: 1,
                                    }}
                                >
                                    <Text style={{ fontSize: 20 }}>
                                        {sList.item}
                                    </Text>
                                    <Text
                                        style={{
                                            fontSize: 16,
                                            flex: 1,
                                        }}
                                    >
                                        {sList.notes}
                                    </Text>
                                </View>
                            );
                        }
                    }
                </Card>
                <Card style={{ alignContent: "center" }}>
                    <Card.Title>6: Frozen</Card.Title>
                    <Card.Divider />
                    {
                        if (sList.catagoryId === 6) {
                            return (
                                <View
                                    key={i}
                                    style={{
                                        padding: 10,
                                        flex: 1,
                                    }}
                                >
                                    <Text style={{ fontSize: 20 }}>
                                        {sList.item}
                                    </Text>
                                    <Text
                                        style={{
                                            fontSize: 16,
                                            flex: 1,
                                        }}
                                    >
                                        {sList.notes}
                                    </Text>
                                </View>
                            );
                        }
                    }
                </Card>
                <Card style={{ alignContent: "center" }}>
                    <Card.Title>7: Produce/Bakery</Card.Title>
                    <Card.Divider />
                    {
                        if (sList.catagoryId === 7) {
                            return (
                                <View
                                    key={i}
                                    style={{
                                        padding: 10,
                                        flex: 1,
                                    }}
                                >
                                    <Text style={{ fontSize: 20 }}>
                                        {sList.item}
                                    </Text>
                                    <Text
                                        style={{
                                            fontSize: 16,
                                            flex: 1,
                                        }}
                                    >
                                        {sList.notes}
                                    </Text>
                                </View>
                            );
                        }
                    }
                </Card>
                <Card style={{ alignContent: "center" }}>
                    <Card.Title>8: Unknown</Card.Title>
                    <Card.Divider />
                    {
                        if (sList.catagoryId === 8) {
                            return (
                                <View
                                    key={i}
                                    style={{
                                        padding: 10,
                                        flex: 1,
                                    }}
                                >
                                    <Text style={{ fontSize: 20 }}>
                                        {sList.item}
                                    </Text>
                                    <Text
                                        style={{
                                            fontSize: 16,
                                            flex: 1,
                                        }}
                                    >
                                        {sList.notes}
                                    </Text>
                                </View>
                            );
                        };
                    }
                </Card>
            </>
        );
    });
};

export default CardContent2;
