import * as React from 'react';

/***
 * Children of the HeaderGroup component
 * @param children - any elements
 * @param props - additional list item element props
 * @constructor
 */
export const HeaderItem: React.FunctionComponent = ({ children, ...props }) => (
  <li {...props}>{children}</li>
);

export default HeaderItem;
