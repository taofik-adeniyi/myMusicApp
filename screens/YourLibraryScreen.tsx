import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function YourLibraryScreen() {
    return (
        <View style={styles.container}>
            <Text style={{color: 'white'}}>Library</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
  });