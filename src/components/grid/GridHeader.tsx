import * as React from 'react';

export interface GridHeaderModel {
  top?: number;
  left?: number;
  className?: string;
}
export const GridHeader: React.FunctionComponent<GridHeaderModel> = ({
  top,
  left,
  className = '',
  children
}) => {
  const positionStyle: React.CSSProperties =
    top || left
      ? { top, left, position: 'absolute' }
      : { top: 'auto', left: 'auto', position: 'absolute' };
  return (
    <div
      style={positionStyle}
      className={`millgrid-header ${className} bg-primary-200 py-1 h-10 container w-full overflow-x-scroll z-10`} /* sticky top-0`} */
    >
      {children}
    </div>
  );
};

export default GridHeader;
