import {
  ScrollPosition,
  ColumnMapKey,
  FixedPosition,
  GridColumnModel
} from './';

type PossiblePosition = ScrollPosition | DOMRect | null | undefined;
type PossibleElement = HTMLElement | null | undefined;
type PositionResolver = (position: PossiblePosition) => number;

const getX: PositionResolver = position => position?.x || 0;
const getY: PositionResolver = position => position?.y || 0;
const getWidth: PositionResolver = position => position?.width || 0;
const getHeight: PositionResolver = position => position?.height || 0;

export const calculateTotalWidth = (columns: GridColumnModel[]): number =>
  columns.reduce((sum: number, column) => {
    return sum + column.width * 4;
  }, 0);

export const calculateTopScroll = (
  initialPosition: PossiblePosition,
  top: number
): number | undefined => {
  return (
    (initialPosition && Math.abs(getY(initialPosition) - top)) || undefined
  );
};

export const calculateLeftScroll = (
  initialPosition: PossiblePosition,
  position: PossiblePosition
): number | undefined => {
  return (
    (initialPosition &&
      position?.x &&
      getX(position) - getX(initialPosition)) ||
    undefined
  );
};

export const getInitialRectangle = (el: PossibleElement): ScrollPosition => {
  const rect = el?.getBoundingClientRect();
  return {
    x: getX(rect),
    y: getY(rect),
    width: getWidth(rect),
    height: getHeight(rect)
  };
};

export const findColumnMapKey = (
  blockPosition: FixedPosition,
  columnIndex: number,
  map: Map<ColumnMapKey, number>
): ColumnMapKey | undefined => {
  return Array.from(map.keys()).find(
    item =>
      item.blockPosition === blockPosition && item.columnIndex === columnIndex
  );
};
