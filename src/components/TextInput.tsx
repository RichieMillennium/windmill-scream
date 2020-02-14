import * as React from 'react';
import 'tailwindcss';
import { Color } from './common.model';
import { Classy } from './Classy.model';
import styled from '@emotion/styled';

const FocusInput = styled.input`
  :focus {
    outline: 4px solid highlight;
  }
`;

interface ITextInput extends Classy {
  title: string;
  color?: Color;
  bgColor?: Color;
}

export const TextInput: React.FunctionComponent<ITextInput> = ({
  title,
  color,
  bgColor,
  className = '',
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
        <FocusInput
          type="text"
          {...props}
          className={`absolute left-0 w-full z-30 bg-transparent font-medium text-lg text-gray-800 border rounded border-${useColor}-500 appearance-none h-full px-3 pt-5 pb-1`}
        />
      </label>
    </div>
  );
};
