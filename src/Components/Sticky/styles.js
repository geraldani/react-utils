import styled, { css } from 'styled-components'

const sticky = css`
  position: fixed;
  top: 0;
  width: 100%;
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
