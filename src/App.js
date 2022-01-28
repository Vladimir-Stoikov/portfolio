import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/pages/Navbar';
import AboutMe from './components/pages/AboutMe';
import Projects from './components/pages/Projects';
import Contacts from './components/pages/Contacts';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<AboutMe />} />
          <Route path='projects' element={<Projects />} />
          <Route path='contacts' element={<Contacts />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
