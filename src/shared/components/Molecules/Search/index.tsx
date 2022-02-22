import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {Button} from '../..';
import Colors from '../../../styles/colors';
import {Font, Size} from '../../../styles/fonts';

interface SearchProps {
  value: string;
  onChangeText: any;
  name: string;
  onPress?: () => void;
  onReset?: () => void;
}

const Search = ({onChangeText, value, onPress, onReset}: SearchProps) => {
  return (
    <View style={styles.inputWrapper}>
      <TextInput
        onChangeText={onChangeText}
        value={value}
        style={styles.input}
        placeholder="Search"
      />
      <Button
        contentStyle={[
          {
            backgroundColor: Colors.green1,
            color: Colors.white,
            paddingHorizontal: 3,
            fontSize: Size.regular,
            marginRight: 6,
          },
        ]}
        title={'Search'}
        onPress={onPress}
      />
      <Button
        contentStyle={[
          {
            backgroundColor: Colors.red1,
            color: Colors.white,
            paddingHorizontal: 3,
            fontSize: Size.regular,
          },
        ]}
        title={'Reset'}
        onPress={onReset}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  inputWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.gray1,
    borderRadius: 8,
    paddingHorizontal: 12,
    fontFamily: Font.primary[400],
    color: Colors.green1,
    fontSize: Size.input,
    paddingVertical: 8,
    width: 200,
    marginRight: 20,
  },
});
