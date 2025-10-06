import React, { useEffect, useState } from 'react';
import { View, TextInput, ScrollView } from 'react-native';
import { COLORS } from '../../../../constants/colors';
import { GLOBAL_STYLES } from '../../../../constants/globalStyles';
import { styles } from './styles';

type Props = {
  noteContentProps: string;
  onContentChange: (content: string) => void;
};

const NoteContentInput: React.FC<Props> = ({
  onContentChange,
  noteContentProps,
}) => {
  const handleChangeText = (content: string) => {
    onContentChange?.(content);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.inputContainer}>
        <TextInput
          style={[styles.input, GLOBAL_STYLES.liquidGlass]}
          multiline
          textAlignVertical="top"
          placeholder="Please input note content"
          placeholderTextColor={COLORS.WHITE90}
          value={noteContentProps}
          onChangeText={handleChangeText}
          autoFocus={false}
        />
      </ScrollView>
    </View>
  );
};

export default NoteContentInput;
