/* eslint-disable prettier/prettier */
// src/views/HomeView/HomeView.tsx
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const HomeView = (): React.JSX.Element => {
  return (
    <View style={styles.container}>
      <Text>Welcome to HomeView!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeView;
