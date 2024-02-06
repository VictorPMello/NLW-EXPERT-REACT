import logo from './assets/logo-nlw-expert.svg';

export function App() {
  return (
    <div className='mx-auto max-w-6xl my-12 space-y-6'>
      <img src={logo} alt='NLW Expert' />

      <form className='w-full '>
        <input
          className='
          w-full bg-transparent text-3xl font-semibold tracking-tighter placeholder:text-slate-500 outline-none'
          type='text'
          placeholder='Busque em suas notas...'
        />
      </form>

      <div className='h-px bg-slate-700' />

      <div className='grid grid-cols-3 gap-6 auto-rows-[250px]'>
        <div className='rounded-md bg-slate-700 p-5 space-y-3'>
          <span className='text-small font-medium text-slate-200'>
            Adicionar nota
          </span>
          <p className='text-sm leading-6 text-slate-400'>
            Grave uma nota em áudio que será convertida para texto
            automaticamente.
          </p>
        </div>

        <div className='rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative'>
          <span className='text-small font-medium text-slate-300'>
            há 2 dias
          </span>
          <p className='text-sm leading-6 text-slate-400'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Doloribus, veritatis!
          </p>

          <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none' />
        </div>

        <div className='rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative'>
          <span className='text-small font-medium text-slate-300'>
            há 4 dias
          </span>
          <p className='text-sm leading-6 text-slate-400'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reprehenderit deleniti non ut cumque tempore! Repellat.
          </p>

          <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none' />
        </div>
      </div>
    </div>
  );
}
