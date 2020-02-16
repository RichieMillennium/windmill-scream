import * as React from 'react';
import * as PropTypes from 'prop-types';

import { Classy } from './Classy.model';

/***
 * Children of the SelectInput component
 * @param className - optional string
 * @param children - string content
 * @param props - additional option element props (selected, value, etc)
 * @constructor
 */
export const SelectOption: React.FunctionComponent<Classy> = ({
  className,
  children,
  ...props
}) => (
  <option className={`text-lg ${className}`} {...props}>
    {children}
  </option>
);

SelectOption.propTypes = {
  className: PropTypes.string,
  selected: PropTypes.bool,
  value: PropTypes.string
};

export default SelectOption;
