import * as React from 'react';
import 'tailwindcss';
import { Classy } from './Classy.model';
import styled from '@emotion/styled';
import { Color } from './Color.model';

const FocusLabel = styled.label`
  :focus-within {
    outline: 4px solid highlight;
  }
`;

const CheckedSvg = styled.svg`
  input:checked + & {
    display: block;
  }
`;

export interface ICheckbox extends Classy {
  title: string;
  color?: Color;
  bgColor?: Color;
}

export const Checkbox: React.FunctionComponent<ICheckbox> = ({
  title,
  color,
  bgColor,
  className = '',
  ...props
}) => {
  const useColor: Color = color || 'primary';
  return (
    <FocusLabel className={`${className} flex justify-start items-center`}>
      <div
        className={`bg-white border rounded text-${useColor}-500 border-${useColor}-500 w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 cursor-pointer focus-within:border-${useColor}-800`}
      >
        <input
          type="checkbox"
          {...props}
          className="opacity-0 focus-within:opacity-50 cursor-pointer absolute"
        />
        <CheckedSvg
          className={`fill-current hidden w-5 h-5 text-${useColor}-500 cursor-pointer" viewBox="0 0 20 20`}
        >
          <path className="fill-current" d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
        </CheckedSvg>
      </div>
      <div className="select-none text-lg font-medium text-gray-800">
        {title}
      </div>
    </FocusLabel>
  );
};

export default Checkbox;
