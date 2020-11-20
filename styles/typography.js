import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const roboto = 'Roboto';
const openSans = 'OpenSans';

const base = {
  fontFamily: 'Koverwatch',
};

export default StyleSheet.create({
  heading: {
    ...base,
    fontSize: 24,
    width: '90%',
    color: '#fff',
    marginLeft: windowWidth * 0.05,
  },
  mainText: {
    color: '#fff',
    fontSize: 18,
  },
  subHead: {
    color: '#fff',
    fontSize: 14,
  },
  imageLabel: {
    ...base,
    textAlign: 'center',
    fontSize: 18,
  },
  unselected: {
    ...base,
    color: 'grey',
    width: '100%',
    fontSize: 48,
    textAlign: 'center',
  },
  victory: {
    ...base,
    color: '#ffb642',
    fontSize: 48,
    width: '100%',
    textAlign: 'center',
  },
  defeat: {
    ...base,
    color: '#fe0230',
    fontSize: 48,
    width: '100%',
    textAlign: 'center',
  },
  resultsPreviewText: {
    color: '#fff',
    fontFamily: openSans,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
