import React from 'react'
import styled from 'styled-components';

const AboutMeSection = styled.section`
margin:  0 auto;
height: 100vh;
width: 80%;
display: flex;
align-items: center;
justify-content: center;

.info {
  width: 100%;
  text-align: center;
  z-index: 2;
  h3 {
  margin: 20px auto;
  font-size: 3rem;
}
}

.photo img {
  width: 400px;
  height: 400px;
  object-fit: cover;
  object-position: -15px center;
  background-color: var(--secondary-color);
  background-image: url('https://www.transparenttextures.com/patterns/cartographer.png');
  border-radius: 50%;
  border: solid 15px var(--text-color);
  box-shadow: -150px -80px 0px var(--navbar-background-color);
  z-index: 1;
}
@media (max-width: 650px) {
  flex-direction: column;
  width: 100vw;
  .info {
    height: 30%;
    width: 90vw;
    h3 {
      margin-top: 0;
    }
  }
  .photo img {
    width: 300px;
    height: 300px;
}
}
`



function AboutMe() {
  return <AboutMeSection id="about-me">
    <div className="info">
      <h3>Vladimir Stoikov</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat magni adipisci aperiam quasi possimus ad maiores, veniam pariatur laborum autem.</p>
    </div>
    <div className="photo">
      <img src="/photo_for_portfolio.png" alt="photo" />
    </div>
  </AboutMeSection>
}

export default AboutMe;