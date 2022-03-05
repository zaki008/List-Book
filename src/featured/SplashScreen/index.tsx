import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {IcLogo} from '../../assets/image';
import {RootState} from '../../shared/redux/rootReducer';
import Colors from '../../shared/styles/colors';
import {Font, Size} from '../../shared/styles/fonts';

const SplashScreen = ({navigation}: any) => {
  const isLogin = useSelector((state: RootState) => state.user.isLoggedIn);

  useEffect(() => {
    setTimeout(() => {
      isLogin ? navigation.replace('Home') : navigation.replace('GetStarted');
    }, 3000);
  }, []);
  return (
    <View style={styles.page}>
      <Image source={IcLogo} style={styles.logo} />
      <Text style={styles.title}>Book List ADA</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  page: {
    backgroundColor: Colors.white,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
  },
  title: {
    fontFamily: Font.primary[600],
    marginTop: 20,
    color: Colors.black1,
    fontSize: Size.h1,
  },
});
