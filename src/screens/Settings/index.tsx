// SummaryScreen UI
import React from 'react';
import { AppBackground } from '../../components/AppBackgound';
import AppHeader from '../../navigation/AppHeader';
import { BottomContainer } from '../../components/BottomContainer';
import { PrimaryButton } from '../../components/PrimaryButton';
import { TouchableOpacity, View } from 'react-native';
import { useSettings } from './useSettings';
import { GLOBAL_STYLES } from '../../constants/globalStyles';
import { COLORS } from '../../constants/colors';
import { styles } from './styles';
import { NoteText } from '../../components/NoteText';
import { BaseIcon } from '../../components/BaseIcon';
import ICONS from '../../assets/icons';

const SettingsScreen = () => {
  const { dataFeature, handleDeleteAllNotes, showCommingSoon } = useSettings();

  const renderButtonDelete = () => {
    return (
      <BottomContainer>
        <PrimaryButton
          title="Delete All Notes"
          onPress={handleDeleteAllNotes}
        />
      </BottomContainer>
    );
  };

  const renderTitleRow = (data: any) => {
    return (
      <TouchableOpacity
        style={[GLOBAL_STYLES.liquidGlass, styles.rowContainer]}
        key={data.id}
        onPress={showCommingSoon}
      >
        <View style={styles.titleRowContainer}>
          <BaseIcon source={data.icon} width={24} height={24} />
          <NoteText color={COLORS.WHITE90} variant="title" style={styles.title}>
            {data.title}
          </NoteText>
          <BaseIcon source={ICONS.arrowRight} width={8} height={14} />
        </View>
      </TouchableOpacity>
    );
  };

  const renderContentWrapper = () => {
    return (
      <View style={styles.contentWrapper}>
        {dataFeature.map((data, index) => renderTitleRow(data))}
      </View>
    );
  };

  return (
    <View style={GLOBAL_STYLES.flex1}>
      <AppBackground>
        <AppHeader
          title="Settings"
          leftAction={{
            isBack: true,
          }}
        />
        {renderContentWrapper()}
      </AppBackground>
      {renderButtonDelete()}
    </View>
  );
};
export default SettingsScreen;
