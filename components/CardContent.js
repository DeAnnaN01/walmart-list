
import { View, Text, Image } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import ShoppingList from '../shared/ShoppingList';
import Categories from '../shared/Categories';
<<<<<<< HEAD
import CardList from './CardList';
import CardContent2 from './CardContent2';




const CardContent = ((sList) => {

    Categories.map((cat, index) => {
        return (
            <>
                <Card key={index}>
                <Card.Title >{cat.id}: {cat.area}</Card.Title>
                <Card.Divider/>
                <CardContent2 />            
                </Card>
            </>
        )
    });
});



=======




const CardContent = (props) => {

    Categories.map((cat, index) => {
        return (
            <Card key={index}>
            <Card.Title >{cat.id}: {cat.area}</Card.Title>
            <Card.Divider/>
            {
                ShoppingList.map((sList, i) => {

                    if (sList.categoryId === cat.id) { 
                        return (
                            <View key={i} style={{padding: 10, flex: 1}}>
                                <Text 
                                    style={{fontSize: 20}}
                                >
                                    {sList.item}
                                </Text>
                                <Text style={{fontSize: 16, flex: 1}}>
                                    {sList.notes}
                                </Text>
                            </View>
                        );
                    } else {
                        return
                    };
                })
            }
            </Card>
        )
    });
};
>>>>>>> 798289aea8f8fd95600c00de710edff6dc91321d





export default CardContent;
