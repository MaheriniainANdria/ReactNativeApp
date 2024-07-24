/* eslint-disable prettier/prettier */
// src/views/HomeView/HomeView.tsx
import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const HomeView = (): React.JSX.Element => {
  const name = 'Page ONE';
  const numberPage = "PageFirst";

  return (
    <ImageBackground 
      source={require('../../assets/images/bg.jpg')} 
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.text}>This is a Page!</Text>
        <Text style={styles.text}>Page name is {name}</Text>
        <Text style={styles.text}>{numberPage}</Text>
      </View>
    </ImageBackground>
  );
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