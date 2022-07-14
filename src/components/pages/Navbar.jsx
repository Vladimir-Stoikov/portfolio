import React from 'react'
import styled from 'styled-components'
import { Link, Outlet } from 'react-router-dom'

import Footer from './Footer'

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  box-shadow: 0 0 15px rgba(0,0,0, 0.3);
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100vw;
  color: var(--secondary-color);
}

a {
  background-color: var(--navbar-background-color);
  width: 100%;
  height: 100%;
  list-style: none;
  font-size: 1.5rem;
  transition: all 0.1s ease;
  height: 100%;
  padding: 1.5rem;
  text-align: center;
  user-select: none;
}

a {
  text-decoration: none;
  color: inherit;
}

a:hover {
  background-color: var(--text-color);
}

a:active {
  outline: none;
  color: var(--text-color);
  background-color: var(--secondary-color);
}
@media (max-width: 600px) {
  a {
    font-size: 1rem;
    padding: 0;
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
`

function Navbar() {
  return (
   <>
    <Header>
      <nav className='navbar'>
        <Link  draggable="false" to="/">About Me</Link>
        <Link  draggable="false" to="/projects">Projects</Link>
        <Link  draggable="false" to="/contacts">Contacts</Link>
      </nav>
    </Header>
    <Outlet />
    <Footer />
   </> 
  )
}

export default Navbar;