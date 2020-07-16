import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Picker} from '@react-native-community/picker';

const base = {
  fontFamily: 'BigNoodleTooOblique',
};

export const Option = Picker.Item;

export default props => (
  <View style={style.picker}>
    <Picker {...props} itemStyle={style.option} />
  </View>
);

const style = StyleSheet.create({
  picker: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    margin: 10,
    ...base,
  },
  option: {
    fontFamily: 'BigNoodleTooOblique',
  },
});
