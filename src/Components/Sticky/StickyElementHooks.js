import React, { useState, useRef, useEffect } from 'react'
import { StyledContainer } from './styles'
import { totalHeight } from '../utils/Utils'

const totalBox = (elem) => {// retorna la suma del borde, margen y padding de un elemento del DOM
  const styles = elem ? window.getComputedStyle(elem) : '' //obtengo los estilos de ese elemento siguiente
  return (parseFloat(styles.paddingTop) + parseFloat(styles.marginTop) + parseFloat(styles.borderWidth))//sumo el padding y el margin y el border de ese elemento
}

const totalWidth = (elem) => {// retorna la suma del borde, margen y padding de un elemento del DOM
  const styles = elem ? window.getComputedStyle(elem) : '' //obtengo los estilos de ese elemento siguiente
  const total =
    parseFloat(styles.paddingLeft) +
    parseFloat(styles.paddingRight) +
    parseFloat(styles.marginLeft) +
    parseFloat(styles.marginRight) +
    (parseFloat(styles.borderWidth) * 2)

  const left =
    parseFloat(styles.paddingLeft) +
    parseFloat(styles.marginLeft) +
    parseFloat(styles.borderWidth)

  return ({ left, total })
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
      window.onscroll = () => handleScroll(topCurrentElement)
      return () => window.onscroll = () => {}
      // window.addEventListener('scroll', handleScroll)
      // return window.removeEventListener('scroll', handleScroll)
    } else {
      setSticky(true)
    }
  }, [])
  const commonProps = { height: heightElement, space: spaceNext, sticky }
  return (
    <StyledContainer ref={header} parentWidth={header.current ? totalWidth(header.current.parentNode) : {}}
                     className={`shadow ${className}`} {...commonProps}>
      {children}
    </StyledContainer>
  )
}
