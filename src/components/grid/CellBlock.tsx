import * as React from 'react';

import { FixedPosition } from '.';

export interface CellBlockModel {
  width?: number;
  fixed?: FixedPosition;
  className?: string;
}

export const CellBlock: React.FunctionComponent<CellBlockModel> = ({
  width,
  fixed = false,
  className = '',
  children
}) => {
  const fixedClass =
    (fixed === 'left' || fixed === 'top-left' ? 'left-0' : '') +
    (fixed === 'right' || fixed === 'top-right' ? 'right-0' : '') +
    (fixed === 'top-left' || fixed === 'top-right' ? ' top-0 z-20' : '');
  const containerClass = fixed ? `sticky ${fixedClass} flex` : 'flex flex-1';
  const blockClass = fixed
    ? 'overflow-x-hidden flex flex-row items-stretch'
    : 'overflow-x-auto flex-1 flex flex-row';
  const sizeClass = width ? `w-${width}` : '';
  return (
    <div
      className={`millgrid-block ${containerClass} ${sizeClass} p-0 items-stretch overflow-x-hidden`}
    >
      <div className={`${blockClass} ${sizeClass} ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default CellBlock;
