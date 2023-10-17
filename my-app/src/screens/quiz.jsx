import { View, Text, StyleSheet, ScrollView, FlatList, Image, Button, Pressable } from 'react-native'
import React from 'react'
import listening from '../../assets/casque.png'
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
    backgroundColor:'#E3B203',
    borderBottomRightRadius : 30,
    borderBottomLeftRadius : 30
  },
  title : {
    color : '#000',
    marginTop : 20,
    fontSize : 30,
    marginLeft : 20

  },
  subtitle :  {
    color : '#000',
    fontSize : 30,
    marginLeft : 20
  },
  texte : {
    color : '#000',
    fontSize : 20,
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
    borderColor : '#fff',
    shadowColor: 'rgba(5, 82, 172, 0.96)',
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  cardtitle : {
    color : '#0552AC',
    fontSize : 20,
    marginLeft : 10,
    marginTop : 20,
  },
  carddesc : {
    color : '#525252',
    marginLeft : 10,
    margin : 5
  },
  cardimage : {
    margin : 10,
    width : 85,
    height : 85 ,
    marginLeft : 50
  },
  cardbutton : {
    borderRadius : 20,
    margin : 10,
    backgroundColor : '#0552AC',
    color : '#fff',
    padding : 8,
    width : '60%',
    marginLeft : 40
  },
  buttontext : {
    color:'#fff', 
    paddingLeft : 25
  },
  backbox : {
    marginLeft : 15,
    marginTop : 55,
    backgroundColor : '#E3B203',
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

const Quiz = ({navigation}) => {
  let data = [
    {
      title : 'Listening',
      id:1,
      desc : 'You will have to listening to audios and write donwn what is said...',
      icone : ''
    },
    {
      title : 'Reading',
      id:2,
      desc : 'You will have to read a text and answer some questions...',
      icone : ''
    },
    {
      title : 'Speaking',
      id:3,
      desc : 'You will have to speak words or sentences aloud...',
      icone : ''
    },
    {
      title : 'Translation',
      id:4,
      desc : 'You will have to translate from English to French and vice versa...',
      icone : ''
    },
  ]

  const renderItem = ({item}) =>
    <View style={styles.card}>
      <Image style={styles.cardimage}
        source={listening}
      />
      <Text style={styles.cardtitle}>{item.title}</Text>
      <Text style={styles.carddesc}>{item.desc}</Text>
      <Pressable style={styles.cardbutton}><Text style={styles.buttontext}>Begin</Text></Pressable>
    </View>
  return (
    <View style={styles.container}>
      <StatusBar/>
      <View style={styles.box}>
      <View style={styles.row}>
          <Pressable style={styles.backbox} onPress={() => navigation.goBack()}>
          <Image
                source={require('../../assets/arrow-back.png')}
                style={styles.backicon}
          />
          </Pressable>
        </View>
        <Text style={styles.title}>Welcome to the</Text>
        <Text style={styles.subtitle}>QUIZ</Text>
        <Text style={styles.texte}>What do you want to test?</Text>
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

export default Quiz