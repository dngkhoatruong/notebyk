// App.tsx
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import AppInitializer from './src/navigation/AppInitializer';
import Toast from 'react-native-toast-message';
import { toastConfig } from './src/config/toastConfig';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <Provider store={store}>
          <BottomSheetModalProvider>
            <AppInitializer />
            <Toast config={toastConfig} />
          </BottomSheetModalProvider>
        </Provider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
