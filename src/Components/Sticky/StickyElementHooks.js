import React, { useState, useRef, useEffect } from 'react'
import { StyledContainer } from './styles'

const totalHeight = (elem) => { // retorna el alto total de un elemento del DOM
  const styles = window.getComputedStyle(elem) //obtengo los estilos del elemento sticky (para sumar los margenes)
  //al alto del elemento que es el offsetHeigh (incluye los bordes) le sumo los margenes que pueda tener
  return (elem.offsetHeight + parseFloat(styles.marginTop) + parseFloat(styles.marginBottom))
}

const totalBox = (elem) => {// retorna la suma del borde, margen y padding de un elemento del DOM
  const styles = elem ? window.getComputedStyle(elem) : '' //obtengo los estilos de ese elemento siguiente
  return (parseFloat(styles.paddingTop) + parseFloat(styles.marginTop) + parseFloat(styles.borderWidth))//sumo el padding y el margin y el border de ese elemento
}

export const StickyElementWithHooks = ({ children, className = '' }) => {
  const [heightElement, setHeightElement] = useState(0)
  const [spaceNext, setSpaceNext] = useState(0)
  const [sticky, setSticky] = useState(false)
  const header = useRef(null)

  const handleScroll = (top = 0) => {
    window.pageYOffset > top
      ? setSticky(true)
      : setSticky(false)
  }

  useEffect(() => {
    const currentElement = header.current //el elemento en si del sticky
    const topCurrentElement = currentElement.offsetTop // offset es la pocision en px del sticky en la ventana
    const nextElement = currentElement.nextSibling //obtengo el elemento que le sigue al sticky
    const spaceNextElement = totalBox(nextElement)
    const heightCurrentElement = totalHeight(currentElement)
    setHeightElement(heightCurrentElement)
    setSpaceNext(spaceNextElement)

    if (topCurrentElement > 0) {
      // window.addEventListener('scroll', handleScroll)
      window.onscroll = () => handleScroll(topCurrentElement)
      // return window.removeEventListener('scroll', handleScroll)
      return () => window.onscroll = () => {}
    } else {
      setSticky(true)
    }
  }, [])

  const commonProps = { height: heightElement, space: spaceNext, sticky }

  return (
    <StyledContainer ref={header} {...commonProps}
                     className={`shadow ${className}`}>
      {children}
    </StyledContainer>
  )
}
