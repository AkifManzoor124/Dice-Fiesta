import React, { Component } from 'react';
import { Button, StyleSheet, View, Image} from 'react-native';

export default class ButtonBasics extends Component {
  _onPressButton() {
    alert('You tapped the button!')
  }

  render() {
    return (
      <View style={styles.container}>
        
        <View style={styles.sideMenuButtonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Side Menu Button"
          />
        </View>

        <View style={styles.logoContainer}>
          <Image source={require('./nothamsterporn.jpg')}
          style={{height:250, width:300}}
          />
        </View>


        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <Button
              onPress={this._onPressButton}
              title="Start Game"
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              onPress={this._onPressButton}
              title="Customize Rules"
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   flexDirection: "column"
  },
  logoContainer: {
    height: 400,
    justifyContent: "center",
    alignSelf: "center"
  },
  buttonsContainer: {
    alignSelf: "center"
  },
  buttonContainer: {
    width: 250,
    margin: 5  
  },
  sideMenuButtonContainer: {
    width: 100
  }
});
