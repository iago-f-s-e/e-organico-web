import { useState } from 'react';

type UseExpandListener = {
  isExpanded: (id: string) => boolean;
  expand: (id: string) => void;
  retract: (id: string) => void;
};

export const useExpandList = (): UseExpandListener => {
  const [expanded, setExpanded] = useState<string[]>([]);

  const isExpanded = (id: string) => !!expanded.find((expanded) => expanded === id);

  const expand = (id: string) => {
    if (expanded.includes(id)) return;

    setExpanded((state) => [...state, id]);
  };

  const retract = (id: string) => {
    const withoutId = expanded.filter((expanded) => expanded !== id);

    setExpanded(withoutId);
  };

  return { isExpanded, expand, retract };
};
