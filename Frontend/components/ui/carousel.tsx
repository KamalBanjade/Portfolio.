import React, { ReactNode, MouseEventHandler } from 'react';
import classNames from 'classnames';

interface CarouselProps {
  children: ReactNode;
  className?: string;
}

export function Carousel({ children, className, ...props }: CarouselProps) {
  return (
    <div className={classNames('relative overflow-hidden', className)} {...props}>
      {children}
    </div>
  );
}

interface CarouselContentProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function CarouselContent({ children, className, style, ...props }: CarouselContentProps) {
  return (
    <div className={classNames('relative flex transition-transform duration-300 ease-in-out', className)} style={style} {...props}>
      {children}
    </div>
  );
}

interface CarouselItemProps {
  children: ReactNode;
  className?: string;
}

export function CarouselItem({ children, className, ...props }: CarouselItemProps) {
  return (
    <div className={classNames('min-w-full', className)} {...props}>
      {children}
    </div>
  );
}

interface CarouselButtonProps {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

export function CarouselPrevious({ children, onClick, className, ...props }: CarouselButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={classNames('absolute left-0 z-10', className)}
      {...props}
    >
      {children}
    </button>
  );
}

export function CarouselNext({ children, onClick, className, ...props }: CarouselButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={classNames('absolute right-0 z-10', className)}
      {...props}
    >
      {children}
    </button>
  );
}
