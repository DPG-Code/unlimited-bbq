import Close from './icons/Close'

export default function Book({ isOpen, changeIsOpen }) {
  return (
    <div
      className={`p-12 z-50 w-full h-screen fixed top-0 ${
        isOpen ? 'flex' : 'hidden'
      } flex-col items-center justify-center backdrop-blur-lg bg-black/90 gap-12 xl:gap-16`}
    >
      <button
        className='text-neutral-500 hover:text-white absolute top-6 right-6 xl:top-12 xl:right-12'
        onClick={changeIsOpen}
      >
        <Close />
      </button>
      <img
        className='w-28 h-auto sm:w-40 xl:w-60'
        src='/logo.webp'
        alt='logo'
      />
      <form className='w-full flex flex-col items-center justify-center gap-6'>
        <input
          className='py-2 w-full bg-transparent text-xs font-medium text-white placeholder:text-neutral-400 border-b-2 border-neutral-600 focus:border-white outline-none xl:py-6 xl:w-[920px] xl:text-2xl'
          type='datetime-local'
          required
        />
        <input
          className='py-2 w-full bg-transparent text-xs font-medium text-white placeholder:text-neutral-400 border-b-2 border-neutral-600 focus:border-white outline-none xl:py-6 xl:w-[920px] xl:text-2xl'
          type='text'
          placeholder='NOMBRE'
          required
        />
        <input
          className='py-2 w-full bg-transparent text-xs font-medium text-white placeholder:text-neutral-400 border-b-2 border-neutral-600 focus:border-white outline-none xl:py-6 xl:w-[920px] xl:text-2xl'
          type='text'
          placeholder='CANTIDAD DE PERSONAS'
          required
        />
        <input
          className='py-2 w-full bg-transparent text-xs font-medium text-white placeholder:text-neutral-400 border-b-2 border-neutral-600 focus:border-white outline-none xl:py-6 xl:w-[920px] xl:text-2xl'
          type='text'
          placeholder='NÚMERO DE CONTACTO'
          required
        />
        <button className='mt-6 px-8 py-2 bg-white text-sm text-black font-semibold rounded-full xl:mt-12 xl:px-12 xl:py-3 xl:text-lg 2xl:px-16 2xl:py-4 2xl:text-2xl'>
          RESERVAR
        </button>
      </form>
    </div>
  )
}
