import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageSourcePropType,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import IMAGES from '../assets/icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS } from '../constants/colors';
import { AppRouter } from './AppRouter';
import { NoteText } from '../components/NoteText';

type HeaderAction = {
  label?: string;
  icon?: ImageSourcePropType | undefined;
  color?: string;
  onPress?: () => void;
};

type AppHeaderProps = {
  title: string;
  isTransparent?: boolean;
  leftAction?: HeaderAction & { isBack?: boolean };
  rightAction?: HeaderAction;
};

export default function AppHeader({
  title,
  isTransparent = false,
  leftAction,
  rightAction,
}: AppHeaderProps) {
  const insets = useSafeAreaInsets();

  const renderLeftAction = () => {
    const icon = leftAction?.isBack ? IMAGES.back : leftAction?.icon;
    const onPress = leftAction?.onPress ?? AppRouter.goBack;
    return (
      leftAction && (
        <TouchableOpacity
          onPress={onPress}
          style={[styles.btnContainer, styles.leftActionBtn]}
        >
          <Image
            source={icon}
            style={styles.icon}
            resizeMode="contain"
            width={24}
            height={24}
          />
        </TouchableOpacity>
      )
    );
  };

  const renderTitle = () => {
    return (
      <View style={styles.titleContainer}>
        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>
      </View>
    );
  };

  const renderRightAction = () => {
    return (
      rightAction?.icon && (
        <TouchableOpacity
          onPress={rightAction?.onPress}
          disabled={!rightAction?.onPress}
          style={[styles.btnContainer]}
        >
          <Image
            source={rightAction?.icon}
            style={styles.icon}
            resizeMode="contain"
            width={24}
            height={24}
          />
        </TouchableOpacity>
      )
    );
  };

  return (
    <LinearGradient
      colors={
        isTransparent ? ['transparent', 'transparent'] : COLORS.GARDIENT_TOP
      }
      style={[styles.gradient, { height: HEADER_BAR_HEIGHT + insets.top }]}
    >
      <View style={[styles.inner]}>
        {renderLeftAction()}
        {renderTitle()}
        {renderRightAction()}
      </View>
    </LinearGradient>
  );
}

const HEADER_BAR_HEIGHT = 68;
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  gradient: {
    borderRadius: 20,
    justifyContent: 'flex-end',
  },
  inner: {
    flexDirection: 'row',
    alignItems: 'center',
    height: HEADER_BAR_HEIGHT,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    paddingHorizontal: 20,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '600',
  },
  btnContainer: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftActionBtn: {
    marginRight: 6,
  },
  rightActionContainer: {},
  icon: {
    marginHorizontal: 4,
  },
  label: {
    fontSize: 16,
    color: 'red',
  },
});
