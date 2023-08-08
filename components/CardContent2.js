
import { View, Text, Image } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import ShoppingList from '../shared/ShoppingList';



export default CardContent2 = () => {
    return (
        <Card containerStyle={{padding: 0, fontSize: 18}} >
            {ShoppingList.map((sList, i) => <ListItem key={i} />)}
        </Card>
    )
};

