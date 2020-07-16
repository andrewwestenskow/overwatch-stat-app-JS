import React from 'react';
import styles from '../../styles';
import {Image} from 'react-native';

const MapImage = props => (
  <Image style={styles.images.resultsList} source={{uri: props.src}} />
);

export default MapImage;
