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
import DescripitionListCode from '../../assets/Html/DescripitionListCode.png';
import DescripitionListSolution from '../../assets/Html/DescripitionListSolution.png';

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
        <h1>#Html List</h1>
        <p>List is a collection of similar items.</p>
        <div className="OrderList">
        <h2>Order list</h2>
          <ol className='order-list'>
            <li>Ordered list is used to display list items in a sequential order.</li>
            <li>It is a block-level element.</li>
            <li>To create an ordered list, we use the &lt;ol&gt;&lt;/ol&gt; tag.</li>
            <li>In ordered lists we represent the sequence as alphabet, digit, or roman number.</li>
            <li>To represent list items we have &lt;li&gt;&lt;/li&gt; tag.</li>
          </ol>
          <h3>Attributes of order list:</h3>
          <p>
            <b>Type attribute:</b> It is used to specify the type of numbering used for the list item. <br />
            <b>Syntax:</b> type="value"
          </p>
          <ul className="OrderListTypeAttribute" type="none">
            <li>"1" Number (default)</li>
            <li>"A" UpperCase alphabet</li>
            <li>"a" LowerCase alphabet</li>
            <li>"i" LowerCase roman</li>
            <li>"I" UpperCase roman</li>
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
                      alt=""
                      onClick={() => openModal(HtmlOrderListTypeAttributeCode)}
                      style={{ cursor: 'pointer' }}
                    />
                  </td>
                  <td>
                    <img
                      src={HtmlOrderListTypeAttribute}
                      alt=""
                      onClick={() => openModal(HtmlOrderListTypeAttribute)}
                      style={{ cursor: 'pointer' }}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <p><b>Start Attribute:-</b> Define the starting number or sequence of the ordered list.
            <br/>
            <b>Syntax:</b>start="digitnumber"
            </p>
            <div className="note">
              Start attributes only accept digit number.
            </div>
            <table>
              <thead>
                <th colSpan={2}>Start Atrribute</th>
              </thead>
              <tbody>
                <tr>
                  <td><img src={HtmlOrderListStartAttributeCode} alt="" onClick={()=>openModal(HtmlOrderListStartAttributeCode)} style={{cursor:'pointer'}} /></td>
                  <td>
                    <img src={HtmlOrderListStartAttributeSolution} alt=""  onClick={function(){
                      openModal(HtmlOrderListStartAttributeSolution)
                    }} style={{cursor:'pointer'}}/>
                  </td>
                </tr>
              </tbody>
            </table>
            <p><b>Reversed Attibutes:</b> It reverse the number sequence of the lint items.
            <br />
            <b>Syntax:</b> reversed</p>
            <table>
              <thead>
                <th colSpan={2}>Reversed Attribut</th>
              </thead>
              <tbody>
                <tr>
                  <td><img src={HtmlOrderListReversedAttributeCode} alt=""  onClick={()=>openModal(HtmlOrderListReversedAttributeCode)} style={{cursor:'pointer'}}/></td>
                  <td> <img src={HtmlOrderListReversedAttributeSolution} alt="" onClick={function(){
                    openModal(HtmlOrderListReversedAttributeSolution)
                  }} style={{cursor:'pointer'}}/></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="unoder-list">
          <h2>Unorder list</h2>
          <ul className='unorder-list'>
            <li>Unorder list is used to display list item in a bulleted list format.</li>
            <li>It ia block level element.</li>
            <li>To create an unordered list we use the &lt;ul&gt; &lt;/ul&gt; tag.</li>
            <li>Here we can represent sequence as <b>disc, square, or circle.</b></li>
            <li>To represent list item wh have &lt;li&gt;&lt;/li&gt;.</li>
          </ul>
          <h3>Attributes of unorder list</h3>
          <p><b>Type attribute:-</b> It is used to specify the type of bullet used for the list item.</p>
          <p><b>Syntax: </b>type="value"</p>
          <ul className="OrderListTypeAttribute" type="none">
            <li>Disc</li>
            <li>Square</li>
            <li>Circle</li>
            <li>none</li>
          </ul>
          <div className="image">
            <table>
              <thead>
              <th colSpan={2}>Type Attribute</th>
              </thead>
              <tbody>
                <tr>
                  <td><img src={HtmlUnorderListTypeAttributeCode} alt="" onClick={()=>openModal(HtmlUnorderListTypeAttributeCode)} style={{cursor:'pointer'}}/></td>
                  <td><img src={HtmlUnorderListTypeAttributeSolution} alt=""  onClick={function(){
                    openModal(HtmlUnorderListTypeAttributeSolution)
                  }} style={{cursor:'pointer'}}/></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="Description-list">
        <h2>Description List/ Defination List/ Dictionary List</h2>
        <ul>
          <li>A Description list is used to sefine term and theri corresponding defintion.</li>
          <li>To create a description list in html we use the &lt;dl&gt; &lt;/dl&gt;.</li>
          <li>To represent term and it's defination we have &lt;dt&gt;.....&lt;/dt&gt; and &lt;dd&gt;.....&lt;/dd&gt; tag respectvely.</li>
        </ul>
        <div className="image">
          <table>
            <thead>
              <th colSpan={2}>Description List</th>
            </thead>
            <tbody>
              <tr>
                <td><img src={DescripitionListCode} alt=""  onClick={()=>openModal(DescripitionListCode)} style={{cursor:'pointer'}}/></td>
                <td><img src={DescripitionListSolution} alt="" onClick={function(){
                  openModal(DescripitionListSolution)
                }} style={{cursor:'pointer'}}/></td>
              </tr>
            </tbody>
          </table>
        </div>
        </div>
        <hr />
        <div className="btn-container">
          <div className="btn">
            <Link to="/html/htmlTags">Previous Page</Link>
          </div>
          <div className="btn">
            <Link to="">Next Page</Link>
          </div>
        </div>
      </div>
    
      <ImageModal isOpen={isModalOpen} src={modalImageSrc} onClose={closeModal} />
    </>
  );
}

export default HtmlList;
