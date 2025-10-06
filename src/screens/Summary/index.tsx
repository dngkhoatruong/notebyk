// SummaryScreen UI
import React from 'react';
import { Image, Touchable, TouchableOpacity, View } from 'react-native';
import { ISummaryData, useSummary } from './useSummary';
import { AppBackground } from '../../components/AppBackgound';
import AppHeader from '../../navigation/AppHeader';
import IMAGES from '../../assets/images';
import { styles } from './styles';
import { COLORS } from '../../constants/colors';
import { NoteText } from '../../components/NoteText';
import { PrimaryButton } from '../../components/PrimaryButton';
import { GLOBAL_STYLES } from '../../constants/globalStyles';
import { showCommingSoon } from '../../utils/toastHelper';

const SummaryScreen = () => {
  const { dataByCategory } = useSummary();

  const renderRightImage = () => {
    return <Image source={IMAGES.SummaryRobot} style={styles.rightImage} />;
  };

  const renderTitleRow = (data: ISummaryData) => {
    return (
      <View style={styles.rowContainer} key={data.id}>
        <View style={styles.titleRowContainer}>
          <Image source={data.icon} style={styles.categoryImage} />
          <NoteText variant="title" style={GLOBAL_STYLES.flex1}>
            {data.title}
          </NoteText>
          <PrimaryButton
            title="Detail"
            color={COLORS.WHITE}
            contentContainerStyles={styles.btnDetail}
            onPress={showCommingSoon}
          />
        </View>
        <View style={GLOBAL_STYLES.liquidGlass}>
          <NoteText
            color={COLORS.WHITE70}
            variant="body"
          >{`This topic has a total of  ${data.count} ${data.count > 0 ? 'records' : 'record'}.`}</NoteText>
        </View>
      </View>
    );
  };

  const renderContentWrapper = () => {
    return (
      <View style={styles.contentWrapper}>
        {dataByCategory.map((data, index) => renderTitleRow(data))}
      </View>
    );
  };

  return (
    <AppBackground>
      <AppHeader title="Summary" isTransparent={true} />
      {renderRightImage()}
      {renderContentWrapper()}
    </AppBackground>
  );
};

export default SummaryScreen;
