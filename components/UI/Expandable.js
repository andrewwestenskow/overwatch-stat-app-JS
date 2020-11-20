import React, {useState, useEffect, useRef} from 'react';
import {Animated, TouchableOpacity} from 'react-native';

const Expandable = Animated.createAnimatedComponent(TouchableOpacity);

export default props => {
  const {
    renderClosed,
    renderOpen,
    closedHeight,
    openHeight,
    style,
    disabled,
  } = props;
  const [isOpen, setIsOpen] = useState(true);

  const heightChange = useRef(new Animated.Value(closedHeight)).current;

  const open = () => {
    Animated.timing(heightChange, {
      toValue: openHeight,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const close = () => {
    Animated.timing(heightChange, {
      toValue: closedHeight,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    isOpen ? close() : open();
  }, [isOpen]);

  return (
    <Expandable
      activeOpacity={0.8}
      style={{...style, height: heightChange}}
      onPress={() => (disabled ? null : setIsOpen(!isOpen))}>
      {renderClosed({...props, setIsOpen, isOpen})}
      {/* {isOpen && renderOpen({isOpen, setIsOpen})} */}
    </Expandable>
  );
};
