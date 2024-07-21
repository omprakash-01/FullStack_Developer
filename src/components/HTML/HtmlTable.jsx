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
          <li>Combination of rows and columns.</li>
          <li>Cell intersection of rows and columns.</li>
          <li>HTML tables allow us to display tabular data in a structured format.</li>
          <li>In HTML, we use the &lt;table&gt;.....&lt;/table&gt; tag to create a table.</li>
          <li>&lt;table&gt; is a container tag.</li>
          <li>In HTML, tables are created row by row.</li>
          <li>To represent a table row, we use the &lt;tr&gt;.....&lt;/tr&gt; tag.</li>
          <li>
            To create cells, we use &lt;th&gt;.....&lt;/th&gt; and &lt;td&gt;.....&lt;/td&gt; tags, where &lt;th&gt; represents column headings and &lt;td&gt; represents data cells.
          </li>
        </ul>
        <h2>Caption Tag:</h2>
        <ol className="order-list">
          <li>It is used to give a title to the table.</li>
          <li>The &lt;caption&gt;.....&lt;/caption&gt; tag is a container tag.</li>
          <li>We have to write the &lt;caption&gt; tag within the &lt;table&gt; tag.</li>
        </ol>
        <h2>Cell Spanning:</h2>
        <p>We can span cells in two ways:</p>
        <h3>Column-wise:</h3>
        <p>To span cells across columns, we use the colspan attribute.</p>
        <p>
          <b>Syntax:</b> colspan="number of cells"
        </p>
        <h3>Row-wise:</h3>
        <p>To span cells across rows, we use the rowspan attribute.</p>
        <p>
          <b>Syntax:</b> rowspan="number of cells"
        </p>
        <div className="note">
          rowspan and colspan can be applied only to &lt;td&gt; and &lt;th&gt; tags, and not to &lt;tr&gt; tags.
        </div>
        <h2>Cell Padding and Cell Spacing:</h2>
        <p>These are attributes of the table tag.</p>
        <table>
          <thead>
            <tr>
              <th>Cell Padding</th>
              <th>Cell Spacing</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Space between the cell border and cell content.</td>
              <td>Space around the cell.</td>
            </tr>
            <tr>
              <td>
                <b>Syntax:</b> cellpadding="value"
              </td>
              <td>
                <b>Syntax:</b> cellspacing="value"
              </td>
            </tr>
          </tbody>
        </table>
        <h2>Thead, Tbody, and Tfoot Tags:</h2>
        <ol className="order-list">
          <li>
            The &lt;thead&gt;, &lt;tbody&gt;, and &lt;tfoot&gt; tags are used to
            group content within an HTML table.
          </li>
          <li>
            These tags help to structure the table and make it easier to read
            and understand.
          </li>
          <li>
            <b>Thead tag:</b> The &lt;thead&gt;.....&lt;/thead&gt; tag represents
            the top part of the table. The column headings should be written within the &lt;thead&gt; tag. The &lt;thead&gt; tag should be placed
            before the &lt;tbody&gt; tag.
          </li>
          <li>
            <b>Tbody tag:</b> The &lt;tbody&gt;.....&lt;/tbody&gt; tag represents
            the main content of the table. The row data/content should be
            written within the &lt;tbody&gt; tag. The &lt;tbody&gt; tag should be placed
            after the &lt;thead&gt; tag.
          </li>
          <li>
            <b>Tfoot tag:</b> The &lt;tfoot&gt;.....&lt;/tfoot&gt; tag represents
            the bottom part of the table. The conclusion or summary of the table
            should be written within the &lt;tfoot&gt; tag. The &lt;tfoot&gt; tag should
            be placed after the &lt;tbody&gt; tag.
          </li>
          <li>All of these are container tags.</li>
        </ol>
        <div className="note">
          <p>
            The &lt;thead&gt;, &lt;tbody&gt;, and &lt;tfoot&gt; tags are not mandatory
            but are highly recommended when working with tables.
          </p>
        </div>
        <h2>Column Grouping</h2>
        <ul className="unorder-list">
          <li>
            In HTML, we can group columns using the &lt;colgroup&gt;.....&lt;/colgroup&gt; tag.
          </li>
          <li>The &lt;colgroup&gt; tag is a container tag.</li>
          <li>
            To represent table columns within the &lt;colgroup&gt; tag, we use the &lt;col&gt; tag.
          </li>
          <li>The &lt;col&gt; tag is a non-container tag.</li>
          <li>
            The sequence of &lt;col&gt; tags represents the table columns
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
            onClick={() => openModal(Htmltabletwo)}
            style={{ cursor: "pointer" }}
          />
        </div>
        <hr />
        <div className="btn-container">
          <div className="btn">
            <Link to="/html/htmlhyperlink">Previous Page</Link>
          </div>
          <div className="btn">
            <Link to="/html/htmlform">Next Page</Link>
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
