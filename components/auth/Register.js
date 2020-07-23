import React, {useState, useContext, useEffect} from 'react';
import {PlayersContext} from '../../context/stores/players';
import {View, Text} from 'react-native';
import UI from '../UI';
import SafeView from '../../hocs/SafeView';
import containers from '../../styles/container';
import typography from '../../styles/typography';
import httpRequest from '../../utils/httpRequest';
import AsyncStorage from '@react-native-community/async-storage';
import validateValues from '../../utils/validateValues';

const Register = ({navigation}) => {
  const {setPlayer, setPlayers, getPlayers} = useContext(PlayersContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [platform, setPlatform] = useState(null);
  const [availablePlatforms, setAvailablePlatforms] = useState([]);

  useEffect(() => {
    httpRequest({method: 'GET', url: '/platforms'}).then(res => {
      setAvailablePlatforms(res);
    });
  }, []);

  const handleRegister = () => {
    const validated = validateValues({email, password, name, platform});
    if (!validated) {
      return null;
    }
    httpRequest({
      method: 'POST',
      url: '/auth/register',
      data: {email, password, name, platform_id: platform},
    }).then(async res => {
      await AsyncStorage.setItem('token', res.token);
      getPlayers().then(players => {
        setPlayers(players);
        if (players[0]) {
          setPlayer(players[0]);
          navigation.navigate('ResultsContainer');
        } else {
          navigation.navigate('ResultsContainer', {
            screen: 'Results',
            params: {
              screen: 'Drawer',
              params: {
                screen: 'Add Player',
              },
            },
          });
        }
      });
    });
  };

  return (
    <View style={containers.container}>
      <UI.FormWrapper>
        <Text style={typography.heading}>Sign Up</Text>
        <UI.Input onChange={text => setEmail(text)} placeholder="Email" />
        <UI.Input onChange={text => setPassword(text)} placeholder="Password" />
        <UI.Input onChange={text => setName(text)} placeholder="Gamertag" />
        <UI.Select
          selectedValue={platform}
          onValueChange={value => setPlatform(value)}>
          <UI.Option label="Select a platform" value={null} />
          {availablePlatforms.map(option => (
            <UI.Option label={option.name} value={option.id} key={option.id} />
          ))}
        </UI.Select>
        <UI.Button onPress={handleRegister} title="Sign Up" />
      </UI.FormWrapper>
    </View>
  );
};
export default SafeView(Register);
