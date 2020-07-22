import React, {createRef} from 'react';
import Results from '../components/Results/Results';
import ResultsWizard from '../components/wizard/ResultsWizard';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerActions} from '@react-navigation/native';

const Drawer = createDrawerNavigator();

export const drawerRef = createRef();
export function navigateDrawer(name, params) {
  drawerRef.current?.navigate(name, params);
}
export function openDrawer() {
  drawerRef.current?.dispatch(DrawerActions.openDrawer());
}
export function closeDrawer() {
  drawerRef.current?.dispatch(DrawerActions.closeDrawer());
}

//* Drawer renders screens
export default props => {
  return (
    <Drawer.Navigator drawerType="front" initialRouteName="Results">
      <Drawer.Screen
        name="Results"
        component={Results}
        initialParams={{...props.route.params}}
      />
      <Drawer.Screen
        name="Add Match"
        component={ResultsWizard}
        initialParams={{...props.route.params}}
      />
    </Drawer.Navigator>
  );
};
