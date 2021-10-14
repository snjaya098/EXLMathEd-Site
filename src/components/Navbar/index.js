import React, { useState, useEffect } from 'react';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import { Nav, NavbarContainer, NavItem, NavLinks, NavLogo, NavMenu, NavBtn, NavBtnLink} from './NavbarElem';


const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo onClick={toggleHome} to='/'>
              E-XLMath
            </NavLogo>
            <NavMenu>
              
              <NavItem>
                <NavLinks to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to='team' smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                Team
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to='courses' smooth={true} duration={500} spy={true} exact='true' offset={-80}>

                  Courses
                  </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to='price' smooth={true} duration={500} spy={true} exact='true' offset={-80}>

                  Prices
                  </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to='contact' smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                  Contact Us
                  </NavLinks>
              </NavItem>
            </NavMenu>

            <NavBtn>
              <NavBtnLink to='/register'>Register </NavBtnLink>
            </NavBtn>

            
            
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
