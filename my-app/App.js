import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Register from './src/screens/register';
import Login from './src/screens/login';
import Menu from './src/screens/menu';
import Grammar from './src/screens/grammar';

export default function App() {
  return (
    <View style={styles.container}>
      <Grammar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
