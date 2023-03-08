import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className="footer">        
        <div className="wrapper">
            <a className="footer__logo">
                Logo
            </a>
            <div className="footer__divider--vertical"></div>
            <span className="footer__copyright">TheRebels &copy; All Rights Reserved.</span>
            <div className="footer__divider--vertical"></div>
            <button className="footer__button">
                Donate
            </button>
        </div>
    </div>
  )
}

export default Footer