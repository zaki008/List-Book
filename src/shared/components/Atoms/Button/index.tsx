import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import Colors from '../../../styles/colors';
import {Size} from '../../../styles/fonts';

interface ButtonProps {
  type: string;
  title: string;
  kind: string;
  onPress: () => void;
  contentStyle?: ViewStyle[] | any;
}

const Button = ({title, onPress, kind, contentStyle}: Partial<ButtonProps>) => {
  if (kind === 'btnLoading') {
    return (
      <View style={styles.wrapperLoading}>
        <Text style={[styles.text, contentStyle]}>Loading...</Text>
      </View>
    );
  }
  return (
    <TouchableOpacity
      style={[styles.container, contentStyle]}
      onPress={onPress}>
      <Text style={[styles.text, contentStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 14,
    borderRadius: 10,
  },
  text: {
    fontSize: Size.large,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  wrapperLoading: {
    backgroundColor: Colors.green1,
    paddingVertical: 14,
    borderRadius: 10,
  },
});
