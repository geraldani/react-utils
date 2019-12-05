import styled, { css } from 'styled-components'

const sticky = css`
  position: fixed;
  top: 0;
  margin-top: 0!important;
  ${props => css`
    width: calc(100% - ${props.parentWidth.total}px);
    left: ${props.parentWidth.left}px;
  `};
  
  z-index: 2500;
  & + * {
    padding-top: ${props => (props.height + props.space) + 'px'}!important;
  }
`

export const StyledContainer = styled.div`
  &.shadow{
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
  }
  ${props => props.sticky && sticky};
`
