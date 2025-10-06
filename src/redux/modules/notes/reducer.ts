import {
  LOAD_NOTES,
  LOAD_NOTES_SUCCESS,
  LOAD_NOTES_FAILURE,
  ADD_NOTE_SUCCESS,
  DELETE_NOTES_SUCCESS,
  LOAD_CATEGORIES,
  LOAD_CATEGORIES_SUCCESS,
  NotesState,
  NotesActionTypes,
} from './types';

const initialState: NotesState = {
  notes: [],
  categories: [],
  loading: false,
  error: undefined,
};

export function notesReducer(
  state = initialState,
  action: NotesActionTypes,
): NotesState {
  switch (action.type) {
    // Notes
    case LOAD_NOTES:
      return { ...state, loading: true, error: undefined };
    case LOAD_NOTES_SUCCESS:
      return { ...state, loading: false, notes: action.payload };
    case LOAD_NOTES_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case ADD_NOTE_SUCCESS:
      return { ...state, notes: action.payload };
    case DELETE_NOTES_SUCCESS:
      return { ...state, notes: [] };

    // Categories
    case LOAD_CATEGORIES:
      return { ...state, loading: true, error: undefined };
    case LOAD_CATEGORIES_SUCCESS:
      return { ...state, loading: false, categories: action.payload };

    default:
      return state;
  }
}
