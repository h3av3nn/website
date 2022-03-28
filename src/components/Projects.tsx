/* eslint-disable react/jsx-key */
import * as React from 'react';

const projects = [
    {
    name: "Nuxonic",
    description: "A community for developers to socialize and help each other.",
    href: "https://nuxonic.com?utm_source=halil.one"
    },
    {
    name: "Halil.one",
    description: "My personal website where I share my projects",
    href: "https://halil.one/"
    },
    {
    name: "Xuply (not available)",
    description: "Website where developers share their projects as open source.",
    href: "#"  
    },
    {
    name: "Node Package (fivemhelper)",
    description: "A useful statistics and steam hex conversion module for Fivem servers.",
    href: "https://www.npmjs.com/package/fivemhelper?utm_source=halil.one"  
    }
]

export default function Projects() {

    return (  
<section id="projects">
<div className='layout flex max-w-4xl mb-32 flex-col  justify-center'>
<div className="container">
    <h2 className='text-gray-300 mb-8'>PROJECTS</h2>
    <div className="mt-4 grid gap-4 md:grid-cols-2">
    {projects.map((item) => (
    <a href={item.href} className='rounded-lg p-4 hover:bg-zinc-800 duration-150' target="_blank" rel="noreferrer">
    <h3 className='text-gray-400'>{item.name}</h3>
    <p className='text-zinc-500'>{item.description}</p>
    </a>
))}
</div>
</div>
</div>
</section>
    );
}