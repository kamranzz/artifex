import { useState, useEffect } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import logo from './logo.png';
import './style.css';
import { Fade } from "react-awesome-reveal";


const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
      <nav className={`navbar ${scrollPosition > 100 ? 'scrolled' : ''}`}>
        <Fade direction="down">
          <div className="container">
            <div className="logo">
              <img src={logo} alt="logo" />
              <h1>Artifex</h1>
            </div>

            <div className="menu-icon" onClick={handleShowNavbar}>
              <i className="fa-solid fa-bars-staggered fa-flip-horizontal"></i>
            </div>
            <div className={`nav-elements ${showNavbar && 'active'}`}>
              <ul>
                <li className="expand">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className="expand">
                  <NavLink to="/services">Services</NavLink>
                </li>
                <li className="expand">
                  <NavLink to="/project">Project</NavLink>
                </li>
                <li className="expand">
                  <NavLink to="/school">School</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </Fade>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
