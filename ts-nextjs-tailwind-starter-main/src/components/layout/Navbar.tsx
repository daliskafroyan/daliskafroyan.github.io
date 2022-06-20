import * as React from 'react';

const links = [
  { href: '/', label: 'Route 1' },
  { href: '/', label: 'Route 2' },
];

export default function Navbar() {
  return (
    <nav className='sticky top-0 z-20 bg-white bg-opacity-30 backdrop-blur-lg backdrop-filter'>
      <div className='mx-auto max-w-5xl px-4'>
        <div className='flex h-16 items-center justify-between'>
          <span className='text-2xl font-semibold text-gray-900'>Logo</span>
          <div className='flex space-x-4 text-gray-900'>
            <a href='#'>Dashboard</a>
            <a href='#'>About</a>
            <a href='#'>Projects</a>
            <a href='#'>Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
