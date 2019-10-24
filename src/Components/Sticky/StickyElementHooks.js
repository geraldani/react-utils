import React, { useState, useRef, useEffect } from 'react'
import style from './styles'

const StickyElementWithHooks = ({children}) => {
  const [heightElement, setHeightElement] = useState(0)
  const [spaceNextElement, setSpaceNextElement] = useState(0)
  const header = useRef(null)

  const handleScroll = (top = 0) => {
    window.pageYOffset > top
      ? header.current.classList.add('sticky')
      : header.current.classList.remove('sticky')
  }

  useEffect(() => {
    const nextElement = document.querySelector('#stickyContainer+*') //obtengo el elemento que le sigue al sticky
    const elementStyle = getComputedStyle(nextElement) //obtengo los estilos de ese elemento
    const space = parseInt(elementStyle.paddingTop) + parseInt(elementStyle.marginTop) //sumo el padding y el margin de ese elemento
    const topHeader = header.current.offsetTop

    setHeightElement(header.current.clientHeight)
    setSpaceNextElement(space)
    window.addEventListener('scroll', () => handleScroll(topHeader))

    return window.removeEventListener('scroll', () => handleScroll())
  }, [])

  return (
    <style.div id='stickyContainer' ref={header} {...{heightElement, spaceNextElement}} className='shadow'>
      {children}
    </style.div>
  )
}

export default StickyElementWithHooks
