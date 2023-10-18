import { useState } from 'react'

import Menu from '../icons/Menu.jsx'
import Close from '../icons/Close.jsx'

export default function NavbarMobile() {
  const [isOpen, setIsOpen] = useState(false)

  const changeIsOpen = () => setIsOpen(!isOpen)

  return (
    <>
      <nav className='mb-16 w-full flex items-center justify-between z-50 sm:hidden'>
        <img className='m-0 w-24 h-auto' src='/logo.webp' alt='Logo' />
        <button className='text-white' onClick={changeIsOpen}>
          <Menu />
        </button>
      </nav>
      <div
        className={`z-50 w-1/2 h-full ${
          isOpen ? 'flex' : 'hidden'
        } flex-col items-center justify-center backdrop-blur-lg bg-black/90 gap-2 fixed top-0 right-0`}
      >
        <a href='/'>
          <img
            className='mb-12 w-32'
            src='/logo-white.webp'
            alt='logo navbar'
          />
        </a>
        <a href='#sobre-nosotros' className='text-neutral-500 hover:text-white'>
          SOBRE NOSTROS
        </a>
        <a href='#servicios' className='text-neutral-500 hover:text-white'>
          SERVICIOS
        </a>
        <a href='#contacto' className='text-neutral-500 hover:text-white'>
          CONTACTO
        </a>
        <button
          className='mt-6 text-neutral-500 hover:text-white'
          onClick={changeIsOpen}
        >
          <Close />
        </button>
      </div>
    </>
  )
}
