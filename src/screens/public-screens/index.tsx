import React from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  // StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';

// const isDarkMode = useColorScheme() === 'dark';

export const Intro = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors,
  };

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

// const styles = StyleSheet.create({});
