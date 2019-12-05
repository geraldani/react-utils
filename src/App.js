import React from 'react'
import Sticky from './View/Sticky'

function App () {
  return (
    <div>
      {[...Array(3)].map(() => <h1>Hola que hace</h1>)}
      <Sticky />
      {[...Array(20)].map(() => <h1>Hola que hace</h1>)}
    </div>
  )
}

export default App
