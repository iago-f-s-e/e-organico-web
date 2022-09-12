import { Nil } from '../../../@types/globals';

type Props = {
  condition: boolean | Nil;
  render: () => JSX.Element;
};

export const If = ({ condition, render }: Props): JSX.Element | null => {
  if (!condition) return null;

  return render();
};
