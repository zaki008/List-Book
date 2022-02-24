import {useFormik} from 'formik';
import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  Button,
  Errors,
  Gap,
  Header,
  Input,
  Link,
} from '../../shared/components';
import {showError} from '../../shared/helpers/showMessage';
import {registerAction} from '../../shared/redux/actionTypes';
import Colors from '../../shared/styles/colors';
import {Font, Size} from '../../shared/styles/fonts';
import {SignUpSchema} from '../../shared/helpers/validation';
import {RootState} from '../../shared/redux/rootReducer';

const Register = ({navigation}: any) => {
  const disptach = useDispatch();
  const state = useSelector((state: RootState) => state.user);
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
      nip: '',
    },
    validationSchema: () => SignUpSchema,
    onSubmit: values => {
      const {name, email, password, passwordConfirm} = values;
      if (password === passwordConfirm) {
        disptach(registerAction({name, email, password}));
      } else {
        showError('password not match password confirmation');
      }
    },
  });
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header
          type={'icon-only'}
          onPress={() => navigation.navigate('Login')}
        />
        <View style={styles.content}>
          <Text style={styles.title}>Create Account Sekarang Juga</Text>
          <Text style={styles.desc}>Create a new account</Text>
          <Gap height={20} />
          <Input
            label={'NAME'}
            name={'name'}
            onChangeText={formik.handleChange('name')}
            value={formik.values.name}
          />
          {formik.errors.name && formik.touched.name ? (
            <Errors error={formik.errors.name} />
          ) : null}
          <Gap height={12} />
          <Input
            label={'EMAIL'}
            name={'email'}
            onChangeText={formik.handleChange('email')}
            value={formik.values.email}
          />
          {formik.errors.email && formik.touched.email ? (
            <Errors error={formik.errors.email} />
          ) : null}
          <Gap height={12} />
          <Input
            label={'PHONE'}
            name={'nip'}
            onChangeText={formik.handleChange('nip')}
            value={formik.values.nip}
          />
          {formik.errors.nip && formik.touched.nip ? (
            <Errors error={formik.errors.nip} />
          ) : null}
          <Gap height={12} />
          <Input
            label={'PASSWORD'}
            name={'password'}
            onChangeText={formik.handleChange('password')}
            value={formik.values.password}
            secureTextEntry
          />
          {formik.errors.password && formik.touched.password ? (
            <Errors error={formik.errors.password} />
          ) : null}
          <Gap height={12} />
          <Input
            label={'CONFIRM PASSWORD'}
            name={'passwordConfirm'}
            onChangeText={formik.handleChange('passwordConfirm')}
            value={formik.values.passwordConfirm}
            secureTextEntry
          />
          {formik.errors.passwordConfirm && formik.touched.passwordConfirm ? (
            <Errors error={formik.errors.passwordConfirm} />
          ) : null}
          <Gap height={30} />
          {state.isLoading ? (
            <Button
              kind={'btnLoading'}
              contentStyle={[
                {backgroundColor: Colors.green1, color: Colors.white},
              ]}
            />
          ) : (
            <Button
              title={'Create Account'}
              contentStyle={[
                {backgroundColor: Colors.green1, color: Colors.white},
              ]}
              onPress={formik.handleSubmit}
            />
          )}
          <Gap height={20} />
          <View style={styles.login}>
            <Text>Don't have account ? </Text>
            <Link title="Login" onPress={() => navigation.navigate('Login')} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  page: {
    backgroundColor: Colors.white,
    flex: 1,
    paddingVertical: 20,
  },
  content: {
    paddingHorizontal: 40,
  },
  title: {
    fontFamily: Font.primary[700],
    fontSize: Size.h2,
    color: Colors.black1,
    textAlign: 'center',
  },
  desc: {
    fontFamily: Font.primary[500],
    fontSize: Size.medium,
    color: Colors.black1,
    textAlign: 'center',
    marginTop: -8,
  },
  login: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'center',
  },
});
