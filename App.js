import { Text, View, StatusBar, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import HomeScreen from './screens/HomeScreen2';


const App = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                <HomeScreen />
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