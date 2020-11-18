import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

export default async ({method, url, data}) => {
  //TODO Replace this later

  //! TEST
  const fullUrl = 'http://10.0.0.23:3050/api' + url;

  //! PROD
  // const fullUrl = 'http://64.227.14.5:3050/api' + url;
  const authToken = await AsyncStorage.getItem('token');
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
        console.warn('Token: ', authToken);
        reject(err);
      });
  });
};
