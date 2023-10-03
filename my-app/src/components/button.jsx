import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
const styles = StyleSheet.create({
    button : {
        backgroundColor : '#D2A517',
        width : 200,
        height : 50,
        margin : 20,
        marginLeft : 95,
        borderRadius : 15
    },
    texte : {
        fontSize : 20,
        marginLeft : 65,
        marginTop : 9
    }
})

const Button = () => {
  return (
    <View style={styles.button}>
      <Text style={styles.texte}>Let's go!</Text>
    </View>
  )
}

export default Button