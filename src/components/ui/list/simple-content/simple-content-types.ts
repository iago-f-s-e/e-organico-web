import { Fields } from '@src/@types/globals';

type ListSimpleContentProps = {
  title: string;
  id: string;
  showExpandOrRetract?: boolean;
  isExpanded?: boolean;
  expand?: () => void;
  retract?: () => void;
  fieldsDescription?: Fields[];
  otherAction?: () => JSX.Element;
  onClick: () => void;
};

export type ListSimpleContentFC = (props: ListSimpleContentProps) => JSX.Element;
