/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import { Popover, Transition } from '@headlessui/react'
import UnstyledLink from '@/components/links/UnstyledLink'
import {
  MenuIcon,
  XIcon,
} from '@heroicons/react/outline'
import { Fragment, useState, useEffect } from 'react'


const solutions = [
  {
    name: 'Blog',
    href: '/blog'
  },
  {
    name: 'Projects',
    href: '#projects'
  },
  {
    name: 'Languages & Tools',
    href: '#technologies'
  },
  {
    name: "Repositories",
    href: "https://github.com/hvnejs"
  }
]

export default function Header() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 30) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
    <Popover className="border-t-8 border-indigo-800 relative bg-transparent">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-8">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <UnstyledLink href="/">
              <span className="sr-only">HeaveNejs</span>
              <img
                className="h-12 transition ease-in-out hover:scale-105 duration-200"
                src="images/logotext.png"
                alt=""
              />
            </UnstyledLink>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-zinc-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-zinc-700">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
          {solutions.map((item) => (
            <UnstyledLink href={item.href} className="text-base font-medium text-gray-200 duration-200 hover:text-indigo-800">
              {item.name}
            </UnstyledLink>
          ))}
          </Popover.Group>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <UnstyledLink
              href="/contact"
              className="ml-8 whitespace-nowrap inline-flex duration-200 hover:shadow-indigo-900 hover:shadow-lg items-center justify-center px-5 py-2 rounded-full shadow-full text-base font-medium text-gray-100 bg-gray-700 hover:bg-indigo-800"
            >
              Ask Me About Anyting
            </UnstyledLink>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black bg-zinc-800 ring-opacity-5 bg-zinc-800 divide-y-2 divide-zinc-800">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="/images/logotext.png"
                    alt="HeaveNejs"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-zinc-700 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-zinc-700">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {solutions.map((item) => (
                    <UnstyledLink
                      key={item.name}
                      href={item.href}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-zinc-900"
                    >
                      <span className="ml-3 text-base font-medium text-gray-300">{item.name}</span>
                    </UnstyledLink>
                  ))}
                    <UnstyledLink
                      key="Contact"
                      href="/contact"
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-zinc-900"
                    >
                      <span className="ml-3 text-base font-medium text-gray-300">Contact</span>
                    </UnstyledLink>
                </nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
    {showButton && (
            <div className='right-6 bottom-4 z-50 fixed items-center md:flex md:space-x-2'>
            <button onClick={scrollToTop}  className='rounded-full bg-zinc-800 p-3 hover:bg-zinc-700 duration-150 cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5"><path d="M5 15l7-7 7 7"></path></svg>
            </button>
            </div>
    )}
</> 
  )
}
