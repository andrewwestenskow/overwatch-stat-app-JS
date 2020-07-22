import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabNav from '../components/TabNav/TabNav';
import StackRoutes from './StackNav';
import renderComponent from '../utils/renderComponent';

const Tab = createBottomTabNavigator();

//* Tab renders stack
export default ({props}) => {
  return (
    <Tab.Navigator initialRouteName="Results" tabBar={TabNav}>
      <Tab.Screen name="Results">
        {renderComponent(StackRoutes, props)}
      </Tab.Screen>
    </Tab.Navigator>
  );
};
