import React from 'react';
import { View, StyleSheet, ImageSourcePropType } from 'react-native';
import { BaseIcon } from './BaseIcon';
import { NoteText } from './NoteText';

type Props = {
  title: string;
  icon?: ImageSourcePropType | undefined;
  color?: string;
};

export const NoteTitle: React.FC<Props> = ({ icon, title, color }) => {
  return (
    <View style={styles.container}>
      {icon && <BaseIcon source={icon} width={20} height={20} />}
      <NoteText variant="title" style={styles.title} color={color}>
        {title}
      </NoteText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    marginHorizontal: 4,
  },
  icon: {
    marginRight: 6,
  },
  title: {
    fontSize: 16,
    fontWeight: '400',
    marginLeft: 10,
  },
});
