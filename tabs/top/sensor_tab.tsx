import React from 'react';
import {View} from 'react-native';
import { Stack, Button, Switch, ListItem, Text } from "@react-native-material/core";


export default function SensorTab() {
    const [checked6, setChecked6] = React.useState(true);
    const [checked7, setChecked7] = React.useState(true);
    const [checked8, setChecked8] = React.useState(true);


    const [checked, setChecked] = React.useState(true);
    const [enabled2, setEnabled2] = React.useState(true);
    const [enabled3, setEnabled3] = React.useState(true);
    const [enabled4, setEnabled4] = React.useState(true);
    const [enabled5, setEnabled5] = React.useState(true);
  return (
    <>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text variant="h6" style={{ margin: 16 }}>
          Functionality Control
        </Text>
      </View>  
      <ListItem
        title="Front Collision Control"
        trailing={
          <Switch value={checked6} onValueChange={() => setChecked6(!checked6)} />
        }
        onPress={() => setChecked6(!checked6)}
      />
      <ListItem
        title="Back-Bottom Fall Control"
        trailing={
          <Switch value={checked7} onValueChange={() => setChecked7(!setChecked7)} />
        }
        onPress={() => setChecked7(!checked7)}
      />
      <ListItem
        title="Front-Bottom Fall Control"
        trailing={
          <Switch value={checked8} onValueChange={() => setChecked8(!checked8)} />
        }
        onPress={() => setChecked8(!checked8)}
      /> 
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text variant="h6" style={{ margin: 16 }}>
          Sensor Control
        </Text>
      </View>
      <ListItem
        title="Ultrasonic Sensor"
        trailing={
          <Switch value={checked} onValueChange={() => setChecked(!checked)} />
        }
        onPress={() => setChecked(!checked)}
      />
      <ListItem
        title="Front TOF Sensor"
        trailing={
          <Switch value={enabled2} onValueChange={() => setEnabled2(!enabled2)} />
        }
        onPress={() => setEnabled2(!enabled2)}
      />
      <ListItem
        title="Back TOF Sensor"
        trailing={
          <Switch value={enabled3} onValueChange={() => setEnabled3(!enabled3)} />
        }
        onPress={() => setEnabled3(!enabled3)}
      />
      <ListItem
        title="Touch Sensor"
        trailing={
          <Switch value={enabled4} onValueChange={() => setEnabled4(!enabled4)} />
        }
        onPress={() => setEnabled4(!enabled4)}
      />
      <ListItem
        title="Accelerometer"
        trailing={
          <Switch value={enabled5} onValueChange={() => setEnabled5(!enabled5)} />
        }
        onPress={() => setEnabled5(!enabled5)}
      />
    </>
  );
}