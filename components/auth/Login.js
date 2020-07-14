import React from 'react';
import {View, Text} from 'react-native';
import UI from '../UI';
import SafeView from '../../hocs/SafeView';
import containers from '../../styles/container';
import typography from '../../styles/typography';

const Login = props => {
  return (
    <View style={containers.container}>
      <UI.FormWrapper>
        <>
          <Text style={typography.heading}>Login</Text>
          <UI.Input placeholder="Email" />
          <UI.Input placeholder="Password" />
          <UI.Button title="Log In" />
        </>
      </UI.FormWrapper>
    </View>
  );
};
export default SafeView(Login);
