// src/redux/modules/notes/actions.ts
import {
  LOAD_NOTES,
  LOAD_NOTES_SUCCESS,
  LOAD_NOTES_FAILURE,
  ADD_NOTE_SUCCESS,
  DELETE_NOTES_SUCCESS,
  NotesActionTypes,
  LOAD_CATEGORIES_SUCCESS,
} from './types';
import { INote, INoteCategory } from '../../../models/NoteModels';

// Action creators
export const loadNotesSuccess = (notes: INote[]): NotesActionTypes => ({
  type: LOAD_NOTES_SUCCESS,
  payload: notes,
});

export const loadNotesFailure = (error: string): NotesActionTypes => ({
  type: LOAD_NOTES_FAILURE,
  payload: error,
});

export const addNoteSuccess = (notes: INote[]): NotesActionTypes => ({
  type: ADD_NOTE_SUCCESS,
  payload: notes,
});

export const deleteNotesSuccess = (): NotesActionTypes => ({
  type: DELETE_NOTES_SUCCESS,
});

export const loadCategoriesSuccess = (
  categories: INoteCategory[],
): NotesActionTypes => ({
  type: LOAD_CATEGORIES_SUCCESS,
  payload: categories,
});
