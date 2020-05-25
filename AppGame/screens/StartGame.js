import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { Image } from 'react-native'



function StartGame(props) {
  const { navigation } = props
  return (
    <View style={styles.container}>
    <View style={styles.DiceContainer}>
    <Image source={require('../screens/Dice5.png')}
        style={{height:175, width:175}}
        />
    </View>
    <View style={styles.buttonContainer}>
          <Button
            onPress={ () => diceRoll()}
            title="Roll"/>
        </View>
  </View>

  );
}

function diceRoll(){
  var randomNumber=Math.floor((Math.random()*6)+1);
  alert(randomNumber);
}
 


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebebeb'
  },
  DiceContainer: {
    paddingTop:80,
    height: 50,
    justifyContent: "center",
    alignSelf: "center"
  },
  text: {
    color: '#101010',
    fontSize:24,
    fontWeight: 'bold'
  },
  buttonContainer: {
    width: 100,
    margin: 5,
    paddingTop: 300
  },
})

export default StartGame

// /screens/StartGame.js