import { Fields } from '../../../../@types/globals';

type ListSimpleContentProps = {
  title: string;
  id: string;
  showExpandOrRetract?: boolean;
  isExpanded?: boolean;
  expand?: (id: string) => void;
  retract?: (id: string) => void;
  fieldsDescription?: Fields[];
  otherAction?: () => JSX.Element;
  onClick: () => void;
};

export type ListSimpleContentFC = (props: ListSimpleContentProps) => JSX.Element;
