import React from 'react'
import { StyleSheet, Text } from 'react-native'
import Colors from '../../../styles/colors'

const Errors = ({error}) => {
  return (
    <Text style={styles.error}>{error}</Text>
  )
}

export default Errors

const styles = StyleSheet.create({
  error: {
      color: Colors.red1
  }
});