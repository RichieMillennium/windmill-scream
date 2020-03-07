import { FixedPosition } from './';

export type OnSizeModel = (columnIndex: number, columnWidth: number) => void;
export type OnSizeBlockModel = (blockPosition: FixedPosition) => OnSizeModel;

export interface ColumnMapKey {
  blockPosition: FixedPosition;
  columnIndex: number;
}
