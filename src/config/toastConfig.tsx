// src/config/toastConfig.ts
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BaseToast, ErrorToast } from 'react-native-toast-message';
import { GLOBAL_STYLES } from '../constants/globalStyles';
import { COLORS } from '../constants/colors';

export enum ToastType {
  SUCCESS = 'success',
  ERROR = 'error',
}

export const toastConfig = {
  success: (props: any) => (
    <BaseToast
      {...props}
      style={styles.successToast}
      contentContainerStyle={styles.contentContainer}
      text1Style={styles.text1}
      text2Style={styles.text2}
    />
  ),

  error: (props: any) => (
    <ErrorToast
      {...props}
      style={[styles.errorToast]}
      contentContainerStyle={styles.contentContainer}
      text1Style={styles.text1}
      text2Style={styles.text2}
    />
  ),
};

const styles = StyleSheet.create({
  successToast: {
    backgroundColor: COLORS.ACTIVE_COLOR,
    borderRadius: 8,
    marginHorizontal: 16,
  },

  errorToast: {
    backgroundColor: COLORS.INACTIVE_COLOR,
    borderRadius: 8,
    marginHorizontal: 16,
  },

  contentContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },

  text1: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.WHITE,
    marginBottom: 4,
  },

  text2: {
    fontSize: 14,
    color: COLORS.WHITE,
    lineHeight: 20,
  },

  successIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  errorIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F44336',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  iconText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
