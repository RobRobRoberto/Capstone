import React, { useState, useEffect } from 'react'
import { Button } from './Button'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar({ submitLogout }) {
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  }

  useEffect(() => {
    showButton()
  }, [])

  window.addEventListener('resize', showButton)

  function handleLogout() {
    closeMobileMenu()
    submitLogout()
  }

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/home" className="navbar-logo" onClick={closeMobileMenu}>
            BEST BOOKS
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="/home" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/merkliste"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Merkliste
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Einstellungen
              </Link>
            </li>

            <li>
              <Link to="/" className="nav-links-mobile" onClick={handleLogout}>
                ABMELDEN
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">ABMELDEN</Button>}
        </div>
      </nav>
    </>
  )
}

export default Navbar
