import * as React from 'react';
import { Button, View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { Image } from 'react-native'

var Dice1 = require("../assets/Dice1.png")
var Dice2 = require("../assets/Dice2.png")
var Dice3 = require("../assets/Dice3.png")
var Dice4 = require("../assets/Dice4.png")
var Dice5 = require("../assets/Dice5.png")
var Dice6 = require("../assets/Dice6.png")


class StartGame extends React.Component {
  constructor(props){
    super(props);
    this.state={
      imageURL: Dice5
    }
  }

  avatarImage = () => {
    var randomNumber=Math.floor((Math.random()*6)+1);
    var dice;
    console.log(randomNumber);

    if(randomNumber == 1){
      dice = Dice1;
    }
    else if(randomNumber == 2){
      dice = Dice2;
    }
    else if(randomNumber == 3){
      dice = Dice3;
    }
    else if(randomNumber == 4){
      dice = Dice4;
    }
    else if(randomNumber == 5){
      dice = Dice5;
    }        
    else{
      dice = Dice6;
    }     
    this.setState({
      imageURL : dice
    })
  }

  render() {
    return(
      <View>
        <Image 
          source = {{ uri: this.state.imageURL }}
          style = {styles.imageStyle} />
          <Button title="Roll" onPress={this.avatarImage} />
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