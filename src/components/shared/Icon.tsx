import React from 'react';
import { ICON_PATHS, IconName } from './icons-data';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName | string;
  size?: number | string;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({
  name,
  size,
  className = '',
  style,
  ...rest
}) => {
  const path = ICON_PATHS[name];
  const dimensionProps = size
    ? { width: size, height: size }
    : { width: '1em', height: '1em' };

  if (!path) {
    if (import.meta.env.DEV) {
      console.warn(`Icon "${name}" not found in ICON_PATHS`);
    }
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        fill="currentColor"
        className={`inline-block shrink-0 align-middle ${className}`}
        aria-hidden="true"
        data-icon={name}
        style={{ ...dimensionProps, ...style }}
        {...rest}
      />
    );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      fill="currentColor"
      className={`inline-block shrink-0 align-middle ${className}`}
      aria-hidden="true"
      data-icon={name}
      style={{ ...dimensionProps, ...style }}
      {...rest}
    >
      <path d={path} />
    </svg>
  );
};

export default Icon;
