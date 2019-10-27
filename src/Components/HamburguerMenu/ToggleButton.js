import React, {useRef} from 'react'
import styled from 'styled-components'

const ToggleButton = () => {
  const container = useRef(null)
  const handleClick = () => {
    container.current.classList.toggle('change')
  }

  return (
    <Container className="container"  ref={container} onClick={handleClick}>
      <Bar />
      <Bar />
      <Bar />
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
    .change &:first-child{
      transform: rotate(-45deg)  translate(-9px, 6px);
    }
    .change &:nth-child(2){
      opacity: 0;
    }
    .change &:last-child{
      transform: rotate(45deg) translate(-8px, -8px);
    }
`







export default ToggleButton
