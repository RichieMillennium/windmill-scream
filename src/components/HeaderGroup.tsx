import * as React from 'react';

export interface IHeaderGroup {
  floatRight?: boolean;
}

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

export default HeaderGroup;
