import React, {ReactElement, useEffect} from 'react';
import {ViewStyle, StyleSheet, View, Dimensions} from 'react-native';
import {StyledButton} from 'components/button';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/core';
import {NavigationRoutes} from 'navigation/routes';
import {NoAuthSafeArea} from 'containers/no-auth-safe-area';
import {StackNavigationProp} from '@react-navigation/stack';
import {COLORS} from 'styles/colors';
import {CommonActions} from '@react-navigation/native';

export const FirstScreen = (): ReactElement => {
  const {t} = useTranslation();
  const navigation = useNavigation<StackNavigationProp<any>>();

  useEffect(() => {
    navigation.dispatch(state => {
      const routes = state.routes.filter(
        route =>
          route.name !== NavigationRoutes.SIGN_IN &&
          route.name !== NavigationRoutes.SIGN_UP,
      );

      return CommonActions.reset({
        ...state,
        routes,
        index: routes.length - 1,
      });
    });
  }, []);

  return (
    <NoAuthSafeArea containerStyle={styles.container}>
      <StyledButton
        styleButton={[styles.button, styles.signInButton]}
        onPress={(): void =>
          navigation.navigate({
            name: NavigationRoutes.SIGN_IN,
            key: NavigationRoutes.SIGN_IN,
          })
        }>
        {t('sign-in.sign-in-text')}
      </StyledButton>
      <StyledButton
        styleButton={[styles.button, styles.signInButton]}
        onPress={(): void =>
          navigation.navigate({
            name: NavigationRoutes.SIGN_UP,
            key: NavigationRoutes.SIGN_UP,
          })
        }>
        {t('sign-in.sign-up-text')}
      </StyledButton>
    </NoAuthSafeArea>
  );
};

interface Style {
  button: ViewStyle;
  signInButton: ViewStyle;
  logoStyle: ViewStyle;
}

const {height} = Dimensions.get('window');

const styles = StyleSheet.create<Style>({
  button: {
    height: 48,
    borderRadius: 24,
    marginBottom: 25,
  },
  signInButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: COLORS.WHITE,
  },
  logoStyle: {
    marginTop: height * 0.25,
  },
});
