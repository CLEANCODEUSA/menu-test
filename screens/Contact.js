import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Contact = () => {
  return (
    <View style={styles.center}>
      <Text>Contact</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
})

export default Contact
