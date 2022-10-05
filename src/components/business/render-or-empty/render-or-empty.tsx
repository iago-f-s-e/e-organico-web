import { Nil } from '@src/@types/globals';
import React from 'react';
import { Empty } from '../../ui';

type RenderOrEmptyProps<T> = {
  toCheck: Array<T> | Nil;
  render: (checked: Array<T>) => JSX.Element;
};

type RenderOrEmptyComponent = <T>(props: RenderOrEmptyProps<T>) => JSX.Element;

export const RenderOrEmpty: RenderOrEmptyComponent = ({ toCheck, render }): JSX.Element => {
  const isEmpty = !toCheck || !toCheck.length;

  if (isEmpty) return <Empty />;

  return render(toCheck);
};
