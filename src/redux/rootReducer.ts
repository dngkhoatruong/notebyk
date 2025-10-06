// src/redux/rootReducer.ts
import { combineReducers } from 'redux';
import { notesReducer } from './modules/notes/reducer';

export const rootReducer = combineReducers({
  notes: notesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
