// useNewNote.ts
import { useState, useRef, useEffect } from 'react';
import { CategoryBottomSheetHandle } from './components/CategoryBottomSheet';
import { INoteCategory } from '../../models/NoteModels';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { createNote } from '../../redux/modules/notes/thunks';
import { showToast } from '../../utils/toastHelper';
import { ToastType } from '../../config/toastConfig';
import { RootState } from '../../redux/rootReducer';

export const useNewNote = () => {
  const dispatch = useDispatch<AppDispatch>();
  const categories = useSelector((state: RootState) => state.notes.categories);

  const [selectedCategory, setSelectedCategory] = useState<INoteCategory>();
  const [noteContent, setNoteContent] = useState<string>('');
  const [isSaveDisabled, setSaveDisabled] = useState<boolean>(false);

  const bottomSheetRef = useRef<CategoryBottomSheetHandle | null>(null);

  // BottomSheet handlers
  const openBottomSheet = () => {
    bottomSheetRef.current?.snapToIndex?.(0);
  };

  const closeBottomSheet = () => {
    bottomSheetRef.current?.close?.();
  };

  // Category handlers
  const handleSelect = (category: INoteCategory) => {
    setSelectedCategory(category);
    closeBottomSheet();
  };

  const handleCategorySelect = () => {
    openBottomSheet();
  };

  // Note content
  const handleContentChange = (content: string) => {
    setNoteContent(content);
  };

  //  Show toast + reset state
  const showToastAndReset = (
    type: 'success' | 'error' | 'info',
    title: string,
    message: string,
    success: boolean,
  ) => {
    if (type === 'success') {
      showToast.success(title, message);
    } else if (type === 'error') {
      showToast.error(title, message);
    }

    if (success) {
      // reset inputs
      setNoteContent('');
      setSelectedCategory(undefined);
      setSaveDisabled(true);
    }
  };

  // Add note
  const onAdd = () => {
    const normalizedContent = noteContent.replace(/\s+/g, ' ').trim();

    if (!selectedCategory) {
      console.warn('Please select a category');
      return;
    }

    if (noteContent.length > 200) {
      showToastAndReset(
        ToastType.ERROR,
        'Error',
        'Note content should not exceed 200 characters',
        false,
      );
      return;
    }

    const noteData = {
      categoryId: selectedCategory.id,
      content: normalizedContent,
    };

    try {
      dispatch(createNote(noteData));
      showToastAndReset(
        ToastType.SUCCESS,
        'Success',
        'Note saved successfully!',
        true,
      );
    } catch (error) {
      showToastAndReset(
        ToastType.ERROR,
        'Error',
        'Failed to create note',
        false,
      );
    }
  };

  // Disable save button if no category or empty content
  useEffect(() => {
    setSaveDisabled(!(noteContent && selectedCategory));
  }, [noteContent, selectedCategory]);

  return {
    selectedCategory,
    noteContent,
    isSaveDisabled,
    bottomSheetRef,
    categories,
    openBottomSheet,
    closeBottomSheet,
    handleSelect,
    handleCategorySelect,
    handleContentChange,
    onAdd,
  };
};
