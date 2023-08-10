
import { View, Text, Image } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import ShoppingList from '../shared/ShoppingList';
import Categories from '../shared/Categories';




const CardContent = (props) => {

    return (
        <Card >
        <Card.Title >{Categories.id}: {Categories.area}</Card.Title>
        <Card.Divider/>
        {
            ShoppingList.map((sList, i) => {

                // if (sList.categoryId === cat.id) { 
                    return (
                        <View key={i} style={{padding: 10, flex: 1}}>
                            <Text style={{fontSize: 14}} >
                                {sList.categoryId}
                            </Text>
                            <Text style={{fontSize: 20}}>
                                {sList.item}
                            </Text>
                            <Text style={{fontSize: 16, flex: 1}}>
                                {sList.notes}
                            </Text>
                        </View>
                    );
                // };
            })
        }
        </Card>
    )
};


export default CardContent;
