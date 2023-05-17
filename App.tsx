/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Image,
  Animated,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import DashboardTab from './tabs/bottom/dashboard_bottom_tab';
import ControlTab from './tabs/bottom/control_bottom_tab';
import MonitorTab from './tabs/bottom/monitor_bottom_tab';
import AboutTab from './tabs/bottom/about_bottom_tab';

import socketIO from "socket.io-client";
var socket = socketIO('http://192.168.14.180:5000');

const Tab = createMaterialBottomTabNavigator();

function App(): JSX.Element {
  const [status, setStatus] = React.useState('Disconnect');
  const [logoOpacity, setLogoOpacity] = React.useState(new Animated.Value(0));
  const [containerOpacity, setContainerOpacity] = React.useState(new Animated.Value(1));

  React.useEffect(() => {
    socket.on('connect', () => { 
      setStatus('Connected');
    }); 
    socket.on('disconnect', () => {
      setStatus('Disconnected');
    });

    const fadeInLogo = Animated.timing(logoOpacity, {
      toValue: 1,
      duration: 1000, // Change this value to adjust the animation duration
      useNativeDriver: true,
    });

    // const fadeOutLogo = Animated.timing(logoOpacity, {
    //   toValue: 0,
    //   duration: 1000, // Change this value to adjust the animation duration
    //   useNativeDriver: true,
    // });

    const fadeOutContainer = Animated.timing(containerOpacity, {
      toValue: 0,
      duration: 1000, // Change this value to adjust the animation duration
      useNativeDriver: true,
    });

    fadeInLogo.start(() => {
      setTimeout(() => {
        fadeOutContainer.start();
      }, 2000);
    });

    return () => {
      fadeInLogo.stop();
      // fadeOutLogo.stop();
    };
  }, []);
  
  return (
    <NavigationContainer>

      <Animated.View pointerEvents={"none"} style={[styles.logoContainer, { opacity: containerOpacity }]}>
        <Animated.Image
          source={require('./assets/logo/both.png')}
          style={[styles.logoImage, { opacity: logoOpacity }]}
        />
      </Animated.View>
      <SafeAreaView style={{ backgroundColor: '#9b4dca' }}>
        <View style={{ paddingVertical: 10, paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 12, fontWeight: 'bold' }}>Status: {status}</Text>
          <Text style={{ fontSize: 12, fontWeight: 'bold' }}>Battery: 90%</Text>
        </View>
      </SafeAreaView>
      <Tab.Navigator>
        <Tab.Screen name="Dashboard" component={DashboardTab} 
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="view-dashboard" color={color} size={24} />
          ),
        }}/>
        <Tab.Screen name="Control"
        options={{
          tabBarLabel: 'Control',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="camera-control" color={color} size={24} />
          ),
        }}
        >
          {() => <ControlTab socket={socket} />}
        </Tab.Screen>
        <Tab.Screen name="Monitor" component={MonitorTab} 
        options={{
          tabBarLabel: 'Monitor',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="monitor-eye" color={color} size={24} />
          ),
        }}
        />
        <Tab.Screen name="About" component={AboutTab} 
        options={{
          tabBarLabel: 'About',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="information" color={color} size={24} />
          ),
        }}
        />
      </Tab.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    zIndex: 999, // Set this value to a high number
  },
  logoImage: {
    width: '60%',
    height: '90%',
  },
});

export default App;
