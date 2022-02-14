import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import Colors from '../../../styles/colors';
import {Font, Size} from '../../../styles/fonts';

interface InputProps {
  label: String;
  value: string;
  secureTextEntry?: boolean;
  onChangeText: any;
  name: string;
}

const Input = ({
  label,
  value,
  secureTextEntry,
  onChangeText,
}: Partial<InputProps>) => {
  const [border, setBorder] = useState(Colors.gray1);

  const onFocusForm = () => {
    setBorder(Colors.green1);
    return border;
  };

  const onBlurform = () => {
    setBorder(Colors.gray1);
    return border;
  };

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        onFocus={onFocusForm}
        onBlur={onBlurform}
        style={[styles.input, {borderColor: border}]}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: Colors.gray1,
    borderRadius: 8,
    paddingHorizontal: 16,
    fontFamily: Font.primary[400],
    color: Colors.green1,
    fontSize: Size.input,
    paddingVertical: 8,
  },
  label: {
    fontSize: Size.medium,
    color: Colors.gray1,
    fontFamily: Font.primary[500],
    marginBottom: 8,
  },
});
