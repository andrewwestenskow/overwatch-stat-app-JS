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
});
