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
    marginTop : 10
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
  searchbox : {
    marginLeft : 270,
    marginTop : 90,
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
    marginTop : 90,
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

const Irregularverbs = () => {
  const [verbs, setVerbs] = useState([]);

  useEffect(() => {
    fetch('http://192.168.1.72:3001/verbes')
    .then(response => response.json())
    .then(data => {
      setVerbs(data)
    })
    .catch((error) => {
      console.error('Erreur lors de la récupération des verbes ' + error.message);
  });
  }, []);
  
  /*let data = [
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
  ]*/
  
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Pressable style={styles.backbox}>
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
        <Text style={styles.title}>Irregular</Text>
        <Text style={styles.subtitle}>verbs</Text>
      </View>
      <FlatList
        data = {verbs}
        keyExtractor={(item) => {return item.id.toString()}}
        renderItem={({item}) => (
          <View style={styles.verb}>
            <Text style={styles.verbtitle}>{item.title}</Text>
            <Text style={styles.verbfrench}>{item.french}</Text> 
          </View>
        )}
        numColumns={1}
      />
    </View>
  )
}

export default Irregularverbs