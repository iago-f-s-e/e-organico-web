import { Fields } from '../../../../@types/globals';

export type ListSimpleContentWithImageProps = {
  title: string;
  imagePath: string;
  fieldsDescription?: Fields[];
  onClick: () => void;
};