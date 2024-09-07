import React from 'react'
import { Route, Routes } from 'react-router-dom';
import IntroToJavaScript from './JavaScript/IntroToJavaScript';
import Literals from './JavaScript/Literals';
import IntroToDom from './JavaScript/IntroToDom';

function JavaScriptComp() {
  return (
    <>
      <Routes>
      <Route path="/javascript/introtojavascript" element={<IntroToJavaScript/>}/>
      <Route path='/javascript/literals' element={<Literals/>}/>
      <Route path='/javascript/introtodom' element={<IntroToDom/>}/>
      </Routes>
    </>
  )
}

export default JavaScriptComp
