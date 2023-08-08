
import { View, Text, Image } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import ShoppingList from '../shared/ShoppingList';
import Categories from '../shared/Categories';
import CardContent from './CardContent';



export default CardList = (props) => {


    ShoppingList.map((sList, i) => {

        return (
            <View key={i} style={{padding: 10, flex: 1}}>
                <Text style={{fontSize: 14}} >
                    {sList.categoryId}
                </Text>
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
};