/* eslint-disable prettier/prettier */
// src/views/HomeView/HomeView.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, FlatList, Button, Alert } from 'react-native';
//import { Character } from '../../models/Character';
import { listCharacters } from '../../data/CharacterList';

const HomeView = (): React.JSX.Element => {

    const [counterStar, setCounterStar] = useState(0);

    const onNext = () => {
        setCounterStar(counterStar + 1);
    }

    const onPrevious = () => {
        setCounterStar(counterStar - 1);
    }

    const onReset = () => {
        setCounterStar(0)
    }

    return (
      <ImageBackground 
        source={require('../../assets/images/bg.jpg')} 
        style={styles.backgroundImage}
      >
        <View style={styles.container}>
        <Button
        title="Next"
        onPress={() => onNext()}
      />
          <Text style={styles.text}>You clicked the NEXT button {counterStar}times </Text>
          <Button
        title="Minus 1"
        onPress={() => onPrevious()}
      />
      <Button
        title="Reset"
        onPress={() => onReset()}
      />
          <FlatList
            data={listCharacters} //.reverse(), make the list reverse
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <CharacterInfo id={item.id} name={item.name} instrument={item.instrument} />
            )}
          />
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
