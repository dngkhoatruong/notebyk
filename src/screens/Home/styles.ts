import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 10,
  },
  noteItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  noteContent: { width: '90%' },
  noteSection: {
    marginBottom: 10,
  },
  sectionHeader: {
    marginTop: 30,
  },
  sectionHeaderWorkStudy: {
    marginTop: 5,
  },
  sectionListWrapper: {
    flex: 1,
    paddingHorizontal: 20,
  },
  sectionListContainer: {
    paddingBottom: 150,
  },
});
