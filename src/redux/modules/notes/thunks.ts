import { AppDispatch } from '../../store';
import {
  getNotes,
  addNote as addNoteService,
  clearNotes,
} from '../../../services/NoteService';
import {
  LOAD_NOTES,
  LOAD_NOTES_SUCCESS,
  ADD_NOTE_SUCCESS,
  DELETE_NOTES_SUCCESS,
  IAddNotePayload,
  DELETE_NOTE,
  LOAD_CATEGORIES,
  LOAD_CATEGORIES_SUCCESS,
  ADD_NOTE,
} from './types';
import { getCategoryList } from '../../../database/Note/noteRepository';
import { NoteMapper } from '../../../dtos/note/NoteMapper';
import { showToast } from '../../../utils/toastHelper';

// Fetch notes
export const fetchNotes = () => async (dispatch: AppDispatch) => {
  dispatch({ type: LOAD_NOTES });
  try {
    const notes = await getNotes();
    // Map data before using
    const mappedNotes = NoteMapper.fromDTOList(notes);

    dispatch({ type: LOAD_NOTES_SUCCESS, payload: mappedNotes });
  } catch (err: any) {
    console.log('Error creating note:', err);
    showToast.error('Error', 'Failed to fetch notes');
  }
};

// Create note
export const createNote =
  (note: IAddNotePayload) => async (dispatch: AppDispatch) => {
    dispatch({ type: ADD_NOTE }); // optional: show loading
    try {
      await addNoteService(note);
      const notes = await getNotes();
      // Map data before using
      const mappedNotes = NoteMapper.fromDTOList(notes);

      dispatch({ type: ADD_NOTE_SUCCESS, payload: mappedNotes });
    } catch (err: any) {
      console.log('Error creating note:', err);
      showToast.error('Error', 'Error creating note');
    }
  };

// Delete all notes
export const deleteAllNotes = () => async (dispatch: AppDispatch) => {
  dispatch({ type: DELETE_NOTE }); // optional: show loading
  try {
    await clearNotes();
    dispatch({ type: DELETE_NOTES_SUCCESS });
  } catch (err: any) {
    console.log('Error deleting note:', err);
    showToast.error('Error', 'Error deleting note');
  }
};

export const fetchCategories = () => async (dispatch: AppDispatch) => {
  dispatch({ type: LOAD_CATEGORIES });
  try {
    const categories = await getCategoryList();
    dispatch({ type: LOAD_CATEGORIES_SUCCESS, payload: categories });
  } catch (err: any) {}
};
