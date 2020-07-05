import * as React from 'react';
import { Button, View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { Image } from 'react-native'

import diceImages from './diceImages'

class StartGame extends React.Component {
  constructor(props){
    super(props);
    this.state={
      image : require('../assets/images/roll.jpg')
    } 
  }

  generateRandomDiceImage = () => {
    var randomNumber=Math.floor((Math.random()*6)+1);
    var dice;

    if(randomNumber == 1){
      dice = diceImages.dice1;
    }
    else if(randomNumber == 2){
      dice = diceImages.dice2;
    }
    else if(randomNumber == 3){
      dice = diceImages.dice3;
    }
    else if(randomNumber == 4){
      dice = diceImages.dice4;
    }
    else if(randomNumber == 5){
      dice = diceImages.dice5;
    }        
    else{
      dice = diceImages.dice6;
    }   
    this.setState({
      image: dice
    });
  }

  render() {
    return(
      <View>
          <Image 
            source = {this.state.image}
            style = {styles.imageStyle} 
          />
          <Button title="Roll" onPress={this.generateRandomDiceImage} />
      </View>
    );
  }
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
  imageStyle:{
    width: 250, 
    height: 250,
  }
})

export default StartGame

// /screens/StartGame.js