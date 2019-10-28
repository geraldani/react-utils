import React from 'react'
import StickyElementWithHooks from '../Components/Sticky/StickyElementHooks'
import HamburgerButton from '../Components/HamburguerMenu/HamburgerButton'

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
      <HamburgerButton color='yellow' type='spin' onClick={()=>console.log('hice click')}/>
    </div>
  </StickyElementWithHooks>
)

export default Header
