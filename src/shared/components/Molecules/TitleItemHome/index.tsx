import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Link} from '../../Atoms/';
import Colors from '../../../styles/colors';
import {Font, Size} from '../../../styles/fonts';

interface TitleItemHomeProps {
  title: string;
  onPress?: () => void;
}

const TitleItemHome = ({title, onPress}: Partial<TitleItemHomeProps>) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{title}</Text>
      <Link
        title={'View all'}
        contentStyle={[{fontSize: Size.medium}]}
        onPress={onPress}
      />
    </View>
  );
};

export default TitleItemHome;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: Size.medium,
    fontFamily: Font.primary[500],
    color: Colors.black1,
  },
});
