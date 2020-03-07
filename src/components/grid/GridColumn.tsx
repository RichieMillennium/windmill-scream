export type FixedPosition =
  | 'left'
  | 'top-left'
  | 'right'
  | 'top-right'
  | undefined
  | false;

export type ColumnWidth =
  | 8
  | 16
  | 24
  | 32
  | 40
  | 48
  | 56
  | 64
  | 72
  | 80
  | 88
  | 96
  | 104
  | 112
  | 120
  | 128;

export interface GridColumnModel {
  field: string;
  title: string;
  lens: (dataItem: any) => string;
  width: ColumnWidth;
  fixed?: FixedPosition;
  sequence?: number;
  control?: boolean;
  truncate?: boolean;
}
