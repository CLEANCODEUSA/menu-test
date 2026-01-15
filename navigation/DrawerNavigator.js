
import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack'

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator()

import Home from '../screens/Home'
import About from '../screens/About'
import Contact from '../screens/Contact'

const screenOptionsStyle = {
  headerStyle: {
    backgroundColor: '#9ac4f8'
  },
  headerTintColor: 'white',
  headerBackTitle: 'Back'
}

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={() => {
        return (
          <Tab.Navigator>
            <Tab.Screen name="Home" component={() => {
              return (
                <Stack.Navigator screenOptions={screenOptionsStyle}>
                  <Stack.Screen name='Home' component={Home} />
                  <Stack.Screen name='About' component={About} />
                </Stack.Navigator>
              )
            }} />
            <Tab.Screen name="Contact" component={() => {
              return (
                <Stack.Navigator screenOptions={screenOptionsStyle}>
                  <Stack.Screen name='Contact' component={Contact} />
                </Stack.Navigator>
              )
            }} />
          </Tab.Navigator>
        )
      }} />
      <Drawer.Screen name="Contact" component={() => {
        return (
          <Stack.Navigator screenOptions={screenOptionsStyle}>
            <Stack.Screen name='Contact' component={Contact} />
          </Stack.Navigator>
        )
      }} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator
