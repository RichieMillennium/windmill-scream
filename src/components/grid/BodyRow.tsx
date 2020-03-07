import * as React from 'react';
import {
  BodyCell,
  CellBlock,
  GridColumnModel,
  FixedPosition,
  OnSizeBlockModel
} from './';

interface BodyRowModel {
  dataItem: any;
  altRow?: boolean;
  columns: GridColumnModel[];
  gridRef: React.MutableRefObject<HTMLElement | null>;
  onSize: OnSizeBlockModel;
  className?: string;
}

export const BodyRow: React.FunctionComponent<BodyRowModel> = ({
  dataItem,
  altRow = false,
  columns,
  gridRef,
  onSize,
  className = ''
}) => {
  const renderCell = React.useCallback(
    (fixedPosition?: FixedPosition) => (
      column: GridColumnModel,
      index: number
    ) => {
      const value = column.lens(dataItem);
      return (
        <BodyCell
          key={column.field}
          width={column.width}
          control={column.control}
          value={value}
          alt={altRow && !column.control}
          truncate={column.truncate}
          columnIndex={index}
          // gridRef={gridRef}
          onSize={onSize(fixedPosition)}
        />
      );
    },
    [altRow, dataItem, gridRef, onSize]
  );

  const renderBlock = React.useCallback(
    (fixedPosition?: FixedPosition) => {
      const blockColumns = columns.filter(column =>
        !!fixedPosition ? column.fixed === fixedPosition : !column.fixed
      );
      const blockWidth: number = blockColumns.reduce((sum: number, column) => {
        return sum + column.width;
      }, 0);

      if (!blockColumns.length) {
        return <div />;
      }

      const blockClass = altRow ? 'bg-gray-200' : 'bg-gray-100';

      return (
        <CellBlock
          className={blockClass}
          fixed={fixedPosition}
          width={!!fixedPosition ? blockWidth : undefined}
        >
          {blockColumns.map(renderCell(fixedPosition))}
        </CellBlock>
      );
    },
    [altRow, columns, renderCell]
  );

  return React.useMemo(
    () => (
      <div className={`millgrid-body-row ${className} p-1 flex flex-row`}>
        {renderBlock('left')}
        {renderBlock()}
        {renderBlock('right')}
      </div>
    ),
    [className, renderBlock]
  );
};
