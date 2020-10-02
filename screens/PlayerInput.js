import React, { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

const PlayerInput = (props) =>{
  
  const handleName=(text)=>{
    props.setName({name: text})
  }  
  return(
        <View style = {styles.container}>
        <View style= {{flexDirection:"row",alignItems:"center"}}>
          <Text>Player {props.number}</Text>
          <TextInput style = {styles.input}
            underlineColorAndroid = "transparent"
            placeholder = "   Enter your name"
            placeholderTextColor = "#808080"
            autoCapitalize = "none"
            onChangeText = {handleName}/>
          </View>
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
    input: {
      margin: 5,
      height: 40,
      width: 250,
      alignItems:'flex-end',
      borderColor: 'black',
      borderWidth: 2
   },
  })

  export default PlayerInput