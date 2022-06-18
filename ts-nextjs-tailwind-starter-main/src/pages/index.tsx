import * as React from 'react';

import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

import Ava from '~/images/first-avatar.png'
/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main className='space-y-16'>
          <div className="layout">  
            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-x-16">
              <div className="flex flex-col justify-center">
              <NextImage src={Ava} useSkeleton alt='avatar image' width='180' height='245' layout='responsive'/> 
              </div>
              <div className="flex flex-col md:space-y-4">
                <div className="flex flex-col justify-center">
                  <h1>Hi! I&apos;m Royan</h1>
                  <h1>A Frontend Engineer</h1>
                  <h1>That cares about</h1>
                  <h1>Productivity and</h1>
                  <h1>Efficiency</h1>
                </div>
                <div className="flex flex-col justify-center">
                  <p>I&apos;m specialized in building app that favors </p>
                  <p>both user and developer by leveraging</p>
                  <p>right tools to get things done.</p>
                </div>

              </div>
            </div>
          </div>
          <div className='layout'>
            <div className='m-auto'>
            <div className='bg-indigo-500 z-0 absolute w-4/5 h-1/3 justify-center' />

            </div>
            <div className='z-10 relative'>
            <h2>Featured Post</h2>
            <p>Some of my documentations that worth to read</p>

            </div>

          </div>
      </main>
    </Layout>
  );
}
