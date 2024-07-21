import React, { useState } from 'react';
import ClientServer from '../../assets/Html/client-server.png';
import HtmlComment from '../../assets/Html/HtmlComment.png';
import HtmlCommentSolution from '../../assets/Html/HtmlCommentSolution.png';
import { Link } from 'react-router-dom';
import ImageModal from '../ImageModal'; 
import './Intro.css';

function Intro() {
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
    <div className="container">
      <h1>#Introduction</h1>
      <h2>Webpage</h2>
      <ul className="unorder-list">
        <li>It is a digital document.</li>
        <li>All web pages are saved with the .html extension.</li>
      </ul>
      <h2>Website</h2>
      <ul className="unorder-list">
        <li>A collection of web pages is called a website.</li>
      </ul>
      <h2>Types of Websites:</h2>
      <table border={2}>
        <thead>
          <tr>
            <th>Static Website</th>
            <th>Dynamic Website</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Content is not changeable.</td>
            <td>Content is changeable.</td>
          </tr>
          <tr>
            <td>The same content is delivered to multiple users.</td>
            <td>Content varies with different users.</td>
          </tr>
          <tr>
            <td>Static websites are faster compared to dynamic websites.</td>
            <td>Dynamic websites are slower compared to static websites.</td>
          </tr>
          <tr>
            <td>A user database is not required.</td>
            <td>A user database is required.</td>
          </tr>
          <tr>
            <td>
              We need <b>client-side languages like HTML, CSS</b> to create a static website.
            </td>
            <td>
              We need <b>client-side and server-side languages (JavaScript)</b> to create a dynamic website.
            </td>
          </tr>
          <tr>
            <td>
              <b>Example:</b> Blog website
            </td>
            <td>
              <b>Example:</b> Instagram, Amazon
            </td>
          </tr>
        </tbody>
      </table>
      <div className="image">
        <h2>Client and Server Side</h2>
        <img
          src={ClientServer}
          alt="client-server"
          onClick={() => openModal(ClientServer)}
          style={{ cursor: 'pointer' }}
        />
        <table border="2px">
          <thead>
            <tr>
              <th>Client-Side</th>
              <th>Server-Side</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>A client is a user.</td>
              <td>It is a software program.</td>
            </tr>
            <tr>
              <td>The client will request the desired file from the server.</td>
              <td>
                The server will receive the client's request and respond by sending the user's desired file.
              </td>
            </tr>
            <tr>
              <td>To connect with a server, the client needs a web browser.</td>
              <td>
                If the requested file is not present, it will display <b>Error 404! FILE NOT FOUND</b>.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h2>Comments</h2>
        <ul className='unorder-list'>
          <li>Comments are used to document the source file.</li>
          <li>
            <b>Syntax:</b> &lt;!--comment Write any text you want to comment--&gt;.
          </li>
          <li>Comments are not for the users.</li>
          <li>Comments are not displayed on the browser.</li>
        </ul>
        <div className="image">
          <table>
            <tbody>
              <tr>
                <td>
                  <img src={HtmlComment} alt="HtmlCommentCodeImage" onClick={() => openModal(HtmlComment)} style={{ cursor: 'pointer' }} />
                </td>
                <td>
                  <img
                    src={HtmlCommentSolution}
                    alt="HtmlCommentSolutionImage"
                    onClick={() => openModal(HtmlCommentSolution)}
                    style={{ cursor: 'pointer' }}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
     
      <hr />
      <div className="button-container ">
        <div className="center" >
          <Link to="/html/htmlintro">Next Page</Link>
        </div>
      </div>
      <ImageModal isOpen={isModalOpen} src={modalImageSrc} onClose={closeModal} />
    </div>
  );
}

export default Intro;
