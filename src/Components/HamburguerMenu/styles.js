import styled, { css } from 'styled-components'

export const Container = styled.div`
  cursor:pointer;
`

export const Bar = styled.div`
    width: ${props => props.size.width};
    height: ${props => props.size.height};
    margin: 6px 0;
    border-radius: 5px;
    background-color: ${props => props.color};
    transition: 0.4s;
    :first-child{
      ${({showCloseButton}) => showCloseButton && css`
        transform: rotate(-45deg)  translate(-9px, 6px)
      `};
    }
    :nth-child(2){
      ${({showCloseButton}) => showCloseButton && css`
        opacity: 0;
      `}
    }
    :last-child{
      ${({showCloseButton}) => showCloseButton && css`
        transform: rotate(45deg) translate(-8px, -8px)
      `};
    }
`
