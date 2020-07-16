import React, {useState, useEffect} from 'react';
import UI from '../UI';
import styles from '../../styles';
import httpRequest from '../../utils/httpRequest';
import {View} from 'react-native';

const AddPlayerForm = props => {
  const [name, setName] = useState('');
  const [platform, setPlatform] = useState(null);
  const [availablePlatforms, setAvailablePlatforms] = useState([]);

  useEffect(() => {
    httpRequest({method: 'GET', url: '/platforms'}).then(res => {
      setAvailablePlatforms(res);
    });
  }, []);

  return (
    <UI.FormWrapper>
      <UI.Input onTextChange={text => setName(text)} placeholder="Gamertag" />
      <UI.Select
        selectedValue={platform}
        onValueChange={value => setPlatform(value)}>
        <UI.Option label="Select a platform" value={null} />
        {availablePlatforms.map(option => (
          <UI.Option label={option.name} value={option.id} key={option.id} />
        ))}
      </UI.Select>
      <UI.Button title="Save" />
    </UI.FormWrapper>
  );
};

export default AddPlayerForm;
