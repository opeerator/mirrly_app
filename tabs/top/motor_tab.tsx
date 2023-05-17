import * as React from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity} from 'react-native';
import Slider from '@react-native-community/slider';
import Joystick_torso from '../../controls/joystick_torso';
import { Stack, Button } from "@react-native-material/core";

var head_positions = [0, 0, 0, 0, 0]

export default function MotorTab({ socket }) {
  const [value_yaw, setValue_yaw] = React.useState(590);
  const [value_pitch, setValue_pitch] = React.useState(137);
  const [value_eye, setValue_eye] = React.useState(720);
  const [value_brow_L, setValue_brow_L] = React.useState(720);
  const [value_brow_R, setValue_brow_R] = React.useState(720);
  
  const [showModal, setShowModal] = React.useState(false);
  socket.emit('/head/getinfo/all', {component: 'all'})

  const toggleModal = () => {
    if(showModal == false) {
      socket.emit('/head/getinfo/all', {component: 'all'})
    }
    setShowModal(!showModal);
  };

  socket.on('info', (data) => {
    head_positions = data.data
  });

  return (
    <View style={styles.container}>
        {/* <Button title="Camera" color='#9b4dca' style={{justifyContent: 'center', alignContent: 'center', marginTop: 10,}}/> */}
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
          <Joystick_torso socket={socket}/>
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
            minimumValue={130}
            maximumValue={290}
            value={value_pitch}
            minimumTrackTintColor="#575757"
            maximumTrackTintColor="#000000"
            thumbTintColor="#333"
            onValueChange={value =>{
              setValue_pitch(value)
              socket.emit('move/head', {component: 'head_pitch', gpos: value})
            }
            }
          />
      <Text>Head Yaw</Text>
      <Slider
        style={styles.slider2}
        minimumValue={590}
        maximumValue={990}
        value={value_yaw}
        minimumTrackTintColor="#575757"
        maximumTrackTintColor="#000000"
        thumbTintColor="#333"
        onValueChange={value =>{
          setValue_yaw(value)
          socket.emit('move/head', {component: 'head_yaw', gpos: value})
        }
        }
      />
      <Text>Eyes (Horizontal)</Text>
      <Slider
        style={styles.slider2}
        minimumValue={720}
        maximumValue={919}
        value={value_eye}
        minimumTrackTintColor="#575757"
        maximumTrackTintColor="#000000"
        thumbTintColor="#333"
        onValueChange={value =>{
          setValue_eye(value)
          socket.emit('move/head', {component: 'eye_self', gpos: value})
        }
        }
      />
      <Text>Eye brows</Text>
      <Slider
        style={styles.slider2}
        minimumValue={720}
        maximumValue={919}
        value={value_eye}
        minimumTrackTintColor="#575757"
        maximumTrackTintColor="#000000"
        thumbTintColor="#333"
        onValueChange={value =>{
          setValue_eye(value)
          socket.emit('move/head', {component: 'eye_self', gpos: value})
        }
        }
      />
      {/* <Button title="Reset Controls" color='#9b4dca' style={{marginTop: 20}} disableElevation /> */}
      <Button title="Current Positions" color='#9b4dca' style={{marginTop: 20}} disableElevation onPress={toggleModal} />
      <Modal visible={showModal} transparent={true} animationType="fade">
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
            <Text style={styles.closeButtonText}>X</Text>
          </TouchableOpacity>
          <Text style={styles.popupText}>Head Yaw: {head_positions[0]} (590-970)</Text>
          <Text style={styles.popupText}>Head Pitch: {head_positions[1]} (137-237)</Text>
          <Text style={styles.popupText}>Head Left Eye Brow: {head_positions[2]} (275-402)</Text>
          <Text style={styles.popupText}>Head Right Eye Brow: {head_positions[3]} (609-719)</Text>
          <Text style={styles.popupText}>Head Yaw: {head_positions[4]} (720-919)</Text>
        </View>
      </Modal>
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
  modalContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 10,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
  popupText:{
    color: 'white',
    fontSize:17
  }
});
