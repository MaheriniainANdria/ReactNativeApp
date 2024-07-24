/* eslint-disable prettier/prettier */
// src/views/HomeView/HomeView.tsx
import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const HomeView = (): React.JSX.Element => {
  const name = 'John';
  const instrument = 'Guitar';

  return (
    <ImageBackground 
      source={require('../../assets/images/bg.jpg')} 
      style={styles.backgroundImage}
    >
      <View>
      <Text style={styles.text}>This is the first page</Text>
        <CharacterInfo name={name} instrument={instrument} id={1}/>
        <Text style={styles.text}>AND</Text>
        <CharacterInfo name={'Paul'} instrument={'Bass'} id={2}/>
      </View>
    </ImageBackground>
  );
};

const CharacterInfo = (props : any) => {

    return (
        <View>
        <Text style={styles.text}>My name is {props.name}</Text>
        <Text style={styles.text}>I play {props.instrument}</Text>
        </View>
    )

};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1, // Occupy the entire available space
    justifyContent: 'center', // Center content vertically
    alignItems: 'center',     // Center content horizontally
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 20,
  },
  text: {
    color: '#fff', // White text color for contrast
    fontSize: 18,
    margin: 10,
  },
});

export default HomeView;