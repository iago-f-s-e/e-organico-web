export type TabProps = {
  selected: string;
  select: (tabName: string) => void;
  fields: {
    tabName: string;
    pageTitle: string;
    inputSearchPlaceholder: string;
    content: JSX.Element;
  }[];
};
