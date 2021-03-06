import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './rootNavigation';
import React from 'react';
import {
  Login,
  Register,
  SplashScreen,
  GetStarted,
  BookDetail,
  Book,
} from '../../featured';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../featured/Home';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/rootReducer';

const Navigation = () => {
  const state = useSelector((state: RootState) => state.user);
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Splash">
        {state.isLoggedIn ? (
          <>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Book"
              component={Book}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="BookDetail"
              component={BookDetail}
              options={{headerShown: false}}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Splash"
              component={SplashScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="GetStarted"
              component={GetStarted}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{headerShown: false}}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
