import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { AppBackground } from '../../components/AppBackgound';
import { BottomContainer } from '../../components/BottomContainer';
import { PrimaryButton } from '../../components/PrimaryButton';
import AppHeader from '../../navigation/AppHeader';
import { CategoryBottomSheet } from './components/CategoryBottomSheet';
import CategorySelector from './components/CategorySelector';
import NoteContentInput from './components/NoteContent';
import { useNewNote } from './useNewNote';

const NewNoteScreen: React.FC = () => {
  const {
    selectedCategory,
    isSaveDisabled,
    bottomSheetRef,
    categories,
    noteContent,
    handleSelect,
    handleCategorySelect,
    handleContentChange,
    onAdd,
    closeBottomSheet,
  } = useNewNote();

  const renderForm = () => {
    return (
      <View style={styles.content}>
        <CategorySelector
          selectedCategory={selectedCategory}
          onCategorySelect={handleCategorySelect}
        />
        <NoteContentInput
          onContentChange={handleContentChange}
          noteContentProps={noteContent}
        />
      </View>
    );
  };

  const renderButtonSave = () => {
    return (
      <BottomContainer>
        <PrimaryButton title="Save" disabled={isSaveDisabled} onPress={onAdd} />
      </BottomContainer>
    );
  };

  return (
    <AppBackground>
      <TouchableWithoutFeedback onPress={() => closeBottomSheet()}>
        <KeyboardAvoidingView
          style={styles.keyboardAvoidingView}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          onTouchStart={() => {
            closeBottomSheet();
            Keyboard.dismiss();
          }}
        >
          <AppHeader
            title="New Note"
            leftAction={{
              isBack: true,
            }}
          />
          {renderForm()}
          {renderButtonSave()}
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
      <CategoryBottomSheet
        ref={bottomSheetRef}
        categories={categories}
        selectedCategory={selectedCategory}
        onSelect={handleSelect}
      />
    </AppBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
});

export default NewNoteScreen;
