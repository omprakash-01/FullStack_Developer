import React, { useState } from "react";
import { Link } from "react-router-dom";
import htmlElement from "../../assets/Html/htmlElement.png";
import htmlheading from "../../assets/Html/htmlheading.png";
import HtmlheadingSolution from "../../assets/Html/HtmlheadingSolution.png";
import paratag from "../../assets/Html/paratag.png";
import paratagsolution from "../../assets/Html/paratagsolution.png";
import HtmlTagDivCode from "../../assets/Html/HtmlTagDivCode.png";
import HtmlTagClassIdCode from "../../assets/Html/HtmlTagClassIdCode.png";
import ImageModal from "../ImageModal";

function HtmlTags() {
  const tdStyle = {
    textAlign: "center",
    fontWeight: "bold",
  };
  const aStyle = {
    color: "black",
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");

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
          <p>Tags are the keywords enclosed within angular brackets.</p>
          <p>
            <b>Example:</b> <br /> &lt;html&gt; : It means it is a starting tag.{" "}
            <br /> &lt;/html&gt; : Here, '/' means closing tag.
          </p>

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
                <td>We have to write the opening tag as well as the closing tag.</td>
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
          <p>HTML elements are the basic units of HTML.</p>
          <p>
            <b>Element:</b> opening tag + content + closing tag
          </p>
          <div className="image">
            <img
              src={htmlElement}
              alt="HTML Element"
              onClick={() => openModal(htmlElement)}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div>
            <h2>Types of Elements</h2>
            <table>
              <thead>
                <tr>
                  <th>Block Level Element</th>
                  <th>Inline Level Element</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>They occupy the full width of the container.</td>
                  <td>They take the space required by the container.</td>
                </tr>
                <tr>
                  <td>They always start from a new line.</td>
                  <td>They do not start from a new line.</td>
                </tr>
                <tr>
                  <td>We can set height and width for block level elements.</td>
                  <td>
                    We cannot set height and width for inline level elements.{" "}
                    <br />{" "}
                    <strong>
                      Except &lt;img&gt; tag. We can set height and width in
                      the image tag.
                    </strong>
                  </td>
                </tr>
                <tr>
                  <td>&lt;p&gt;&lt;/p&gt;, &lt;div&gt;&lt;/div&gt;</td>
                  <td>&lt;img&gt;, &lt;span&gt;&lt;/span&gt;</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <h3>Div & Span</h3>
            <p>
              They are used to create containers so that we can group the
              content & apply style.
            </p>
            <table>
              <thead>
                <tr>
                  <th>Div</th>
                  <th>Span</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>It is a block level element.</td>
                  <td>It is an inline level element.</td>
                </tr>
                <tr>
                  <td>We can set height and width.</td>
                  <td>We can't set height and width.</td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <b>Example:</b>
                    <div className="image">
                      <img
                        src={HtmlTagDivCode}
                        alt="HtmlTagDivCode"
                        onClick={() => openModal(HtmlTagDivCode)}
                        style={{ cursor: "pointer" }}
                      />
                    </div>
                    <h4>Pollution</h4>
                    <div>
                      <h5>Air Pollution</h5>
                      <p>
                        Air pollution, caused by emissions from industries and
                        vehicles, severely impacts human health and contributes
                        to
                        <span style={{ backgroundColor: "red" }}>
                          global warming
                        </span>
                        .
                      </p>
                    </div>

                    <div>
                      <h5>Water Pollution</h5>
                      <p>
                        Water pollution, often resulting from industrial waste
                        and agricultural runoff, contaminates drinking water
                        sources and
                        <span style={{ backgroundColor: "lightblue" }}>
                          harms aquatic ecosystems
                        </span>
                        .
                      </p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <h2>HTML Attributes</h2>
            <ul className="unorder-list">
              <li>It is a property of a tag.</li>
              <li>
                We apply attributes so that the tag can behave in our desired manner.
              </li>
              <li>They are used to provide additional information about a tag.</li>
              <li>We have to apply attributes in the opening tag.</li>
              <li>It will not work in the closing tag.</li>
              <li>
                <b>Example:</b> &lt;img src="" alt="" size="100px"
                height="200px"&gt; Here,
                <b>
                  {" "}
                  <u>height</u>
                </b>{" "}
                and{" "}
                <b>
                  <u>size</u>{" "}
                </b>
                are the attributes.
              </li>
            </ul>
          </div>
          <div>
            <h3>Class & Id</h3>
            <table>
              <thead>
                <tr>
                  <th>Class</th>
                  <th>Id</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Class is used to target multiple elements.</td>
                  <td>Id is the unique identity of an element.</td>
                </tr>
                <tr>
                  <td>One element can have multiple classes.</td>
                  <td>One element should have only one id.</td>
                </tr>
                <tr>
                  <td>The same classes can be applied to multiple elements.</td>
                  <td>Id should be unique in a webpage.</td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <div className="image">
                      <img src={HtmlTagClassIdCode} alt="HtmlTagClassIdCodeImage" onClick={()=>openModal(HtmlTagClassIdCode)} style={{cursor:'pointer'}} />
                    </div>
                    <h4 id="main-heading" className="heading">
                      Pollution
                    </h4>
                    <div id="air-pollution">
                      <h5 className="heading">Air Pollution</h5>
                      <p className="para">
                        Air pollution, caused by emissions from industries and
                        vehicles, severely impacts human health and contributes
                        to global warming.
                      </p>
                    </div>
                    <div id="water-pollution">
                      <h5 className="heading">Water Pollution</h5>
                      <p className="para">
                        Water pollution, often resulting from industrial waste
                        and agricultural runoff, contaminates drinking water
                        sources and harms aquatic ecosystems.
                      </p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="note">
            <q>id & class</q> are mainly used for targeting elements in CSS for
            styling and in JavaScript to efficiently select and manipulate HTML
            elements.
          </div>
          <div>
            <h2>HTML Heading</h2>
            <ul className="unorder-list">
              <li>HTML headings are used to create headings in our webpage.</li>
              <li>
                We have <strong>six types</strong> of headings in HTML, from h1 to h6.
              </li>
              <li>It is recommended to use h1 only once in a webpage.</li>
              <li>h1 is the most important heading in the heading tag.</li>
              <li>h6 is the least important heading in the heading tag.</li>
              <li>
                Browsers automatically add a line break before and after the
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
                    HTML heading element
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src={htmlheading}
                      alt="htmlheading"
                      onClick={() => openModal(htmlheading)}
                      style={{ cursor: "pointer" }}
                    />
                  </td>
                  <td>
                    <img
                      src={HtmlheadingSolution}
                      alt="HtmlheadingSolution"
                      onClick={function () {
                        openModal(HtmlheadingSolution);
                      }}
                      style={{ cursor: "pointer" }}
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan={2} style={tdStyle}>
                    HTML paragraph element
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src={paratag}
                      alt="paratag"
                      onClick={() => openModal(paratag)}
                      style={{ cursor: "pointer" }}
                    />
                  </td>
                  <td>
                    <img
                      src={paratagsolution}
                      alt="paratagsolution"
                      onClick={function () {
                        openModal(paratagsolution);
                      }}
                      style={{ cursor: "pointer" }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>For more HTML elements visit:</td>
                  <td>
                    <a
                      style={aStyle}
                      href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element"
                      target="_blank"
                    >
                      MDN Elements
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
            <Link to="/html/htmlintro">Previous Page</Link>
          </div>
          <div className="btn">
            <Link to="/html/htmllist">Next Page</Link>
          </div>
        </div>
        <ImageModal
          isOpen={isModalOpen}
          src={modalImageSrc}
          onClose={closeModal}
        />
      </div>
    </>
  );
}

export default HtmlTags;
