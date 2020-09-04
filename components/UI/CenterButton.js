import React from 'react';
import {View, StyleSheet} from 'react-native';
import Button from './Button';

const CenterButton = props => {
  return (
    <View style={style.view}>
      <Button {...props} />
    </View>
  );
};

const style = StyleSheet.create({
  view: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default CenterButton;
