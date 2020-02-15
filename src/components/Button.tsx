import * as React from 'react';
import 'tailwindcss';
import { Classy } from './Classy.model';
import styled from '@emotion/styled';
import { Color } from './Color.model';

interface IButton extends Classy {
  color?: Color;
  slim?: boolean;
  transparent?: boolean;
}

const FocusButton = styled.button`
  :focus {
    outline: 4px solid highlight;
  }
`;

/**
 * Tailwind button
 * @param color - optional string
 * @param transparent - optional boolean
 * @param className - if specified, should include hover:bg-COLOR-500 text-COLOR-500 border-COLOR-500
 * @param props
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
    className ||
    `hover:bg-${useColor}-500 text-${useColor}-500 border-${useColor}-500`;
  const bgClasses = transparent ? ' bg-transparent' : ' bg-contrast';
  const sizeClasses = slim ? 'py-0 font-medium' : 'py-2 font-semibold';
  return (
    <FocusButton
      {...props}
      className={`${colorClasses} ${bgClasses} hover:text-contrast text-lg leading-relaxed ${sizeClasses} px-4 border hover:border-transparent rounded mr-2`}
    />
  );
};

export default Button;
