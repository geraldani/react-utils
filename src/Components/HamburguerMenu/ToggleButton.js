import React, { useState } from 'react'
import styled, { css } from 'styled-components'

const ToggleButton = () => {
  const [closeButton, setCloseButton] = useState(false)
  const handleClick = () => setCloseButton(!closeButton)

  return (
    <Container className="container" onClick={handleClick}>
      <Bar change={closeButton} />
      <Bar change={closeButton} />
      <Bar change={closeButton} />
    </Container>
  )
}

const Container = styled.div`
  cursor:pointer;
`

const Bar = styled.div`
    width: 35px;
    height: 5px;
    margin: 6px 0;
    border-radius: 5px;
    background-color: white;
    transition: 0.4s;
    :first-child{
      ${props => props.change && css`
        transform: rotate(-45deg)  translate(-9px, 6px)
      `};
    }
    :nth-child(2){
      ${props => props.change && css`
        opacity: 0;
      `}
    }
    :last-child{
      ${props => props.change && css`
        transform: rotate(45deg) translate(-8px, -8px)
      `};
    }
`

export default ToggleButton
