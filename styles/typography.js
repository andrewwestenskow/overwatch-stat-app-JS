import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const base = {
  fontFamily: 'BigNoodleTooOblique',
};

export default StyleSheet.create({
  heading: {
    ...base,
    fontSize: 24,
    width: '90%',
    color: '#fff',
    marginLeft: windowWidth * 0.05,
  },
  imageLabel: {
    ...base,
    textAlign: 'center',
    fontSize: 18,
  },
  unselected: {
    ...base,
    color: 'grey',
    width: '80%',
    fontSize: 48,
    textAlign: 'center',
  },
  victory: {
    ...base,
    color: 'yellow',
    fontSize: 48,
    width: '80%',
    textAlign: 'center',
  },
  defeat: {
    ...base,
    color: 'red',
    fontSize: 48,
    width: '80%',
    textAlign: 'center',
  },
});
