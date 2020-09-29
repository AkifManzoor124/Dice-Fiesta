import React, { useState } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { Image } from 'react-native'
import images from '../assets/images'
import gameRules from '../assets/gameRules'
import rulesReference from '../settings/rulesReference.json'
import RuleModal from './RuleModal'

const StartGame = (props) => {

  const [image, setImage] = useState(images.roll);
  const [modalVisible, setModalVisibility] = useState(false); //defaults the modalvisibility to false
  const [rule, setRules]= useState("Truth or Drink");

  const generateRandomDiceImage = () => {
    var randomNumber=Math.floor((Math.random()*6)+1);
    var dice;

    console.log(randomNumber)

    switch(randomNumber){
      case 1:
        dice = images.dice1;
        break;
      case 2:
        dice = images.dice2;
        break;
      case 3:
        dice = images.dice3;
        break;  
      case 4:
        dice = images.dice4;
        break;    
      case 5:
        dice = images.dice5;
        break;             
      case 6:
        dice = images.dice6;
        break;          
    }
    console.log("Random number: "+randomNumber); 
    console.log("Rule: "+ rulesReference[randomNumber]);
    setImage(dice);
    setRules(rulesReference[randomNumber]);

    console.log(rule)
  }

  return(
    <View style={styles.container}>
      <Image source={image} style={styles.imageStyle}/>
        <View style={styles.buttonContainer}>
          <Button title="Roll" onPress={() => {generateRandomDiceImage(); setModalVisibility(!modalVisible)}} /> 
          {/* when roll is pressed, the modalvisibility becomes not false aka true*/}
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
    backgroundColor: '#ebebeb'
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
  imageStyle:{
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