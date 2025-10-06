import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  contentWrapper: {
    flex: 1,
    marginTop: 24,
    padding: 20,
  },
  categoryImage: { width: 48, height: 48, borderRadius: 24, marginRight: 10 },
  titleRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowContainer: { marginBottom: 24 },
  title: {
    flex: 1,
    paddingLeft: 10,
  },
});
