import * as React from 'react';

interface IHeaderGroup {
  floatRight?: boolean;
}

export const HeaderGroup: React.FunctionComponent<IHeaderGroup> = ({
  floatRight = false,
  children,
  ...props
}) => {
  const marginClasses = floatRight ? 'md:ml-auto' : 'md:mr-4 lg:mr-8';
  return (
    <ul
      {...props}
      className={`flex flex-col mt-4 -mx-4 pt-4 border-t md:flex-row md:items-center md:mx-0 md:mt-0 md:border-0 md:pt-0 ${marginClasses}`}
    >
      {children}
    </ul>
  );
};

export const HeaderItem: React.FunctionComponent = ({ children, ...props }) => (
  <li {...props}>{children}</li>
);

interface IHeader {
  title: any;
}

export const Header: React.FunctionComponent<IHeader> = ({
  title,
  children
}) => {
  return (
    <nav className="bg-primary-100 shadow" role="navigation">
      <div className="container mx-auto p-4 flex flex-wrap items-center md:flex-no-wrap">
        <div className="mr-4 md:mr-8">
          <a
            href="#"
            rel="home"
            className="text-primary-800 hover:text-primary-500"
          >
            {title}
          </a>
        </div>
        <div className="ml-auto md:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded"
            type="button"
          >
            <svg
              className="h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full md:w-auto md:flex-grow md:flex md:items-center">
          {children}
        </div>
      </div>
    </nav>
  );
};
