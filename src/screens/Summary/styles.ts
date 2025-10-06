import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

export const styles = StyleSheet.create({
  rightImage: {
    width: 270,
    height: 220,
    position: 'absolute',
    top: 0,
    right: 0,
  },
  contentWrapper: {
    flex: 1,
    backgroundColor: COLORS.WHITE05,
    marginTop: 70,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  btnDetail: {
    width: 75,
    marginBottom: 0,
  },
  categoryImage: { width: 48, height: 48, borderRadius: 24, marginRight: 10 },
  titleRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  rowContainer: { marginBottom: 24 },
});
