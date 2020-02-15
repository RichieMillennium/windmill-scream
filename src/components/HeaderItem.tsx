import * as React from 'react';

export const HeaderItem: React.FunctionComponent = ({ children, ...props }) => (
  <li {...props}>{children}</li>
);

export default HeaderItem;
