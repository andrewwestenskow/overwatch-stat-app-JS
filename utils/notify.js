import React from 'react';
import Toast from 'react-native-toast-message';

export default config => {
  const {message, type = 'info', position = 'bottom'} = config;
  console.log(config);

  Toast.show({
    type,
    text1: message,
    autoHide: true,
    visibilityTime: 2000,
    bottomOffset: 50,
    position,
  });
};
