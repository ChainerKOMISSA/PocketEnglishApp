import { Image, ScrollView, StyleSheet, Text, View, Pressable} from 'react-native'
import React from 'react'
import { MenuOutlined, SearchOutlined } from '@ant-design/icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const styles = StyleSheet.create({
  container : {
    width : '100%',
    height : '100%',
    flexDirection : 'column',
  },
  row : {
      width : '100%',
      flexDirection : 'row',
      height : 50,
      marginTop : 80,
  },
  texte : {
      fontSize : 30,
      fontWeight : 'bold',
      paddingLeft : 10
  },
  blue : {
    margin : 20,
    width : '90%',
    height : '300px',
    backgroundColor : '#0552AC',
    borderRadius : 15
  },
  yellow : {
    margin : 20,
    width : '90%',
    height : '300px',
    backgroundColor : '#E3B203',
    borderRadius : 15
  },
  textebtnblue : {
    marginTop : 80,
    marginLeft : 20,
    marginBottom : 20,
    color : '#fff',
    fontSize : 20,
    fontWeight : 'bold',
  },
  textebtnyellow : {
    marginTop : 80,
    marginLeft : 20,
    marginBottom : 20,
    color : '#0552AC',
    fontSize : 20,
    fontWeight : 'bold',
  },
})

const Stack = createNativeStackNavigator();


const Menu = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/*<View style={styles.row}>
          <Text style={styles.texte}>Menu</Text>
      </View>*/}
      <ScrollView>
      <Pressable style={styles.blue} onPress={() => navigation.navigate('irregularverbs')}>
        <Text style={styles.textebtnblue}>Irregular Verbs</Text>
      </Pressable>
      <Pressable style={styles.yellow} onPress={() => navigation.navigate('vocabulary')}>
        <Text style={styles.textebtnyellow}>Vocabulary</Text>
      </Pressable>
      <Pressable style={styles.blue} onPress={() => navigation.navigate('grammar')}>
        <Text style={styles.textebtnblue}>Grammar</Text>
      </Pressable>
      <Pressable style={styles.yellow}>
        <Text style={styles.textebtnyellow}>Jumble words</Text>
      </Pressable>
      <Pressable style={styles.blue}>
        <Text style={styles.textebtnblue}>General Knowledge</Text>
      </Pressable>
      <Pressable style={styles.yellow} onPress={() => navigation.navigate('quiz')}>
        <Text style={styles.textebtnyellow}>Quiz</Text>
      </Pressable>
      <Pressable style={styles.blue}>
        <Text style={styles.textebtnblue}>Dictionary</Text>
      </Pressable>
      </ScrollView>
    </View>
  )
}

export default Menu