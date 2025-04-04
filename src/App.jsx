import { useState } from 'react'
import { Input } from './components/Input'
import Botones from './components/botones'
import Imagenes from './components/Imagenes'


function App() {
  const [query, setQuery] = useState('verano');

  return (
    <>

      <header className='flex flex-col items-center mb-8'>
        <h1 className='text-center text-5xl text-black font-bold font-serif mt-4 mb-8 md:mt-8'>SnapShot</h1>
        <Input
          onSearch={setQuery} />
      </header>
      <div className='flex  flex-col   items-center gap-4 mt-4 mb-8'>
        <Botones
          onSearch={setQuery} />
        <h3 className='text-center text-3xl font-semibold mt-4'>{query}</h3>

      </div>

      <Imagenes query={query} />




    </>
  )
}

export default App
