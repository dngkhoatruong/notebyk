// noteService.ts
import { INote } from '../models/NoteModels';
import { IAddNotePayload } from '../redux/modules/notes/types';
import {
  getNotesByCategory as dbGetNotesByCategory,
  insertNote as dbInsertNote,
  deleteNote as dbDeleteNote,
  getNotes as dbGetNotes,
  deleteAllNotes as dbDeleteAllNotes,
} from '../database/Note/noteRepository'; // your SQLite helper functions

/**
 * Fetch all notes from the database
 */
export const getNotes = async (): Promise<INote[]> => {
  return await dbGetNotes();
};

/**
 * Fetch notes filtered by category
 * @param categoryId - ID of the category to filter notes
 */
export const getNotesByCategory = async (
  categoryId: string,
): Promise<INote[]> => {
  return await dbGetNotesByCategory(categoryId);
};

/**
 * Add a new note to the database
 * @param note - Note object containing content, and categoryId
 */
export const addNote = async (note: IAddNotePayload): Promise<void> => {
  console.log('Adding note:', note);
  await dbInsertNote({
    content: note.content,
    categoryId: note.categoryId,
  });
};

/**
 * Delete a note by its ID
 * @param id - ID of the note to delete
 */
export const deleteNote = async (id: number): Promise<void> => {
  await dbDeleteNote(id);
};

/**
 * Delete all notes from the database
 */
export const clearNotes = async (): Promise<void> => {
  await dbDeleteAllNotes();
};
