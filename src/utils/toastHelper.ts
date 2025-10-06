// src/utils/toastHelper.ts
import Toast from 'react-native-toast-message';
import { ToastType } from '../config/toastConfig';

export const showToast = {
  success: (title: string, message?: string) => {
    Toast.show({
      type: ToastType.SUCCESS,
      text1: title,
      text2: message,
      position: 'bottom',
      visibilityTime: 2000,
      bottomOffset: 150,
    });
  },

  error: (title: string, message?: string) => {
    Toast.show({
      type: ToastType.ERROR,
      text1: title,
      text2: message,
      position: 'bottom',
      visibilityTime: 3000,
      bottomOffset: 150,
    });
  },
};

export const showCommingSoon = () => {
  showToast.success('Thank you!', 'The feature is coming soon. ');
};
