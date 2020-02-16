export const ALL_WIDTHS = [
  'full',
  '1/2',
  '1/3',
  '2/3',
  '1/4',
  '3/4',
  '1/5',
  '2/5',
  '3/5',
  '4/5',
  '1/6',
  '5/6',
  '2/12',
  '3/12',
  '4/12',
  '5/12',
  '6/12',
  '7/12',
  '8/12',
  '9/12',
  '10/12',
  '11/12'
  // number
] as const;

export type StringWidth = typeof ALL_WIDTHS[number];

export type Width = StringWidth | number;

export default Width;
