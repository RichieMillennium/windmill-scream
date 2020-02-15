import * as React from 'react';

import { Classy } from './Classy.model';

export const SelectOption: React.FunctionComponent<Classy> = ({
  className,
  children,
  ...props
}) => (
  <option className={`text-lg ${className}`} {...props}>
    {children}
  </option>
);

export default SelectOption;
