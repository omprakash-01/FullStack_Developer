import React, { useState } from 'react';
import ImageModal from '../ImageModal'; 
import { Link } from "react-router-dom";
import HtmlOrderListTypeAttributeCode from '../../assets/Html/HtmlOrderListTypeAttributeCode.png';
import HtmlOrderListTypeAttribute from '../../assets/Html/HtmlOrderListTypeAttribute.png';
import HtmlOrderListStartAttributeCode from '../../assets/Html/HtmlOrderListStartAttributeCode.png';
import HtmlOrderListStartAttributeSolution from '../../assets/Html/HtmlOrderListStartAttributeSolution.png';
import HtmlOrderListReversedAttributeCode from '../../assets/Html/HtmlOrderListReversedAttributeCode.png';
import HtmlOrderListReversedAttributeSolution from '../../assets/Html/HtmlOrderListReversedAttributeSolution.png';
import HtmlUnorderListTypeAttributeCode from '../../assets/Html/HtmlUnorderListTypeAttributeCode.png';
import HtmlUnorderListTypeAttributeSolution from '../../assets/Html/HtmlUnorderListTypeAttributeSolution.png';
import DescriptionListCode from '../../assets/Html/DescriptionListCode.png';
import DescriptionListSolution from '../../assets/Html/DescriptionListSolution.png';

function HtmlList() {
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
        <h1>#HTML List</h1>
        <p>A list is a collection of similar items.</p>
        <div className="OrderList">
          <h2>Ordered List</h2>
          <ol className='order-list'>
            <li>An ordered list is used to display list items in a sequential order.</li>
            <li>It is a block-level element.</li>
            <li>To create an ordered list, we use the &lt;ol&gt;&lt;/ol&gt; tag.</li>
            <li>In ordered lists, we represent the sequence as alphabet, digit, or Roman numerals.</li>
            <li>To represent list items, we use the &lt;li&gt;&lt;/li&gt; tag.</li>
          </ol>
          <h3>Attributes of Ordered List:</h3>
          <p>
            <b>Type attribute:</b> It is used to specify the type of numbering used for the list items. <br />
            <b>Syntax:</b> type="value"
          </p>
          <ul className="OrderListTypeAttribute" type="none">
            <li>"1" Number (default)</li>
            <li>"A" Uppercase alphabet</li>
            <li>"a" Lowercase alphabet</li>
            <li>"i" Lowercase Roman</li>
            <li>"I" Uppercase Roman</li>
          </ul>
          <div className="image">
            <table>
              <thead>
                <tr>
                  <th colSpan={2}>Type Attribute</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img
                      src={HtmlOrderListTypeAttributeCode}
                      alt="HtmlOrderListTypeAttributeCode"
                      onClick={() => openModal(HtmlOrderListTypeAttributeCode)}
                      style={{ cursor: 'pointer' }}
                    />
                  </td>
                  <td>
                    <img
                      src={HtmlOrderListTypeAttribute}
                      alt="HtmlOrderListTypeAttribute"
                      onClick={() => openModal(HtmlOrderListTypeAttribute)}
                      style={{ cursor: 'pointer' }}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <p><b>Start Attribute:</b> Defines the starting number or sequence of the ordered list.
            <br/>
            <b>Syntax:</b> start="digitnumber"
            </p>
            <div className="note">
              Start attributes only accept digit numbers.
            </div>
            <table>
              <thead>
                <tr>
                  <th colSpan={2}>Start Attribute</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img
                      src={HtmlOrderListStartAttributeCode}
                      alt="HtmlOrderListStartAttributeCode"
                      onClick={() => openModal(HtmlOrderListStartAttributeCode)}
                      style={{ cursor: 'pointer' }}
                    />
                  </td>
                  <td>
                    <img
                      src={HtmlOrderListStartAttributeSolution}
                      alt="HtmlOrderListStartAttributeSolution"
                      onClick={() => openModal(HtmlOrderListStartAttributeSolution)}
                      style={{ cursor: 'pointer' }}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <p><b>Reversed Attribute:</b> Reverses the number sequence of the list items.
            <br />
            <b>Syntax:</b> reversed</p>
            <table>
              <thead>
                <tr>
                  <th colSpan={2}>Reversed Attribute</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img
                      src={HtmlOrderListReversedAttributeCode}
                      alt="HtmlOrderListReversedAttributeCode"
                      onClick={() => openModal(HtmlOrderListReversedAttributeCode)}
                      style={{ cursor: 'pointer' }}
                    />
                  </td>
                  <td>
                    <img
                      src={HtmlOrderListReversedAttributeSolution}
                      alt="HtmlOrderListReversedAttributeSolution"
                      onClick={() => openModal(HtmlOrderListReversedAttributeSolution)}
                      style={{ cursor: 'pointer' }}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="unorder-list">
          <h2>Unordered List</h2>
          <ul className='unorder-list'>
            <li>An unordered list is used to display list items in a bulleted format.</li>
            <li>It is a block-level element.</li>
            <li>To create an unordered list, we use the &lt;ul&gt;&lt;/ul&gt; tag.</li>
            <li>Here, we can represent the sequence as <b>disc, square, or circle.</b></li>
            <li>To represent list items, we use &lt;li&gt;&lt;/li&gt;.</li>
          </ul>
          <h3>Attributes of Unordered List</h3>
          <p><b>Type attribute:</b> It is used to specify the type of bullet used for the list items.</p>
          <p><b>Syntax: </b>type="value"</p>
          <ul className="OrderListTypeAttribute" type="none">
            <li>Disc</li>
            <li>Square</li>
            <li>Circle</li>
            <li>None</li>
          </ul>
          <div className="image">
            <table>
              <thead>
                <tr>
                  <th colSpan={2}>Type Attribute</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img
                      src={HtmlUnorderListTypeAttributeCode}
                      alt="HtmlUnorderListTypeAttributeCode"
                      onClick={() => openModal(HtmlUnorderListTypeAttributeCode)}
                      style={{ cursor: 'pointer' }}
                    />
                  </td>
                  <td>
                    <img
                      src={HtmlUnorderListTypeAttributeSolution}
                      alt="HtmlUnorderListTypeAttributeSolution"
                      onClick={() => openModal(HtmlUnorderListTypeAttributeSolution)}
                      style={{ cursor: 'pointer' }}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="description-list">
          <h2>Description List / Definition List / Dictionary List</h2>
          <ul>
            <li>A description list is used to define terms and their corresponding definitions.</li>
            <li>To create a description list in HTML, we use the &lt;dl&gt;&lt;/dl&gt; tag.</li>
            <li>To represent terms and their definitions, we use the &lt;dt&gt;.....&lt;/dt&gt; and &lt;dd&gt;.....&lt;/dd&gt; tags, respectively.</li>
          </ul>
          <div className="image">
            <table>
              <thead>
                <tr>
                  <th colSpan={2}>Description List</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img
                      src={DescriptionListCode}
                      alt="DescriptionListCode"
                      onClick={() => openModal(DescriptionListCode)}
                      style={{ cursor: 'pointer' }}
                    />
                  </td>
                  <td>
                    <img
                      src={DescriptionListSolution}
                      alt="DescriptionListSolution"
                      onClick={() => openModal(DescriptionListSolution)}
                      style={{ cursor: 'pointer' }}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <hr />
        <div className="btn-container">
          <div className="btn">
            <Link to="/html/htmltags">Previous Page</Link>
          </div>
          <div className="btn">
            <Link to="/html/htmltextformating">Next Page</Link>
          </div>
        </div>
      </div>
    
      <ImageModal isOpen={isModalOpen} src={modalImageSrc} onClose={closeModal} />
    </>
  );
}

export default HtmlList;
