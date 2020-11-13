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
import PlayersProvider from './context/stores/players';
import GameDataProvider from './context/stores/gameData';
import Toast from 'react-native-toast-message';

const App = () => {
  return (
    <GameDataProvider>
      <PlayersProvider>
        <NavigationContainer ref={drawerRef}>
          <AuthRoutes />
          <Toast ref={ref => Toast.setRef(ref)} />
        </NavigationContainer>
      </PlayersProvider>
    </GameDataProvider>
  );
};

export default App;
