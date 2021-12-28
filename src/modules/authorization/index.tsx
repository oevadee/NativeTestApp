import React, {ReactElement, useContext, useEffect, useState} from 'react';
// import {AuthNavigation} from 'navigation/auth/AuthNavigation';
import {NoAuthNavigation} from 'navigation/no-auth';
import {SafeAreaView, StyleSheet, ViewStyle} from 'react-native';
// import {COLORS} from 'styles/colors';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {NavigationRoutes} from 'navigation/routes';
import {COLORS} from 'styles/colors';

const Stack = createNativeStackNavigator<any>();

interface User {
  user_id: string;
  name: string;
  email: string;
}

export const Authorization = (): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  const [userData, setUserData] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Navigator>
        {isLogin ? (
          <></>
        ) : (
          // <Stack.Screen
          //   name={NavigationRoutes.AUTH}
          //   component={AuthNavigation}
          // />
          <Stack.Screen
            name={NavigationRoutes.NO_AUTH}
            component={NoAuthNavigation}
            options={{
              headerShown: false,
              gestureEnabled: false,
            }}
          />
        )}
      </Stack.Navigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create<any>({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
  },
});
