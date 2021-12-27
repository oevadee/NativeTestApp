import React, {ReactElement} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationRoutes} from 'navigation/routes';

import {SignInScreen} from 'screens/no-auth-screens/sign-in';
// import {SignUpScreen} from 'screens/no-auth-screens/sign-up';
// import {ResetPasswordScreen} from 'screens/no-auth-screens/reset-password';
// import {CreateAccountScreen} from 'screens/no-auth-screens/create-account';
// import {WelcomeScreen} from 'screens/no-auth-screens/welcome';
// import {NewArtistFirstProfileScreen} from 'screens/no-auth-screens/new-artist-first-profile';
// import {NewArtistFirstProfileCongratsScreen} from 'screens/no-auth-screens/new-artist-first-profile-congrats';
import {FirstScreen} from 'screens/no-auth-screens/first-screen';

const NoAuthStack = createNativeStackNavigator<any>();

export const NoAuthNavigation = (): ReactElement => {
  return (
    <NoAuthStack.Navigator>
      <NoAuthStack.Screen
        name={NavigationRoutes.FIRST_SCREEN}
        component={FirstScreen}
      />
      <NoAuthStack.Screen
        name={NavigationRoutes.SIGN_IN}
        component={SignInScreen}
      />
      {/* 
        <NoAuthStack.Screen
          name={NavigationRoutes.SIGN_UP}
          component={SignUpScreen}
        />
      <NoAuthStack.Screen
        name={NavigationRoutes.RESET_PASSWORD}
        component={ResetPasswordScreen}
      />
      <NoAuthStack.Screen
        name={NavigationRoutes.CREATE_ACCOUNT}
        component={CreateAccountScreen}
      />
      <NoAuthStack.Screen
        name={NavigationRoutes.WELCOME}
        component={WelcomeScreen}
      />
      <NoAuthStack.Screen
        name={NavigationRoutes.NEW_ARTIST_FIRST_PROFILE}
        component={NewArtistFirstProfileScreen}
      />
      <NoAuthStack.Screen
        name={NavigationRoutes.NEW_ARTIST_FIRST_PROFILE_CONGRATS}
        component={NewArtistFirstProfileCongratsScreen}
      /> */}
    </NoAuthStack.Navigator>
  );
};
