import React,{useState} from "react";
import { Link } from "react-router-dom";
import htmlElement from "../../assets/Html/htmlElement.png";
import htmlheading from "../../assets/Html/htmlheading.png";
import HtmlheadingSolution from "../../assets/Html/HtmlheadingSolution.png";
import paratag from "../../assets/Html/paratag.png";
import paratagsolution from "../../assets/Html/paratagsolution.png";
import ImageModal from '../ImageModal'; 

function HtmlTags() {
  const tdStyle = {
    textAlign: "center",
    fontWeight: "bold",
  };
  const aStyle = {
    color: "black",
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
        <div>
          <h1>#HTML Tags</h1>
          <p>Tags are the keywords enclosed within the angular brackets.</p>
          <p><b>Example:</b> <br /> &lt;html&gt; : It means it is a starting tag. <br /> &lt;/html&gt; : Here, '/' means closing tag.</p>

          <p>
            <b>Syntax:</b> &lt;p&gt; &lt;/p&gt;, &lt;img&gt;, &lt;div&gt;
            &lt;/div&gt;
          </p>
          <h2>Types of Tags</h2>
          <table>
            <thead>
              <tr>
                <th>Container Tag</th>
                <th>Non-Container Tag</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>We have to close this tag.</td>
                <td>No need to close this tag.</td>
              </tr>
              <tr>
                <td>We have to write opening tag as well as closing tag.</td>
                <td>We have to write only the opening tag.</td>
              </tr>
              <tr>
                <td>They will contain some content.</td>
                <td>These tags do not contain content.</td>
              </tr>
              <tr>
                <td>
                  <b>Example:</b> &lt;p&gt; &lt;/p&gt;, &lt;html&gt;
                  &lt;/html&gt;, &lt;div&gt; &lt;/div&gt;, &lt;head&gt;
                  &lt;/head&gt;
                </td>
                <td>
                  <b>Example:</b> &lt;img&gt;, &lt;br&gt;, &lt;hr&gt;
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <h2>HTML Element</h2>
          <p>HTML element are the basic unit of HTML.</p>
          <p>
            <b>Element:</b> opening tag + content + closing tag
          </p>
          <div className="image">
            <img src={htmlElement} alt="HTML Element" onClick={()=> openModal(htmlElement)} style={{cursor:'pointer'}}/>
          </div>
          <div>
          <h2>Type of elements</h2>
          <table>
            <thead>
            <tr>
              <th>Block level element</th>
              <th>Inline level element</th>

            </tr>
            </thead>
            <tbody>
              <tr>
                <td>They occupy full widht of the container.</td>
                <td>They take space required by the container.</td>
              </tr>
              <tr>
                <td>They always start from new line.</td>
                <td>They do not start from new line.</td>
              </tr>
              <tr>
                <td>We can set height and width for block level element.</td>
                <td>
                  We can not set height and width for inline level elment. <br /> <strong>Except &lt;img&gt; tag. we can set heigh and width in image tag.</strong>
                </td>
              </tr>
              <tr>
                <td>&lt;p&gt;&lt;/p&gt;, &lt;div&gt;&lt;/div&gt; </td>
                <td>&lt;img&gt;, &lt;span&gt;&lt;/span&gt;</td>
              </tr>
            </tbody>
          </table>
        </div>
          <div>
            <h2>Html Attributes</h2>
            <ul className="unorder-list">
              <li>It is property tag.</li>
              <li>
                We apply attributes so that tag can behave in our desire manner.
              </li>
              <li>They are used to provie additional information about tag.</li>
              <li>We have to apply attributes in opening tag.</li>
              <li>It will not work in the closing tag.</li>
              <li>
                <b>Example:</b> &lt;img src="" alt="" size="100px" height="200px"&gt; Here, 
                  <b> <u>height</u></b> and <b><u>size</u> </b>are the attribute 
              </li>
            </ul>
          </div>
          <div>
            <h2>Html Heading</h2>
            <ul className="unorder-list">
              <li>Html heading are used to create heading in out webpage.</li>
              <li>
                We have <strong>six type </strong>of heading in html that is
                from h1 to h6.
              </li>
              <li>It is recommended to use h1 only one's in webpage.</li>
              <li>h1 is the most important heading in heading tag.</li>
              <li>h6 is the least important heading in heading tag.</li>
              <li>
                Browser automatically add on e line break before and after the
                heading.
              </li>
            </ul>
          </div>
          <div className="image">
            <table>
              <thead>
              <tr>
                <th>Input Code</th>
                <th>Output</th>

              </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={2} style={tdStyle}>
                    Html heading element
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src={htmlheading} alt="htmlheading" onClick={()=> openModal(htmlheading)} style={{cursor:'pointer'}} />
                  </td>
                  <td>
                    <img src={HtmlheadingSolution} alt="HtmlheadingSolution"  onClick={function(){
                      openModal(HtmlheadingSolution);
                    }} style={{cursor:'pointer'}}/>
                  </td>
                </tr>
                <tr>
                  <td colSpan={2} style={tdStyle}>
                    Html paragraph element
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src={paratag} alt="paratag" onClick={()=> openModal(paratag)} style={{cursor:'pointer'}}/>
                  </td>
                  <td>
                    <img src={paratagsolution} alt="paratagsolution"  onClick={function(){
                      openModal(paratagsolution);
                    }} style={{cursor:'pointer'}}/>
                  </td>
                </tr>
                <tr>
                  <td>For More HTML element visit:</td>
                  <td>
                    <a
                      style={aStyle}
                      href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element"
                      target="_blank"
                    >
                      Mdn Element
                    </a>{" "}
                    <a href=""></a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
       
        <hr />
        <div className="btn-container">
          <div className="btn">
            <Link to="/Html">Previous Page</Link>
          </div>
          <div className="btn">
            <Link to="/html/htmllist">Next Page</Link>
          </div>
        </div>
        <ImageModal isOpen={isModalOpen} src={modalImageSrc} onClose={closeModal} />
      </div>
    </>
  );
}

export default HtmlTags;
