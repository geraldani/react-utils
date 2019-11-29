import React from 'react'
import StickyElementWithHooks from '../Components/Sticky/StickyElementHooks'

const Header = () => (
  <StickyElementWithHooks>
    <div style={{
      height: '50px',
      width: '100%',
      backgroundColor: 'hotpink',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: '10px',
      paddingBottom: '10px',
    }}>
      Sticky Element
    </div>
  </StickyElementWithHooks>
)

export default Header
