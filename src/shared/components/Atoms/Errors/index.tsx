import React from 'react';
import {StyleSheet, Text} from 'react-native';
import Colors from '../../../styles/colors';

interface ErrorProps {
  error: string;
}

const Errors = ({error}: ErrorProps) => {
  return <Text style={styles.error}>{error}</Text>;
};

export default Errors;

const styles = StyleSheet.create({
  error: {
    color: Colors.red1,
  },
});
