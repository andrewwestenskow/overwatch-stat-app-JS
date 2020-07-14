import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

export default ({method, url, data}) => {
  //TODO Replace this later
  const fullUrl = 'http://10.0.2.2:3050/api' + url;
  const authToken = AsyncStorage.getItem('token');

  return new Promise((resolve, reject) => {
    axios({
      data,
      headers: {
        Authorization: authToken,
      },
      method,
      url: fullUrl,
    })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        console.warn(err);
        reject(err);
      });
  });
};
