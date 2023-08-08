
import { View, Text, Image } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import ShoppingList from '../shared/ShoppingList';
import Categories from '../shared/Categories';
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





export default CardContent;
