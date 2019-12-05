import React from 'react'
import Sticky from './View/Sticky'

function App () {
  return (
    <div>
      {/*<div style={{height: '168px', width:'50px',background:'yellow',position:'absolute',top:'0',left:'0'}}/>*/}
      {[...Array(3)].map(() => <h1>Hola que hace</h1>)}
      <Sticky />
      {[...Array(20)].map(() => <h1>Hola que hace</h1>)}
    </div>
  )
}

export default App
