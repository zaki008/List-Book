import React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import {Avatar} from '../../assets/image';
import {Button, Errors, Gap, Input, Link} from '../../shared/components';
import Colors from '../../shared/styles/colors';
import {Font, Size} from '../../shared/styles/fonts';
import {useDispatch, useSelector} from 'react-redux';
import {loginAction} from '../../shared/redux/actionTypes';
import {useFormik} from 'formik';
import {SignInSchema} from '../../shared/helpers/validation';
import {RootState} from '../../shared/redux/rootReducer';

const Login = ({navigation}: any) => {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.user);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: () => SignInSchema,
    onSubmit: values => {
      dispatch(loginAction(values));
    },
  });
  return (
    <View style={styles.page}>
      <View style={styles.wrapper}>
        <Image source={Avatar} style={styles.avatar} />
        <Text style={styles.welcome}>Welcome Book</Text>
        <Text style={styles.desc}>Sign to Continue lanjut</Text>
      </View>
      <Gap height={40} />
      <Input
        label={'Email'}
        name={'email'}
        onChangeText={formik.handleChange('email')}
        value={formik.values.email}
      />
      {formik.errors.email && formik.touched.email ? (
        <Errors error={formik.errors.email} />
      ) : null}
      <Gap height={16} />
      <Input
        label={'Password'}
        name={'password'}
        onChangeText={formik.handleChange('password')}
        value={formik.values.password}
        secureTextEntry
      />
      {formik.errors.password && formik.touched.password ? (
        <Errors error={formik.errors.password} />
      ) : null}
      <Gap height={8} />
      <Link
        title="Forgot Password ?"
        contentStyle={[{textAlign: 'right', fontSize: Size.regular}]}
      />
      <Gap height={28} />
      {state.isLoading ? (
        <Button
          contentStyle={[{backgroundColor: Colors.green1, color: Colors.white}]}
          kind={'btnLoading'}
        />
      ) : (
        <Button
          contentStyle={[{backgroundColor: Colors.green1, color: Colors.white}]}
          title={'Sign In'}
          onPress={formik.handleSubmit}
        />
      )}
      <Gap height={18} />
      <View style={styles.register}>
        <Text>Don't have account ? </Text>
        <Link
          title="create new account"
          onPress={() => navigation.navigate('Register')}
        />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    backgroundColor: Colors.white,
    flex: 1,
    padding: 40,
    justifyContent: 'center',
  },
  avatar: {
    width: 120,
    height: 120,
  },
  welcome: {
    marginTop: 10,
    fontFamily: Font.primary[700],
    color: Colors.black1,
    fontSize: Size.h2,
  },
  desc: {
    color: Colors.gray1,
    fontSize: Size.large,
    marginTop: -8,
  },
  wrapper: {
    alignItems: 'center',
  },
  register: {
    fontFamily: Font.primary[800],
    flexDirection: 'row',
    justifyContent: 'center',
    fontSize: Size.medium,
  },
});
