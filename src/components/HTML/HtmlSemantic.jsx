import React, {useState} from 'react'
import { Link } from "react-router-dom";
import Htmlsemantic from "../../assets/Html/Htmlsemantic.png";
import ImageModal from '../ImageModal'; 
function HtmlSemantic() {
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
        <h1>#Html Semantic</h1>
        <ul className="unorder-list">
            <li>Semantic tag are self explanatroy tag.</li>
            <li>All semantic tag are introduce in HTML5.</li>
        </ul>
        <b>For Example:</b> &lt;form&gt;, &lt;table&gt;, &lt;audio&gt;, &lt;video&gt;
        <div className="image">
          <img src={Htmlsemantic} alt="HtmlSemanticImage" onClick={()=>openModal(Htmlsemantic)} style={{cursor:'pointer'}} />
        </div>
        <div>
        <h2>Header tag</h2>
        Header tag is used to represent the header or top most part of a website where we can have logo and navigation link. <br />
        <b>Syntax: </b> 
        &lt;header&gt;.....&lt;/header&gt;
        </div>
        <div>
            <h2>Nav tag:</h2>
            All navigation link like home,contact, etc should be written with in nav tag. <br />
            <b>Syntax:</b> &lt;nav&gt;.....&lt;/nav&gt;
        </div>
        <div>
            <h2>Section tag:</h2>
            Section tag is used to define section in a web page. <br />
            <b>Syntax: </b> &lt;section&gt;.....&lt;/section&gt;
        </div>
        <div>
            <h2>Article tag:</h2>
            Article tag is used to create division in section tag. <br />
            <b>Synatax:</b> &lt;atricle&gt;.....&lt;/article&gt;
        </div>
        <div>
            <h2>Main tag:</h2>
            Main tag is used to define the main content of a webpage. <br />
            <b>Syntax: </b> &lt;main&gt;......&lt;/main&gt;
        </div>
        <div>
            <h2>Aside tag:</h2>
            The content which is not directly related to our website like advertisement should be written with in the aside tag. <br />
            <b>Syntax: </b> &lt;aside&gt;......&lt;/aside&gt;
        </div>
        <div>
            <h2>Footer tag:</h2>
            Footer tag represent the footer/ bottom part of a web page or website. <br />
            <b>Syntax: </b> &lt;footer&gt;......&lt;/footer&gt;
        </div>
       
        <hr />
        <div className="btn-container">
          <div className="btn">
            <Link to="/html/htmliframe">Previous Page</Link>
          </div>
          <div className="btn">
            <Link to="/html">Next Page</Link>
          </div>
        </div>
        <ImageModal isOpen={isModalOpen} src={modalImageSrc} onClose={closeModal} />
     </div> 
    </>
  )
}

export default HtmlSemantic;
