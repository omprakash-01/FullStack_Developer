import React from 'react';
import Navbar from './Navbar';
import HtmlComp from './HtmlComp';
import CssComp from './CssComp';
import JavaScriptComp from './JavaScriptComp';
import ReactComp from './ReactComp';


function Home() {
  return (
    <>
      <Navbar />
      <HtmlComp></HtmlComp>
      <CssComp></CssComp>
      <JavaScriptComp></JavaScriptComp>
      <ReactComp></ReactComp>
    
    </>
  );
}

export default Home;
