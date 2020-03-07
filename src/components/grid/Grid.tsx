import * as React from 'react';

import { Color } from '../Color.model';
import { GridHeader } from './GridHeader';
import {
  BodyRow,
  GridBody,
  HeadRow,
  GridColumnModel,
  OnSizeBlockModel,
  ColumnMapKey,
  findColumnMapKey,
  FixedPosition,
  calculateTotalWidth,
  calculateLeftScroll,
  calculateTopScroll,
  getInitialRectangle,
  useScrollListener,
  ScrollPosition
} from './index';

export interface GridModel {
  idField: string;
  width?: number;
  color?: Color;
  items: any[];
  columns: GridColumnModel[];
  className?: string;
  bodyClassName?: string;
}

export const Grid: React.FunctionComponent<GridModel> = ({
  idField,
  width,
  color = 'primary',
  items,
  columns,
  className = '',
  bodyClassName = ''
}) => {
  const [position, setPosition] = React.useState<ScrollPosition | null>(null);
  const [columnSizes, setColumnSizes] = React.useState<
    Map<ColumnMapKey, number>
  >(new Map());
  const initialPosition = React.useRef<ScrollPosition | null>(null);
  const gridRef = React.useRef<HTMLElement | null>(null);
  const bodyRef = React.useRef<HTMLElement | null>(null);
  useScrollListener(
    ({ currentPosition }) => {
      if (currentPosition.x !== position?.x) {
        setPosition(currentPosition);
      }
    },
    gridRef.current,
    bodyRef,
    [position],
    100
  );

  const handleSizing: OnSizeBlockModel = (blockPosition: FixedPosition) => (
    columnIndex,
    columnWidth
  ) => {
    const sizeKey = findColumnMapKey(blockPosition, columnIndex, columnSizes);
    if (!sizeKey) {
      setColumnSizes(previousSizes => {
        previousSizes.set({ blockPosition, columnIndex }, columnWidth);
        return previousSizes;
      });
    }
  };

  const renderRow = (item: any, index: number) => {
    const alt = index % 2 === 1;
    return (
      <BodyRow
        key={item[idField]}
        dataItem={item}
        altRow={alt}
        columns={columns}
        gridRef={gridRef}
        onSize={handleSizing}
      />
    );
  };

  const topOffset: number = (initialPosition.current?.y || 0) + 8;
  const totalWidth = calculateTotalWidth(columns);
  const top = calculateTopScroll(initialPosition.current, topOffset);
  const left = calculateLeftScroll(initialPosition.current, position);
  const bodyStyle: React.CSSProperties = { top: topOffset };
  const colorClass = `bg-${color}-100`;
  return (
    <div
      ref={el => {
        gridRef.current = el;
        if (!position) {
          const rect = el?.getBoundingClientRect();
          if (rect?.x || rect?.y) {
            initialPosition.current = getInitialRectangle(el);
          }
        }
      }}
      style={{ width }}
      className={`millgrid ${className} ${colorClass} container mx-auto overflow-x-auto m-1`}
    >
      <GridHeader
        top={initialPosition.current?.y}
        left={initialPosition.current?.x}
        className={`mg-${top}-${left}`}
      >
        <HeadRow
          top={top}
          left={left}
          columns={columns}
          columnSizes={columnSizes}
          initialPosition={initialPosition.current}
        />
      </GridHeader>
      <div
        ref={el => {
          bodyRef.current = el;
          if (!position) {
            setPosition(getInitialRectangle(el));
          }
        }}
        style={{ width: totalWidth }}
      >
        <GridBody style={bodyStyle} className={`${bodyClassName}`}>
          {items.map(renderRow)}
        </GridBody>
      </div>
    </div>
  );
};
