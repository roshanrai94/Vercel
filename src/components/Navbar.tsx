import React from 'react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean | ((prev: boolean) => boolean)) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Journey', href: '#journey' },
    { name: 'Ventures', href: '#ventures' },
    { name: 'Impact', href: '#impact' },
    { name: 'Recognition', href: '#recognition' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50 py-3 bg-stone-950/90 border-b border-amber-800/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-nowrap items-center justify-start md:justify-center gap-2 sm:gap-3 overflow-x-auto scrollbar-none py-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="px-3.5 py-1.5 rounded-xl bg-stone-900/90 hover:bg-amber-500 hover:text-stone-950 text-amber-200 border border-amber-500/30 text-xs sm:text-sm font-bold transition-all shadow-md tracking-wider whitespace-nowrap shrink-0 text-center"
            >
              <span>{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};
