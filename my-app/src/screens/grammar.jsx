import { View, Text, StyleSheet, ScrollView, FlatList, Image, Button, Pressable } from 'react-native'
import React from 'react'
import image1 from '../../assets/parler.png'
import { StatusBar } from 'expo-status-bar';


const styles = StyleSheet.create({
  container: {
    width : '100%',
    height : '100%',
    position : 'relative',
  },
  box : {
    width : '100%',
    height : '30%',
    backgroundColor:'#0552AC',
    borderBottomRightRadius : 30,
    borderBottomLeftRadius : 30
  },
  title : {
    color : '#fff',
    marginTop : 20,
    fontSize : 30,
    marginLeft : 20

  },
  texte : {
    color : '#fff',
    fontSize : 18,
    marginLeft : 20,
    marginTop : 20
  },
  cardcontainer : {
    flexDirection : 'row',
    width : '80%',
  },
  flatliste : {
    position : 'absolute',
    top : 350,
  },
  card : {
    flexDirection : 'column',
    width : "42%",
    margin : 15,
    backgroundColor : '#fff',
    borderRadius : 5,
    height : 300,
  },
  cardtitle : {
    color : '#0552AC',
    fontSize : 22,
    marginLeft : 10,
  },
  carddesc : {
    color : '#525252',
    marginLeft : 10,
    margin : 5
  },
  cardimage : {
    margin : 10,
    width : 60,
    height : 60 ,
  },
  cardbutton : {
    borderRadius : 20,
    margin : 10,
    backgroundColor : '#0552AC',
    color : '#fff',
    padding : 8,
  },
  backbox : {
    marginLeft : 15,
    marginTop : 55,
    backgroundColor : '#0552AC',
    width : 40,
    height : 40,
    borderRadius : 10,
  },
  backicon : {
    width : 25,
    height : 25,
    margin : 8
  },
  row : {
    flexDirection:'row' ,
  }
})

const Grammar = ({navigation}) => {
  let data = [
    {
      title : 'Active/Passive voice',
      id:1,
      desc : 'Learn how to go from a voice to another...',
      icone : ''
    },
    {
      title : 'Direct/Indirect speech',
      id:2,
      desc : 'Learn how to make transformations from direct to indirect speech...',
      icone : ''
    },
    {
      title : 'IF Clauses',
      id:3,
      desc : 'You will have to speak words or sentences aloud...',
      icone : ''
    },
    {
      title : 'Comparison',
      id:4,
      desc : 'You will have to learn grammar rules...',
      icone : ''
    },
    {
      title : 'Comparison2',
      id:5,
      desc : 'You will have to learn grammar rules...',
      icone : ''
    },
    {
      title : 'Comparison3',
      id:6,
      desc : 'You will have to learn grammar rules...',
      icone : ''
    }
  ]
  const renderItem = ({item}) =>
    <View style={styles.card}>
      <Image style={styles.cardimage}
        source={image1}
      />
      <Text style={styles.cardtitle}>{item.title}</Text>
      <Text style={styles.carddesc}>{item.desc}</Text>
      <Pressable style={styles.cardbutton}><Text style={{color:'#fff', paddingLeft : 40}}>Begin</Text></Pressable>
    </View>
  return (
    <View style={styles.container}>
      <StatusBar style='light' />
      <View style={styles.box}>
        <View style={styles.row}>
          <Pressable style={styles.backbox} onPress={() => navigation.goBack()}>
          <Image
                source={require('../../assets/arrow-back.png')}
                style={styles.backicon}
          />
          </Pressable>
        </View>
        <Text style={styles.title}>Grammar section</Text>
        <Text style={styles.texte}>Select a section</Text>
      </View>
     <FlatList
        data={data}
        keyExtractor={(item) =>{return item.id}}
        renderItem={renderItem}
        numColumns={2} 
      />    
    </View>
  )
}

export default Grammar