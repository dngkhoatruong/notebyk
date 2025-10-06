import { StyleSheet } from 'react-native';
import { COLORS } from './colors';

export const GLOBAL_STYLES = StyleSheet.create({
  flex1: { flex: 1 },
  liquidGlass: {
    padding: 16,
    backgroundColor: COLORS.WHITE05,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.WHITE12,
  },
});
