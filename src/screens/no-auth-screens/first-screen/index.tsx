import React, {ReactElement} from 'react';
import {ViewStyle, StyleSheet, View, Dimensions} from 'react-native';
import {StyledButton} from 'components/button';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';
import {NavigationRoutes} from 'navigation/routes';

export const FirstScreen = (): ReactElement => {
  const {t} = useTranslation();
  const navigation = useNavigation();

  return (
    <View>
      <StyledButton
        styleButton={[styles.button, styles.signInButton]}
        // onPress={(): void => navigation.navigate(NavigationRoutes.SIGN_IN)}
        icon>
        {t('signInScreen.signIn')}
      </StyledButton>
    </View>
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
