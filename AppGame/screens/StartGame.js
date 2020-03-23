import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';


function StartGame(props) {
  const { navigation } = props
  return (
    <View style={styles.buttonContainer}>
    <Button
      onPress={ () => navigation.navigate('AddMember')}
      title="Add Members"
    />
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
    margin: 5  
  },
})

export default StartGame

// /screens/StartGame.js