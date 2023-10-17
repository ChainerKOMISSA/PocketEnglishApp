import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainNavigation from './src/navigation/MainNavigation';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <MainNavigation/>
  );
}

