import {Button, TextInput, View, Alert} from "react-native";
import {globalStyles} from "../styles/global";
import {Form} from 'formik';
import { Formik } from "formik";
import {useState} from "react";
import {Picker} from '@react-native-picker/picker';
import ItemList from "../shared/ItemList";
import ShoppingList from "../shared/ShoppingList";



const AddItem = () => {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [itemList, setItemList] = useState(ItemList);
    const [selectedItem, setSelectedItem] = useState(ItemList);


    const AddListItem = (values) => {
        if (values.item !== values.id) {
            // Handle the case when a new item is added
            setItemList((prevItemList) => [...prevItemList, values]);
            ItemList.push(values);
        }

        ShoppingList.push(values);
    };

    const Form = (values) => {
        new AddListItem(values);
    }


    return (
        <View style={globalStyles.container}>
            <Formik
                initialValues={{id: 0, item: "", notes: "", categoryId: 0}}
                onSubmit={(values, actions) => {
                    AddListItem(values);
                    console.log(values);
                    actions.resetForm();
                    setShowModal(false);
                }}
            >
                {(props) => (
                    <View style={{flex: 1}} >
                        <Form onSubmit={props.handleSubmit}>
                            <View style={{margin: 10, flex: 1, alignContent: "space-between"}}>
                                <Picker
                                    selectedValue={selectedItem}
                                    style={globalStyles.input}
                                    value={props.values.item}
                                    onValueChange={(item) => {
                                        if (item === "") {
                                            // Prompt the user to enter a new item
                                            Alert.prompt("Enter a new item", "", (item) => {
                                                if (item) {
                                                    setSelectedItem(item);
                                                    props.setFieldValue("item", item);
                                                }
                                            });
                                        } else {
                                            setSelectedItem(item);
                                            props.setFieldValue("item", item);

                                        }
                                        props.handleChange('item');
                                    }}
                                >
                                    {itemList.map((item) => (
                                        <Picker.Item key={item} label={item} value={item} />
                                    ))}
                                    <Picker.Item label="Add New Item" value="" />
                                </Picker>
                                <TextInput
                                    label="Notes"
                                    multiline
                                    style={globalStyles.input}
                                    placeholder="Notes"
                                    onChangeText={props.handleChange('notes')}
                                    value={props.values.notes}
                                />
                                <Picker
                                    selectedValue={selectedCategory}
                                    style={globalStyles.input}
                                    value={props.values.categoryId}
                                    onValueChange={(categoryId) => {
                                        setSelectedCategory(categoryId);
                                        props.setFieldValue("categoryId", categoryId);
                                        props.handleChange('categoryId');
                                    }}
                                >
                                    <Picker.Item label="1: Pharmacy" value="1" />
                                    <Picker.Item label="2: Beverages" value="2" />
                                    <Picker.Item label="3: Non-Food" value="3" />
                                    <Picker.Item label="4: General" value="4" />
                                    <Picker.Item label="5: Meat/Cheese" value="5" />
                                    <Picker.Item label="6: Frozen" value="6" />
                                    <Picker.Item label="7: Produce/Bakery" value="7" />
                                    <Picker.Item label="8: Unknown" value="8" />
                                </Picker>
                                <Button title="Submit" color="purple" onPress={props.handleSubmit} />
                            </View>
                        </Form>
                    </View>
                )}
            </Formik>
        </View>
    );
};

export default AddItem;



{/* <TextInput
label="Item"
style={globalStyles.input}
placeholder="Item"
onChangeText={props.handleChange("item")}
value={props.values.item}
/> */}
