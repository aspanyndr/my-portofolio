import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/1673708342190-fotor-bg-remover-20240229193032.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
    
  return (
    <header>
      <div className="container header__container">
        <h5>Hello i'm</h5>
        <h1>Muhammad Aspan Yunandar</h1>
        <h5 className='text-light'>Junior Java Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className='me'>
          <img src={ME} alt=''/>
        </div>
        <a href="#contact" className='scroll_down'>Scroll down</a>
      </div>
    </header>
  )
}

export default Header

