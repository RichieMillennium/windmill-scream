import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Classy } from './Classy.model';
import { Color, ALL_COLORS } from './Color.model';

interface IButton extends Classy {
  color?: Color;
  slim?: boolean;
  transparent?: boolean;
}

/**
 * Tailwind button
 * @param color - optional string that matches type Color
 * @param slim - optional boolean that uses slimmer styles if true
 * @param transparent - optional boolean that uses a transparent background if true
 * @param className - optional string
 * @param props - additional button element props (disabled, name, onClick, etc)
 * @constructor
 */
export const Button: React.FunctionComponent<IButton> = ({
  color,
  slim = false,
  transparent = false,
  className,
  ...props
}) => {
  const useColor: Color = color || 'primary';
  const colorClasses =
    !className?.match(/text-[a-z]+-[0-9]+/) &&
    `hover:bg-${useColor}-500 text-${useColor}-500 border-${useColor}-500`;
  const bgClasses = transparent ? ' bg-transparent' : ' bg-contrast';
  const needsHeight = !className?.match(/(^|\W)h-[0-9a0z]+/);
  const sizeClasses = slim
    ? `py-0 font-medium ${needsHeight ? 'h-full' : ''}`
    : `py-2 font-semibold ${needsHeight ? 'h-auto' : ''}`;
  return (
    <button
      role="button"
      {...props}
      className={`${className} ${colorClasses} ${bgClasses} hover:text-contrast text-lg leading-relaxed ${sizeClasses} px-4 border hover:border-transparent rounded mr-2 focus:outline-none focus:shadow-outline`}
    />
  );
};

Button.propTypes = {
  color: PropTypes.oneOf<Color>(ALL_COLORS),
  slim: PropTypes.bool,
  transparent: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;
