import React, { useState } from 'react';
import HtmlHyperlink from '../../assets/Html/HtmlHyperlink.png';
import { Link } from "react-router-dom";
import ImageModal from '../ImageModal';

function HtmlHyperLink() {
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
        <h1>#Hyperlink</h1>
        <ul className="unorder-list">
          <li>Hyperlinks are used to link our webpage with some other document or other parts of the document.</li>
          <li>Hyperlinks are created using the &lt;a&gt; (anchor) tag and are usually displayed as underlined text in blue color.</li>
          <li>To provide a path or hyperlink reference, we use the href attribute of &lt;a&gt;.</li>
        </ul>
        <hr />
        <h2>Anchor Tag:</h2>
        <ol className="order-list">
          <li>The anchor tag is used to create a hyperlink on a webpage.</li>
          <li>It is a container tag.</li>
          <li>It is an inline-level element.</li>
          <li>The content that we want to create as a hyperlink should be written within &lt;a&gt;.....&lt;/a&gt;.</li>
          <li><b>Syntax:</b> &lt;a href="path"&gt; TextName &lt;/a&gt;.</li>
        </ol>
        <hr />
        <h2>Attributes of the Anchor Tag:</h2>
        <p><b>href Attribute: </b> It is used to provide the path or hyperlink reference to the marked content. When the user clicks on the hyperlink, it takes the user to the specified path given in the href attribute.</p>
        <p><b>Target Attribute: </b> It is used to specify where to open the hyperlink. <br /> <b>Syntax: </b> &lt;a href="https://www.github.com" target="_blank"&gt; Github &lt;/a&gt; The target="_blank" attribute means that the hyperlink will open in a new tab.</p>
        <div className="image">
          <img 
            src={HtmlHyperlink} 
            alt="HtmlHyperlink" 
            onClick={() => openModal(HtmlHyperlink)} 
            style={{ cursor: 'pointer' }} 
          />
        </div>
        <hr />
        <div className="btn-container">
          <div className="btn">
            <Link to="/html/htmlimage">Previous Page</Link>
          </div>
          <div className="btn">
            <Link to="/html/htmltable">Next Page</Link>
          </div>
        </div>
        <ImageModal isOpen={isModalOpen} src={modalImageSrc} onClose={closeModal} />
      </div>
    </>
  );
}

export default HtmlHyperLink;
