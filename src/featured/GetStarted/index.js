import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { BG, Logo } from '../../assets/image';
import {Gap, Button} from '../../shared/components';
import Colors from '../../shared/styles/colors';
import { Size } from '../../shared/styles/fonts';

const GetStarted = ({navigation}) => {
  return (
    <ImageBackground source={BG} style={styles.page}>
      <View>
        <View style={styles.containerLogo}>
          <Image source={Logo} style={styles.logo} />
        </View>
        <Text style={styles.title}>
          List-list buku favorit anda tersedia disini
        </Text>
      </View>
      <View>
        <Button title="Login" onPress={() => navigation.navigate('Login')} />
        <Gap height={20} />
        <Button
          type={'secondary'}
          title="Register"
          onPress={() => navigation.navigate('Register')}
        />
      </View>
    </ImageBackground>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  page: {
    padding: 40,
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
    flex: 1,
  },
  containerLogo: {
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
  },
  title: {
    fontSize: Size.h4,
    color: Colors.black1,
    marginTop: 90,
    color: Colors.white,
    textTransform: 'capitalize',
    textAlign:'center'
  },
});
