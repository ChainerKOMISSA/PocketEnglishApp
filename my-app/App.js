import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Irregularverbs from './src/screens/irregularverbs';
import Vocabulary from './src/screens/vocabulary';

export default function App() {
  return (
    <View style={styles.container}>
      <Vocabulary/>
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
