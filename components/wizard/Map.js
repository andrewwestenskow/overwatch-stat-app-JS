import React from 'react';
import styles from '../../styles';
import {Image, View, Text, TouchableOpacity} from 'react-native';

const MapImage = props => {
  return (
    <View>
      <TouchableOpacity>
        <Image
          resizeMethod="resize"
          style={styles.images.resultsList}
          source={{uri: props.src}}
        />
      </TouchableOpacity>
      <Text style={styles.typography.imageLabel}>{props.name}</Text>
    </View>
  );
};

export default MapImage;
