import { INote } from '../../models/NoteModels';
import { NoteDTO } from './NoteDTO';

export class NoteMapper {
  static fromDTO(dto: NoteDTO): INote {
    return {
      id: dto.id,
      categoryId: dto.categoryId,
      content: dto.content ?? '',
      createdAt: dto.createdAt,
    };
  }

  static fromDTOList(dtos: NoteDTO[]): INote[] {
    return dtos.map(this.fromDTO);
  }
}
