import * as React from 'react';
import {
  HeadCell,
  CellBlock,
  GridColumnModel,
  FixedPosition,
  ColumnMapKey,
  findColumnMapKey,
  ScrollPosition
} from './';

export interface HeaderRowModel {
  columns: GridColumnModel[];
  columnSizes: Map<ColumnMapKey, number>;
  top?: number;
  left?: number;
  initialPosition?: ScrollPosition | null;
  className?: string;
}

export const HeaderRow: React.FunctionComponent<HeaderRowModel> = ({
  columns,
  columnSizes,
  top,
  left,
  initialPosition,
  className = ''
}) => {
  const renderCell = React.useCallback(
    (blockPosition: FixedPosition) => (
      column: GridColumnModel,
      index: number
    ) => {
      const sizeKey = findColumnMapKey(blockPosition, index, columnSizes);
      return (
        <HeadCell
          key={column.field}
          width={column.width}
          style={sizeKey ? { width: columnSizes.get(sizeKey) } : {}}
          title={column.title}
        />
      );
    },
    [columnSizes]
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

      return !!fixedPosition ? (
        <CellBlock
          fixed={fixedPosition}
          width={blockWidth}
          className="bg-primary-200"
        >
          {blockColumns.map(renderCell(fixedPosition))}
        </CellBlock>
      ) : (
        <CellBlock>{blockColumns.map(renderCell(fixedPosition))}</CellBlock>
      );
    },
    [columns, renderCell]
  );

  return React.useMemo(() => {
    const positionStyle: React.CSSProperties =
      top || left
        ? { position: 'absolute', top, left }
        : { position: 'absolute', top: 'auto', left: 'auto' };
    return (
      <div
        style={positionStyle}
        className={`millgrid-header-row ${className} text-contrast px-1 flex flex-row mg-${initialPosition?.x}-${initialPosition?.y}`}
      >
        {renderBlock('left')}
        {renderBlock()}
        {renderBlock('right')}
      </div>
    );
  }, [className, initialPosition, left, top, renderBlock]);
};

export default HeaderRow;
