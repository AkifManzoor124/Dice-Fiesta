import React, { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import PlayerInput from '../screens/PlayerInput'



const AddMember=(props) =>{
  const { navigation } = props
  const [name, setName]=useState ("Truth or Drink");
  var playerArray=[1,2,3,4,5,6]
  return (
    <View style = {styles.container}>
      {playerArray.map((i) =>{
      return <PlayerInput key={i} number={i} setName={setName} ></PlayerInput>
      })}
      <TouchableOpacity
          style = {styles.submitButton}
          onPress = {
            () => navigation.navigate('StartGame')}>
            <Text style = {styles.submitButtonText}> Start Game! </Text>
        </TouchableOpacity>
      </View> 
  )
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
  input: {
    margin: 15,
    height: 40,
    width: 250,
    alignItems:'flex-end',
    borderColor: 'black',
    borderWidth: 2
 },
  submitButton: {
    backgroundColor: '#3ba8e8',
    padding: 10,
    margin: 15,
    height: 40,
 },
 submitButtonText:{
    color: 'white'
 }
})

export default AddMember

// /screens/CustomizeRules.js