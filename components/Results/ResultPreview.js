import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import notify from '../../utils/notify';
import style from '../../styles';

const ResultPreview = ({data}) => {
  return (
    <TouchableOpacity
      style={style.containers.preview}
      onPress={
        data.games_played ? null : () => notify({message: 'No data available'})
      }>
      <Image
        source={{uri: data.image}}
        style={{height: 75, width: 75, borderWidth: 1, borderColor: 'black'}}
      />
      <View style={style.containers.previewDetailHold}>
        <View
          style={{
            height: '100%',
            width: `${data.win_rate}%`,
            backgroundColor: 'red',
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        />
        <Text style={style.typography.mainText}>{data.name}</Text>
        <Text style={style.typography.subHead}>
          Record: {data.win_count} - {data.games_played - data.win_count} ||{' '}
          {data.win_rate}%
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ResultPreview;
