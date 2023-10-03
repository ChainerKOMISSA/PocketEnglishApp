import React from 'react'
import { Text, View, StyleSheet, TextInput, Image } from 'react-native'
import Button from '../components/button';

const styles = StyleSheet.create({
  view : {
    flexDirection : 'column',
    backgroundColor : '#fff',
    height : '100%',
    width : '100%',
  },
  input : {
    width : '85%',
    height: 50,
    margin: 10,
    backgroundColor : '#82A1D0',
    borderRadius : 10,
    marginLeft : 28,
  },
  box : {
    backgroundColor : '#AFCDFF',
    width : '100%',
    height : '60%',
  },
  image : {
      width : '100%',
      height : '40%',
      backgroundColor : '#fff',
  },
  title : {
    fontSize : 20,
    color : '#fff',
    margin : 20,
    paddingLeft : 70,
  },
  texte : {
    paddingLeft : 80,
    margin : 5,
  },
  button : {
    backgroundColor : '#D2A517',
    width : 200,
    height : 50,
    margin : 20,
    marginLeft : 95,
    borderRadius : 15
  },
  textebtn : {
    fontSize : 20,
    marginLeft : 65,
    marginTop : 9
  }
});

function Register() {
  return (
    <View style={styles.view}>
        <View style={styles.image}>
          <Image>
            
          </Image>
        </View>
        <View style={styles.box}>
          <Text style={styles.title}>Welcome to our world!</Text>
          <TextInput 
            style={styles.input}
            placeholder='   Enter your name'
          />
          <TextInput 
            style={styles.input}
            placeholder='   Enter your email address'
          />
          <TextInput 
            style={styles.input}
            placeholder='   Create a password'
          />
          <TextInput 
            style={styles.input}
            placeholder='   Confirm your password'
          />
          <View style={styles.button}>
            <Text style={styles.textebtn}>Let's go!</Text>
          </View>
          <Text style={styles.texte}>Already have an account? Sign in</Text>
        </View>
    </View>
  )
}

export default Register