import React from 'react'
import { Route, Routes } from 'react-router-dom';
import IntroToReact from './React/IntroToReact';

function ReactComp() {
  return (
    <>
       <Routes>
        <Route path="/react/introtoreact" element={<IntroToReact/>}/>
      </Routes>
    </>
  )
}

export default ReactComp;
