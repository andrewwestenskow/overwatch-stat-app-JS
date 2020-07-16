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

export default (Footer, footerProps) => {
  return WrappedComponent => {
    return props => {
      return (
        <>
          <StatusBar barStyle="dark-content" />
          <SafeAreaView>
            <View style={{position: 'relative'}}>
              <ScrollView
                style={styles.scrollView}
                contentInsetAdjustmentBehavior="automatic">
                <WrappedComponent {...props} />
              </ScrollView>
              {Footer ? <Footer {...footerProps} /> : null}
            </View>
          </SafeAreaView>
        </>
      );
    };
  };
};

const styles = StyleSheet.create({
  scrollView: {
    minHeight: windowHeight,
    width: windowWidth,
    backgroundColor: '#425583',
  },
});
