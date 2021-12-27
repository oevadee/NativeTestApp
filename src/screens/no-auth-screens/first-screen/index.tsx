import React, {ReactElement} from 'react';
import {ViewStyle, StyleSheet, View, Dimensions} from 'react-native';
import {StyledButton} from 'components/button';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/core';
import {NavigationRoutes} from 'navigation/routes';
import {NoAuthSafeArea} from 'containers/no-auth-safe-area';
import {StackNavigationProp} from '@react-navigation/stack';

export const FirstScreen = (): ReactElement => {
  const {t} = useTranslation();
  const navigation = useNavigation<StackNavigationProp<any>>();

  return (
    <NoAuthSafeArea>
      <StyledButton
        styleButton={[styles.button, styles.signInButton]}
        onPress={(): void =>
          navigation.navigate({
            name: NavigationRoutes.SIGN_IN,
            key: NavigationRoutes.SIGN_IN,
          })
        }
        icon>
        {t('sign-in.sign-in-text')}
      </StyledButton>
    </NoAuthSafeArea>
  );
};

interface Style {
  container: ViewStyle;
  button: ViewStyle;
  signInButton: ViewStyle;
  logoStyle: ViewStyle;
}

const {height} = Dimensions.get('window');

const styles = StyleSheet.create<Style>({
  container: {
    justifyContent: 'space-between',
  },
  button: {
    height: 48,
    borderRadius: 24,
    marginBottom: 25,
  },
  signInButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#fff',
  },
  logoStyle: {
    marginTop: height * 0.25,
  },
});
