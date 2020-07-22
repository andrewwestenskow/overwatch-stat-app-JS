/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthRoutes from './routes/AuthRoutes';
import {drawerRef} from './routes/DrawerNav';

const App = () => {
  return (
    <NavigationContainer ref={drawerRef}>
      <AuthRoutes />
    </NavigationContainer>
  );
};

export default App;
