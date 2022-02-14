import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Colors from '../../../styles/colors';
import {Font, Size} from '../../../styles/fonts';

interface LogoutProps {
  onPress: () => void;
}

const Logout = ({onPress}: LogoutProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}>Logout Account</Text>
    </TouchableOpacity>
  );
};

export default Logout;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.red1,
    padding: 20,
    borderRadius: 12,
  },
  title: {
    color: Colors.white,
    fontFamily: Font.primary[600],
    fontSize: Size.large,
    textAlign: 'center',
  },
});
