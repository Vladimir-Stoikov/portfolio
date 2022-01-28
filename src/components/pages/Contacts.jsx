import React from 'react'
import styled from 'styled-components'

import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const ContactsSection = styled.section`
height: auto;
background-color: var(--secondary-color);
margin: 70% auto 0;
border-radius: 20px;
width: 380px;
box-shadow: 0 0 20px rgba(0,0,0,1);
ul {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 1rem 0;
}

ul li {
  list-style: none;
  margin: 0 10%;
  padding: 1.5rem 1rem;
}

ul li a {
  text-decoration: none;
  color: inherit;
  font-size: 1.2rem;
  font-weight: bold;
  transition: color 0.3s ease;
}

ul li a:hover {
  color: var(--background-color);
}

.link-icon {
  position: relative;
  top: 5px;
}

.google-icon {
  position: relative;
  top: 5px;
}
@media (max-width: 500px) {
  width: 90%;
}
`

function Contacts() {
  return <ContactsSection>
    <ul>
      <li><a href="#"><LinkedInIcon className='link-icon'/> - My Linked in page</a></li>
      <li><a href="#"><GoogleIcon className='google-icon'/> - My email</a></li>
      <li><a href="#">hh - My Head Hunter page</a></li>
    </ul>
  </ContactsSection>
}

export default Contacts;