import React from 'react'
import { Route, Routes } from 'react-router-dom';
import HtmlHome from './HTML/HtmlHome';
import Intro from './HTML/Intro';
import HtmlIntro from './HTML/HtmlIntro';
import HtmlTags from './HTML/HtmlTags';
import HtmlList from './HTML/HtmlList';
import HtmlTextFormating from './HTML/HtmlTextFormating';
import HtmlImage from './HTML/HtmlImage';
import HtmlHyperLink from './HTML/HtmlHyperLink';
import HtmlTable from './HTML/HtmlTable';
import HtmlForm from './HTML/HtmlForm';
import HtmlIframe from './HTML/HtmlIframe';
import HtmlSemantic from './HTML/HtmlSemantic';



function HtmlComp() {
  return (
    <>
      <Routes>

        <Route path="/" element={<HtmlHome/>} />
        <Route path="/html/intro" element={<Intro/>} />
        <Route path="/html/htmlintro" element={<HtmlIntro />} />
        <Route path="/html/htmltags"  element ={<HtmlTags/>} />
        <Route path="/html/htmllist" element ={<HtmlList/>}/>
        <Route path="/html/htmltextformating" element={<HtmlTextFormating/>}/>
        <Route path="/html/htmlimage" element={<HtmlImage/>}/>
        <Route path="/html/htmlhyperlink" element={<HtmlHyperLink/>}/>
        <Route path="/html/htmltable" element={<HtmlTable/>}/>
        <Route path="/html/htmlform" element={<HtmlForm/>}/>
        <Route path="/html/htmliframe" element={<HtmlIframe/>}/>
        <Route path="/html/htmlsemantic" element={<HtmlSemantic/>}/>
      </Routes>
      
    </>
  )
}

export default HtmlComp;
