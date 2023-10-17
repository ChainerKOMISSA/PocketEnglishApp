import { View, Text, StyleSheet, FlatList, Pressable, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar';


const styles = StyleSheet.create({
  container : {
    width : '100%',
    height : '100%',
  },
  box : {
    width : '90%',
    height : '15%',
    margin : 20,
    backgroundColor:'#E3B203',
    borderRadius: 20,
    marginTop : 10
  },
  title : {
    color : '#0552AC',
    marginTop : 40,
    fontSize : 30,
    marginLeft : 20
  },
  category: {
    width : '40%',
    margin : 10,
    backgroundColor : '#D9D9D9',
    borderRadius : 20,
    height: 80,
    marginLeft : 20,
  },
  categorytitle : {
    color : '#000',
    fontSize: 20,
    marginLeft : 20,
    fontStyle : 'bold',
    margin : 25,
    marginLeft : 30
  },
  categoryfrench : {
    color : '',
    fontSize: 15,
    marginLeft : 20,
    fontStyle : 'normal',
  },
  pressable : {
    backgroundColor : '#E3B203',
    borderRadius : 20,
    margin : 10,
    color : '#fff',
    padding : 8,
  },
  searchbox : {
    marginLeft : 270,
    marginTop : 70,
    backgroundColor : '#D9D9D9',
    width : 40,
    height : 40,
    borderRadius : 10,
  },
  searchicon : {
    width : 20,
    height : 20,
    color : '',
    margin : 11
  },
  backbox : {
    marginLeft : 15,
    marginTop : 70,
    backgroundColor : '#D9D9D9',
    width : 40,
    height : 40,
    borderRadius : 10,
  },
  backicon : {
    width : 20,
    height : 20,
    color : '',
    margin : 11
  },
  row : {
    flexDirection:'row' ,
  }
})

const Vocabulary = ( {navigation}) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://192.168.0.140:3001/categories')
    .then(response => response.json())
    .then(data => {
      setCategories(data)
    })
    .catch((error) => {
      console.error('Erreur lors de la récupération des categories ' + error.message);
    });
  }, [])



  return (
    <View style={styles.container}>
      <StatusBar/>
      <View style={styles.row}>
        <Pressable style={styles.backbox} onPress={() => navigation.goBack()}>
        <Image
              source={require('../../assets/x.png')}
              style={styles.backicon}
        />
        </Pressable>
        <Pressable style={styles.searchbox}>
        <Image
              source={require('../../assets/search.png')}
              style={styles.searchicon}
        />
        </Pressable>
      </View>
      <View style={styles.box}>
        <Text style={styles.title}>Vocabulary</Text>
      </View>
      <FlatList
        data = {categories}
        keyExtractor={(item) => {return item.id}}
        renderItem={({item}) => (
          <Pressable style={styles.category}>
            <Text style={styles.categorytitle}>{item.category}</Text>
          </Pressable>
        )}
        numColumns={2}
      />
    </View>
  )
}

export default Vocabulary