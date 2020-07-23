'use strict';

import React, {useState} from 'react';
import {View, TouchableWithoutFeedback, StyleSheet} from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

const Indicators = props => {
  return (
    <View style={style.indicatorHold}>
      {props.slides.map((slide, index) => (
        <TouchableWithoutFeedback
          onPress={() => props.setCurrentSlide(index)}
          key={slide.id}>
          <View
            style={
              props.currentSlide === index
                ? {...style.indicator, ...style.currentIndicator}
                : style.indicator
            }
          />
        </TouchableWithoutFeedback>
      ))}
    </View>
  );
};

const SectionSwipe = props => {
  const {slides} = props;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [text, setText] = useState("I'm ready to get swiped");
  const [gestureName, setGestureName] = useState('none');
  const [backgroundColor, setBackgroundColor] = useState('#fff');

  function onSwipeLeft(gestureState) {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(prev => prev + 1);
    }
  }

  function onSwipeRight(gestureState) {
    if (currentSlide !== 0) {
      setCurrentSlide(prev => prev - 1);
    }
  }

  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  };

  return (
    <GestureRecognizer
      onSwipeLeft={state => onSwipeLeft(state)}
      onSwipeRight={state => onSwipeRight(state)}
      config={config}
      style={{
        flex: 1,
      }}>
      <Indicators
        slides={slides}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
      />
      <View style={style.slideHold}>{slides[currentSlide].component}</View>
    </GestureRecognizer>
  );
};

export default SectionSwipe;

const style = StyleSheet.create({
  indicator: {
    width: 20,
    height: 10,
    borderColor: '#000',
    borderWidth: 1,
    backgroundColor: '#fff',
  },
  indicatorHold: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    padding: 15,
  },
  currentIndicator: {
    width: 60,
    backgroundColor: 'red',
  },
  slideHold: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
});
