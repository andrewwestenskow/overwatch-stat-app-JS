/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text} from 'react-native';
import SafeView from './hocs/SafeView';

const App = () => {
  return (
    <>
      <View>
        <Text>WELCOME TO OVERWATCH</Text>
      </View>
    </>
  );
};

export default SafeView(App);
