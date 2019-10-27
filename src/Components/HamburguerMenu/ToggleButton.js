import React, { useState } from 'react'
import styled, { css } from 'styled-components'

const ToggleButton = () => {
  const [closeButton, setCloseButton] = useState(false)
  const handleClick = () => setCloseButton(!closeButton)

  return (
    <Container className="container" onClick={handleClick}>
      <Bar change={closeButton} />
    </Container>
  )
}

const Container = styled.div`
  cursor:pointer;
`

const styles = css`
  width: 35px;
  height: 5px;
  border-radius: 5px;
  background-color: white;
  transition: all 0.4s;
`

const Bar = styled.div`
    ${styles};
    position: relative;
    ${props => props.change && css`
      background-color: transparent;
    `}
    &:before{
      content: '';
      ${styles};
      position: absolute;
      top: -10px;
      ${props => props.change && css`
        transform: rotate(-45deg)  translate(-11px, 4px);
      `};
    }
     &:after{
       content: '';
       ${styles};
      position: absolute;
      bottom: -10px;
      ${props => props.change && css`
        transform: rotate(45deg) translate(-10px, -5px)
      `};
    }
`

/*
 :first-child{
      ${props => props.change && css`
        transform: rotate(-45deg)  translate(-9px, 6px)
      `};
    }
    :nth-child(2){

    }
    :last-child{
      ${props => props.change && css`
        transform: rotate(45deg) translate(-8px, -8px)
      `};
    }
* */
export default ToggleButton
