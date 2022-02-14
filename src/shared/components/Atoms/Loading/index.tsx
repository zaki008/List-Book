import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import Colors from '../../../styles/colors';

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} color={Colors.green1} />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    // paddingTop:-20,
    flex: 1,
  },
});
