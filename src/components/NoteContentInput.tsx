import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, ScrollView } from 'react-native';
import { GLOBAL_STYLES } from '../constants/globalStyles';

const NoteContentInput = () => {
  const [noteContent, setNoteContent] = useState('');

  return (
    <View style={GLOBAL_STYLES.liquidGlass}>
      <ScrollView style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          multiline
          textAlignVertical="top"
          placeholder="Please input note content"
          placeholderTextColor="#999"
          value={noteContent}
          onChangeText={setNoteContent}
          autoFocus={false}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  inputContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
  },
  input: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 14,
    fontSize: 16,
    color: '#000',
    minHeight: 120,
  },
});

export default NoteContentInput;
