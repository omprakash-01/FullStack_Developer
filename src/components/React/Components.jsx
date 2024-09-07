import React from 'react'
import component from '../../assets/React/Components.png'
import { Link } from "react-router-dom";


function Components() {
  return (
    <>
     <div className="container">
      <h1># Components</h1>
      {/* Intro */}
      <p>These are core building blocks of any react application which contains reusable code and which works independenly.</p>
      <p>The aim of Components is to divide the application in multiple reusable block of code.</p>
      <div className="image">
        <img src={component} alt="" />
      </div>
      {/* Class based vs function based */}
      <div className="">
        <table>
          <thead>
            <tr>
              <th>Class based component</th>
              <th>function based component</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>These are Js classes that extend react component and has render method that return JSX element.</td>
              <td>These are JS function that return JSX element.</td>
            </tr>
            <tr>
              <td>It has builtin State managment using <strong>this</strong>state.</td>
              <td>It uses react hooks to makes the state.</td>
            </tr>
            <tr>
              <td>It has built in life cycle method.</td>
              <td>It don't have default life cycle method but we can achieve them with the help of hooks.</td>
            </tr>
          </tbody>
        </table>
      </div>


      {/* How to Creage a component */}
      <div className="">
        <h2>How to create a Component</h2>
        <p>Follow the step to create a component:</p>
        <ol className="order-list">
          <li>Create a <b>component folder </b>inside src folder.</li>
          <li>Create a <b>file with .jsx or .js </b> extension inside component folder. (It is best pratice to give meaning file name inside component folder).</li>
        </ol>
      </div>

      <hr />
        <div className="btn-container ">
        <div className="btn" >
          <Link to="/react/introtoreact">Previous Page</Link>
        </div>
        <div className="btn">
          <Link to="/react/props">Next Page</Link>

        </div>
      </div>
     </div>
    </>
  )
}

export default Components
