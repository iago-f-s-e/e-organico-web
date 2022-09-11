import React from 'react';
import { Empty } from '../../ui';

type RenderOrEmptyProps<T> = {
  data: Array<T>;
  render: () => JSX.Element;
};

type RenderOrEmptyComponent = <T>(props: RenderOrEmptyProps<T>) => JSX.Element;

export const RenderOrEmpty: RenderOrEmptyComponent = ({ data, render }): JSX.Element => {
  const isEmpty = !data.length;

  if (isEmpty) return <Empty />;

  return render();
};
