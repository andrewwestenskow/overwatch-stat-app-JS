import {StyleSheet, Dimensions} from 'react-native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const primaryBg = '#2d3356';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 175,
    minHeight: windowHeight,
    width: windowWidth,
    backgroundColor: primaryBg,
  },
  window: {
    flex: 1,
    minHeight: windowHeight,
    width: windowWidth,
    backgroundColor: primaryBg,
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
  listContainerBg: {
    flex: 1,
    backgroundColor: primaryBg,
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
  resultsPreviewHold: {
    backgroundColor: 'rgba(198, 216, 211, 0.4)',
    width: '98%',
    alignSelf: 'center',
    marginBottom: 5,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 25,
    justifyContent: 'space-between',
  },
  previewDetailHold: {
    width: '80%',
    height: 40,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  previewTextHold: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
  },
});
