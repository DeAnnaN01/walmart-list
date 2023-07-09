import { StyleSheet, Text, View } from 'react-native';


const HomeScreen = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
    },
    text: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'blue',
        padding: 5,
    },
});



export default HomeScreen;