// src/navigation/AppRouter.ts
import {
  createNavigationContainerRef,
  StackActions,
} from '@react-navigation/native';
import type { RootStackParamList } from './types';

const navigationRef = createNavigationContainerRef<RootStackParamList>();

function navigate<Name extends keyof RootStackParamList>(
  ...args: undefined extends RootStackParamList[Name]
    ? [screen: Name]
    : [screen: Name, params: RootStackParamList[Name]]
) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(...(args as [never]));
  }
}

function push<Name extends keyof RootStackParamList>(
  name: Name,
  params?: RootStackParamList[Name],
) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.push(name as string, params));
  }
}

function goBack() {
  if (navigationRef.isReady() && navigationRef.canGoBack()) {
    navigationRef.goBack();
  }
}

export const AppRouter = {
  navigate,
  push,
  goBack,
  navigationRef,
};
