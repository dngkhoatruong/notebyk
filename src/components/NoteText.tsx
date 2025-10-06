import React from 'react';
import {
  Platform,
  Text as RNText,
  StyleProp,
  StyleSheet,
  TextProps,
  TextStyle,
} from 'react-native';
import { COLORS } from '../constants/colors';

type NoteTextProps = TextProps & {
  variant?: 'title' | 'body' | 'caption';
  weight?: 'regular' | 'medium' | 'semibold' | 'bold';
  color?: string;
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
};

export const NoteText: React.FC<NoteTextProps> = ({
  variant = 'body',
  weight = 'regular',
  color = COLORS.WHITE,
  style,
  children,
  numberOfLines,
  ...rest
}) => {
  return (
    <RNText
      numberOfLines={numberOfLines}
      {...rest}
      style={[
        styles.base,
        variantStyles[variant],
        weightStyles[weight],
        style,
        { color: color },
      ]}
    >
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  base: {
    fontFamily: Platform.OS === 'ios' ? 'PingFangSC-Regular' : 'System', // PingFangSC is a font of ios
  },
});

const variantStyles = StyleSheet.create({
  title: { fontSize: 16, lineHeight: 22 },
  body: { fontSize: 14, lineHeight: 20 },
  caption: { fontSize: 12, lineHeight: 16 },
});

const weightStyles = StyleSheet.create({
  regular: { fontWeight: '400' },
  medium: { fontWeight: '500' },
  semibold: { fontWeight: '600' },
  bold: { fontWeight: '700' },
});
