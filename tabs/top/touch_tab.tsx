import React from 'react';
import { View } from 'react-native';
import { Surface } from '@react-native-material/core';
import { Text, Button } from '@react-native-material/core';

export default function CameraTab() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        title="Activate Live Feed"
        color="#9b4dca"
        style={{ justifyContent: 'center', alignContent: 'center', marginTop: 10 }}
      />
      <Text variant="h6" style={{ margin: 16 }}>
        Front Screen View
      </Text>
      <Surface elevation={2} category="medium" style={{ width: 300, height: 200 }} />
      <Button
        title="Full Screen"
        color="#9b4dca"
        style={{ justifyContent: 'center', alignContent: 'center', marginTop: 10 }}
      />
      <Text variant="h6" style={{ marginTop:30 }}>
        Screen Control
      </Text>
      <View style={{ flexDirection: 'row' }}>
        <Button
          title="Turn Off"
          color="#9b4dca"
          style={{ justifyContent: 'center', alignContent: 'center', marginTop: 30, marginRight: 10 }}
        />
        <Button
          title="Default View"
          color="#9b4dca"
          style={{ justifyContent: 'center', alignContent: 'center', marginTop: 30 }}
        />
      </View>
      <Button
        title="Take ScreenShot"
        color="#9b4dca"
        style={{ justifyContent: 'center', alignContent: 'center', marginTop: 10 }}
      />
    </View>
  );
}
