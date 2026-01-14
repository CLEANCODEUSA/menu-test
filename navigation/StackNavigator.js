import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../screens/Home'
import About from '../screens/About'

const Stack = createStackNavigator()

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#9ac4f8'
        },
        headerTintColor: 'white',
        headerBackTitle: 'Back'
      }}
    >
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='About' component={About} />
    </Stack.Navigator>
  )
}

export { MainStackNavigator }
