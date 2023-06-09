import * as React from 'react';
import { View, Text, StyleSheet, PanResponder, Animated } from 'react-native';

function convert_value(value) {
  const oldRange = 75; // Range of pan values (0 to 75)
  const newRange = 255; // Range to scale the values (0 to 255)

  // Convert the value to the new range
  const scaledValue = Math.round((value * newRange) / oldRange);

  return scaledValue;
}

export default function Joystick_torso({ socket }) {
  // Initialize state values for joystick position
  const pan = React.useRef(new Animated.ValueXY()).current;
  let stopped = true

  // Initialize PanResponder to handle joystick movement
  const panResponder = React.useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      // onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}]),
      onPanResponderMove: (event, gesture) => {
        // Calculate the distance of the current position from the center of the circle
        const distance = Math.sqrt(gesture.dx * gesture.dx + gesture.dy * gesture.dy);
        // Calculate the maximum distance (radius) from the center of the circle
        const maxDistance = 75; // half the width/height of the outer circle
      
        // If the distance is within the radius of the circle
        if (distance < maxDistance) {
          // Update the pan value with the current gesture position
          pan.setValue({x: gesture.dx, y: gesture.dy});
          const scaledPanX = convert_value(gesture.dx);
          const scaledPanY = convert_value(gesture.dy);
          socket.emit('move/body', {direction: 'live', speed: {x: scaledPanX, y:scaledPanY}})
        } else {
          // Calculate the x and y positions of the point on the circle that is closest to the current position
          const x = gesture.dx * maxDistance / distance;
          const y = gesture.dy * maxDistance / distance;
          // Update the pan value with the calculated positions
          pan.setValue({x: x, y: y});
          const scaledPanX = convert_value(x);
          const scaledPanY = convert_value(y);
          
          socket.emit('move/body', {direction: 'live', speed: {x: scaledPanX, y:scaledPanY}})
        }
      },
      onPanResponderTerminationRequest: () => true,
      onPanResponderRelease: () => {
        socket.emit('move/body', {direction: 'stop', speed: 'all'})
        Animated.spring(
          pan, // Auto-multiplexed
          {toValue: {x: 0, y: 0}, useNativeDriver: true}, // Back to zero
          ).start();
      },
    })
  ).current;

  return (
      <View style={styles.outerCircle}>
        <Animated.View
          style={[
            styles.joystick,
            {
            transform: [{translateX: pan.x}, {translateY: pan.y}],
          }]}
          {...panResponder.panHandlers}>
        </Animated.View>
     </View>
  );
}

const styles = StyleSheet.create({
    outerCircle: {
      width: 150,
      height: 150,
      borderRadius: 75,
      borderWidth: 2,
      borderColor: '#333',
      justifyContent: 'center',
      alignItems: 'center',
    },
    joystick: {
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor: '#333',
    },
  });