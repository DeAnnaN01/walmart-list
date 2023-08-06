
import { View, Text, Image } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import ShoppingList from '../shared/ShoppingList';



const CardContent = (props) => {
    return (
        <Card>
            <Card.Title>CARD WITH DIVIDER</Card.Title>
            <Card.Divider/>
            {
                ShoppingList.map((sList, i) => {
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
                })
            }
        </Card>
    )
};


export default CardContent;
