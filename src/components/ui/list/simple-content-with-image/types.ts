import { Fields } from '../../../../@types/globals';

export type ListSimpleContentWithImageProps = {
  title: string;
  imagePath: string;
  description?: Fields[];
  onClick: () => void;
};
