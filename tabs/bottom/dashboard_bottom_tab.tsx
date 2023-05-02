import React from 'react';
import {View, Text} from 'react-native';
import { Surface, Stack, Button } from "@react-native-material/core";


export default function DashboardTab() {
  return (
    <Stack fill center spacing={4}>
    <Surface
      elevation={4}
      category="medium"
      style={{ width: 330, height: 120 }}
    >
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{ margin: 16, marginTop: 20, fontWeight: 'bold'}}>
          Connection Setup
        </Text>
        <Text style={{ margin: 16,  marginTop: 1,}}>
          Please make sure to connect to the same Wifi network as Mirrly's: Mirrly123
        </Text>
        <Button
          title="Connect"
          color="#9b4dca"
          style={{ justifyContent: 'center', alignContent: 'center', marginTop: 0, marginRight: 10 }}
        />
      </View>  
    </Surface>
  </Stack>
  );
}