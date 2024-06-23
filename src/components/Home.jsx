import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Html from './HTML/Html';
import Introduction from './Introduction/Introduction';
import HtmlTags from './HTML/HtmlTags';
import HtmlList from './HTML/HtmlList';


function Home() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Introduction />} />
        <Route path="/html" element={<Html />} />
        <Route path="/html/htmltags"  element ={<HtmlTags/>} />
        <Route path="/html/htmllist" element ={<HtmlList/>}/>
        
      </Routes>
    </>
  );
}

export default Home;