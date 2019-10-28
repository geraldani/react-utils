import styled, { css } from 'styled-components'
import {
  HamburgerInner,
  Hamburger,
  hamburgerlayerwidth,
  hamburgerlayerheight,
  hamburgerAnimationDuration,
  hamburgerlayerspacing
} from '../styles'

const ArrowAlt = styled(Hamburger)`
  ${HamburgerInner}{
    &::before {
      transition: top ${hamburgerAnimationDuration} ${hamburgerAnimationDuration} ease, transform ${hamburgerAnimationDuration} cubic-bezier(0.165, 0.84, 0.44, 1);
    }
    &::after {
      transition: bottom ${hamburgerAnimationDuration} ${hamburgerAnimationDuration} ease, transform ${hamburgerAnimationDuration} cubic-bezier(0.165, 0.84, 0.44, 1);
    }
  }
  &${props => props.active && css`
    ${HamburgerInner}{
      &::before{
        top: 0;
        transform: translate3d(${hamburgerlayerwidth * -0.2}px, ${hamburgerlayerwidth * -0.25}px, 0) rotate(-45deg) scale(0.7, 1);
        transition: top ${hamburgerAnimationDuration} ease, transform ${hamburgerAnimationDuration} ${hamburgerAnimationDuration} cubic-bezier(0.895, 0.03, 0.685, 0.22);
      }
      &::after{
        bottom: 0;
        transform: translate3d(${hamburgerlayerwidth * -0.2}px, ${hamburgerlayerwidth * 0.25}px, 0) rotate(45deg) scale(0.7, 1);
        transition: bottom ${hamburgerAnimationDuration} ease, transform ${hamburgerAnimationDuration} ${hamburgerAnimationDuration} cubic-bezier(0.895, 0.03, 0.685, 0.22);
      }
    }
  `}
`


const ArrowTurn = styled(Hamburger)`
  ${props => props.active && css`
    ${HamburgerInner}{
      transform: rotate(-180deg);
      &:before{
        transform: translate3d(10px, 2px, 0) rotate(45deg) scale(0.6, 1);
      }
      &:after{
        transform: translate3d(10px, -2px, 0) rotate(-45deg) scale(0.6, 1);
      }
    }
  `}
`


const Arrow = styled(Hamburger)`
  ${props => props.active && css`
    ${HamburgerInner}{
        &::before{
          transform: translate3d(${hamburgerlayerwidth * -0.3}px, 3px, 0) rotate(-45deg) scale(0.6, 1);
        }
        &::after{
          transform: translate3d(${hamburgerlayerwidth * -0.3}px, -3px, 0) rotate(45deg) scale(0.6, 1);
        }
      }
  `}
`


const Slider = styled(Hamburger)`
  ${HamburgerInner}{
    top: ${hamburgerlayerheight / 2}px;
      &::before {
      top: ${hamburgerlayerheight + hamburgerlayerspacing}px;
      transition-property: transform, opacity;
      transition-timing-function: ease;
      transition-duration: 0.15s;
    }
    &::after {
      top: ${(hamburgerlayerheight * 2) + (hamburgerlayerspacing * 2)}px;
    }
  }
  ${props => props.active && css`
      ${HamburgerInner}{
        transform: translate3d(0, ${hamburgerlayerspacing + hamburgerlayerheight}px, 0) rotate(45deg);
        &:before{
          transform: rotate(-45deg) translate3d(${hamburgerlayerwidth / -7}px, ${hamburgerlayerspacing * -1}px, 0);
          opacity: 0;
        }
        &:after{
          transform: translate3d(0, ${(hamburgerlayerspacing + hamburgerlayerheight) * -2}px, 0) rotate(-90deg);
        }
      }
  `}
`
const Spin = styled(Hamburger)`
  ${HamburgerInner}{
    transition-duration: 0.22s;
    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    &::before {
      transition: top 0.1s 0.25s ease-in,
                  opacity 0.1s ease-in;
    }
    &::after {
      transition: bottom 0.1s 0.25s ease-in,
                  transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
  }
  ${props => props.active && css`
    ${HamburgerInner}{
      transform: rotate(225deg);
      transition-delay: 0.12s;
      transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      &::before {
        top: 0;
        opacity: 0;
        transition: top 0.1s ease-out,
                    opacity 0.1s 0.12s ease-out;
      }
      &::after {
        bottom: 0;
        transform: rotate(-90deg);
        transition: bottom 0.1s ease-out,
                    transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
      }
    }  
  `}
`

export { Arrow, ArrowAlt, ArrowTurn, Slider, Spin }
