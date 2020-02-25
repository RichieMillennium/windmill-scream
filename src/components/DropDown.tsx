import * as React from 'react';
import 'tailwindcss';

import { Classy } from './Classy.model';
import { Color } from './Color.model';

const getOptionValue = (el: React.ReactElement) =>
  el.props.value === undefined ? el.props.children : el.props.value;

export const DropDownOption: React.FunctionComponent = props => (
  <option {...props} />
);

export interface IDropDown extends Classy {
  title?: string;
  color?: Color;
  bgColor?: Color;
  children: Array<React.ReactNode>;
}

export const DropDown: React.FunctionComponent<IDropDown> = ({
  title = '',
  color,
  bgColor,
  className,
  children,
  ...props
}) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(props.value || props.defaultValue);
  const currentValue: any = props.value || props.defaultValue;
  React.useEffect(() => {
    if (currentValue !== value) {
      setValue(currentValue);
    }
  }, [currentValue]);
  const toggleOpen = (event: any) => {
    event.target.blur();
    event.target.parentNode.focus();
    setOpen(wasOpen => !wasOpen);
  };
  const handleClose = () => {
    setOpen(false);
    return undefined;
  };
  const handleSelect = (newValue?: string) => () => {
    setValue(newValue);
    setOpen(false);
    const event = new CustomEvent('DropDown change', { detail: newValue });
    props.onChange && props.onChange(event);
    return undefined;
  };

  const selectOptions = React.Children.map(
    children,
    (reactChild: React.ReactElement) =>
      getOptionValue(reactChild) === value
        ? React.cloneElement(reactChild, { 'data-selected': true })
        : React.cloneElement(reactChild, { 'data-selected': false })
  );

  const selectedOption: any = selectOptions
    ? selectOptions.find(
        (item: React.ReactElement) => item.props['data-selected']
      )
    : undefined;
  const selectedValue = selectedOption ? selectedOption.props.children : '';

  const textColorClass =
    selectedOption === undefined ? 'text-gray-500' : 'text-gray-800';
  const useColor: Color = color || 'primary';
  const useBgColor: Color = bgColor || 'transparent';
  const bgClass =
    useBgColor === useColor ? `bg-${useBgColor}-100` : `bg-${useBgColor}-200`;
  const selectBorder = open ? 'rounded-b-none' : '';
  return (
    <div className={`${className} rounded ${bgClass} mb-4 relative`}>
      {open && (
        <button
          className="fixed inset-0 w-full h-full cursor-default"
          onClick={handleClose}
        />
      )}
      <label
        className={`pt-4 pl-3 w-full leading-tight text-xs text-${useColor}-500 mt-2 cursor-text`}
      >
        {title}
        <button
          title={value}
          className={`absolute inset-0 pl-3 pr-4 pt-5 pb-1 text-left truncate w-full font-medium text-lg ${textColorClass} bg-transparent border rounded ${selectBorder} border-${useColor}-500 appearance-none`}
          onClick={toggleOpen}
        >
          {selectedValue || props.placeholder}
        </button>
        <select {...props} className="hidden">
          {selectOptions}
        </select>
        {open && (
          <div
            onClick={event => event.preventDefault()}
            className={`block absolute left-0 mt-6 w-full h-32 overflow-y-scroll rounded rounded-t-none border-t-0 border border-${useColor}-500 bg-white`}
          >
            {!props.required && value !== undefined && (
              <a
                className={`block p-2 cursor-pointer text-sm hover:bg-${color}-500 hover:text-white italic`}
                onClick={handleSelect(undefined)}
              >
                &lt;clear value&gt;
              </a>
            )}
            {React.Children.map(children, (reactChild: React.ReactElement) => (
              <a
                className={`block p-2 cursor-pointer text-sm hover:bg-${color}-500 hover:text-white ${
                  getOptionValue(reactChild) === value ? 'font-bold' : ''
                }`}
                onClick={handleSelect(getOptionValue(reactChild))}
              >
                {reactChild.props.children}
              </a>
            ))}
          </div>
        )}
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

export default DropDown;
