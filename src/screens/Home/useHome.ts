import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/rootReducer';
import { INote, ENoteCategory } from '../../models/NoteModels';
import { AppDispatch } from '../../redux/store';
import Toast from 'react-native-toast-message';
import {
  deleteAllNotes,
  fetchCategories,
  fetchNotes,
} from '../../redux/modules/notes/thunks';
import { showToast } from '../../utils/toastHelper';

export const useHome = () => {
  const dispatch = useDispatch<AppDispatch>();

  const notes = useSelector((state: RootState) => state.notes.notes);
  const categories = useSelector((state: RootState) => state.notes.categories);

  const [listWorkStudy, setListWorkStudy] = useState<INote[]>([]);
  const [listHomeLife, setListHomeLife] = useState<INote[]>([]);
  const [listHealthWillness, setListHealthWillness] = useState<INote[]>([]);

  useEffect(() => {
    async function loadData() {
      // Fetch notes from SQLite and dispatch to Redux
      await dispatch(fetchNotes());
      // Fetch categories from SQLite and dispatch to Redux
      await dispatch(fetchCategories());
    }
    loadData();
  }, []);

  // Log notes for debug
  useEffect(() => {
    const workStudyNotes = notes.filter(
      (note: INote) => note.categoryId === ENoteCategory.WORK_AND_STUDY,
    );
    const homeLifeNotes = notes.filter(
      (note: INote) => note.categoryId === ENoteCategory.HOME_LIFE,
    );
    const healthWillnessNotes = notes.filter(
      (note: INote) => note.categoryId === ENoteCategory.HEALTH_AND_WELLNESS,
    );

    setListWorkStudy(workStudyNotes);
    setListHomeLife(homeLifeNotes);
    setListHealthWillness(healthWillnessNotes);
    console.log('Notes in Home:', notes);
  }, [notes]);

  // Delete all notes
  const handleDeleteAllNotes = async () => {
    try {
      await dispatch(deleteAllNotes()); //
      showToast.success('Success', 'All notes deleted successfully!');
    } catch (err: any) {
      showToast.success('Error', 'Failed to delete notes');
    }
  };

  return {
    notes,
    categories,
    listWorkStudy,
    listHomeLife,
    listHealthWillness,
    handleDeleteAllNotes,
  };
};
