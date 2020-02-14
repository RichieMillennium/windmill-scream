import * as React from 'react';
import 'tailwindcss';
import { Color } from './common.model';
import { Classy } from './Classy.model';
import styled from '@emotion/styled';

export const SelectOption: React.FunctionComponent<Classy> = ({
  className,
  children,
  ...props
}) => (
  <option className={`text-lg ${className}`} {...props}>
    {children}
  </option>
);

const FocusSelect = styled.select`
  :focus {
    outline: 4px solid highlight;
  }
`;

interface ISelectInput extends Classy {
  title: string;
  color?: Color;
  bgColor?: Color;
}

export const SelectInput: React.FunctionComponent<ISelectInput> = ({
  title,
  color,
  bgColor,
  className = '',
  children,
  ...props
}) => {
  const useColor: Color = color || 'primary';
  const useBgColor: Color = bgColor || 'transparent';
  const bgClass =
    useBgColor === useColor ? `bg-${useBgColor}-100` : `bg-${useBgColor}-200`;
  return (
    <div className={`${className} rounded ${bgClass} mb-4 relative`}>
      <label
        className={`z-20 pt-4 pl-3 w-full leading-tight text-xs text-${useColor}-500 mt-2 cursor-text`}
      >
        {title}
        <FocusSelect
          {...props}
          className={`absolute left-0 w-full z-30 bg-transparent font-medium text-lg text-gray-800 border rounded border-${useColor}-500 appearance-none h-full px-3 pt-5 pb-1`}
        >
          {children}
        </FocusSelect>
        <div
          className={`absolute right-0 -mt-2 pointer-events-none absolute pin-y pin-r flex items-center px-2 text-${useColor}-500`}
        >
          <svg
            className="h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              className="fill-current"
              d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
            />
          </svg>
        </div>
      </label>
    </div>
  );
};
