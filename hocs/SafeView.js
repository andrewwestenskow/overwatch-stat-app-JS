import React from 'react';
import background from '../assets/background.jpg';

import {
  SafeAreaView,
  StatusBar,
  ScrollView,
  StyleSheet,
  Dimensions,
  View,
} from 'react-native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default WrappedComponent => {
  return props => {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            style={styles.scrollView}
            contentInsetAdjustmentBehavior="automatic">
            <WrappedComponent {...props} />
          </ScrollView>
        </SafeAreaView>
      </>
    );
  };
};

const styles = StyleSheet.create({
  scrollView: {
    minHeight: windowHeight,
    width: windowWidth,
    backgroundColor: '#425583',
  },
});
