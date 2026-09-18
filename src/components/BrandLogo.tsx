import React from 'react';
import { Link } from 'react-router-dom';

export interface BrandLogoProps {
  variant?: 'full' | 'mark' | 'responsive';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  href?: string;
  className?: string;
  priority?: boolean;
  onClick?: (e?: React.MouseEvent) => void;
  altText?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'full',
  size = 'md',
  href = '/',
  className = '',
  priority = false,
  onClick,
  altText = 'Zemprolabs — Technology, Commerce, Beyond'
}) => {
  const markSizes = {
    sm: 'h-8 w-8',
    md: 'h-9 sm:h-10 w-9 sm:w-10',
    lg: 'h-11 sm:h-12 w-11 sm:w-12',
    xl: 'h-14 w-14'
  };

  const wordmarkSizes = {
    sm: 'text-base sm:text-lg',
    md: 'text-lg sm:text-xl',
    lg: 'text-xl sm:text-2xl',
    xl: 'text-2xl sm:text-3xl'
  };

  const taglineSizes = {
    sm: 'text-[9px] sm:text-[10.5px]',
    md: 'text-[9.5px] sm:text-[11.5px]',
    lg: 'text-[10.5px] sm:text-[13px]',
    xl: 'text-[11px] sm:text-[13.5px]'
  };

  const logoImage = (
    <div className={`inline-flex items-center select-none ${className}`}>
      {variant === 'mark' ? (
        <img
          src="/brand/zemprolabs-mark.png"
          alt="Zemprolabs Mark"
          className={`${markSizes[size]} object-contain rounded-md`}
          loading={priority ? 'eager' : 'lazy'}
        />
      ) : (
        <div className="flex items-center gap-2.5 sm:gap-3">
          <img
            src="/brand/zemprolabs-mark.png"
            alt={altText}
            className={`${markSizes[size]} object-contain rounded-md shrink-0`}
            loading={priority ? 'eager' : 'lazy'}
          />
          <div className="flex flex-col justify-center text-left">
            <span
              className={`font-display font-bold text-white tracking-wider ${wordmarkSizes[size]} leading-none`}
            >
              ZEMPROLABS
            </span>
            <span
              className={`font-mono uppercase text-[#94A3B8] font-medium tracking-[0.16em] sm:tracking-[0.19em] ${taglineSizes[size]} mt-1 leading-none`}
            >
              TECHNOLOGY • COMMERCE • BEYOND
            </span>
          </div>
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link
        to={href}
        onClick={onClick}
        className="inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B00] rounded-lg transition-transform hover:opacity-95"
        aria-label={altText}
      >
        {logoImage}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className="inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B00] rounded-lg transition-transform hover:opacity-95 bg-transparent border-0 p-0 text-left"
        aria-label={altText}
      >
        {logoImage}
      </button>
    );
  }

  return logoImage;
};
