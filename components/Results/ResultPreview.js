import React, {Fragment} from 'react';
import {View, Text, Image} from 'react-native';
import * as Progress from 'react-native-progress';
import notify from '../../utils/notify';
import style from '../../styles';
import UI from '../UI';

const renderClosed = props => {
  const {data} = props;

  return (
    <Fragment>
      <Image
        resizeMode="contain"
        source={{uri: data.image}}
        style={style.images.resultsPreview}
      />
      <View style={style.containers.previewDetailHold}>
        <View style={style.containers.previewTextHold}>
          <Text style={style.typography.resultsPreviewText} t>
            {data.name}
          </Text>
          {data.games_played && (
            <Text style={style.typography.resultsPreviewText}>
              ({data.win_count} - {data.games_played - data.win_count})
            </Text>
          )}
        </View>
        <Progress.Bar
          width={null}
          progress={+data.win_rate / 100}
          unfilledColor="rgba(255,255, 255, 0.7)"
        />
      </View>
    </Fragment>
  );
};

const ResultPreview = props => {
  return (
    <UI.Expandable
      {...props}
      closedHeight={50}
      openHeight={150}
      style={style.containers.resultsPreviewHold}
      renderClosed={renderClosed}
      disabled={!props.data.games_played}
    />
  );
};

export default ResultPreview;
