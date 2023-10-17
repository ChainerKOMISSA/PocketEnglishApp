import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Menu from '../screens/menu';
import Irregularverbs from '../screens/irregularverbs';
import Grammar from '../screens/grammar';
import Login from '../screens/login';
import Register from '../screens/register';
import Quiz from '../screens/quiz';
import Vocabulary from '../screens/vocabulary';




const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu" screenOptions={{headerShown : false}}>
        <Stack.Screen name="Menu" component={Menu} options={{headerShown:true}} />
        <Stack.Screen name="Irregularverbs" component={Irregularverbs} />
        <Stack.Screen name='Grammar' component={Grammar} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Register' component={Register} />
        <Stack.Screen name='Quiz' component={Quiz} />
        <Stack.Screen name='Vocabulary' component={Vocabulary} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigation