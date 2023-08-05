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

const contacts = [
    {
        name: "Instagram",
        href: "https://instagram.com/heaven.ejs?utm_source=halil.one"
    },
    {
        name: "Twitter",
        href: "https://twitter.com/HeaveNejs?utm_source=halil.one"
    },
    {
        name: "Github",
        href: "https://github.com/hvnejs?utm_source=halil.one"
    },
    {
        name: "Email",
        href: "mailto:contact@halil.one"
    },
]
export default function Contact() {  
  return (
    <Layout>
      <Seo templateTitle='Contact' />
      <Header />
      <main>
    <section >
        <div className='mt-12 layout flex flex-col items-center justify-center text-center'>
            <h1>My <span className='mb-12 bg-gradient-to-r from-indigo-400 to-indigo-500 text-transparent bg-clip-text'>Social Media</span> Accounts</h1>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
                {contacts.map((item) => (
                <a className='bg-zinc-800 py-4 px-5 rounded-md hover:bg-indigo-900 duration-300' target="_blank" href={item.href} rel="noreferrer">
                <h3>{item.name}</h3>
                </a>
                ))}
            </div>
        </div>
    </section>
      </main>
    </Layout>
  );
}
