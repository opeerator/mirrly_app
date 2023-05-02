import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Switch, ListItem, Text } from "@react-native-material/core";
import Slider from '@react-native-community/slider';


export default function SensorTab() {
    const [checked11, setChecked12] = React.useState(true);
    const [checked13, setChecked13] = React.useState(true);
    const [checked14, setChecked14] = React.useState(true);
    const [checked15, setChecked15] = React.useState(true);
    
  return (
    <>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text variant="h6" style={{ margin: 16 }}>
          Functionality Control
        </Text>
      </View>  
      <ListItem
        title="Name Calling React"
        trailing={
          <Switch value={checked11} onValueChange={() => setChecked12(!checked11)} />
        }
        onPress={() => setChecked12(!checked11)}
      />
      <ListItem
        title="ChatGPT"
        trailing={
          <Switch value={checked13} onValueChange={() => setChecked13(!checked13)} />
        }
        onPress={() => setChecked13(!checked13)}
      />
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text variant="h6" style={{ margin: 16 }}>
          Speaker Control
        </Text>
      </View>  
      <ListItem
        title="Right Speaker"
        trailing={
          <Switch value={checked14} onValueChange={() => setChecked14(!checked14)} />
        }
        onPress={() => setChecked14(!checked14)}
      />
      <ListItem
        title="Left Speaker"
        trailing={
          <Switch value={checked15} onValueChange={() => setChecked15(!checked15)} />
        }
        onPress={() => setChecked15(!checked15)}
      />
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text variant="h6" style={{ margin: 16 }}>
          Sound Control
        </Text>
        <Text variant="h9" style={{ margin: 2 }}>
          Volume
        </Text>
      </View>  
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Slider
          style={styles.volumeSlider}
          minimumValue={0}
          maximumValue={100}
          value={50}
          minimumTrackTintColor="#575757"
          maximumTrackTintColor="#000000"
          thumbTintColor="#333"
      />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  volumeSlider: {
    width: 300,
    height: 40,
  }
});
