import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet, View } from 'react-native';
import { COLORS } from '../constants/colors';

export const AppBackground: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <LinearGradient
      colors={COLORS.GARDIENT_PRIMARY}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
      pointerEvents="box-none"
    >
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});
