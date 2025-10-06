import { ENoteCategory } from '../../models/NoteModels';

export interface NoteDTO {
  id: number;
  categoryId: ENoteCategory;
  content: string;
  createdAt: number;
}
