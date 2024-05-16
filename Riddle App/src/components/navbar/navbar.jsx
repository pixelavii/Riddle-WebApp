import { useState } from 'react';
import { Link } from "react-router-dom";
import './navbar.css';
import headerlogo from '/Logo/headerlogo.png';


const Navbar = () => {

    const [openSidebarMenu, setOpenSidebarMenu] = useState(false);
    function openSidebar() {
        setOpenSidebarMenu(!openSidebarMenu);
    }


    return (
        <>
            <div className='navbar'>
                <img src={headerlogo} alt="" className="navImg" />
                <ul className='navbarUL'>
                    <li><Link to='/' style={{ textDecoration: 'none' }}>Home</Link></li>
                    <li><Link to='/about' style={{ textDecoration: 'none' }}>About</Link></li>
                    <li><Link to='/contact' style={{ textDecoration: 'none' }}>Contact Us</Link></li>
                    <li><Link to='/signin' style={{ textDecoration: 'none' }}>Sign In</Link></li>
                    <Link to='/registerbike'><button>Register Bike</button></Link>
                </ul>
                <label className="hamburger">
                    <input type="checkbox" onClick={openSidebar} />
                    <svg viewBox="0 0 32 32">
                        <path
                            className="line line-top-bottom"
                            d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                        />
                        <path className="line" d="M7 16 27 16" />
                    </svg>
                </label>
            </div>
            <div className="sidebar">
                <div className="insideSidebar">
                    <ul className='sidebar-ul' style={openSidebarMenu ? { right: "-100px" } : {}}>
                        <li><Link to='/' style={{ textDecoration: 'none' }}>Home</Link></li>
                        <li><Link to='/about' style={{ textDecoration: 'none' }}>About</Link></li>
                        <li><Link to='/contact' style={{ textDecoration: 'none' }}>Contact Us</Link></li>
                        <li><Link to='/signin' style={{ textDecoration: 'none' }}>Sign In</Link></li>
                        <li><Link to='/registerbike'><button>Register Bike</button></Link></li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Navbar