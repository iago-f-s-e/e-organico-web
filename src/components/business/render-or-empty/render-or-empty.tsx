import React from 'react';
import { Empty } from '../../ui';

type RenderOrEmptyProps<T> = {
  toCheck: Array<T>;
  render: () => JSX.Element;
};

type RenderOrEmptyComponent = <T>(props: RenderOrEmptyProps<T>) => JSX.Element;

export const RenderOrEmpty: RenderOrEmptyComponent = ({ toCheck, render }): JSX.Element => {
  const isEmpty = !toCheck.length;

  if (isEmpty) return <Empty />;

  return render();
};
