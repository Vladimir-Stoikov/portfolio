import React from 'react'
import styled from 'styled-components'

const FooterCSS = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 1rem;
  text-align: center;
  padding: 1rem;
  background-color: var(--text-color);
  color: var(--background-color);
  width: 100vw;
`

function Footer() {
  return <FooterCSS>Copyright © 2022</FooterCSS>
}

export default Footer;