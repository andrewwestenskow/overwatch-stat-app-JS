import {StyleSheet, Dimensions} from 'react-native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 120,
    minHeight: windowHeight,
    width: windowWidth,
    backgroundColor: '#425583',
  },
  window: {
    flex: 1,
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
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  listContainer: {
    width: '100%',
  },
  fixedFooter: {
    display: 'flex',
    flexDirection: 'row',
  },
  footerItemsContainer: {
    width: '50%',
    height: 50,
  },
  sectionHeading: {padding: 15, fontSize: 24},
});
