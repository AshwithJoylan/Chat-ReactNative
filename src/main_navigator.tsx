import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const {Screen, Navigator} = createStackNavigator();

import {Home, ChatDetails, Login, Register, ForgotPassword} from './screens';
const screens: {name: string; component: () => JSX.Element}[] = [
  {
    name: 'Login',
    component: Login,
  },
  {
    name: 'Register',
    component: Register,
  },
  {
    name: 'ForgotPassword',
    component: ForgotPassword,
  },
  {
    name: 'Home',
    component: Home,
  },
  {
    name: 'ChatDetails',
    component: ChatDetails,
  },
];

export default () => {
  return (
    <NavigationContainer>
      <Navigator headerMode="none">
        {screens.map(({name, component}, index) => (
          <Screen key={index.toString()} {...{name, component}} />
        ))}
      </Navigator>
    </NavigationContainer>
  );
};
