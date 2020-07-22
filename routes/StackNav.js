import React from 'react';
import Header from '../components/Header/Header';
import {createStackNavigator} from '@react-navigation/stack';
import renderComponent from '../utils/renderComponent';
import DrawerNav from './DrawerNav';

const Stack = createStackNavigator();

const renderHeader = ({scene, previous, navigation}) => {
  const {options} = scene.descriptor;
  let title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name;

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

//* Stack renders drawer
export default props => {
  return (
    <Stack.Navigator
      initialRouteName="Drawer"
      screenOptions={{
        headerMode: 'screen',
        header: renderHeader,
        title: 'Results',
      }}>
      <Stack.Screen initialParams={{...props.route.params}} name="Drawer">
        {renderComponent(DrawerNav, props)}
      </Stack.Screen>
    </Stack.Navigator>
  );
};
