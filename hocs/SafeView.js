import React from 'react';

import {
  SafeAreaView,
  StatusBar,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';

const windowHeight = Dimensions.get('window').height;

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
    backgroundColor: '#1198ce',
    minHeight: windowHeight,
  },
});
