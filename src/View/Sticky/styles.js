import styled from 'styled-components'
import { StickyElementWithHooks } from '../../Components/Sticky/StickyElementHooks'

export const StyledSticky = styled(StickyElementWithHooks)`
  width: 100%;
  background-color: silver;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 10px;
  padding-bottom: 10px;
  border: solid 2px gray;
  margin-bottom: 2em;
  margin-top: 16px;
`
