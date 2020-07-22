import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {Icon} from 'react-native-elements';
const windowWidth = Dimensions.get('window').width;
import {navigateDrawer} from '../../routes/DrawerNav';

const iconWidth = windowWidth * 0.07;

const TabNav = props => {
  return (
    <View style={styles.tabNav}>
      <TouchableOpacity
        onPress={() => navigateDrawer('Results')}
        style={{...styles.navSection, ...styles.leftSection}}>
        <Text style={styles.navText}>Results</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigateDrawer('Add Match')}
        style={styles.middle}>
        <Text style={styles.navText}>Add Match</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{...styles.navSection, ...styles.rightSection}}>
        <Text style={styles.navText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};
export default TabNav;

const styles = StyleSheet.create({
  tabNav: {
    height: 50,
    backgroundColor: '#000',
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
  },
  navSection: {
    width: '35%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  middle: {
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    position: 'absolute',
    bottom: -5,
    left: windowWidth / 2 - iconWidth - iconWidth / 3,
  },
  navText: {
    color: '#fff',
    fontFamily: 'Koverwatch',
    width: '100%',
    fontSize: 24,
    textAlign: 'center',
  },
  leftSection: {
    borderRightColor: '#fff',
    borderRightWidth: 1,
  },
  rightSection: {
    borderLeftColor: '#fff',
    borderLeftWidth: 1,
  },
});
