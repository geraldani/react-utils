import React, { useState } from 'react'
import styled from 'styled-components'

const ToggleButton = () => {

  const [show, setShow] = useState(false)
  const Button = show ? CloseButton : Bar

  const handleClick = () => {
    setShow(!show)
  }

  return (
    <Container onClick={handleClick}>
      <Button />
      <Button />
      <Button />
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
`

const CloseButton = styled(Bar)`
  :first-child{
    transform: rotate(-45deg)  translate(-9px, 6px);
  }
  :nth-child(2){
    opacity: 0;
  }
  :last-child{
    transform: rotate(45deg) translate(-8px, -8px);
  }
`

export default ToggleButton
