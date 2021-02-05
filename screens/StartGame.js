import React, { useState } from 'react';
import { Text, Button, View, StyleSheet } from 'react-native';
import { Image } from 'react-native'
import images from '../assets/images'
import rulesReference from '../assets/Settings/rulesReference.json'
import RuleModal from './RuleModal'
import AsyncStorage from '@react-native-community/async-storage'

const StartGame = (props) => {

  const [image, setImage] = useState(images.roll); //image is state, setImage is the thing that changes the state
  const [modalVisible, setModalVisibility] = useState(false); //defaults the modalvisibility to false
  const [rule, setRules] = useState("Truth or Drink");
  const [rounds, setRounds] = useState(0);
  const [players, setPlayers] = useState('{}');

  const generateRandomDiceImage = () => {
    var randomNumber = Math.floor((Math.random() * 6) + 1);
    var dice = images[`dice${randomNumber}`]
    setImage(dice);
    setRules(rulesReference[randomNumber]);
  }

  const setPlayersAsync = async () => {
    setPlayers(await AsyncStorage.getItem('players'))
  }

  const getPlayerName = () => {
    let json = JSON.parse(players)
    console.log(json[`player${rounds % 6}`])
    return json[`player${rounds % 6}`]
  }

  let index = 0;
  let interval = 200;
  const handlePress = () => {
    let repeater = setInterval(() => {
      if (index < 8) {
        generateRandomDiceImage();
        index += 1;
        interval += 100;
      } else {
        clearInterval(repeater);
        setModalVisibility(true);
      }
    }, interval);
  }

  return (
    <View style={styles.container}>

      <Text>{getPlayerName()}</Text>
      <Image source={image} style={styles.imageStyle} />
      <View style={styles.buttonContainer}>
        <Button title="Roll" onPress={() => { setPlayersAsync(); handlePress(); setRounds(rounds + 1) }} />
      </View>
      <RuleModal modalVisible={modalVisible} setModalVisibility={setModalVisibility} styles={styles} rule={rule}></RuleModal>
    </View>
  );

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue'
  },
  text: {
    color: '#101010',
    fontSize: 24,
    fontWeight: 'bold'
  },
  buttonContainer: {
    width: 250,
    margin: 20,
  },
  imageStyle: {
    width: 250,
    height: 250,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
})

export default StartGame

// /screens/StartGame.js