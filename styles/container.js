import {StyleSheet, Dimensions} from 'react-native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 50,
    borderColor: '#000',
    borderWidth: 1,
    minHeight: windowHeight,
    width: windowWidth,
    backgroundColor: '#425583',
  },
  window: {
    flex: 1,
    padding: 50,
    minHeight: windowHeight,
    width: windowWidth,
    backgroundColor: '#425583',
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listItem: {
    padding: 15,
    borderColor: '#000',
    borderWidth: 1,
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  listContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    padding: 0,
  },
});
