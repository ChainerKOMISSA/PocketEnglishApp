import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const styles = StyleSheet.create({
  row : {
      width : '100%',
      backgroundColor : '#F1F1E6'
  }
})

const Menu = () => {
  return (
    <View>
      <View style={styles.row}>
        <Text>Test</Text>
      </View>
    </View>
  )
}

export default Menu