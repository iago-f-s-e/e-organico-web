import { Fields } from '../../../../@types/globals';

type ListSimpleContentProps = {
  title: string;
  showExpandOrRetract?: boolean;
  isExpanded?: boolean;
  expand?: () => void;
  retract?: () => void;
  fieldsDescription?: Fields[];
  otherAction?: () => JSX.Element;
  onClick: () => void;
};

export type ListSimpleContentFC = (props: ListSimpleContentProps) => JSX.Element;