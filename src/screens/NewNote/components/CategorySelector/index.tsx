import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { INoteCategory } from '../../../../models/NoteModels';
import { GLOBAL_STYLES } from '../../../../constants/globalStyles';
import { COLORS } from '../../../../constants/colors';
import { NoteText } from '../../../../components/NoteText';
import { BaseIcon } from '../../../../components/BaseIcon';
import ICONS from '../../../../assets/icons';
import { styles } from './styles';

type CategorySelectorProps = {
  onCategorySelect: () => void;
  selectedCategory: INoteCategory | undefined;
};

const CategorySelector: React.FC<CategorySelectorProps> = ({
  onCategorySelect,
  selectedCategory,
}) => {
  const handleCategoryPress = (): void => {
    onCategorySelect();
  };

  return (
    <View style={[styles.container, GLOBAL_STYLES.liquidGlass]}>
      <TouchableOpacity
        style={styles.selector}
        onPress={handleCategoryPress}
        activeOpacity={0.7}
      >
        <NoteText
          style={[styles.selectorText, selectedCategory && styles.selectedText]}
        >
          {selectedCategory?.name || 'Choose a category'}
        </NoteText>
        <BaseIcon source={ICONS.arrowDown} width={14} height={8} />
      </TouchableOpacity>
    </View>
  );
};

export default CategorySelector;
