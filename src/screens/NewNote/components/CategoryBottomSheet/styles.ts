import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../constants/colors';

export const styles = StyleSheet.create({
  bottomSheetBackground: {
    backgroundColor: COLORS.PRIMARY_COLOR,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.WHITE12,
  },
  handleIndicator: {
    backgroundColor: '#ccc',
    width: 40,
    height: 4,
  },
  bottomSheetContent: {
    flex: 1,
    paddingHorizontal: 16,
  },
  bottomSheetTitle: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 10,
    color: COLORS.WHITE90,
  },
  listContent: {
    paddingBottom: 20,
  },
  categoryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    color: COLORS.WHITE90,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.WHITE12,
    marginBottom: 16,
  },
  selectedCategoryItem: {
    backgroundColor: COLORS.WHITE12,
  },
  categoryText: {
    fontSize: 16,
    color: COLORS.WHITE90,
  },
  selectedCategoryText: {
    color: COLORS.ACTIVE_COLOR,
    fontWeight: '500',
  },
  checkmark: {
    fontSize: 16,
    color: COLORS.ACTIVE_COLOR,
    fontWeight: 'bold',
  },
});
