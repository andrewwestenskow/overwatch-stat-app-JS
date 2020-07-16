import {StyleSheet} from 'react-native';

const base = {
  fontFamily: 'BigNoodleTooOblique',
};

export default StyleSheet.create({
  heading: {
    ...base,
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 10,
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
