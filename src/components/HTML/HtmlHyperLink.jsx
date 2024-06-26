import React, {useState} from 'react';
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
          <li>Hyperlink are used to link our webpage with some other document or other part of document.</li>
          <li>Hyperlink are created using the &lt;a&gt; (anchor) tag and are usually displayed as underline text in blue color.</li>
          <li>To provide path or hyper reference we have to href attributes of &lt;a&gt;.</li>
        </ul>
        <hr />
        <h2>Anchor Tag:</h2>
        <ol className="order-list">
          <li>Anchor tag is used to create a hyperlink on a webpage.</li>
          <li>It is container tag.</li>
          <li>It is inline level element.</li>
          <li>The content that we went to create as a hyper should be writtten within &lt;a&gt;.....&lt;/a&gt;.</li>
          <li><b>Syntax:</b> &lt;a hrer="path" &gt; TextName &lt;/a&gt;. </li>
        </ol>
        <hr />
        <h2>Attribute of Anchor Tag:</h2>
        <p><b>hrer Attribute: </b> It is used to provide path or hyperlink reference ot the marked content.When user click on Hyperlink that hyper link take the user to the specified path given in href attributes.</p>
        <p><b>Target Attribute: </b> It is used to specified where to open the hyperlink. 
        <br /> <b>Syntax: </b> &lt;a href ="https://www.github.com" target="_blank" &gt; Github &lt;/a&gt; target blank means that hyperlink will open in a new tab.</p>
        <div className="image">
          <img src={HtmlHyperlink} alt="HtmlHyperlink" onClick={()=> openModal(HtmlHyperlink)} style={{cursor:'pointer'}}/>
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
  )
}

export default HtmlHyperLink
