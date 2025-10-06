export enum ENoteCategory {
  WORK_AND_STUDY = 'categories.workAndStudy',
  HOME_LIFE = 'categories.homeLife',
  HEALTH_AND_WELLNESS = 'categories.healthAndWellness',
}

export interface INote {
  id: number;
  categoryId: ENoteCategory;
  content: string;
  createdAt: number;
}

export interface INoteCategory {
  id: ENoteCategory;
  name: string;
}
