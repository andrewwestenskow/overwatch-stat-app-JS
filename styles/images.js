import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  resultsList: {
    width: windowWidth / 3,
    height: windowWidth / 4,
    margin: 5,
  },
  resultsPreview: {
    height: 40,
    width: 40,
    borderRadius: 50,
  },
  smallImage: {
    width: 25,
    height: 25,
  },
});
