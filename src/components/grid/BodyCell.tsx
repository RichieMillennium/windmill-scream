import * as React from 'react';

import { OnSizeModel, ScrollPosition } from './';

export interface BodyCellModel {
  width: number;
  value: string;
  truncate?: boolean;
  alt: boolean;
  control?: boolean;
  columnIndex: number;
  // gridRef: React.MutableRefObject<HTMLElement | null>;
  onSize?: OnSizeModel;
  className?: string;
}

export const BodyCell: React.FunctionComponent<BodyCellModel> = ({
  width,
  value,
  truncate,
  alt,
  control,
  columnIndex,
  // gridRef,
  onSize,
  className = ''
}) => {
  const [position, setPosition] = React.useState<ScrollPosition | null>(null);
  const cellRef = React.useRef<HTMLElement | null>(null);
  const sizeClass = `w-${width}`;
  const truncClass = truncate ? 'overflow-x-hidden whitespace-no-wrap' : '';
  const colorClass = alt
    ? 'bg-gray-300'
    : control
    ? 'bg-gray-400'
    : 'bg-gray-200';
  const controlClass = ''; // control ? 'sticky left-0' : '';
  return (
    <div
      ref={el => {
        if (!cellRef.current) {
          cellRef.current = el;
          if (!position) {
            const startPosition = el?.getBoundingClientRect();
            !!onSize && onSize(columnIndex, startPosition?.width || 0);
            setPosition({ x: 0, y: 0, width: 0, height: 0 });
          }
        }
      }}
      className={`millgrid-body-cell ${className} ${controlClass} ${sizeClass} ${truncClass} ${colorClass} mx-1 p-0 text-center`}
    >
      {value}
    </div>
  );
};

export default BodyCell;
