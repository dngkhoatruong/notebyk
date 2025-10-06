// src/components/CategorySelector/CategoryBottomSheet.tsx
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import React, { forwardRef, useImperativeHandle, useMemo, useRef } from 'react';
import { FlatList, Text, TouchableOpacity } from 'react-native';
import { INoteCategory } from '../../../../models/NoteModels';
import { styles } from './styles';

type Props = {
  categories: INoteCategory[];
  selectedCategory: INoteCategory | undefined;
  onSelect: (category: INoteCategory) => void;
};

export type CategoryBottomSheetHandle = {
  expand: () => void;
  close: () => void;
  snapToIndex: (index: number) => void;
};

export const CategoryBottomSheet = forwardRef<CategoryBottomSheetHandle, Props>(
  ({ categories, selectedCategory, onSelect }, ref) => {
    const internalRef = useRef<BottomSheetMethods>(null);

    // expose API cho parent
    useImperativeHandle(
      ref,
      () => ({
        expand: () => internalRef.current?.expand?.(),
        close: () => internalRef.current?.close?.(),
        snapToIndex: (index: number) =>
          internalRef.current?.snapToIndex?.(index),
      }),
      [],
    );

    const renderCategoryItem = ({ item }: { item: INoteCategory }) => (
      <TouchableOpacity
        style={[
          styles.categoryItem,
          selectedCategory?.id === item.id && styles.selectedCategoryItem,
        ]}
        onPress={() => onSelect(item)}
      >
        <Text
          style={[
            styles.categoryText,
            selectedCategory?.id === item.id && styles.selectedCategoryText,
          ]}
        >
          {item.name}
        </Text>
        {selectedCategory?.id === item.id && (
          <Text style={styles.checkmark}>✓</Text>
        )}
      </TouchableOpacity>
    );

    const snapPoints = useMemo(() => ['50%', '75%'], []);

    return (
      <BottomSheet
        ref={internalRef}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose
        backgroundStyle={styles.bottomSheetBackground}
        handleIndicatorStyle={styles.handleIndicator}
        backdropComponent={() => null}
      >
        <BottomSheetView style={styles.bottomSheetContent}>
          <Text style={styles.bottomSheetTitle}>Choose Category</Text>
          <FlatList
            data={categories}
            keyExtractor={item => item.name}
            renderItem={renderCategoryItem}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.listContent}
          />
        </BottomSheetView>
      </BottomSheet>
    );
  },
);
