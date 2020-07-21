import React from 'react';
import Header from '../components/Header/Header';
import Results from '../components/Results/Results';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const renderComponent = (Component, props) => () => <Component {...props} />;

const renderHeader = ({scene, previous, navigation}) => {
  const {options} = scene.descriptor;
  let title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name;

  if (scene.route.params.player) {
    title = `${title} - ${scene.route.params.player.name}`;
  }
  return (
    <Header
      title={title}
      options={options}
      navigation={navigation}
      previous={previous}
      params={scene.route.params}
    />
  );
};

const MainResultsRoutes = props => {
  return (
    <Stack.Navigator
      initialRouteName="Results"
      screenOptions={{headerMode: 'screen', header: renderHeader}}>
      <Stack.Screen
        name="Results"
        component={Results}
        initialParams={{...props.route.params}}
      />
    </Stack.Navigator>
  );
};

export default ({props}) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Results">
        {renderComponent(MainResultsRoutes, props)}
      </Tab.Screen>
    </Tab.Navigator>
  );
};
