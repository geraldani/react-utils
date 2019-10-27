import React, { useState } from 'react'
import { ArrowAlt, HamburgerBox, HamburgerInner, Arrow, ArrowTurn } from './styles'

const ToggleButton = ({ color = 'black', type = 'arrow' }) => {
  const [closeButton, setCloseButton] = useState(false)
  const handleClick = () => setCloseButton(!closeButton)

  return (
    <Hamburger onClick={handleClick} active={closeButton} type={type}>
      <HamburgerBox>
        <HamburgerInner />
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
    default:
      Wrapper = Arrow
      break
  }
  return <Wrapper {...props}>{props.children}</Wrapper>

}

export default ToggleButton
