import { Image, ImageSourcePropType } from 'react-native';

export const BaseIcon = ({
  source,
  width,
  height,
}: {
  source: ImageSourcePropType | undefined;
  width: number;
  height: number;
}) => <Image source={source} style={{ width: width, height: height }} />;
