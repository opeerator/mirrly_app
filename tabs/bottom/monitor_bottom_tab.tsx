import React from 'react';
import {View, Text} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import TouchTab from '../top/touch_tab';
import CameraTab from '../top/camera_m_tab';

const Tab = createMaterialTopTabNavigator();

export default function ControlTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Camera View" component={CameraTab} />
      <Tab.Screen name="Screen View" component={TouchTab} />
    </Tab.Navigator>
  );
}