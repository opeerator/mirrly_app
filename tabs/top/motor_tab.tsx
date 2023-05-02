import * as React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Slider from '@react-native-community/slider';
import Joystick_torso from '../../controls/joystick_torso';
import { Stack, Button } from "@react-native-material/core";


export default function MotorTab() {
  return (
    <View style={styles.container}>
        <Button title="Camera" color='#9b4dca' style={{justifyContent: 'center', alignContent: 'center', marginTop: 10,}}/>
      <View style={styles.controls}>
        <View style={styles.sliderContainer}>
          <Text>L-Hand</Text>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={100}
            value={50}
            minimumTrackTintColor="#575757"
            maximumTrackTintColor="#000000"
            thumbTintColor="#333"
          />
        </View>
        <View style={styles.joystickContainer}>
          <Text style={styles.label}>Torso Control</Text>
          <Joystick_torso/>
          <Text style={styles.label}>Both Hands</Text>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={100}
            value={50}
            minimumTrackTintColor="#575757"
            maximumTrackTintColor="#000000"
            thumbTintColor="#333"
          />
        </View>
        <View style={styles.sliderContainer}>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={100}
            value={50}
            minimumTrackTintColor="#575757"
            maximumTrackTintColor="#000000"
            thumbTintColor="#333"
          />
        <Text>R-Hand</Text>
        </View>
      </View>
      <Text>Head Pitch</Text>
      <Slider
            style={styles.slider2}
            minimumValue={0}
            maximumValue={100}
            value={50}
            minimumTrackTintColor="#575757"
            maximumTrackTintColor="#000000"
            thumbTintColor="#333"
          />
      <Text>Head Yaw</Text>
      <Slider
        style={styles.slider2}
        minimumValue={0}
        maximumValue={100}
        value={50}
        minimumTrackTintColor="#575757"
        maximumTrackTintColor="#000000"
        thumbTintColor="#333"
      />
      <Button title="Reset Controls" color='#9b4dca' style={{marginTop: 20}} disableElevation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    paddingLeft: 20,
    paddingRight: 20,
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  sliderContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{ rotate: '-90deg' }],
  },
  slider: {
    width: 200,
    height: 40,
  },
  slider2: {
    width: 300,
    height: 40,
  },
  titles: {
    margin: 30,
    fontWeight: 'bold',
  },
  joystickContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 2,
  },
  label: {
    marginTop: 20,
    marginBottom: 10,
  },
});
