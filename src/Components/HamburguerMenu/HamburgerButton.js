import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { HamburgerBox, HamburgerInner } from './styles'
import { ArrowAlt, ArrowTurn, Arrow, Slider, Spin, Elastic, Stand } from './HambugerTypes/types'

const Elements = { ArrowAlt, ArrowTurn, Arrow, Slider, Spin, Elastic, Stand }

const HamburgerButton = (props) => {
  const [closeButton, setCloseButton] = useState(false)

  const handleClick = (e) => {
    if (e) e.preventDefault()
    setCloseButton(!closeButton)
    if (props.onClick) {
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
  let Wrapper = Slider
  Object.keys(Elements).forEach(e => {
    if (props.type === e) Wrapper = Elements[e]
  })

  return <Wrapper {...props}>{props.children}</Wrapper>
}

HamburgerButton.propTypes = {
  type: PropTypes.oneOf(Object.keys(Elements).map(e => e))
}

export default HamburgerButton
