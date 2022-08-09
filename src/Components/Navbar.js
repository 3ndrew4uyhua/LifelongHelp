import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMoblieMenu = () => setClick(false);
  
/* toggling and resizing the button*/
  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false)
    } else{
      setButton(true);
    }
  }

  window.addEventListener('resize', showButton);
/*/* toggling and resizing the button*/

  return (
    <>
    <nav className="navbar">
        <div className="navbar-container">
            <Link to="/" className="navbar-logo">
                 Lifelong Help<i className="fab fa-typo3" />
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMoblieMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/ourWork' className='nav-links' onClick={closeMoblieMenu}>
                  Our Work
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/getInvolved' className='nav-links' onClick={closeMoblieMenu}>
                  Get involved
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/new-n-analytics' className='nav-links' onClick={closeMoblieMenu}>
                  News and Analytics
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/About' className='nav-links' onClick={closeMoblieMenu}>
                  About
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/Contact' className='nav-links' onClick={closeMoblieMenu}>
                  Contact
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/sign-up' className='nav-links-moblie' onClick={closeMoblieMenu}>
                  Sign up
                </Link>
              </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>Sign Up</Button>}
        </div>
    </nav>
    </>
  )
}
//yoo
export default Navbar