import React, { useState } from "react";
import Htmltableone from "../../assets/Html/Htmltableone.png";
import Htmltabletwo from "../../assets/Html/Htmltabletwo.png";
import { Link } from "react-router-dom";
import ImageModal from "../ImageModal";

function HtmlTable() {
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
        <h1>#Table</h1>
        <ul className="unorder-list">
          <li>Combination of row and columns.</li>
          <li>cell intersection of row and columns.</li>
          <li>
            Html table allow to display tabular data in structured format.
          </li>
          <li>
            In html we have &lt;table&gt;.....&lt;/table&gt; tag to create
            table.
          </li>
          <li>&lt;table&gt; tat is container tag.</li>
          <li>In Html tables are created row by row.</li>
          <li>
            To represent table row we have &lt;tr&gt;.....&lt;/tr&gt; tag.
          </li>
          <li>
            To create cell we have &lt;th&gt;.....&lt;/th&gt; and
            &lt;tr&gt;.....&lt;/tr&gt; tag where &lt;th&gt; represent column
            heading and &lt;td&gt; represent data cell.
          </li>
          <li></li>
        </ul>
        <h2>Caption Tag:</h2>
        <ol className="order-list">
          <li>It is used to give the title to the table.</li>
          <li>&lt;caption&gt;.....&lt;/caption&gt; tag is a container tag.</li>
          <li>
            We have to write &lt;caption&gt; tag with in the &lt;table&gt; tag.
          </li>
        </ol>
        <h2>Cell Spanning:</h2>
        <p>We can span the cell in two ways:-</p>
        <h3>Column-wise:</h3>
        <p>To span the cell on column basis we have colspan attributes.</p>
        <p>
          <b>Syntax:</b> colspan="number of cell"
        </p>
        <h3>Row-wise:</h3>
        <p>To span the cell on row basis we have rowspan attributes.</p>
        <p>
          <b>Syntax:</b>rowspan="number of cell"
        </p>
        <div className="note">
          rowspan and colspan can be applied only on &lt;td&gt; and &lt;th&gt;
          tags and not an &lt;tr&gt; tag.
        </div>
        <h2>Cell padding and cell spacing:</h2>
        <p>These are attributes of table tag.</p>
        <table>
          <thead>
            <tr>
              <th>Cell padding</th>
              <th>Cell spacing</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Space between cell border and cell content.</td>
              <td>It is space around the cell.</td>
            </tr>
            <tr>
              <td>
                <b>Syntax:</b> cellpadding="value"
              </td>
              <td>
                <b>Syntax:</b> cellspacing="value"
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <h2>Thead, Tbody, and Tfoot Tag:</h2>
        <ol className="order-list">
          <li>
            The &lt;thead&gt;, &lt;tbody&gt;, and &lt;tfoot&gt; tags are used to
            group content within a HTML table.
          </li>
          <li>
            These tags help to structure the table and make it easier to read
            and understand.
          </li>
          <li>
            <b>Thead tag :</b> &lt;thead&gt;.....&lt;/thead&gt; tag represent
            the top most part of our table. The column headings of table should
            be written within &lt;thead&gt; tag. &lt;thead&gt; should be placed
            before the &lt;tbody&gt; tag.
          </li>
          <li>
            <b>Tbody tag :</b> &lt;tbody&gt;.....&lt;/tbody&gt; tag represent
            the main content of our table. The row data/content should be
            written within the &lt;tbody&gt; tag. &lt;tbody&gt; should be placed
            after the &lt;thead&gt; tag.
          </li>
          <li>
            <b>Tfoot tag :</b> &lt;tfoot&gt;.....&lt;/tfoot&gt; tag represent
            the bottom part of our table. The conclusion/summary of the table
            should be written within the &lt;tfoot&gt; tag. &lt;tfoot&gt; should
            be placed after the &lt;tbody&gt; tag.
          </li>
          <li>All of them are container tag.</li>
        </ol>
        <div className="note">
          <p>
            &lt;thead&gt;, &lt;tbody&gt;, &lt;tfoot&gt; tags are not mandatory
            but highly recommended to use while working with tables.
          </p>
        </div>
        <h2>Column Grouping</h2>
        <ul className="unorder-list">
          <li>
            In Html we can group the cells on column busis by using
            &lt;colgroup&gt;.....&lt;colgroup&gt; tag.
          </li>
          <li>&lt;colgroup&gt; tag is a container tag.</li>
          <li>
            To represent table columns in &lt;colgroup&gt; we &lt;col&gt; tag.
          </li>
          <li>&lt;col&gt; tag is a non-container tag.</li>
          <li>
            The sequence of &lt;col&gt; tag represent the table columns
            respectively.
          </li>
        </ul>
        <div className="image">
          <img
            src={Htmltableone}
            alt="Htmltableone"
            onClick={() => openModal(Htmltableone)}
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className="image">
          <img
            src={Htmltabletwo}
            alt="Htmltabletwo"
            onClick={function () {
              openModal(Htmltabletwo);
            }}
            style={{ cursor: "pointer" }}
          />
        </div>
        <hr />
        <div className="btn-container">
          <div className="btn">
            <Link to="/html/htmlhyperlink">Previous Page</Link>
          </div>
          <div className="btn">
            <Link to="/">Next Page</Link>
          </div>
        </div>
      </div>
      <ImageModal
        isOpen={isModalOpen}
        src={modalImageSrc}
        onClose={closeModal}
      />
    </>
  );
}

export default HtmlTable;
