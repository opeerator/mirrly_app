import React from 'react';
import {View} from 'react-native';
import { Stack, Button, Switch, ListItem, Text } from "@react-native-material/core";


export default function SensorTab() {
    const [checked6, setChecked6] = React.useState(true);
    const [checked7, setChecked7] = React.useState(true);
    const [checked8, setChecked8] = React.useState(true);
    const [checked9, setChecked9] = React.useState(true);
    const [checked10, setChecked10] = React.useState(true);


  return (
    <>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text variant="h6" style={{ margin: 16 }}>
          Functionality Control
        </Text>
      </View>  
      <ListItem
        title="Object Detection"
        trailing={
          <Switch value={checked6} onValueChange={() => setChecked6(!checked6)} />
        }
        onPress={() => setChecked6(!checked6)}
      />
      <ListItem
        title="Face Detection"
        trailing={
          <Switch value={checked7} onValueChange={() => setChecked7(!setChecked7)} />
        }
        onPress={() => setChecked7(!checked7)}
      />
      <ListItem
        title="Close Face React"
        trailing={
          <Switch value={checked8} onValueChange={() => setChecked8(!checked8)} />
        }
        onPress={() => setChecked8(!checked8)}
      /> 
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text variant="h6" style={{ margin: 16 }}>
          Camera Control
        </Text>
      </View>  
      <ListItem
        title="Right Eye Camera"
        trailing={
          <Switch value={checked9} onValueChange={() => setChecked9(!checked9)} />
        }
        onPress={() => setChecked9(!checked9)}
      /> 
      <ListItem
        title="Left Eye Camera"
        trailing={
          <Switch value={checked10} onValueChange={() => setChecked10(!checked10)} />
        }
        onPress={() => setChecked10(!checked10)}
      /> 
    </>
  );
}