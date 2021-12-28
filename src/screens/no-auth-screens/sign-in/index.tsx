import React, {ReactElement, useState} from 'react';
import {StyleSheet, TouchableOpacity, View, ViewStyle} from 'react-native';
import {useTranslation} from 'react-i18next';
import {NavigationRoutes} from 'navigation/routes';
import {useNavigation} from '@react-navigation/native';

import {StyledButton} from 'components/button';
import {Title} from 'components/title';
import {Description} from 'components/description';
import {LoadingSpinner} from 'components/loading-spiner';
import {StyledText} from 'components/styled-text';
import {StackNavigationProp} from '@react-navigation/stack';
import {COLORS} from 'styles/colors';
import {NoAuthSafeArea} from 'containers/no-auth-safe-area';

export const SignIn = (): ReactElement => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isUserBack, setIsUserBack] = useState(false);

  const {t} = useTranslation();
  const navigation = useNavigation<StackNavigationProp<any>>();

  const isWelcomeBack = isUserBack;

  return (
    <NoAuthSafeArea automaticallyAdjustContentInsets={false}>
      <LoadingSpinner isLoading={isLoading} />
      <View style={styles.logoWrapper}>
        <Title style={styles.signIn}>{t('sign-in.sign-in-text')}</Title>
        <Description>
          {isWelcomeBack ? t('sign-in.welcome-back') : ''}
        </Description>
      </View>
      <View>
        <StyledText>Form</StyledText>
      </View>
      <View style={styles.notMember}>
        <StyledText>{t('sign-in.not-member')}</StyledText>
        <TouchableOpacity
          onPress={(): void =>
            navigation.navigate({
              name: NavigationRoutes.SIGN_UP,
              key: NavigationRoutes.SIGN_UP,
            })
          }>
          <StyledText style={styles.text}>
            {' '}
            {t('sign-in.register-here')}
          </StyledText>
        </TouchableOpacity>
      </View>
      <View style={styles.signInBottom}>
        <View style={styles.wrapper}>
          <StyledButton onPress={() => console.log('submit')}>
            {t('sign-in.sign-in-text')}
          </StyledButton>
        </View>
      </View>
    </NoAuthSafeArea>
  );
};

interface Style {
  logo: ViewStyle;
  logoWrapper: ViewStyle;
  notMember: ViewStyle;
  signIn: ViewStyle;
  signInBottom: ViewStyle;
  wrapper: ViewStyle;
  text: ViewStyle;
}

const styles = StyleSheet.create<Style>({
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
    color: COLORS.WHITE,
  },
});
