import * as React from 'react';
import * as PropTypes from 'prop-types';
import 'tailwindcss';
import { Classy } from './Classy.model';
import { ALL_COLORS, Color } from './Color.model';

export interface ISelectInput extends Classy {
  title?: string;
  color?: Color;
  bgColor?: Color;
}

/***
 * Tailwind Select Input
 * @param title - optional string with text contents of the label
 * @param color - optional string that matches type Color for the foreground color
 * @param bgColor - optional string that matches type Color for the background color
 * @param className - optional string
 * @param children - one or more SelectOption items
 * @param props - additional select element props (name, disabled, etc)
 * @constructor
 */
export const SelectInput: React.FunctionComponent<ISelectInput> = ({
  title = '',
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
        <select
          {...props}
          className={`absolute left-0 w-full z-30 bg-transparent font-medium text-lg text-gray-800 border rounded border-${useColor}-500 appearance-none h-full px-3 pt-5 pb-1 focus:outline-none focus:shadow-outline`}
        >
          {children}
        </select>
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

SelectInput.propTypes = {
  title: PropTypes.string,
  color: PropTypes.oneOf<Color>(ALL_COLORS),
  bgColor: PropTypes.oneOf<Color>(ALL_COLORS),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string
};

export default SelectInput;
