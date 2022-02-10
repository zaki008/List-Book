import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Colors from '../../../styles/colors';
import { Font } from '../../../styles/fonts';

const Link = ({title, position, size, onPress, type}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text(position, size, type)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Link;

const styles = StyleSheet.create({
  text: (position, size, type) => ({
    color: type === 'secondary' ? Colors.blue1 : Colors.green1,
    fontFamily: Font.primary[400],
    fontSize: size,
    textAlign: position,
  }),
});
