import { Fields } from '../../../../@types/globals';

export type ListSimpleContentWithImageProps = {
  title: string;
  imagePath: string;
  fieldsDescription?: Fields[];
  otherAction?: () => JSX.Element;
  onClick: () => void;
};
