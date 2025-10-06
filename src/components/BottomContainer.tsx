import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet } from 'react-native';
import { COLORS } from '../constants/colors';
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context';

export const BOTTOM_TAB_HEIGHT = 100;

export const BottomContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const insets = useSafeAreaInsets();
  const styles = createStyles(insets);

  return (
    <LinearGradient
      colors={COLORS.GARDIENT_BOTTOM}
      style={styles.container}
      pointerEvents="box-none"
    >
      {children}
    </LinearGradient>
  );
};

const createStyles = (insets: EdgeInsets) =>
  StyleSheet.create({
    container: {
      height: BOTTOM_TAB_HEIGHT + insets.bottom,
      width: '100%',
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'center',
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
      position: 'absolute',
      bottom: 0,
    },
  });
