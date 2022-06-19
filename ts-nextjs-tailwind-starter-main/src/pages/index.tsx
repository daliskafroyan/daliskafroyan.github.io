import * as React from 'react';

import Layout from '@/components/layout/Layout';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

import Ava from '~/images/first-avatar.png';
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
        <div className='layout'>
          <div className='flex flex-col justify-center space-y-4 md:flex-row md:space-x-16'>
            <div className='flex flex-col justify-center'>
              <NextImage
                src={Ava}
                useSkeleton
                alt='avatar image'
                width='180'
                height='245'
                layout='responsive'
              />
            </div>
            <div className='flex flex-col md:space-y-4'>
              <div className='flex flex-col justify-center'>
                <h1>Hi! I&apos;m Royan</h1>
                <h1>A Frontend Engineer</h1>
                <h1>That cares about</h1>
                <h1>Productivity and</h1>
                <h1>Efficiency</h1>
              </div>
              <div className='flex flex-col justify-center'>
                <p>I&apos;m specialized in building app that favors </p>
                <p>both user and developer by leveraging</p>
                <p>right tools to get things done.</p>
              </div>
            </div>
          </div>
        </div>
        <section className='layout'>
          <div className='relative'>
            <div className='absolute top-5 left-5 z-0 h-52 w-10/12 justify-center bg-indigo-200' />
          </div>
          <div className='relative z-10'>
            <h2>Featured Post</h2>
            <p>Some of my documentations that worth to read</p>
          </div>
          <div className='flex flex-col'>
            <div className='relative h-72 w-72 bg-white bg-opacity-30 p-3 backdrop-blur-sm backdrop-filter'>
              <div className='absolute p-3'>
                <h3 className='leading-6'>
                  leveraging typescript generic feature
                </h3>
                <div className='flex justify-between'>
                  <p>11 min read</p>
                  <p>September 21, 2021</p>
                </div>
                <div>
                  <p>
                    Generating this type of typescript could easily said, the
                    best thing you learn in TS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
