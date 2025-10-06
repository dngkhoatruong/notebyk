import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  selector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  selectorText: {
    fontSize: 16,
    color: COLORS.WHITE90,
  },
  selectedText: {
    flex: 1,
    color: COLORS.WHITE90,
    fontWeight: '500',
  },
  categoryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
  },

  categoryText: {
    fontSize: 16,
    color: '#333',
  },
});
