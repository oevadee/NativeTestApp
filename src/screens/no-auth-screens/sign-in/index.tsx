import React, {ReactElement, useContext, useEffect, useState} from 'react';
import {
  ImageStyle,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import {NavigationRoutes} from 'navigation/routes';
import {useNavigation} from '@react-navigation/native';

import {StyledButton} from 'components/button';
import {Title} from 'components/title';
import {Description} from 'components/description';
import {LoadingSpinner} from 'components/loading-spiner';
import {StyledText} from 'components/styled-text';

export const SignInScreen = (): ReactElement => {
  const [isWaitingForResponse, setIsWaitingForResponse] =
    useState<boolean>(false);
  const [isUserBack, setIsUserBack] = useState(false);

  const {t} = useTranslation();
  const navigation = useNavigation();

  const isWelcomeBack = isUserBack;

  return (
    <>
      <LoadingSpinner isLoading={isWaitingForResponse} />
      <View style={styles.logoWrapper}>
        <Title style={styles.signIn}>{t('signInScreen.signIn')}</Title>
        <Description>
          {isWelcomeBack ? t('signInScreen.welcomeBack') : ''}
        </Description>
      </View>
      <View>
        <StyledText>Form</StyledText>
      </View>
      <View style={styles.notMember}>
        <StyledText>{t('signInScreen.notMember')}</StyledText>
        {/* <TouchableOpacity
          onPress={(): void => navigation.navigate(NavigationRoutes.SIGN_UP)}>
          <StyledText style={styles.text}>
            {' '}
            {t('signInScreen.registerHere')}
          </StyledText>
        </TouchableOpacity> */}
      </View>
      <View style={styles.signInBottom}>
        <View style={styles.wrapper}>
          <StyledButton onPress={() => console.log('submit')}>
            {t('signInScreen.signIn')}
          </StyledButton>
        </View>
      </View>
    </>
  );
};

interface Style {
  logo: ImageStyle;
  signIn: TextStyle;
  signInBottom: ViewStyle;
  textButton: TextStyle;
  wrapper: ViewStyle;
  logoWrapper: ViewStyle;
  notMember: ViewStyle;
  text: TextStyle;
}

const styles = StyleSheet.create<any>({
  logo: {
    marginBottom: 45,
    justifyContent: 'flex-start',
  },
  logoWrapper: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notMember: {
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  signIn: {
    marginBottom: 18,
  },
  signInBottom: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: '100%',
  },
  wrapper: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    color: '#7a7a7a',
  },
});
