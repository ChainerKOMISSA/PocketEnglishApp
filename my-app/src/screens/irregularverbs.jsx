import { View, Text, StyleSheet, FlatList, Pressable, Image } from 'react-native'
import React, { useEffect, useState } from 'react'

const styles = StyleSheet.create({
  container : {
    width : '100%',
    height : '100%',
  },
  box : {
    width : '90%',
    height : '15%',
    margin : 20,
    backgroundColor:'#0552AC',
    borderRadius: 20,
    marginTop : 90
  },
  title : {
    color : '#fff',
    marginTop : 20,
    fontSize : 28,
    marginLeft : 20
  },
  subtitle : {
    color : '#fff',
    fontSize : 28,
    marginLeft : 20
  },
  verb : {
    width : '90%',
    margin : 10,
    backgroundColor : '#D9D9D9',
    borderRadius : 13,
    height: 60,
    marginLeft : 20,
  },
  verbtitle : {
    color : '#000',
    fontSize: 20,
    marginLeft : 20,
    fontStyle : 'bold',
    marginTop : 5,
  },
  verbfrench : {
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
  searchbox : {},
  searchicon : {}
})

const Irregularverbs = () => {
  const [verbs, setVerbs] = useState([]);

  {/*useEffect(() => {
    fetch('https://zylalabs.com/api/738/english+conjugation+api/451/verb+conjugation')
    .then((response) => response.json())
    .then((data) => {
      setVerbs(data.verbs);
    })
    .catch((error) => {
      console.error('Erreur lors de la récupération des verbes ' + error);
  });
  }, []);*/}
  
  let data = [
    {
      verb : "To arise",
      v1 : "arose",
      v2 : "arisen",
      french : 'se lever'
    },
    {
      verb : "To be",
      v1 : "was / were",
      v2 : "been",
      french : 'être'
    },
    {
      verb : "To beat",
      v1 : "beat",
      v2 : "beaten",
      french : 'battre'
    },
    {
      verb : "To become",
      v1 : "became",
      v2 : "become",
      french : 'devenir'
    },
    {
      verb : "To begin",
      v1 : "was / were",
      v2 : "been",
      french : 'commencer / débuter'
    },
    {
      verb : "To arise",
      v1 : "was / were",
      v2 : "been",
      french : 'se lever'
    },
    {
      verb : "To beat",
      v1 : "beat",
      v2 : "beaten",
      french : 'battre'
    },
    {
      verb : "To become",
      v1 : "became",
      v2 : "become",
      french : 'devenir'
    },
    {
      verb : "To begin",
      v1 : "was / were",
      v2 : "been",
      french : 'commencer / débuter'
    },
    {
      verb : "To arise",
      v1 : "was / were",
      v2 : "been",
      french : 'se lever'
    }
  ]
  const renderItem =  ({item}) => 

  <View style={styles.verb}>
    <Text style={styles.verbtitle}>{item.verb}</Text>
    <Text style={styles.verbfrench}>{item.french}</Text> 
  </View>
  return (
    <View style={styles.container}>
      <View><Image/></View>
      <View style={styles.box}>
        <Text style={styles.title}>Irregular</Text>
        <Text style={styles.subtitle}>verbs</Text>
      </View>
      <FlatList
        data = {data}
        keyExtractor={(item) => {return item.id}}
        renderItem={renderItem}
        numColumns={1}
      />
    </View>
  )
}

export default Irregularverbs