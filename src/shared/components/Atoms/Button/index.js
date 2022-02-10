import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Colors from '../../../styles/colors';
import { Size } from '../../../styles/fonts';

const Button = ({type, title, onPress, kind}) => {
  if(kind === 'btnLoading'){
      return (
        <View style={styles.wrapperLoading}>
          <Text style={styles.text(type)}>Loading...</Text>
        </View>
      );
  }
  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: type => ({
    backgroundColor: type === 'secondary' ? Colors.white : Colors.green1,
    paddingVertical: 14,
    borderRadius: 10,
  }),
  text: type => ({
    fontSize: Size.large,
    fontWeight: 'bold',
    textAlign: 'center',
    color: type === 'secondary' ? Colors.black1 : Colors.white,
  }),
  wrapperLoading: {
    backgroundColor: Colors.green1,
    paddingVertical: 14,
    borderRadius: 10,
  },
});