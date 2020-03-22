import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import MainActivity from '../screens/MainActivity'
import CustomizeRules from '../screens/CustomizeRules'
import StartGame from "../screens/StartGame"

const Stack = createStackNavigator()

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='MainActivity'
          component={MainActivity}
          options={{ title: 'MainActivity', headerShown: false }}
        />
        <Stack.Screen
          name='StartGame'
          component={StartGame}
          options={{ title: 'Start Game', headerShown: false}}
        />
        <Stack.Screen
          name='CustomizeRules'
          component={CustomizeRules}
          options={{ title: 'Customize Rules', headerShown: false }}
        />       
      </Stack.Navigator>
      
    </NavigationContainer>
  )
}

export default MainStackNavigator