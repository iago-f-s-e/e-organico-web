type Props = {
  condition: boolean;
  render: () => JSX.Element;
};

export const If = ({ condition, render }: Props): JSX.Element | null => {
  if (!condition) return null;

  return render();
};
