import React from 'react';
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  View,
  Keyboard,
} from 'react-native';

export default props => (
  <KeyboardAvoidingView
    style={{
      justifyContent: 'center',
      alignItems: 'center',
    }}
    behavior="padding">
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{width: '100%'}}>{props.children}</View>
    </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
);
