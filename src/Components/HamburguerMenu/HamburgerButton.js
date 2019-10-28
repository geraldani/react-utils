import React, { useState } from 'react'
import { HamburgerBox, HamburgerInner } from './styles'
import { ArrowAlt, ArrowTurn, Arrow, Slider, Spin } from './HambugerTypes/types'

const HamburgerButton = (props) => {
  const [closeButton, setCloseButton] = useState(false)

  const handleClick = () => {
    setCloseButton(!closeButton)
    if (props.onClick !== undefined) {
      props.onClick()
    }
  }

  return (
    <Hamburger onClick={handleClick} active={closeButton} type={props.type}>
      <HamburgerBox>
        <HamburgerInner color={props.color || '#000'} />
      </HamburgerBox>
    </Hamburger>
  )
}

const Hamburger = (props) => {
  let Wrapper
  switch (props.type) {
    case 'arrow':
      Wrapper = Arrow
      break
    case 'arrowAlt':
      Wrapper = ArrowAlt
      break
    case 'arrowTurn':
      Wrapper = ArrowTurn
      break
    case 'slider':
      Wrapper = Slider
      break
    case 'spin':
      Wrapper = Spin
      break
    default:
      Wrapper = Slider
      break
  }
  return <Wrapper {...props}>{props.children}</Wrapper>
}

export default HamburgerButton
