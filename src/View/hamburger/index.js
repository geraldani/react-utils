import React from 'react'
import styled from 'styled-components'
import HamburgerButton from '../../Components/HamburguerMenu/HamburgerButton'
import { getRandomColor } from '../../Components/utils/Utils'

const StyleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 120px;
  margin-right: 3px;
  margin-top: 3px;
  background-color: ${props => props.color};
  p{
    color: white;
  }
`

const Hamburguers = () => {
  const types = [
    'Arrow',
    'ArrowAlt',
    'ArrowTurn',
    'Slider',
    'Spin',
    'Elastic',
    'Stand',
    'Emphatic',
    'Minus',
    'ThreeDXa'
  ]

  const colors = [
    '#4a148c',
    '#4db6ac',
    '#ff5722',
    '#444',
    '#ec407a',
    '#fbc02d',
    '#2196f3',
    '#607d8b',
    '#43a047',
    '#ff5722',
  ]

  return (
    <div className='d-flex flex-wrap flex-column align-items-start'>
      <h1>Hamburger buttons</h1>
      <div className='d-flex flex-wrap justify-content-center'>
        {
          types.map((elem, i) => (
            <StyleContainer key={elem} color={colors[i]}>
              <HamburgerButton type={elem} color='white'/>
              <p className='text-center m-0 font-weight-bold'>{elem}</p>
            </StyleContainer>
          ))
        }
      </div>
    </div>
  )
}

export default Hamburguers
