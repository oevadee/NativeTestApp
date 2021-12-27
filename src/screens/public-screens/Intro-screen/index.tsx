import React from 'react';
import {Image, StatusBar, Text, View} from 'react-native';

export const Intro = () => {
  return (
    <>
      <Image
        source={require('./src/assets/intro-img.jpeg')}
        style={{
          width: '100%',
          height: '100%',
          paddingTop: StatusBar.currentHeight,
        }}
      />
      <View
        style={{
          padding: 24,
          borderRadius: 25,
          backgroundColor: 'red',
        }}>
        <Text>Card number</Text>
        <Text>3829 4820</Text>
      </View>
    </>
  );
};
