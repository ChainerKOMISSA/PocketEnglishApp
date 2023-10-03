import { Text, View, StyleSheet, TextInput, Image } from 'react-native'
import React from 'react'
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
    height : '55%',
  },
  image : {
      width : '100%',
      height : '45%',
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
    borderRadius : 15,
    marginTop : 70,
  },
  textebtn : {
    fontSize : 20,
    marginLeft : 65,
    marginTop : 9
  },
  textepassword : {
    marginLeft : '60%',
    color : '#D2A517'
  }
});


const Login = () => {
  return (
    <View style={styles.view}>
        <View style={styles.image}>
          <Image>
            
          </Image>
        </View>
        <View style={styles.box}>
          <Text style={styles.title}>Let's get you signed in!</Text>
          <TextInput 
            style={styles.input}
            placeholder='   Enter your email address'
          />
          <TextInput 
            style={styles.input}
            placeholder='   Enter your password'
          />
          <Text style={styles.textepassword}>Forgot password?</Text>
          <View style={styles.button}>
            <Text style={styles.textebtn}>Let's go!</Text>
          </View>
          <Text style={styles.texte}>Don't have an account yet? Sign up</Text>
        </View>
    </View>
  )
}

export default Login