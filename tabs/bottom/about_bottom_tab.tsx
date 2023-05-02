import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function AboutTab() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/logo/mirrly_full_size.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>
        Mirrly Project
      </Text>
      <Text style={styles.text}>
        The Mirrly robot has been developed in the Social and Intelligent Robotics Lab (SIRRL) in the university of Waterloo. This App was developed under the supervision of Prof. Kerstin Daughtenhahn for utilizing Mirrly. Please send us your feedback on the control structure and how we can improve the interface. Thank you for using this app.
      </Text>
      <Text style={styles.subtext}>
        Version: 1.0, Developed by: Ali Yamini
      </Text>
      <Text style={styles.subtext}>
        Contact: ali.yamini@uwaterloo.ca
      </Text>
      <View style={styles.smallImagesWrapper}>
        <Image
          source={require('../../assets/logo/Sirrl_v.png')}
          style={styles.smallImage}
          resizeMode="contain"
        />
        <Image
          source={require('../../assets/logo/UniversityOfWaterloo_logo_horiz_rgb.png')}
          style={styles.smallImage2}
          resizeMode="contain"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: '30%',
    height: '25%',
  },
  title: {
    top: 20,
    fontWeight: 'bold',
  },
  text: {
    marginTop: 30,
    fontSize: 13,
    paddingHorizontal: 20,
    textAlign: 'justify',
  },
  subtext: {
    marginTop: 12,
    fontSize: 11,
  },
  smallImagesWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  smallImage: {
    width: 100,
    height: 100,
    marginLeft: 10,
    marginRight: 10,
  },
  smallImage2: {
    width: 150,
    height: 150,
    marginLeft: 10,
    marginRight: 10,
  },
});
