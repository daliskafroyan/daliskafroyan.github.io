import * as React from 'react';
import { ImGithub, ImLinkedin, ImTwitter } from 'react-icons/im';

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

      <main className='space-y-16 md:space-y-44'>
        <div className='layout'>
          <div className='!mt-4 flex flex-col items-center justify-center space-y-4 sm:mt-0 sm:flex-row sm:space-x-16 md:!mt-44'>
            <div className='align-center flex flex-col justify-center'>
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
                <h1 className='md:text-[2.45rem]'>Hi! I&apos;m Royan</h1>
                <h1 className='md:text-[2.45rem]'>A Frontend Engineer</h1>
                <h1 className='md:text-[2.45rem]'>That cares about</h1>
                <h1 className='md:text-[2.45rem]'>
                  <span className='signature-gradient animate-text bg-clip-text text-transparent'>
                    Productivity{' '}
                  </span>
                  and
                </h1>
                <h1 className='md:text-[2.45rem]'>
                  <span className='signature-gradient animate-text bg-clip-text text-transparent'>
                    Efficiency
                  </span>
                </h1>
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
            <div className='absolute top-5 left-5 z-0 h-[60rem] w-10/12 justify-center bg-indigo-100 md:h-52' />
          </div>
          <div className='relative z-10'>
            <h2>Featured Post</h2>
            <p>Some of my documentations that worth to read</p>
          </div>
          <div className='flex flex-col items-center justify-center gap-6 pt-6 md:flex-row'>
            <div className='relative h-[19rem] w-72 bg-white bg-opacity-30 p-3 backdrop-blur-sm backdrop-filter'>
              <div className='absolute p-3'>
                <div className='flex h-64 flex-col justify-between pr-3'>
                  <div>
                    <h3 className='signature-gradient bg-clip-text pb-4 text-[2rem] leading-7 text-transparent'>
                      lorem ipsum dolor
                    </h3>
                    <div className='flex justify-between'>
                      <p className='text-sm font-bold text-gray-500'>
                        11 min read
                      </p>
                      <p className='text-sm font-bold text-gray-500'>
                        Sep 21, 2021
                      </p>
                    </div>
                  </div>
                  <p>
                    lorem ipsum dolor could easily said, the best thing you
                    learn in TS
                  </p>
                </div>
              </div>
            </div>
            <div className='relative h-[19rem] w-72 bg-white bg-opacity-30 p-3 backdrop-blur-sm backdrop-filter'>
              <div className='absolute p-3'>
                <div className='flex h-64 flex-col justify-between pr-3'>
                  <div>
                    <h3 className='signature-gradient bg-clip-text pb-4 text-[2rem] leading-7 text-transparent'>
                      lorem ipsum dolor
                    </h3>
                    <div className='flex justify-between'>
                      <p className='text-sm font-bold text-gray-500'>
                        11 min read
                      </p>
                      <p className='text-sm font-bold text-gray-500'>
                        Sep 21, 2021
                      </p>
                    </div>
                  </div>
                  <p>
                    lorem ipsum dolor could easily said, the best thing you
                    learn in TS
                  </p>
                </div>
              </div>
            </div>
            <div className='relative h-[19rem] w-72 bg-white bg-opacity-30 p-3 backdrop-blur-sm backdrop-filter'>
              <div className='absolute p-3'>
                <div className='flex h-64 flex-col justify-between pr-3'>
                  <div>
                    <h3 className='signature-gradient bg-clip-text pb-4 text-[2rem] leading-7 text-transparent'>
                      lorem ipsum dolor
                    </h3>
                    <div className='flex justify-between'>
                      <p className='text-sm font-bold text-gray-500'>
                        11 min read
                      </p>
                      <p className='text-sm font-bold text-gray-500'>
                        Sep 21, 2021
                      </p>
                    </div>
                  </div>
                  <p>
                    lorem ipsum dolor could easily said, the best thing you
                    learn in TS
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='flex justify-end pt-6'>
            <button>
              <p>See more &gt;</p>
            </button>
          </div>
        </section>
        <section>
          <div className='relative'>
            <div className='absolute z-0 h-52 w-full -skew-y-12 justify-center bg-indigo-100' />
          </div>
          <div className='layout'>
            <div className='relative z-10 text-right'>
              <h2>Featured Works</h2>
              <p>Some of my notable projects</p>
            </div>
            <div className='flex flex-col items-center justify-center gap-6 pt-6 md:flex-row'>
              <div className='relative h-[19rem] w-72 bg-white bg-opacity-30 p-3 backdrop-blur-sm backdrop-filter'>
                <div className='absolute p-3'>
                  <div className='flex h-64 flex-col justify-between pr-3'>
                    <div>
                      <h3 className='signature-gradient bg-clip-text pb-4 text-[2rem] leading-7 text-transparent'>
                        lorem ipsum dolor
                      </h3>
                      <div className='flex justify-between'>
                        <p className='text-sm font-bold text-gray-500'>
                          11 min read
                        </p>
                        <p className='text-sm font-bold text-gray-500'>
                          Sep 21, 2021
                        </p>
                      </div>
                    </div>
                    <p>
                      lorem ipsum dolor could easily said, the best thing you
                      learn in TS
                    </p>
                  </div>
                </div>
              </div>
              <div className='relative h-[19rem] w-72 bg-white bg-opacity-30 p-3 backdrop-blur-sm backdrop-filter'>
                <div className='absolute p-3'>
                  <div className='flex h-64 flex-col justify-between pr-3'>
                    <div>
                      <h3 className='signature-gradient bg-clip-text pb-4 text-[2rem] leading-7 text-transparent'>
                        lorem ipsum dolor
                      </h3>
                      <div className='flex justify-between'>
                        <p className='text-sm font-bold text-gray-500'>
                          11 min read
                        </p>
                        <p className='text-sm font-bold text-gray-500'>
                          Sep 21, 2021
                        </p>
                      </div>
                    </div>
                    <p>
                      lorem ipsum dolor could easily said, the best thing you
                      learn in TS
                    </p>
                  </div>
                </div>
              </div>
              <div className='relative h-[19rem] w-72 bg-white bg-opacity-30 p-3 backdrop-blur-sm backdrop-filter'>
                <div className='absolute p-3'>
                  <div className='flex h-64 flex-col justify-between pr-3'>
                    <div>
                      <h3 className='signature-gradient bg-clip-text pb-4 text-[2rem] leading-7 text-transparent'>
                        lorem ipsum dolor
                      </h3>
                      <div className='flex justify-between'>
                        <p className='text-sm font-bold text-gray-500'>
                          11 min read
                        </p>
                        <p className='text-sm font-bold text-gray-500'>
                          Sep 21, 2021
                        </p>
                      </div>
                    </div>
                    <p>
                      lorem ipsum dolor could easily said, the best thing you
                      learn in TS
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex justify-start pt-6'>
              <button>
                <p>See more &gt;</p>
              </button>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className='flex flex-row items-center justify-center gap-9 py-9'>
          <ImTwitter fontSize={24} />
          <ImLinkedin fontSize={24} />
          <ImGithub fontSize={24} />
        </div>
      </footer>
    </Layout>
  );
}
