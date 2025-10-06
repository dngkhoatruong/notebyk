import React from 'react';
import {
  StyleSheet,
  ImageSourcePropType,
  TouchableOpacity,
  TouchableOpacityProps,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { NoteText } from './NoteText';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Props = TouchableOpacityProps & {
  title: string;
  icon?: ImageSourcePropType | undefined;
  contentContainerStyles?: StyleProp<ViewStyle> | undefined;
  color?: string;
};

export const PrimaryButton: React.FC<Props> = ({
  icon,
  title,
  color,
  contentContainerStyles,
  ...props
}) => {
  const insets = useSafeAreaInsets();

  return (
    <TouchableOpacity
      style={[
        styles.container,
        { marginBottom: insets.bottom },
        contentContainerStyles,
      ]}
      {...props}
    >
      <NoteText variant="title" style={styles.title} color={color}>
        {title}
      </NoteText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 200,
    height: 34,
    borderRadius: 24,
    backgroundColor: '#F13A76',
  },
  icon: {
    marginRight: 6,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
  },
});
