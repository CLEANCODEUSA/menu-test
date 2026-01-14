import { StyleSheet, Text, View } from 'react-native';
import React from 'react'
import { NavigationContainer } from '@react-navigatoin/native'

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
