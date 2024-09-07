import React from 'react'
import { Route, Routes } from 'react-router-dom';
import IntroToReact from './React/IntroToReact';
import Components from './React/Components';
import Props from './React/Props';

function ReactComp() {
  return (
    <>
       <Routes>
        <Route path="/react/introtoreact" element={<IntroToReact/>}/>
        <Route path="/react/components" element={<Components/>}/>
        <Route path="/react/props" element ={<Props/>}/>
      </Routes>
    </>
  )
}

export default ReactComp;
