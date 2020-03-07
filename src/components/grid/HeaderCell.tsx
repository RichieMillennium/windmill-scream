import * as React from 'react';

export interface HeaderCellModel {
  width: number;
  title: string;
  style?: React.CSSProperties;
  className?: string;
}

export const HeaderCell: React.FunctionComponent<HeaderCellModel> = ({
  width,
  title,
  style,
  className = ''
}) => {
  const sizeClass = `w-${width}`;
  return (
    <div
      style={style}
      className={`millgrid-header-cell ${className} ${sizeClass} overflow-hidden whitespace-no-wrap mx-1 p-0 bg-primary-500 text-center`}
    >
      {title}
    </div>
  );
};

export default HeaderCell;
