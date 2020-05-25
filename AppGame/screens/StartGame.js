import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { Image } from 'react-native'



function StartGame(props) {
  const { navigation } = props
  return (
    <View style={styles.container}>
    <Text style={styles.text}>Put Dice Generator here</Text>
    <View style={styles.buttonContainer}>
          <Button
            onPress={ () =>diceRoll()}
            title="Roll"
          />
          <div id="root"></div> 
        </View>
  </View>
  );
}

function diceRoll(){
  var randomNumber=Math.floor((Math.random()*6)+1);
  var element; 
      if(randomNumber==1)element=React.createElement("img", {
        src: "Dice1.png"
      });
      else if (randomNumber == 2) element=React.createElement("img", {
        src: "Dice2.png"
      });   //storing string which get converted to HTML which is then rendered onto the page
      else if (randomNumber == 3) element=React.createElement("img", {
        src: "Dice3.png"
      });
      else if (randomNumber == 4) element=React.createElement("img", {
        src: "Dice4.png"
      })
      else if (randomNumber == 5) element=React.createElement("img", {
        src: "Dice5.png"
      });
      else  element=React.createElement("img", {
        src: "Dice6.png"
      });
      ReactDOM.render(element, document.getElementById('root'));
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
    margin: 5  
  },
})

export default StartGame

// /screens/StartGame.js