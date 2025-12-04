import React, { useState } from 'react';
import { NavItem } from '../types';

const NAV_ITEMS: NavItem[] = [
  { label: 'Giới thiệu', href: '#gioi-thieu' },
  { label: 'Nội dung', href: '#noi-dung' },
  { label: 'Giảng viên', href: '#giang-vien' },
  { label: 'Học phí', href: '#hoc-phi' },
  { label: 'Liên hệ', href: '#lien-he' },
];

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex justify-center bg-background-dark/80 backdrop-blur-md border-b border-solid border-b-border-dark w-full" role="banner">
      <div className="flex items-center justify-between whitespace-nowrap px-4 sm:px-10 py-3 w-full max-w-[1280px]">
        {/* Logo */}
        <a href="#" className="flex items-center gap-4 text-white hover:opacity-90 transition-opacity" aria-label="ProInvestor Home">
          <div className="size-8 text-primary">
            <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l1.5-1.5L10 14l4-4 1.5 1.5L10 17l-3.5-3.5z"></path>
            </svg>
          </div>
          <h2 className="text-white text-xl font-bold leading-tight tracking-[-0.015em]">ProInvestor</h2>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
          <nav aria-label="Main Navigation">
            <div className="flex items-center gap-9">
              {NAV_ITEMS.map((item) => (
                <a 
                  key={item.label}
                  href={item.href} 
                  className="text-white text-sm font-medium leading-normal hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
          <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-background-dark text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20">
            <span className="truncate">Đăng Ký Ngay</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white p-2 hover:bg-surface-dark rounded-lg transition-colors"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            <span className="material-symbols-outlined" aria-hidden="true">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMenuOpen && (
        <nav className="absolute top-full left-0 w-full bg-background-dark border-b border-border-dark md:hidden animate-fade-in p-4 flex flex-col gap-4 shadow-2xl" aria-label="Mobile Navigation">
           {NAV_ITEMS.map((item) => (
              <a 
                key={item.label}
                href={item.href} 
                onClick={() => setIsMenuOpen(false)}
                className="text-white text-base font-medium py-2 border-b border-border-dark/50 last:border-0 hover:text-primary"
              >
                {item.label}
              </a>
            ))}
            <button className="w-full mt-2 flex cursor-pointer items-center justify-center rounded-lg h-12 px-4 bg-primary text-background-dark text-base font-bold hover:bg-primary/90">
              Đăng Ký Ngay
            </button>
        </nav>
      )}
    </header>
  );
};