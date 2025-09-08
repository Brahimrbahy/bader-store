import React from 'react';
import { Route, Routes } from 'react-router';
import Home from './Home';
import Nav from './Nav';

const App = () => {
  return (
    <>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    </>
    
  );
}

export default App;
