import * as React from 'react';
import * as PropTypes from 'prop-types';

export interface IHeaderGroup {
  floatRight?: boolean;
}

/***
 * Children of the Header component
 * @param floatRight - optional boolean indicating the group floats to the right of the Header
 * @param children - one or more HeaderItem items
 * @param props - addition unordered list element props
 * @constructor
 */
export const HeaderGroup: React.FunctionComponent<IHeaderGroup> = ({
  floatRight = false,
  children,
  ...props
}) => {
  const marginClasses = floatRight ? 'md:ml-auto' : 'md:mr-4 lg:mr-8';
  return (
    <ul
      {...props}
      className={`flex flex-col mt-4 -mx-4 pt-4 border-t md:flex-row md:items-center md:mx-0 md:mt-0 md:border-0 md:pt-0 ${marginClasses}`}
    >
      {children}
    </ul>
  );
};

HeaderGroup.propTypes = {
  floatRight: PropTypes.bool
};

export default HeaderGroup;
