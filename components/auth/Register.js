import React from 'react';
import {View, Text} from 'react-native';
import UI from '../UI';
import SafeView from '../../hocs/SafeView';
import containers from '../../styles/container';
import typography from '../../styles/typography';

const Register = props => {
  return (
    <View style={containers.container}>
      <UI.FormWrapper>
        <>
          <Text style={typography.heading}>Sign Up</Text>
          <UI.Input placeholder="Email" />
          <UI.Input placeholder="Password" />
          <UI.Button title="Sign Up" />
        </>
      </UI.FormWrapper>
    </View>
  );
};
export default SafeView()(Register);
