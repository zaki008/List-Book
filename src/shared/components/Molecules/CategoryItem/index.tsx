import React from 'react';
import {StyleSheet, Text, View, ViewStyle} from 'react-native';
import Colors from '../../../styles/colors';
import {Font, Size} from '../../../styles/fonts';

interface CategoryItemProps {
  title: 'Drama' | 'Photograpy' | 'Basket' | 'Football';
  contentStyle?: ViewStyle[];
}

const CategoryItem = ({title, contentStyle}: CategoryItemProps) => {
  return (
    <View style={[styles.container, , contentStyle]}>
      <Text style={[styles.title]}>{title}</Text>
    </View>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    width: 160,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginRight: 12,
  },
  title: {
    color: Colors.white,
    fontFamily: Font.primary[600],
    fontSize: Size.large,
  },
});
