import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Html from './HTML/Html';
import Introduction from './Introduction/Introduction';
import HtmlTags from './HTML/HtmlTags';
import HtmlList from './HTML/HtmlList';
import HtmlTextFormating from './HTML/HtmlTextFormating';
import HtmlImage from './HTML/HtmlImage';


function Home() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Introduction />} />
        <Route path="/html" element={<Html />} />
        <Route path="/html/htmltags"  element ={<HtmlTags/>} />
        <Route path="/html/htmllist" element ={<HtmlList/>}/>
        <Route path="/html/htmltextformating" element={<HtmlTextFormating/>}/>
        <Route path="/html/htmlimage" element={<HtmlImage/>}/>
        
      </Routes>
    </>
  );
}

export default Home;
