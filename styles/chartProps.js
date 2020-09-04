import {Dimensions} from 'react-native';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default {
  progress: {
    third: {
      size: windowWidth * 0.33,
      lineCap: 'round',
      width: 10,
      style: {transform: [{scaleX: -1}]},
      rotation: 360,
      backgroundColor: 'rgb(215,211,212, 0.15)',
    },
  },
};
