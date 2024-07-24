/* eslint-disable prettier/prettier */
// src/views/HomeView/HomeView.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, Button } from 'react-native';
import { listCharacters } from '../../data/CharacterList';

const HomeView = (): React.JSX.Element => {
  const [counterStar, setCounterStar] = useState(0);

  const onNext = () => {
    setCounterStar((prevCounter) => (prevCounter + 1) % listCharacters.length);
  };

  const onPrevious = () => {
    setCounterStar((prevCounter) => (prevCounter - 1 + listCharacters.length) % listCharacters.length);
  };

  const onReset = () => {
    setCounterStar(0);
  };

  const currentCharacter = listCharacters[counterStar];

  return (
    <ImageBackground 
      source={require('../../assets/images/bg.jpg')} 
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.text}>You are viewing {currentCharacter.name}</Text>
        <CharacterInfo id={currentCharacter.id} name={currentCharacter.name} instrument={currentCharacter.instrument} />
        <Button title="Next" onPress={onNext} />
        <Button title="Previous" onPress={onPrevious} />
        <Button title="Reset" onPress={onReset} />
      </View>
    </ImageBackground>
  );
};

type CharacterProps = {
  id: number;
  name: string;
  instrument: string;
};

const CharacterInfo = ({ name, instrument }: CharacterProps) => {
  return (
    <View style={styles.characterContainer}>
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
  characterContainer: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  text: {
    color: '#000',
    fontSize: 18,
    margin: 10,
  },
});

export default HomeView;
