import React from 'react'
import './Main.css'
const Main = () => {
  return (
    <>
      <main id='main'>
        <div className="row">
        <div id='aside'>
              <div className="aside-products">
                <div className='product'>Products</div>
                <div className='product'>product</div>
                <div className='product'>product</div>
                <div className='product'>product</div>
                <div className='product'>product</div>
              </div>
              <div className="aside-about">
                <div className='description'>About us</div>
                <div className='description'>Наш бетон</div>
                <div className='description'>Our Blog</div>
                <div className='description'>About</div>
              </div>
              <div className="aside-contacts">
                <div className="contacts-number">
                  <div className="contacts">Contacts</div>
                  <span>+420 777 999 999</span>
                </div>
                <div className="socials">
                  <img onClick={()=> {
                    window.open('https://www.facebook.com', '_blank')
                  }} className='social' src="/fb.png" alt="fb"/>
                  <img onClick={()=> {
                    window.open('https://www.instagram.com', '_blank')
                  }} className='social' src="/inst.png" alt="fb"/>
                </div>
              </div>
            </div>
          <div id="content">
            <div className="content-wrapper">
                <div className="content-ad"></div>
                <div className="cases">
                  <div className="case-row">
                    <div className="case"></div>
                    <div className="case"></div>
                    <div className="case"></div>
                  </div>
                  <div className="case-row">
                    <div className="case"></div>
                    <div className="case"></div>
                    <div className="case"></div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Main