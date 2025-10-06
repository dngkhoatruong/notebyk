import { useDispatch } from 'react-redux';
import { deleteAllNotes } from '../../redux/modules/notes/thunks';
import { AppDispatch } from '../../redux/store';
import { showToast } from '../../utils/toastHelper';
import ICONS from '../../assets/icons';

export const useSettings = () => {
  const dispatch = useDispatch<AppDispatch>();

  // Delete all notes
  const handleDeleteAllNotes = async () => {
    try {
      await dispatch(deleteAllNotes()); //
      showToast.success('Success', 'All notes deleted successfully!');
    } catch (err: any) {
      showToast.success('Error', 'Failed to delete notes');
    }
  };

  const showCommingSoon = () => {
    showToast.success('Thank you!', 'The feature is coming soon. ');
  };

  //
  const dataFeature = [
    {
      id: '1',
      title: 'Online Customer',
      icon: ICONS.onlineCustomer,
    },
    {
      id: '2',
      title: 'User Agreement',
      icon: ICONS.userAgreement,
    },
    {
      id: '3',
      title: 'Private Policy',
      icon: ICONS.policy,
    },
    {
      id: '4',
      title: 'About Us',
      icon: ICONS.aboutus,
    },
  ];

  return {
    dataFeature,
    showCommingSoon,
    handleDeleteAllNotes,
  };
};
