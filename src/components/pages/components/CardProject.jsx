import React from 'react'
import styled from 'styled-components'

const CardSt = styled.article`
  background-color: var(--navbar-background-color);
  position: relative;
  padding: 1rem;
  border-radius: 25px;
  width: 400px;
  height: 535px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  margin: 15px 15px;

img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}

.card-info {
  text-align: center;
  margin-top: 20px;
  h2 {
  margin-bottom: 10px;
  color: var(--secondary-color);
    }
  p {
  color: var(--secondary-color);
    }
}

.cardBtn {
  position: absolute;
  background-color: var(--secondary-color);
  color: var(--background-color);
  bottom: 0;
  left: 0;
  border: none;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  width: 100%;
  font-family: inherit;
  font-size: 1.3rem;
  padding: 1rem;
}

.cardBtn:hover {
  background-color: rgb(221, 221, 221);
  color: var(--text-color);
}

.cardBtn:active {
  background-color: rgb(197, 197, 197);
}

.cardBtnGit {
  position: absolute;
  background-color: var(--secondary-color);
  color: var(--background-color);
  bottom: 10.5%;
  left: 0;
  border: none;
  border-bottom: 0.13rem solid var(--navbar-background-color);
  width: 100%;
  font-family: inherit;
  font-size: 1.3rem;
  padding: 1rem;
}

.cardBtnGit:hover {
  background-color: rgb(221, 221, 221);
  color: var(--text-color);
}

.cardBtnGit:active {
  background-color: rgb(197, 197, 197);
}

@media (max-width: 450px) {
  padding: 1rem;
  border-radius: 25px;
  width: 85%;
  max-height: auto;
  .card-info {
  margin-top: 10px;
  h2 {
    font-size: 1.2rem;
   }
   p {
     font-size: 0.8rem;
   }
  } 
}
`

function CardProject({image, name, description, gitLink, link}) {
  return <CardSt draggable="false">
      <img src={image} alt="App" draggable="false"/>
      <div className="card-info">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
      <a href={gitLink} target="_blank"  draggable="false" rel = "noreferrer"><button className="cardBtnGit" >GitHub folder</button></a>
      <a href={link} target="_blank"  draggable="false" rel = "noreferrer"><button className="cardBtn" >App</button></a>
  </CardSt>
}

export default CardProject;

