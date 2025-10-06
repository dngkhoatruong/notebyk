import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/rootReducer';
import { INote, ENoteCategory } from '../../models/NoteModels';
import { AppDispatch } from '../../redux/store';
import { deleteAllNotes, fetchNotes } from '../../redux/modules/notes/thunks';
import { showToast } from '../../utils/toastHelper';
import IMAGES from '../../assets/images';

export interface ISummaryData {
  id: ENoteCategory;
  title: string;
  icon: any;
  count: number;
}

export const useSummary = () => {
  const dispatch = useDispatch<AppDispatch>();

  const notes = useSelector((state: RootState) => state.notes.notes);
  const categories = useSelector((state: RootState) => state.notes.categories);

  const [countOfWorkStudy, setCountOfWorkStudy] = useState<number>(0);
  const [countOfHomeLife, setCountOfHomeLife] = useState<number>(0);
  const [countOfHealthWellness, setCountOfHealthWellness] = useState<number>(0);

  useEffect(() => {
    async function loadData() {
      // Fetch notes from SQLite and dispatch to Redux
      await dispatch(fetchNotes());
    }
    loadData();
  }, []);

  // Log notes for debug
  useEffect(() => {
    const workStudyNotes = notes.filter(
      (note: INote) => note.categoryId === ENoteCategory.WORK_AND_STUDY,
    );
    const homeLifeNotes = notes.filter(
      (note: INote) => note.categoryId === ENoteCategory.HOME_LIFE,
    );
    const healthWillnessNotes = notes.filter(
      (note: INote) => note.categoryId === ENoteCategory.HEALTH_AND_WELLNESS,
    );

    setCountOfWorkStudy(workStudyNotes.length);
    setCountOfHomeLife(homeLifeNotes.length);
    setCountOfHealthWellness(healthWillnessNotes.length);
    console.log('Notes in Home:', notes);
  }, [notes]);

  const dataByCategory: ISummaryData[] = [
    {
      id: ENoteCategory.WORK_AND_STUDY,
      title: 'Work and study',
      icon: IMAGES.WorkStudy,
      count: countOfWorkStudy,
    },
    {
      id: ENoteCategory.HOME_LIFE,
      title: 'Home Life',
      icon: IMAGES.HomeLife,
      count: countOfHomeLife,
    },
    {
      id: ENoteCategory.HEALTH_AND_WELLNESS,
      title: 'Health and wellness',
      icon: IMAGES.HealthWellness,
      count: countOfHealthWellness,
    },
  ];

  return {
    dataByCategory,
  };
};
