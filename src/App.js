import React, { useState } from 'react'
import Header from './Pruebas/stickyElement'
// import Colorpicker from './Components/ColorPicker/Colorpicker'
import HamburgerButton from './Components/HamburguerMenu/HamburgerButton'

function App () {
  const [showSomething, setShowSomething] = useState(false)
  const handleClick = () => setShowSomething(!showSomething)
  return (
    <>
      <h2>hola que hace</h2>
      <p>yo nada y tu</p>
      <Header />
      <div style={{ paddingTop: '20px' }}>
        <div>
          <HamburgerButton color='purple' type='Emphatic' onClick={handleClick} />
          {
            showSomething &&
            <h1 style={{ backgroundColor: 'red' }}>Esto es lo que muestra al presionar el boton</h1>
          }
        </div>
        <p>algo de texto</p>
        <p>forzoso para probar</p>
        <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset
          concludaturque
          et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus
          repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
        <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset
          concludaturque
          et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus
          repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
        <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset
          concludaturque
          et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus
          repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
        <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset
          concludaturque
          et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus
          repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p><p>Some text to enable
        scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera
        fabulas
        ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et.
        Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>  <p>Some text to enable scrolling.. Lorem
        ipsum
        dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui
        causae
        gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his
        ad.
        Eum no molestiae voluptatibus.</p><p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum
        definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id
        agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae
        voluptatibus.</p>  <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo,
        maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur
        eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
        <p>Some
          text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque
          et
          eum,
          altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus
          repudiandae
          nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>  <p>Some text to enable
        scrolling..
        Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo.
        Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint
        efficiantur his ad. Eum no molestiae voluptatibus.</p><p>Some text to enable scrolling.. Lorem ipsum dolor sit
        amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae
        gloriatur
        ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum
        no
        molestiae voluptatibus.</p>
        <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset
          concludaturque
          et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus
          repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
        <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset
          concludaturque
          et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus
          repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
        <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset
          concludaturque
          et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus
          repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
        <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset
          concludaturque
          et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus
          repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
      </div>
      <h2>hola mundo</h2>
    </>
  )
}

export default App
