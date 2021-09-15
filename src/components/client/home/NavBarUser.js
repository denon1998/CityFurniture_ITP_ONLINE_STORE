import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './NavBarUser.css';

function NavBarUser() {
    const[click, setClick] = useState(false);
    const[button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);            
        }else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
      }, []);

    window.addEventListener('resize', showButton);

  return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <div className="topic">City Furniture Store</div>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />

                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li classsName='nav-item'>
                        <Link to='/' className='nav-Links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li classsName='nav-item'>
                        <Link to='/products' className='nav-Links' onClick={closeMobileMenu}>
                            Products
                        </Link>
                    </li>
                    <li classsName='nav-item'>
                        <Link to='/Offers' className='nav-Links' onClick={closeMobileMenu}>
                            Offers
                        </Link>
                    </li>
                    <li classsName='nav-item'>
                        <Link to='/sign-up' className='nav-Links' onClick={closeMobileMenu}>
                            Sign-Up
                        </Link>
                    </li>
                </ul>
                 {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
            </div>
        </nav>
    </>
  );
}

export default NavBarUser;