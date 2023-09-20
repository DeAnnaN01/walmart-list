import {Button, TextInput, View} from "react-native";
import {globalStyles} from "../styles/global";
import {Formik, Form} from "formik";
import {useState} from "react";
import {Picker} from '@react-native-picker/picker';


const AddItemForm = (addListItem) => {
    const [selectedCategory, setSelectedCategory] = useState("");

    return (
        <View style={globalStyles.container}>
            <Formik
                initialValues={{item: "", notes: "", categoryId: ""}}
                onSubmit={(values, actions) => {
                    addListItem(values);
                    console.log(values);
                    actions.resetForm();
                }}
            >
                {(props) => (
                    <Form onSubmit={props.handleSubmit}>
                        <View style={{margin: 30, flex: 1, alignContent: "space-between"}}>
                            <TextInput
                                label="Item"
                                style={globalStyles.input}
                                placeholder="Item"
                                onChangeText={props.handleChange("item")}
                                value={props.values.item}
                            />
                            <TextInput
                                label="Notes"
                                multiline
                                style={globalStyles.input}
                                placeholder="Notes"
                                onChangeText={props.handleChange("notes")}
                                value={props.values.notes}
                            />
                            <Picker
                                selectedValue={selectedCategory}
                                style={globalStyles.input}
                                onValueChange={(itemValue) => {
                                    setSelectedCategory(itemValue);
                                    props.setFieldValue("categoryId", itemValue);
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
                )}
            </Formik>
        </View>
    );
};

export default AddItemForm;








