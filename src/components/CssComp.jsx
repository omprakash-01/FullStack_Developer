import React from 'react'
import { Route, Routes } from 'react-router-dom';
import IntroToCss from './CSS/IntroToCss';
function CssComp() {
  return (
    <>
      <Routes>
      <Route path="/css/introtocss" element={<IntroToCss/>}/>
      </Routes>
    </>
  )
}

export default CssComp
