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
    opacity: 1;
    margin-top: 0.25rem;
    margin-left: -0.18rem;
  }
`;

interface IRadioButton extends Classy {
  title: string;
  color?: Color;
  bgColor?: Color;
}

export const RadioButton: React.FunctionComponent<IRadioButton> = ({
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
        className={`bg-white border rounded-full text-${useColor}-500 border-${useColor}-500 w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 cursor-pointer focus-within:bg-${useColor}-400`}
      >
        <input type="radio" {...props} className="opacity-0 absolute" />
        <CheckedSvg
          width="6rem"
          height="2rem"
          className={` fill-current rounded-full opacity-0 text-${useColor}-500 focus-within:border${useColor}-800 cursor-pointer" viewBox="0 0 28 28`}
        >
          <path d="M 14 8.167969 C 10.78125 8.167969 8.167969 10.78125 8.167969 14 C 8.167969 17.21875 10.78125 19.832031 14 19.832031 C 17.21875 19.832031 19.832031 17.21875 19.832031 14 C 19.832031 10.78125 17.21875 8.167969 14 8.167969 Z M 14 2.332031 C 7.554688 2.332031 2.332031 7.554688 2.332031 14 C 2.332031 20.445312 7.554688 25.667969 14 25.667969 C 20.445312 25.667969 25.667969 20.445312 25.667969 14 C 25.667969 7.554688 20.445312 2.332031 14 2.332031 Z M 14 23.332031 C 8.84375 23.332031 4.667969 19.15625 4.667969 14 C 4.667969 8.84375 8.84375 4.667969 14 4.667969 C 19.15625 4.667969 23.332031 8.84375 23.332031 14 C 23.332031 19.15625 19.15625 23.332031 14 23.332031 Z M 14 23.332031 " />
        </CheckedSvg>
      </div>
      <div className="select-none text-lg font-medium text-gray-800">
        {title}
      </div>
    </FocusLabel>
  );
};

export default RadioButton;
