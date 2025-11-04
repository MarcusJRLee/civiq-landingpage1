import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-slate-50/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold text-brand-purple hover:text-brand-dark transition-colors">
            CivIQ
          </a>
        </div>
      </div>
    </header>
  );
};
