import styled from 'styled-components'

const style = {
  div: styled.div`
    &.shadow{
      box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
    }
    &.sticky{
      position: fixed;
      top: 0;
      width: 100%
    }
    &.sticky + * {
      padding-top: ${ ({ heightElement, spaceNextElement }) => (heightElement+spaceNextElement)+'px' }!important;
  }
`
}

export default style
