import React from 'react'
import styled from 'styled-components'

import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';

const ContactsSection = styled.section`
height: auto;
background-color: var(--secondary-color);
margin: 70% 0 0 50%;
transform: translateX(-50%);
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
  padding: 1.5rem 0.8rem;
  font-weight: bold;
  font-size: 1.2rem;
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

.link-icon, .google-icon {
  position: relative;
  top: 5px;
}

ul li span {
  color: var(--secondary-color);
  background-color: var(--text-color);
  font-size: 1rem;
  padding: 0.3rem 0.4rem 0.2rem;
  border-radius: 4px;
}

@media (max-width: 450px) {
  width: 300px;
  ul li, ul li a, .link-icon, .google-icon { 
    font-size: 1rem;
  }
  ul li {
    margin: 0 5%;
  }
@media (max-width: 350px) { 
  margin-top: 250px;
  width: 100vw;
  border-radius: 0px;
} 
@media (max-width: 285px) {  
   margin-top: 200px;
  ul li, ul li a, .link-icon, .google-icon { 
    font-size: 0.8rem;
  }
}
}
`

function Contacts() {
  return <ContactsSection>
    <ul>
      <li><a target="_blank" href="https://www.linkedin.com/in/vladimir-stoikov-33153920b/"><LinkedInIcon className='link-icon'/> - Linked in page</a></li>
      <li><GoogleIcon className='google-icon'/> - stoikov.vp@gmail.com</li>
      <li><a target="_blank" href="https://t.me/vp_st"><TelegramIcon className='google-icon'/> - @vp_st </a></li>
      <li><a target="_blank" href="https://nn.hh.ru/applicant/resumes/view?resume=ee78e29fff062fd1c00039ed1f7878674c4574"><span>hh</span> - Head Hunter page</a></li>
    </ul>
  </ContactsSection>
}

export default Contacts;


