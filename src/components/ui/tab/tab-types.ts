export type TabProps = {
  selected: string;
  select: (tabName: string) => void;
  fields: {
    name: string;
    content: JSX.Element;
  }[];
};
