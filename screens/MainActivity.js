import React, { Component } from 'react';
import { Button, StyleSheet, View, Image, Platform, StatusBar} from 'react-native';

import images from '../assets/images'

function MainActivity(props) {
  const { navigation } = props
  return (
    <View style={styles.container}>
      
      <View style={styles.sideMenuButtonContainer}>
        <Button
          onPress={ () => alert("swipe right for the side menu")}
          title="Swipe right for side menu"
        />
      </View>

      <View style={styles.logoContainer}>
        <Image source={images.logo}
        style={{height:250, width:300}}
        />
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.buttonContainer}>
        <Button 
            onPress={ () => navigation.navigate('AddMember')}
            title="Start Game"
          />
        </View>
        
        <View style={styles.buttonContainer}>
          <Button
            onPress={ () => navigation.navigate('CustomizeRules')}
            title="Customize Rules"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   flexDirection: "column",
   backgroundColor: "lightblue",
   paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  logoContainer: {
    height: 400,
    justifyContent: "center",
    alignSelf: "center"
  },
  buttonContainer: {
    alignSelf: "center",
    width: 250,
    margin: 5  
  },
  sideMenuButtonContainer: {
    width: 100 
  }
});

export default MainActivity