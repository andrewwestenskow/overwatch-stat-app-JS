import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

export default ({method, url, data}) => {
  const fullUrl = 'http://10.0.2.2/api' + url;
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
        resolve(res);
      })
      .catch(err => {
        console.log(err);
        reject(err);
      });
  });
};
