import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewNoteScreen from '../screens/NewNote';
import { RootStackParamList } from './types';
import BottomTabNavigator from './BottomTabNavigator';
import { AppRouter } from './AppRouter';
import SettingsScreen from '../screens/Settings';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer ref={AppRouter.navigationRef}>
      <Stack.Navigator initialRouteName="MainTabs">
        <Stack.Screen
          name="MainTabs"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={'NewNote'}
          component={NewNoteScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={'Settings'}
          component={SettingsScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
