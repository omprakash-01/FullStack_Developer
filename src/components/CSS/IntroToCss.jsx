import React,{useState} from 'react'

import InlineCssCode from '../../assets/Css/InlineCssCode.png'
import InlineCssCodeSolution from '../../assets/Css/InlineCssCodeSolution.png'
import InternalCssCode from '../../assets/Css/InternalCssCode.png'
import InternalCssCodeOutput from '../../assets/Css/InternalCssCodeOutput.png'

import ImageModal from '../ImageModal';
function IntroToCss() {

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
      {/* Start Introduction to Css */}
        <h1>#Introduction to Css</h1>
        <div className="unorder-list">
          <ul>
            <li>Css stand for <strong>Cascading style sheet.</strong></li>
            <li>Css file is use for style the html file.</li>
            <li>Css was develop by hakon wium lie in 1994.</li>
            <li>It was publish in 1996 by w3c (<b>World wide consortium</b>).</li>
            <li>Curren version of css is 4. It was released in <b>December 2020</b>.</li>
            <li>Css file should be saved with <strong>.css </strong>extension</li>
          </ul>
        </div>
        {/* End Introduction to Css */}
        

        {/* Start How to add styling to HTML file */}
        <div className="type-of-css-file">
        <h2>How to add styling to Html file</h2>
          <table>
            <thead>
              <tr>
                <th>Inline Css</th>
                <th>Internal Css</th>
                <th>External CSs</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>The css that we are writting directly inside the tag is called inline css.</td>
                <td>The css that we are writting inside the html document is called as internal css.</td>
                <td>The css we are writting in a seprate file is called external css.</td>
              </tr>
              <tr>
                <td>To write inline css we have style attributes.</td>
                <td>To write internal css we have style tag. Style tag should be written inside  the head tag.</td>
                <td>The file should be saved with .css extension. To link this external file with html document we have to use &lt;link&gt; tag.</td>
              </tr>
              <tr>
                <td>
                <b>Code:</b>
                  <div className="image">
                    <img src={InlineCssCode} alt="" onClick={()=>openModal(InlineCssCode)} style={{cursor:'pointer'}} />
                  </div>
                </td>
                <td>
                  <b>Code:</b>
                  <div className="image">
                    <img src={InternalCssCode} alt="" />
                  </div>
                </td>
                <td></td>
              </tr>
              <tr>
                <td>
                <b>Output</b>
                  <div className="image">
                    <img src={InlineCssCodeSolution} alt="InlineCssCodeSolution"  onClick={()=>openModal(InlineCssCodeSolution)} style={{cursor:'pointer'}}/>
                  </div>
                </td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <ImageModal isOpen={isModalOpen} src={modalImageSrc} onClose={closeModal} />
      </div>
    </>
  )
}

export default IntroToCss
