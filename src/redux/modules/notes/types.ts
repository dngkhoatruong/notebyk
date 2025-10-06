// src/redux/modules/auth/types.ts

import {
  ENoteCategory,
  INoteCategory,
  INote,
} from '../../../models/NoteModels';

export interface NotesState {
  categories: INoteCategory[];
  notes: INote[];
  loading: boolean;
  error?: string;
}

export interface IAddNotePayload {
  categoryId: ENoteCategory;
  content: string;
}

export const LOAD_NOTES = 'notes/load';
export const LOAD_NOTES_SUCCESS = 'notes/load_success';
export const LOAD_NOTES_FAILURE = 'notes/load_failure';

export const ADD_NOTE = 'notes/add';
export const ADD_NOTE_SUCCESS = 'notes/add_success';

export const DELETE_NOTE = 'notes/delete';
export const DELETE_NOTES_SUCCESS = 'notes/delete_success';

export const LOAD_CATEGORIES = 'categories/load_categories';
export const LOAD_CATEGORIES_SUCCESS = 'notes/load_categories_success';

interface LoadNotesAction {
  type: typeof LOAD_NOTES;
}
interface LoadNotesSuccessAction {
  type: typeof LOAD_NOTES_SUCCESS;
  payload: INote[];
}
interface LoadNotesFailureAction {
  type: typeof LOAD_NOTES_FAILURE;
  payload: string;
}

interface AddNoteAction {
  type: typeof ADD_NOTE;
  payload: IAddNotePayload;
}

interface AddNoteSuccessAction {
  type: typeof ADD_NOTE_SUCCESS;
  payload: INote[];
}

interface DeleteNoteAction {
  type: typeof DELETE_NOTE;
  payload: {
    id: string;
  };
}
interface DeleteNotesSuccessAction {
  type: typeof DELETE_NOTES_SUCCESS;
}

interface LoadCategoriesAction {
  type: typeof LOAD_CATEGORIES;
}

interface LoadCategoriesSuccessAction {
  type: typeof LOAD_CATEGORIES_SUCCESS;
  payload: INoteCategory[];
}

export type NotesActionTypes =
  | LoadNotesAction
  | LoadNotesSuccessAction
  | LoadNotesFailureAction
  | AddNoteSuccessAction
  | DeleteNoteAction
  | DeleteNotesSuccessAction
  | AddNoteAction
  | LoadCategoriesAction
  | LoadCategoriesSuccessAction;
