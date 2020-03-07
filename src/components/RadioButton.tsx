import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Classy } from './Classy.model';
import styled from '@emotion/styled';
import { ALL_COLORS, Color } from './Color.model';

const CheckedSvg = styled.svg`
  input:checked + & {
    opacity: 1;
    margin-top: 0.25rem;
    margin-left: -0.18rem;
  }
`;

interface IRadioButton extends Classy {
  title?: string;
  color?: Color;
  bgColor?: Color;
}

/***
 * Tailwind Radio Button
 * @param title - optional string with text contents of the label
 * @param color - optional string that matches type Color for the foreground color
 * @param bgColor - optional string that matches type Color for the background color
 * @param className - optional string
 * @param props - additional input element props (checked, disabled, name, value, etc)
 * @constructor
 */
export const RadioButton: React.FunctionComponent<IRadioButton> = ({
  title = '',
  color,
  bgColor,
  className = '',
  ...props
}) => {
  const useColor: Color = color || 'primary';
  const bgClass = bgColor ? `bg-${bgColor}-200` : 'bg-white';
  return (
    <label
      className={`${className} flex justify-start items-center rounded focus-within:outline-none focus-within:shadow-outline`}
    >
      <div
        className={`${bgClass} border rounded-full text-${useColor}-500 border-${useColor}-500 w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 cursor-pointer focus-within:bg-${useColor}-400`}
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
    </label>
  );
};

RadioButton.propTypes = {
  title: PropTypes.string,
  color: PropTypes.oneOf<Color>(ALL_COLORS),
  bgColor: PropTypes.oneOf<Color>(ALL_COLORS),
  className: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  value: PropTypes.string
};

export default RadioButton;
