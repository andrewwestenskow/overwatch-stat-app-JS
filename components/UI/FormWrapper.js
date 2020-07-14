import React from 'react';
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
} from 'react-native';

export default props => (
  <KeyboardAvoidingView
    style={{
      flex: 1,
      justifyContent: 'center',
    }}
    behavior="padding">
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      {props.children}
    </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
);
