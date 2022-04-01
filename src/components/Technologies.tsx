/* eslint-disable react/jsx-key */
import * as React from 'react';

const projects = [
    {
    name: "Javascript",
    icon: "devicon-javascript-plain"
    },
    {
    name: "Vue.js",
    icon: "devicon-vuejs-plain"
    },
    {
    name: "Node.js",
    icon: "devicon-nodejs-plain"
    },
    {
    name: "React.js",
    icon: "devicon-react-original" 
    },
    {
    name: "Tailwind",
    icon: "devicon-tailwindcss-plain"    
    },
    {
    name: "Python",
    icon: "devicon-python-plain"
    },
    {
    name: "Electron",
    icon: "devicon-electron-original"
    },
    {
    name: "Mongodb",
    icon: "devicon-mongodb-plain"
    },
    {
    name: "Mysql",
    icon: "devicon-mysql-plain"
    },
    {
    name: "Next.js",
    icon: "devicon-nextjs-plain"
    },
    {
    name: "HTML5",
    icon: "devicon-html5-plain"
    },
    {
    name: "Wordpress",
    icon: "devicon-wordpress-plain"
    },
    {
    name: "Sass",
    icon: "devicon-sass-plain"
    },
    {
    name: "Typescript",
    icon: "devicon-typescript-plain"
    },
    {
    name: "Firebase",
    icon: "devicon-firebase-plain"
    }
]

export default function Technologies() {

    return (  
<section id="technologies">
    <div className='layout flex max-w-4xl mb-32 flex-col  justify-center'>
    <div className="container">
    <h2 className='text-gray-300 mb-8'>TECHNOLOGIES I USE</h2>
    <div className="mt-4 grid gap-4 md:grid-cols-5">
    {projects.map((item) => (
    <a className='items-center justify-between flex space-x-2 rounded-lg py-4 px-4 hover:bg-zinc-800 duration-150 select-none' target="_blank" rel="noreferrer">
    <h4 className='text-gray-400'>{item.name}</h4>
    <i className={`text-3xl ${item.icon} colored`}></i>
    </a>
))}
</div>
</div>
</div>
</section>
    );
}
