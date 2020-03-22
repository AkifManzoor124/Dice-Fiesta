import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import MainActivity from '../screens/MainActivity'
import CustomizeRules from '../screens/CustomizeRules'

const Stack = createStackNavigator()

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='MainActivity'
          component={MainActivity}
          options={{ title: 'MainActivity' }}
        />
        <Stack.Screen
          name='CustomizeRules'
          component={CustomizeRules}
          options={{ title: 'CustomizeRules' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStackNavigator