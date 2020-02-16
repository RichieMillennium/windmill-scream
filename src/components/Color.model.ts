export const ALL_COLORS = [
  'gray',
  'blue',
  'teal',
  'green',
  'yellow',
  'orange',
  'red',
  'pink',
  'indigo',
  'purple',
  'primary',
  'secondary',
  'neutral',
  'transparent'
] as const;

export type Color = typeof ALL_COLORS[number];

export default Color;
