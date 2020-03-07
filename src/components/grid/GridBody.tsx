import * as React from 'react';

export interface GridBodyModel {
  className?: string;
  style?: React.CSSProperties;
  children: Array<React.ReactNode>;
}

export const GridBody: React.FunctionComponent<GridBodyModel> = ({
  className = '',
  style,
  children
}) => {
  return (
    <div style={style} className={`millgrid-body relative ${className}`}>
      {children}
    </div>
  );
};
