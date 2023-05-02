import React from 'react';
import {View, Text} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import MotorTab from '../top/motor_tab';
import SensorTab from '../top/sensor_tab';
import VisionTab from '../top/vision_tab';
import SpeechTab from '../top/speech_tab';

const Tab = createMaterialTopTabNavigator();

export default function ControlTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Motor" component={MotorTab} />
      <Tab.Screen name="Sensor" component={SensorTab} />
      <Tab.Screen name="Vision" component={VisionTab} />
      <Tab.Screen name="Speech" component={SpeechTab} />
    </Tab.Navigator>
  );
}