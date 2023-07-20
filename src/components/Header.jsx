import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <>
    <header className='header'>
        <div className='header-wrapper'>
            <h1 className='logo'>FROZA</h1>
            <div className='header-nav'> 
                <li><a href='#' className='nav-link'>About us</a></li>
                <li><a href='#' className='nav-link'>Products</a></li>
                <li><a href='#' className='nav-link'>Contacts</a></li>
                <li><a href='#' className='nav-link'>Blog</a></li>
            </div>
            <div className="header-right">
                <div className="header-lang">
                  <div className="langs-list">
                    <div className="lang-en">
                      <img className="en-lang" src="/uk.png" alt="EN"/>
                    </div>
                  </div>
                  <img className="caret" src='/caret.svg' alt=''/>
                </div>
                <div className="header-currency">
                  <div className="currency" id='czk'>CZK</div>
                  <div className="currency" id='eur'>EUR</div>
                </div>
            </div>
        </div>
    </header>
    </>
  )
}

export default Header