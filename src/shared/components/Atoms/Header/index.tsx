import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Gap from '../Gap';
import {Filter, IconBackGreen, IcArrowBlack} from '../../../../assets/image';
import {Font, Size} from '../../../styles/fonts';
import Colors from '../../../styles/colors';

interface HeaderProps {
  title: string;
  type: string;
  onPress(): void;
}

const Header = ({title, onPress, type}: Partial<HeaderProps>) => {
  if (type === 'icon-filter') {
    return (
      <View style={styles.container}>
        <Gap width={40} />
        <Text style={styles.title}>Venus Bookstore</Text>
        <Image source={Filter} style={styles.filter} />
      </View>
    );
  }
  if (type === 'icon-only') {
    return (
      <TouchableOpacity style={styles.wrapperIcon} onPress={onPress}>
        <Image source={IconBackGreen} style={styles.IcBack} />
      </TouchableOpacity>
    );
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Image source={IcArrowBlack} style={styles.IcBack} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <Gap width={20} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  wrapperIcon: {
    padding: 20,
  },
  IcBack: {
    width: 20,
    height: 20,
  },
  container: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: Colors.gray1,
  },
  title: {
    fontSize: Size.h4,
    color: Colors.black1,
    fontFamily: Font.primary[400],
    marginRight: 20,
    justifyContent: 'center',
    flex: 1,
    textAlign: 'center',
  },
  filter: {
    width: 40,
    height: 40,
  },
  containerDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderBottomWidth: 3,
    borderBottomColor: Colors.gray1,
  },
});
