import React, { Fragment, useState } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import PlayerInput from '../screens/PlayerInput'
import { Formik } from 'formik'
import { Button } from 'react-native'

const AddMember = (props) => {
  const { navigation } = props
  const [name, setName] = useState("Truth or Drink");


  var playerArray = [1, 2, 3, 4, 5, 6]
  const SaveAndSubmitButton=(values)=>{
    console.log(JSON.stringify(values))
    navigation.navigate('StartGame')
  }

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ player1: '' }}
        onSubmit={values =>SaveAndSubmitButton(values)}>
        {({ values, handleChange, handleSubmit }) => (
          <Fragment>
            {playerArray.map((i) => {
              return <PlayerInput key={i} number={i} handleChange={handleChange} values ={values}></PlayerInput>
            })}
            <Button
              title="Start Game!"
              onPress={handleSubmit}/>
          </Fragment>
        )}
      </Formik>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'lightblue'
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
    alignItems: 'flex-end',
    borderColor: 'black',
    borderWidth: 2
  },
  submitButton: {
    backgroundColor: '#3ba8e8',
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: 'white'
  }
})

export default AddMember

// /screens/CustomizeRules.js