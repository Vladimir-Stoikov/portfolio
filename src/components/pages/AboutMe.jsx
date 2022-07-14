import React, { useState } from 'react'
import styled from 'styled-components';

const AboutMeSection = styled.main`
margin:  0 auto;
height: 100vh;
width: 80%;
display: flex;
align-items: center;
justify-content: center;
@media (max-width: 600px) {
  margin-top: 80px;
  justify-content: start;
 }

.photo {
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
@media (max-width: 920px) {
  flex-direction: column;
  width: 100vw;
  .photo {
    margin-top: 20px;
    width: 300px;
    height: 300px;
  }
}
@media (max-width: 600px) {
  .photo {
    margin-top: 65px;
    width: 300px;
    height: 300px;
  }
}
@media (max-width: 470px) {
  .photo {
    margin-top: 170px;
    width: 250px;
    height: 250px;
  }
}
@media (max-width: 300px) { 
  .photo { 
    margin-top: 80px;
    width: 200px;
    height: 200px;
  }
}
@media (max-width: 400px) and (max-height: 740px) {
  .photo {
    margin-top: 28%;
    width: 220px;
    height: 220px;
    border-width: 10px;
  }
}
`

const InfoSection = styled.section`
  width: 100%;
  text-align: center;
  z-index: 2;
  h3 {
    margin: 20px auto;
    font-size: 3rem;
  }
  p {
    margin-bottom: 15px;
  }

@media (max-width: 650px) {
  height: 30%;
  width: 90vw;
  h3 {
    margin-top: 0;
  }
 }

@media (max-width: 300px) {
  h3 {
    font-size: 1.5rem;
  }
  p {
    font-size: 0.8rem;
  }
}
`

const SkillsList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 500px;
  @media (max-width: 920px) {
    width: 80%;
    margin: 0 auto;
  }
  @media (max-width: 570px) {
    width: 100%;
  }
`

const LiSkillCloud = styled.li`
    margin: 10px;
    list-style: none;
    width: max-content;
    background-color: ${({backColor}) => backColor ? backColor : 'var(--secondary-color)'};
    color: ${({color}) => color ? color : ''};
    padding: 7px 10px;
    border-radius: 15px;
    font-weight: bold;
    box-shadow: 0 0 15px rgba(0,0,0,0.4);
     @media (max-width: 400px) and (max-height: 740px) {
       font-size: 0.75rem;
       padding: 4px 7px;
      }
     @media (max-width: 355px) {
      font-size: 0.85rem;
      margin: 7px;
     }
    @media (max-width: 300px) {
      font-size: 0.8rem;
      padding: 4px 7px;
     }
`


function AboutMe() {

  const [mainSkillsStack] = useState(['ES6', 'React', 'React Router V6', 'Styled components', 'Git/GitHub'])
  const [secondarySkillsStack] = useState(['MobX', 'Redux', 'Axios', 'REST', 'Node.js'])

  return <AboutMeSection>
    <InfoSection>
      <h3>Vladimir Stoikov</h3>
      <p>Beginner front-end developer</p>
      <SkillsList>
        { mainSkillsStack.map((elem, id) => <LiSkillCloud key={id}>{elem}</LiSkillCloud>)}
        { secondarySkillsStack.map((elem, id) => <LiSkillCloud key={id} backColor='var(--navbar-background-color)' color='var(--secondary-color)'>{elem}</LiSkillCloud>)}
      </SkillsList>
    </InfoSection>
    <img className="photo" src="/photo_for_portfolio.png" alt="Avatar" />
  </AboutMeSection>
}

export default AboutMe;