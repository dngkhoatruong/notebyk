// HomeScreen UI
import React from 'react';
import { View, TouchableOpacity, SectionList } from 'react-native';
import { AppBackground } from '../../components/AppBackgound';
import AppHeader from '../../navigation/AppHeader';
import { NoteTitle } from '../../components/NoteTitle';
import ICONS from '../../assets/icons';
import { COLORS } from '../../constants/colors';
import { NoteText } from '../../components/NoteText';
import { GLOBAL_STYLES } from '../../constants/globalStyles';
import { BaseIcon } from '../../components/BaseIcon';
import { styles } from './styles';
import { useHome } from './useHome';
import { ENoteCategory, INote } from '../../models/NoteModels';
import { AppRouter } from '../../navigation/AppRouter';
import SCREEN_KEYS from '../../constants/screenKeys';

const HomeScreen = () => {
  const { listWorkStudy, listHomeLife, listHealthWillness } = useHome();

  const sectionList = [
    {
      categoryId: ENoteCategory.WORK_AND_STUDY,
      data: [...listWorkStudy],
    },
    {
      categoryId: ENoteCategory.HOME_LIFE,
      data: [...listHomeLife],
    },
    {
      categoryId: ENoteCategory.HEALTH_AND_WELLNESS,
      data: [...listHealthWillness],
    },
  ];
  const rendeNoteItem = (note: INote) => {
    return (
      <View style={styles.noteSection}>
        <TouchableOpacity style={[GLOBAL_STYLES.liquidGlass, styles.noteItem]}>
          <NoteText numberOfLines={2} style={styles.noteContent}>
            {`${note.content.slice(0, 20)}${note.content.length > 20 ? '...' : ''}`}
          </NoteText>
          <BaseIcon source={ICONS.arrowRight} width={8} height={14} />
        </TouchableOpacity>
      </View>
    );
  };

  const renderSectionHeader = (category: ENoteCategory) => {
    let title, icon;
    switch (category) {
      case ENoteCategory.WORK_AND_STUDY:
        title = 'Work and study';
        icon = ICONS.workStudy;
        break;
      case ENoteCategory.HOME_LIFE:
        title = 'Life';
        icon = ICONS.homeLife;

        break;
      case ENoteCategory.HEALTH_AND_WELLNESS:
        title = 'Health and wellness';
        icon = ICONS.healthWellness;

        break;
    }

    return (
      <View
        style={
          category === ENoteCategory.WORK_AND_STUDY
            ? styles.sectionHeaderWorkStudy
            : styles.sectionHeader
        }
      >
        <NoteTitle icon={icon} title={title} />
      </View>
    );
  };

  const renderNoteList = () => {
    return (
      <View style={styles.container}>
        <NoteTitle
          icon={ICONS.clock}
          title="Recently created notes"
          color={COLORS.WHITE70}
        />
      </View>
    );
  };

  const renderSectionList = () => {
    return (
      <View style={styles.sectionListWrapper}>
        <SectionList
          sections={sectionList}
          keyExtractor={(item, index) => `${item.id}`}
          renderItem={({ item }) => rendeNoteItem(item)}
          renderSectionHeader={({ section: { categoryId } }) =>
            renderSectionHeader(categoryId)
          }
          stickySectionHeadersEnabled={false}
          contentContainerStyle={styles.sectionListContainer}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  };

  return (
    <AppBackground>
      <AppHeader
        title="Home"
        rightAction={{
          icon: ICONS.setting,
          onPress: () => {
            AppRouter.navigate(SCREEN_KEYS.SETTINGS);
          },
        }}
      />
      {renderNoteList()}
      {renderSectionList()}
    </AppBackground>
  );
};

export default HomeScreen;
