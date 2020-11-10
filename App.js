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

const App = () => {
  return (
    <GameDataProvider>
      <PlayersProvider>
        <NavigationContainer ref={drawerRef}>
          <AuthRoutes />
        </NavigationContainer>
      </PlayersProvider>
    </GameDataProvider>
  );
};

export default App;
