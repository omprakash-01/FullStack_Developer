import React from "react";
import { Link } from "react-router-dom";
import HtmliframeCode from "../../assets/Html/HtmliframeCode.png";
import './HtmlIframe.css';

function HtmlIframe() {
  const textCenterStyle = {
    textAlign: 'center',
    padding: '10px'
  };

  return (
    <>
      <div className="container">
        <h1>#HTML Iframe</h1>
        <div className="iframe">
          <ol className="order-list">
            <li>It is used to create a subwindow inside a parent window.</li>
            <li>
              To create an iframe, HTML provides the &lt;iframe&gt;&lt;/iframe&gt; tag.
            </li>
            <li>It is a container tag.</li>
            <li>It is an inline-level element.</li>
            <li>
              To specify the path of the document, use the <q>src</q> attribute.
            </li>
            <li>
              It is not recommended to use multiple iframes on a webpage
              because it can slow down the webpage, creating a negative
              impact on website performance and user experience.
            </li>
          </ol>
          <div className="window">
            <div className="window-1">
              <h2 style={textCenterStyle}>Window-1</h2>
              <iframe
                src="http://localhost:5173/html/htmlform"
              ></iframe>
            </div>
            <div className="window-2">
              <h2 style={textCenterStyle}>Window-2</h2>
              <iframe
                src="http://localhost:5173/react/introtoreact"
              ></iframe>
            </div>
          </div>
          <div className="image">
            <img src={HtmliframeCode} alt="HTML Iframe Code" />
          </div>
        </div>
        <hr />
        <div className="btn-container">
          <div className="btn">
            <Link to="/html/htmlform">Previous Page</Link>
          </div>
          <div className="btn">
            <Link to="/html/htmlsemantic">Next Page</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default HtmlIframe;
