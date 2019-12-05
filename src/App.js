import React from 'react'
import Sticky from './View/Sticky'
import Hamburguers from './View/hamburger'

function App () {
  return (
    <div className='p-4'>
      <Hamburguers/>
      <Sticky />
      {[...Array(20)].map(() => <h1>Hola que hace</h1>)}
    </div>
  )
}

export default App
