import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../../styles/colors';
import { Font, Size } from '../../../styles/fonts';

const CategoryItem = ({title, color}) => {
  return (
    <View style={styles.container(color)}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  container: color => ({
    backgroundColor: color,
    width: 160,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginRight: 12,
  }),
  title: {
    color: Colors.white,
    fontFamily: Font.primary[600],
    fontSize: Size.large,
  },
});
