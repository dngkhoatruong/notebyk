import SCREEN_KEYS from '../constants/screenKeys';

// src/navigation/types.ts
export type RootStackParamList = {
  MainTabs: undefined;
  [SCREEN_KEYS.NEW_NOTE]: { id?: number };
  [SCREEN_KEYS.SETTINGS]: undefined;
};

export type BottomTabParamList = {
  [SCREEN_KEYS.HOME]: undefined;
  [SCREEN_KEYS.SUMMARY]: undefined;
};

export enum TAB_BAR {
  HOME = 'home',
  SUMMARY = 'summary',
}
