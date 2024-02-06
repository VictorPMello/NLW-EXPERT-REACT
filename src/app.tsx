import logo from './assets/logo-nlw-expert.svg';
import { NewNoteCard } from './components/new-note-card';
import { NoteCard } from './components/note-card';

const note = {
  date: new Date(),
  content: 'Aqui está o conteúdo da nota que você acabou de criar.',
};

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
        <NewNoteCard />

        <NoteCard note={note} />
      </div>
    </div>
  );
}
