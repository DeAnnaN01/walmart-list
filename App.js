import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from './screens/HomeScreen';


const App = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.Text}>
                <HomeScreen  props={HomeScreen}/>
            </Text>
            <StatusBar style="auto" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'blue',
    },
});


export default App;