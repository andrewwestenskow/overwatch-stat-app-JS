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

const iconWidth = windowWidth * 0.1;

const TabNav = props => {
  return (
    <View style={styles.tabNav}>
      <View style={{...styles.navSection, ...styles.leftSection}}>
        <Text
          onPress={() =>
            props.navigation.navigate('Results', {screen: 'Results'})
          }
          style={styles.navText}>
          Results
        </Text>
      </View>
      <Icon
        name="add-circle"
        reverse
        raised
        color="#ff8900"
        size={iconWidth}
        containerStyle={styles.icon}
        onPress={() =>
          props.navigation.navigate('Results', {screen: 'Add Match'})
        }
      />
      <View style={{...styles.navSection, ...styles.rightSection}}>
        <Text style={styles.navText}>Profile</Text>
      </View>
    </View>
  );
};
export default TabNav;

const styles = StyleSheet.create({
  tabNav: {
    height: 80,
    backgroundColor: '#000',
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
  },
  navSection: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  middle: {
    width: '20%',
  },
  icon: {
    position: 'absolute',
    bottom: 0,
    left: windowWidth / 2 - iconWidth - iconWidth / 4,
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
