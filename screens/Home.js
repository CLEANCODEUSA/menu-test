import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const Home = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <Text>Home screen</Text>
      <Button
        title='Got to About Screen'
        onPress={() => { navigation.navigate('About') }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
})

export default Home
