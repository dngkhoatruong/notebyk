import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    height: 260,
    marginTop: 20,
  },
  inputContainer: {
    flex: 1,
  },
  input: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 14,
    fontSize: 16,
    color: COLORS.WHITE90,
    minHeight: 260,
  },
});
