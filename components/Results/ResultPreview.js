import React, {useEffect, useContext, useState} from 'react';
import {PlayersContext} from '../../context/stores/players';
import {View, Text, Image} from 'react-native';
import * as Progress from 'react-native-progress';
import style from '../../styles';
import UI from '../UI';
import httpRequest from '../../utils/httpRequest';

const renderClosed = props => {
  const {data} = props;

  return (
    <View style={style.containers.previewTopHalf}>
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
    </View>
  );
};

const RenderOpen = props => {
  const {player} = useContext(PlayersContext);
  const [isLoading, setIsLoading] = useState(true);
  const [bestAndWorst, setBestAndWorst] = useState({best: {}, worst: {}});

  useEffect(() => {
    httpRequest({
      url: `/history/${player.id}/heroes/${props.data.id}?preview=true`,
    }).then(data => {
      setBestAndWorst(data);
      setIsLoading(false);
    });
  }, [player.id, props.data.id]);
  return (
    <View
      style={{
        height: props.openHeight - props.closedHeight,
      }}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <View>
          <View style={style.containers.lineItem}>
            <View style={style.containers.lineItemHalf}>
              <Image
                style={style.images.smallImage}
                source={{uri: bestAndWorst.best.image}}
              />
              <Text style={style.typography.good}>
                {bestAndWorst.best.name} ({bestAndWorst.best.win_count} -{' '}
                {bestAndWorst.best.games_played - bestAndWorst.best.win_count})
              </Text>
            </View>
            <View style={style.containers.lineItemHalf}>
              <Image
                style={style.images.smallImage}
                source={{uri: bestAndWorst.worst.image}}
              />
              <Text style={style.typography.bad}>
                {bestAndWorst.worst.name} ({bestAndWorst.worst.win_count} -{' '}
                {bestAndWorst.worst.games_played - bestAndWorst.worst.win_count}
                )
              </Text>
            </View>
          </View>
          <UI.CenterButton
            onPress={() => props.navigation.navigate('Individual Hero')}
            title="See details"
          />
        </View>
      )}
    </View>
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
      renderOpen={props => <RenderOpen {...props} />}
      disabled={!props.data.games_played}
    />
  );
};

export default ResultPreview;
