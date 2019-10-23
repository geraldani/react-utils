import styled from 'styled-components'

const style = {
  header: styled.header`
    font-size: 1.1em;
    &.shadow{
      box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
    }
    &.sticky{
      position: fixed;
      top: 0;
      width: 100%
    }
    &.sticky + div {
      padding-top: ${props => (props.height+20)+'px'}!important;
  }
`
}

export default style
