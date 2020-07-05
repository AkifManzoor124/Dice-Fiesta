import * as React from 'react';
import { Button, View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { Image } from 'react-native'

import images from '../assets/images'

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
      dice = images.dice1;
    }
    else if(randomNumber == 2){
      dice = images.dice2;
    }
    else if(randomNumber == 3){
      dice = images.dice3;
    }
    else if(randomNumber == 4){
      dice = images.dice4;
    }
    else if(randomNumber == 5){
      dice = images.dice5;
    }        
    else{
      dice = images.dice6;
    }   
    this.setState({
      image: dice
    });
  }

  render() {
    return(
      <View style={styles.container}>
          <Image 
            source = {this.state.image}
            style = {styles.imageStyle} 
          />
          <View style={styles.buttonContainer}>
            <Button title="Roll" onPress={this.generateRandomDiceImage} />
          </View>
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
    margin: 20,
  },
  imageStyle:{
    width: 250, 
    height: 250,
  }
})

export default StartGame

// /screens/StartGame.js