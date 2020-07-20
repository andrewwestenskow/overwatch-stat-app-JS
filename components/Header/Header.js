import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {Avatar} from 'react-native-elements';
import externalStyles from '../../styles';

const windowWidth = Dimensions.get('window').width;

const Header = props => {
  return (
    <View style={styles.header}>
      <Avatar
        overlayContainerStyle={{backgroundColor: 'grey'}}
        containerStyle={{width: windowWidth * 0.1, height: windowWidth * 0.1}}
        rounded
        title="B"
        size="medium"
      />
      <Text style={externalStyles.typography.heading}>{props.title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    padding: 10,
    backgroundColor: '#0b0d12',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 80,
    width: windowWidth,
  },
});
