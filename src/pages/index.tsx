/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable unused-imports/no-unused-imports */
/* eslint-disable no-console */
/* eslint-disable react/jsx-key */
import * as React from 'react';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import Projects from '@/components/Projects'
import Seo from '@/components/Seo';
import Tecnologies from '@/components/Technologies'


export default function HomePage() {  
  return (
    <Layout>
      <Seo templateTitle='Home' />
      <Header />
      <main className='-mt-20 '>
        <section>
          <div className='layout flex mt-52 mb-20 max-w-5xl flex-col  justify-center'>
            <div className='lg:flex justify-center'>
              <div className='lg:max-w-[50%]'>
            <h1 className='text-bold text-5xl'>
            <span className='bg-gradient-to-r from-indigo-800 via-indigo-700 to-indigo-600 text-transparent bg-clip-text'>Full-stack</span> web developer
            </h1>
            <p className='mt-2 text text-zinc-500 text-bold'>
            Hello, I'm Halil, people on the internet know me as HeaveNejs. I am a passionate self-taught full stack web developer from Turkey. My passion for software lies in imagining ideas and making them come true with elegant interfaces.            <p className='mt-2 text-sm text-zinc-400'>
            </p>
            </p>
            </div>
            <div>
              <img src="images/logo.png" alt="hvn" className='lg:h-80 lg:ml-20 lg:-mt-16' />
            </div>
            </div>
          </div>
          
        </section>
        <Projects />
        <Tecnologies />
    <Footer />
      </main>
    </Layout>
  );
}
