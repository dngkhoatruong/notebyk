import { ENoteCategory, INoteCategory } from '../../models/NoteModels';
import { getDBConnection } from '../index';
/**
 * Insert a single category into the database.
 * If it already exists, ignore.
 */
export const insertCategory = async (
  category: INoteCategory,
): Promise<void> => {
  const db = await getDBConnection();
  console.log('Inserting category:', category);
  await db.executeSql(
    'INSERT OR IGNORE INTO categories (id, name) VALUES (?, ?);',
    [category.id, category.name],
  );
};

/**
 * Insert default categories
 */
export const insertDefaultCategories = async (): Promise<void> => {
  const defaultCategories: INoteCategory[] = [
    { id: ENoteCategory.WORK_AND_STUDY, name: 'Work and study' },
    { id: ENoteCategory.HOME_LIFE, name: 'Home life' },
    { id: ENoteCategory.HEALTH_AND_WELLNESS, name: 'Health and wellness' },
  ];

  for (const category of defaultCategories) {
    await insertCategory(category);
  }
};

/**
 * Create tables and insert default categories
 */
export const createTables = async () => {
  const db = await getDBConnection();

  await db.executeSql(`
    CREATE TABLE IF NOT EXISTS categories (
      id TEXT PRIMARY KEY NOT NULL,
      name TEXT NOT NULL
    );
  `);

  await db.executeSql(`
    CREATE TABLE IF NOT EXISTS notes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      content TEXT NOT NULL,
      createdAt INTEGER,
      updatedAt INTEGER,
      categoryId TEXT,
      FOREIGN KEY (categoryId) REFERENCES categories (id)
    );
  `);

  // Insert default categories after table creation
  await insertDefaultCategories();
};
