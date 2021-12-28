import React, {ReactElement} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {NavigationRoutes} from 'navigation/routes';

import {SignIn} from 'screens/no-auth-screens/sign-in';
import {FirstScreen} from 'screens/no-auth-screens/first-screen';
import {SignUp} from 'screens/no-auth-screens/sign-up';
import {COLORS} from 'styles/colors';

const NoAuthStack = createNativeStackNavigator<any>();

export const NoAuthNavigation = (): ReactElement => {
  return (
    <NoAuthStack.Navigator initialRouteName={NavigationRoutes.FIRST_SCREEN}>
      <NoAuthStack.Screen
        name={NavigationRoutes.FIRST_SCREEN}
        component={FirstScreen}
        options={{
          headerShown: false,
          gestureEnabled: false,
          headerStyle: {
            backgroundColor: COLORS.BACKGROUND,
          },
          contentStyle: {
            backgroundColor: COLORS.BACKGROUND,
          },
          headerTransparent: true,
        }}
      />
      <NoAuthStack.Screen
        name={NavigationRoutes.SIGN_IN}
        component={SignIn}
        options={{
          gestureEnabled: false,
          headerStyle: {
            backgroundColor: COLORS.BACKGROUND,
          },
          headerTitleStyle: {
            color: COLORS.WHITE,
          },
        }}
      />
      <NoAuthStack.Screen name={NavigationRoutes.SIGN_UP} component={SignUp} />
    </NoAuthStack.Navigator>
  );
};
