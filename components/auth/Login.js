import React, {useState} from 'react';
import {View, Text} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import UI from '../UI';
import SafeView from '../../hocs/SafeView';
import containers from '../../styles/container';
import typography from '../../styles/typography';
import httpRequest from '../../utils/httpRequest';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    httpRequest({method: 'POST', data: {email, password}, url: '/auth/login'})
      .then(res => {
        AsyncStorage.setItem('token', res.token);
        navigation.navigate('Dashboard');
      })
      .catch(err => console.log('ERROR'));
  };

  return (
    <View style={containers.container}>
      <UI.FormWrapper>
        <>
          <Text style={typography.heading}>Login</Text>
          <UI.Input
            onChangeText={value => setEmail(value)}
            placeholder="Email"
          />
          <UI.Input
            onChangeText={value => setPassword(value)}
            placeholder="Password"
          />
          <UI.Button onPress={handleLogin} title="Log In" />
        </>
      </UI.FormWrapper>
    </View>
  );
};
export default SafeView(Login);
