import React from 'react';
import {StyleSheet, Text, TouchableOpacity, ViewStyle} from 'react-native';
import Colors from '../../../styles/colors';
import {Font} from '../../../styles/fonts';

interface LinkProps {
  title: string;
  onPress: () => void;
  contentStyle?: ViewStyle[] | any;
}

const Link = ({title, onPress, contentStyle}: Partial<LinkProps>) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles.text, contentStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Link;

const styles = StyleSheet.create({
  text: {
    color: Colors.green1,
    fontFamily: Font.primary[400],
  },
});
