import { INoteCategory, INote } from '../../models/NoteModels';
import { getDBConnection } from '../index';

export const getNotesByCategory = async (categoryId: string) => {
  const db = await getDBConnection();
  const results = await db.executeSql(
    'SELECT * FROM notes WHERE categoryId = ? ORDER BY createdAt DESC;',
    [categoryId],
  );
  const rows = results[0].rows;
  const notes = [];
  for (let i = 0; i < rows.length; i++) {
    notes.push(rows.item(i));
  }
  return notes;
};

export const insertNote = async (note: {
  content: string;
  categoryId: string;
}) => {
  const db = await getDBConnection();
  const id = Date.now(); // generate unique ID
  const createdAt = Date.now();

  console.log('Inserting note:', {
    ...note,
    id,
    createdAt,
  });

  await db.executeSql(
    'INSERT INTO notes (id, content, createdAt, categoryId) VALUES (?, ?, ?, ?);',
    [id, note.content, createdAt, note.categoryId],
  );
};

export const deleteNote = async (id: number) => {
  const db = await getDBConnection();
  await db.executeSql('DELETE FROM notes WHERE id = ?;', [id]);
};

/**
 * Fetch all notes ordered by createdAt descending
 */
export const getNotes = async (): Promise<INote[]> => {
  const db = await getDBConnection();
  const results = await db.executeSql(
    'SELECT id, content, createdAt, categoryId FROM notes ORDER BY createdAt DESC;',
  );
  const rows = results[0].rows;
  const notes: INote[] = [];
  for (let i = 0; i < rows.length; i++) {
    notes.push(rows.item(i));
  }
  return notes;
};

/**
 * Delete all notes
 */
export const deleteAllNotes = async (): Promise<void> => {
  const db = await getDBConnection();
  await db.executeSql('DELETE FROM notes;');
};

/**
 * Fetch all categories
 */
export const getCategoryList = async (): Promise<INoteCategory[]> => {
  const db = await getDBConnection();
  const results = await db.executeSql('SELECT * FROM categories;');
  console.log('Category query results:', results);
  const rows = results[0].rows;
  const categories: INoteCategory[] = [];
  for (let i = 0; i < rows.length; i++) {
    categories.push(rows.item(i));
  }
  return categories;
};
