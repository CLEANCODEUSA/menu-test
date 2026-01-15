import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { MainStackNavigator, ContactStackNavigator } from './StackNavigator'

const Tab = createBottomTabNavigator()

const BottomTabNavigator = () => {
  return (
    <Tab.TabNavigator>
      <Tab.Screen name='Home' component={MainStackNavigator} />
      <Tab.Screen name='Contact' component={ContactStackNavigator} />
    </Tab.TabNavigator>
  )
}

export default BottomTabNavigator

