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
      <View style={styles.container}>
        <Text style={styles.text}>This is the first page</Text>
        <CharacterInfo name={name} instrument={instrument} />
        <Text style={styles.text}>AND</Text>
        <CharacterInfo name="Paul" instrument="Bass" />
      </View>
    </ImageBackground>
  );
};

// Définition du type pour les props du composant CharacterInfo
type CharacterInfoProps = {
  name: string;
  instrument: string;
};

const CharacterInfo = ({ name, instrument }: CharacterInfoProps) => {
  return (
    <View>
      <Text style={styles.text}>My name is {name}</Text>
      <Text style={styles.text}>I play {instrument}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 20,
  },
  text: {
    color: '#fff',
    fontSize: 18,
    margin: 10,
  },
});

export default HomeView;
