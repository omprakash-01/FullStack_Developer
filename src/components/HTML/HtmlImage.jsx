import React, { useState } from "react";
import HtmlImageTag from "../../assets/Html/HtmlImageTag.png";
import HtmlImageTagOnline from "../../assets/Html/HtmlImageTagOnline.png";
import HtmlImageTagAttribute from "../../assets/Html/HtmlImageTagAttribute.png";
import { Link } from "react-router-dom";
import ImageModal from '../ImageModal';

function HtmlImage() {
  const UlStyle = {
    marginLeft: "20px",
  };
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
        <h1>#Image Tag:</h1>
        <ul className="unorder-list">
          <li>&lt;img&gt; tag is used to attach an image to our webpage.</li>
          <li>It is a container tag.</li>
          <li>It is an inline-level element.</li>
        </ul>
        <h2>Steps to Display an Image on a Webpage:</h2>
        <ol className="order-list">
          <li>First, we need space, which is provided by the &lt;img&gt; tag.</li>
          <li>Then, we need the image path.</li>
          <li>
            <b>Syntax: </b> &lt;img src=" " alt=" " &gt;
          </li>
        </ol>
        <h2>Types of Paths:</h2>
        <table>
          <thead>
            <tr>
              <th>Absolute Path</th>
              <th>Relative Path</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                The path with respect to the root directory is called an absolute
                path.
              </td>
              <td>
                The path with respect to the current directory is called a relative
                path.
              </td>
            </tr>
            <tr>
              <td>It is the longest path.</td>
              <td>It is the shortest path.</td>
            </tr>
          </tbody>
        </table>
        <h2>Steps to Attach an Image:</h2>
        <h3>1.) From Local Storage</h3>
        <ol className="order-list">
          <li>First, you need to create an HtmlProject folder.</li>
          <li>Inside that folder, create an index.html file.</li>
          <li>Inside the HtmlProject folder, create an image folder.</li>
          <li>Inside the image folder, save some images.</li>
          <li>In the index.html file, create the basic HTML structure.</li>
          <li>
            Inside the <code>&lt;body&gt;</code> tag, create an
            <code>&lt;img&gt;</code> tag.
          </li>
          <li>
            In the <code>&lt;img&gt;</code> tag, provide the path of the image
            in the <code>src</code> attribute.
          </li>
          <li>Your image will be displayed on the webpage.</li>
        </ol>
        <div className="image">
          <img 
            src={HtmlImageTag} 
            alt="HtmlImageTag" 
            onClick={() => openModal(HtmlImageTag)} 
            style={{ cursor: 'pointer' }} 
          />
        </div>
        <h3>2.) From Online:</h3>

        <ul className="unorder-list">
          <li>First, you need to create an HtmlProject folder.</li>
          <li>Inside that folder, create an index.html file.</li>
          <li>In the index.html file, create the basic HTML structure.</li>
          <li>
            Inside the <code>&lt;body&gt;</code> tag, create an{" "}
            <code>&lt;img&gt;</code> tag.
          </li>
          <li>
            In the <code>&lt;img&gt;</code> tag, provide the path of the image
            in the <code>src</code> attribute.
          </li>
          <li>Your image will be displayed on the webpage.</li>
        </ul>
        <div className="image">
          <img 
            src={HtmlImageTagOnline} 
            alt="HtmlImageTagOnline" 
            onClick={() => openModal(HtmlImageTagOnline)} 
            style={{ cursor: 'pointer' }} 
          />
        </div>
        <h2>Attributes of the Image Tag:</h2>
        <ol className="order-list">
          <li>
            src attribute:
            <ul style={UlStyle} type="square">
              <li>It is used to specify the path of the image.</li>
              <li>
                <b>Syntax: </b> src="path"
              </li>
            </ul>
          </li>
          <li>
            height attribute:
            <ul style={UlStyle} type="disc">
              <li>It is used to set the height of the image.</li>
              <li>
                <b>Syntax:</b> height="value"
              </li>
            </ul>
          </li>
          <li>
            width attribute:
            <ul style={UlStyle}>
              <li>It is used to set the width of the image.</li>
              <li>
                <b>Syntax:</b> width="value"
              </li>
            </ul>
          </li>
          <li>
            alt attribute:
            <ul style={UlStyle} type="square">
              <li>It is used to provide alternative content for the image.</li>
              <li>
                Whenever an image is not displayed due to any reason, this
                alternative content will be displayed.
              </li>
              <li>It is recommended to use the alt attribute.</li>
              <li>The alternative content should be meaningful for the image.</li>
              <li>
                <b>Syntax:</b> alt="meaningfulcontent"
              </li>
            </ul>
          </li>
        </ol>
        <div className="image">
          <img 
            src={HtmlImageTagAttribute} 
            alt="HtmlImageTagAttribute" 
            onClick={() => openModal(HtmlImageTagAttribute)} 
            style={{ cursor: 'pointer' }} 
          />
        </div>
        <hr />
        <div className="btn-container">
          <div className="btn">
            <Link to="/html/htmltextformating">Previous Page</Link>
          </div>
          <div className="btn">
            <Link to="/html/htmlhyperlink">Next Page</Link>
          </div>
        </div>
      </div>
      <ImageModal isOpen={isModalOpen} src={modalImageSrc} onClose={closeModal} />
    </>
  );
}

export default HtmlImage;
