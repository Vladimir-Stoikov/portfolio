import React from 'react'
import styled from 'styled-components'

import CardProject from './projects/CardProject'
import projects from '../data/projectsDB';

const ProjectCards = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  margin: 5rem 0 4rem;
`

projects.forEach(item => console.log(item))

function Projects() {
  return <>
      <ProjectCards>
         {projects.map(({img, title, desc, appLink}) => <CardProject image={img} name={title} description={desc} link={appLink}/>
      )}  
      </ProjectCards>
  </>
}

export default Projects;