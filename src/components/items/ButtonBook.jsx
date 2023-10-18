import { useState } from 'react'

import Book from '../Book'

export default function ButtonBook() {
  const [isOpen, setIsOpen] = useState(false)

  const changeIsOpen = () => setIsOpen(!isOpen)

  return (
    <>
      <button
        className='z-30 px-8 py-2 bg-[#F0C000] rounded-full text-sm text-black font-semibold xl:px-12 xl:py-3 xl:text-lg 2xl:px-16 2xl:py-4 2xl:text-2xl'
        onClick={changeIsOpen}
      >
        RESERVA YA
      </button>
      <Book isOpen={isOpen} changeIsOpen={changeIsOpen} />
    </>
  )
}
