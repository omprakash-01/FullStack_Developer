import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HtmlHome.module.css'; 

function HtmlHome() {
  const listStyle={
    listStyle:"none",
  }
  return (
    <div className={styles.container}>
      <h2>Table of Content of HTML</h2>
      <ul className={styles.unorderList} style={listStyle}>
        <li className={styles.tocItem}>
          <Link className={styles.tocItemLink} to='/html/intro'>Introduction</Link>
        </li>
        <li className={styles.tocItem}>
          <Link className={styles.tocItemLink} to='/html/htmlintro'>Html Introduction</Link>
        </li>
        <li className={styles.tocItem}>
          <Link className={styles.tocItemLink} to='/html/htmltags'>Html Tags</Link>
        </li>
        <li className={styles.tocItem}>
          <Link className={styles.tocItemLink} to="/html/htmllist">Html List</Link>
        </li>
        <li className={styles.tocItem}>
          <Link className={styles.tocItemLink} to="/html/htmltextformating">Html TextFormating</Link>
        </li>
        <li className={styles.tocItem}>
          <Link className={styles.tocItemLink} to="/html/htmlimage">Html Image</Link>
        </li>
        <li className={styles.tocItem}>
          <Link className={styles.tocItemLink} to="/html/htmlhyperlink">Html HyperLink</Link>
        </li>
        <li className={styles.tocItem}>
          <Link className={styles.tocItemLink} to="/html/htmltable">Html Table</Link>
        </li>
        <li className={styles.tocItem}>
          <Link className={styles.tocItemLink} to="/html/htmlform">Html Form</Link>
        </li>
        <li className={styles.tocItem}>
          <Link className={styles.tocItemLink} to="/html/htmliframe">Html Iframe</Link>
        </li>
        <li className={styles.tocItem}>
          <Link className={styles.tocItemLink} to="/html/htmlsemantic">Html Semantic Tag</Link>
        </li>
      </ul>
    </div>
  );
}

export default HtmlHome;
