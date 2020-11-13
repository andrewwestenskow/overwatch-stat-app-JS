import {StyleSheet, Dimensions} from 'react-native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 175,
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
  row: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-around',
    width: '100%',
  },
  preview: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  previewDetailHold: {
    position: 'relative',
    flex: 1,
    height: '100%',
    display: 'flex',
    borderWidth: 1,
    borderColor: 'black',
    paddingLeft: 10,
  },
});
