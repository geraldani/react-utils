import React, { useState } from 'react'
import { Container, Bar } from './styles'

const ToggleButton = (props) => {
  const styles = {
    color: props.color || 'black',
    size: props.size || { height: '5px', width: '35px' }
  }
  const [closeButton, setCloseButton] = useState(false)
  const handleClick = () => setCloseButton(!closeButton)

  return (
    <Container onClick={handleClick}>
      {[...Array(3)].map((elem, index) => <Bar key={index} showCloseButton={closeButton} {...styles} />)}
    </Container>
  )
}

export default ToggleButton
