import React, {useState} from "react";
import HtmlStructure from "../../assets/Html/HtmlStructure.png";
import { Link } from 'react-router-dom';
import ImageModal from '../ImageModal'; 


function Html() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState('');

  const openModal = (src) => {
    setModalImageSrc(src);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="container">
        <h1>#HTML</h1>
        <ul className="unorder-list">
          <li>
            Html stands for <b>HyperText Markup Language</b>.
          </li>
          <li>
            <strong>HyperText </strong>means it is used to link different webpages.
          </li>
          <li>
            <strong>Markup </strong> means it is used to create structure.
          </li>
          <li>Html is used to create the structure of the webpage.</li>
          <li>
            It was developed by <strong>Tim Berners-Lee in 1991</strong>.
          </li>
          <li>
            HTML was published in <strong>1995 by W3C</strong>.
          </li>
          <li>In the beginning, HTML had only 18 tags.</li>
          <li>
            The current version of HTML is <strong>HTML-5</strong>.
          </li>
          <li>HTML-5 was released in 2014.</li>
          <li>It is a case-insensitive language.</li>
          <li>
            All documents must be saved with a <strong>.html</strong> extension.
          </li>
          <li>
            Without HTML, a browser will not know how to render or display the
            content.
          </li>
        </ul>
        <div>
          <h2>W3C:</h2>
          <ol className="unorder-list">
            <li>
              W3C stands for <strong> World Wide Web Consortium</strong>.
            </li>
            <li>It is an organization.</li>
            <li>It sets standards for the web.</li>
          </ol>
        </div>
        <div className="image">
          <h2>Html Structure</h2>
          <div >
            <img src={HtmlStructure} alt="htmlStructure"  onClick={()=> openModal(HtmlStructure)} style={{cursor:'pointer'}}/>
          </div>
          <h3>&lt;!DOCTYPE html&gt;</h3>
          <ol className="order-list">
            <li>It is a document type declaration.</li>
            <li>It is used to specify the version of HTML that we are currently using.</li>
            <li>When we write &lt;!DOCTYPE html&gt;, it specifies that we are using HTML-5.</li>
            <li><strong>It is not an HTML tag.</strong></li>
            <li>&lt;!DOCTYPE html&gt; must be declare in the very first line of an HTML document, before the &lt;html&gt; tag. </li>
          </ol>
          <h3> HTML Tag:</h3>
          <ul className="unorder-list">
            <li>It is a root tag.</li>
            <li>All HTML code should be written within the HTML tag.</li>
          </ul>
          <h3>HEAD Tag:</h3>
          <ol type='i' className="order-list"> 
            <li>The metadata of the website should be written within the head tag.</li>
            <li>It shows details about the webpage.</li>
          </ol>
          <h3>BODY Tag:</h3>
          <ul type='square' className="unorder-list">
            <li>Content to be displayed should be written within the body tag.</li>
          </ul>
          <hr />
        </div>
        
        <div className="btn-container">
          <div className='btn'>
            <Link to="/">Previous Page</Link>
          </div>
          <div className='btn'>
            <Link to="htmlTags">Next Page</Link>
          </div>
        </div>
        <ImageModal isOpen={isModalOpen} src={modalImageSrc} onClose={closeModal} />
      </div>
    </>
  );
}

export default Html;
