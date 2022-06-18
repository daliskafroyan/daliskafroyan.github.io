import * as React from 'react';

import Navbar from './Navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>
  <section className='bg-indigo-50'>
  <Navbar />
  {children}
  </section>
  </>;
}
