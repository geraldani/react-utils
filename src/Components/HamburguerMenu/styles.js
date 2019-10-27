import styled, { css } from 'styled-components'

const hamburgerpaddingx = 15
const hamburgerpaddingy = 15
const hamburgerlayerwidth = 40
const hamburgerlayerheight = 5
const hamburgerlayerspacing = 6
const hamburgerlayercolor = '#fff'
const hamburgerlayerborderradius = 4
const hamburgerhoveropacity = 1
const hamburgeractivelayercolor = hamburgerlayercolor
const hamburgeractivehoveropacity = hamburgerhoveropacity
const hamburgerhoverusefilter = false
const hamburgerhoverfilter = 'opacity(50%) '
const hamburgeractivehoverfilter = hamburgerhoverfilter
const hamburgerAnimationDuration = '200ms'

export const HamburgerInner = styled.div`
  display: block;
  top: 50%;
  margin-top: ${hamburgerlayerheight / -2}px;
  &,
  &::before,
  &::after {  
    width: ${hamburgerlayerwidth}px;
    height: ${hamburgerlayerheight}px;
    background-color: ${hamburgerlayercolor};
    border-radius: ${hamburgerlayerborderradius}px;
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease;
  }
    &::before,
    &::after {
    content: '';
    display: block;
  }
   &::before {
    top: ${(hamburgerlayerspacing + hamburgerlayerheight) * -1}px;
  }

  &::after {
    bottom: ${(hamburgerlayerspacing + hamburgerlayerheight) * -1}px;
  }
`

export const HamburgerBox = styled.div`
  width: ${hamburgerlayerwidth}px;
  height: ${hamburgerlayerheight * 3 + hamburgerlayerspacing * 2}px;
  display: inline-block;
  position: relative;
`

const Hamburger = styled.div`
  padding: ${hamburgerpaddingy}px ${hamburgerpaddingx}px;
  display: inline-block;
  cursor: pointer;

  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;

  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible;

  &:hover {
    ${hamburgerhoverusefilter 
      ? css`filter: ${hamburgerhoverfilter}`
      : css`opacity: ${hamburgerhoveropacity}`
    }
  }
  ${props => props.active  && css`
    &:hover {
      ${
        hamburgerhoverusefilter
          ? css`filter: ${hamburgeractivehoverfilter}`
          : css`opacity: ${hamburgeractivehoveropacity}`
      }
    }
    ${HamburgerInner},
    ${HamburgerInner}::before,
    ${HamburgerInner}::after {
      background-color: ${hamburgeractivelayercolor};
    }
  `}
`
export const Arrow = styled(Hamburger)`
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

export const ArrowAlt = styled(Hamburger)`
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

export const ArrowTurn = styled(Hamburger)`
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
