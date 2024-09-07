import React from "react";
import JsEngine from '../../assets/JavaScript/JsEngine.png'
import JRE from '../../assets/JavaScript/JRE.png'
import ExternalJsfile from "../../assets/JavaScript/ExternalJsfile.png"
import VarDeclareCode from "../../assets/JavaScript/VarDeclareCode.png"
import LetDeclareCode from "../../assets/JavaScript/LetDeclareCode.png"
import ConstDeclareCode from "../../assets/JavaScript/ConstDeclareCode.png"
import VarInitializedCode from "../../assets/JavaScript/VarInitializedCode.png"
import LetInitializedCode from "../../assets/JavaScript/LetInitializedCode.png"
import ConstInitializedCode from "../../assets/JavaScript/ConstInitializedCode.png"
import Token from "../../assets/JavaScript/Token.png"
import IdentifierCode from "../../assets/JavaScript/IdentifierCode.png"
import { Link } from "react-router-dom";




function IntroToJavaScript() {
  return (
    <>
      <div className="container">
        <h1 className="bg-red-500"># Introduction To JavaScript</h1>

        {/* Histroy */}
        <div className="">
        <h2># Histroy</h2>
          <ul className="unorder-list">
            <li>JavaScript is develop by <strong>BRENDAN EICH</strong> in just 10 in may <strong>1995</strong> while he was working for <strong>NetScape</strong>.</li>
            <li>The initial release was called <strong>Mocho </strong> and later renamed to <strong>LiveScript</strong>and finally renamed as <strong>JavaScript</strong>.</li>
            <li>Initially JavaScript was designed  to be a  light weight scripting language for adding interactivity to the web pages.</li>
            <li className="note">JavaScript and Java are completely different language both in concept and design.</li>
            <li>ECMA stand for <strong>European Computer Manufactures Association</strong>. It set standard for JavaScript. It is an orgination. </li>
            <li>In <strong>1997 ES 1</strong> launched by ECMA.</li>
            <li>ES6 launch in 2015 with biggest update in history of JavaScript.
            <ol className="order-list">
              <li>Arrow Function Expression</li>
              <li>let and const</li>
              <li>Template literals</li>
            </ol>
  
            </li>
            <li>JavaScript is backward compatible means new version of libray can still work with the old code without requiring any changes from the users.</li>
            <li>JavaScript is not forward compatible.</li>
          </ul>
        </div>

        {/* JavaScript vs Java */}
        <div className="">
        <h2># JavaScript vs Java</h2>
          <table>
            <thead>
              <tr>
                <th>JavaScript</th>
                <th>Java</th>
              </tr>
              <tr>
                <td>It is interpreted language.</td>
                <td>It is a compiled language.</td>
              </tr>
              <tr>
                <td>It is purely object based language.</td>
                <td>It is not purely object based language.</td>
              </tr>
              <tr>
                <td>It is dynamically typed language.</td>
                <td>It is statically typed language.</td>
              </tr>
              <tr>
                <td>It is scripting and programming language.</td>
                <td>It is a programming language.</td>
              </tr>
            </thead>
          </table>
        </div>


        {/* JavaScript Characterstic */}
        <div className="">
        <h2># JavaScript Characterstic</h2>
          <ol className="order-list">
            <li>It is used to make webpage dynamic.</li>
            <li>We can execute JavaScript code directly on browser because browser is made of JavaScript.</li>
            <li>It is object oriented language.</li>
            <li>It is purely object based language. </li>
            <p className="note" style={{textAlign:'left'}}>Object Based: Does not support inheritance and polymorphism. <br />
            Object Oriented: Does support all object oriented features like inheritance, polymorphism, encapsulation. <br />
            Pure object oriented: These are the one where everything start and revolve around objects.</p>
            <li>It is dynamically typed language. It means type of variable is checked at runtime.</li>
            <li>It is a scripting and programming language. Scripting means pre written code is available for use. Programming means we write  code from scratch.</li>
            <li>It is reference based language. It means variable hold the reference.</li>
            <li>It is sychronous language. It means code will execute one by one.</li>
            <li>JavaScript is a single-threaded language.</li>
          </ol>
          <p className="note">REPL: stands for Read Evaluate Print Loop.</p>
        </div>

        {/* JRE */}
        <div className="">
          <h2># JavaScript Runtime Enviroment (JRE)</h2>
          <p>It porvide an environement where we can execute our JavaScript code.</p>
          <h3>Two JavaScript runtime Environment</h3>
          <div className="image">
            <img src={JRE} alt="JREImage" />
          </div>
          <p><b>Browser: </b>
          <ul className="unorder-list">
            <li>It is an application where we can execute JavaScript Code.</li>
            <li>A browser is a software application that is used to access and view information on the world wide web.</li>
            <li>It  allow user  to interact with the web page, view multimedia, and surf the internet.</li>
          </ul>
          </p>
          <p>
            <b>Node Js:</b>
            <un className='unoder-list'>
              <li>It is an application made up of chrome V8 engine and c++ bundles.</li>
              <li>It is used to execute JavaScript code outside the browser.</li>
              <li>It is not a framework or library.
              </li>
            </un>
          </p>
          <h3>JavaScript Enginge</h3>
          <p>It is used to convert JavaScript code into machine understand code.</p>
          <p>It is core component of JavaScript runtime Enviroment.</p>
          <div className="image">
            <img src={JsEngine} alt="JSEngineImage" />
          </div>
          <h3>Some popular JavaScript engine are:</h3>
          <p><b>V8 (Fastest Js Engine): </b> Develop by Google used in Google chrome and Node Js.</p>
          <p><b>JavaScript Core: </b> Develper by Apple used in Safari.</p>
          <p><b>Chakra: </b> Develop by microsoft used microsoft edge.</p>
          <p><b>SpiderMonkey: </b> Develper by Mozilla used in firefox.</p>
        </div>

        {/* Interanl and External JavaScript */}
        <div className="">
        <h2>Way to embed/ Write JavaScript:</h2>
          <div className="">
            <h3>Internal JavaScript</h3>
            <ul className="unorder-list">
              <li>The JavaScript written inside the html document is called as internal JavaScript.</li>
              <li>To write internal JavaScript we have &lt;script&gt;...........&lt;/script&gt;  </li>
              <li>&lt;script&gt; tag should be placed at last of the body tag inside body tag but at the end.</li>
            </ul>
          </div>
          <div className="">
            <h3>External JavaScript</h3>
            <ul className="unorder-list">
              <li>Js written in a seprate file and saved with .js extension is called external JavaScript.</li>
              <li>To attached this JavaScript file we have to use <b>src</b> attribute in script tag.</li>
              <li>
                <div className="image">
                  <img src={ExternalJsfile} alt="ExternalJsfileImage" />
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Variables */}
        <div className="">
          <h2>#Variables</h2>
          <p>It is a block of memory or container which is used to store some data.</p>
          <h3>#Variables Declaration</h3>
          <p>Variables can declare in 3 way:</p>
          <div className="">
            <table>
              <thead>
                <tr>
                  <th>Var</th>
                  <th>let</th>
                  <th>const</th>
                </tr>
              </thead>
              <tbody>
              {/* Row 1 */}
                <tr>
                  <td>Variable can be declare multiple time with same name in same scope. <br />
                  <b>Example: </b>
                  <div className="image">
                    <img src={VarDeclareCode}alt="VarDeclareCode" />
                  </div>
                  </td>
                  <td>Variable can be declare only one time with same name in same scope. <br />
                  <b>Example:</b>
                  <div className="image">
                    <img src={LetDeclareCode} alt="LetDeclareCode" />
                  </div>
                  
                  
                  </td>
                  <td>Variable can be declare only one time with same name in same scope. <br />
                  <b>Example:</b>
                  <div className="image">
                    <img src={ConstDeclareCode} alt="ConstDeclareCode" />
                  </div> </td>
                </tr>
                {/* Rwo 2 */}
                <tr>
                  <td>It can initialized multiple times. <br />
                  <b>Example:</b>
                  <div className="image">
                    <img src={VarInitializedCode} alt="VarInitializedCodeImagge" />
                  </div></td>
                  <td>It can initialized multiple times. <br />
                  <b>Example:</b>
                  <div className="image">
                    <img src={LetInitializedCode} alt="LetInitializedCodeImage" />
                  </div></td>
                  <td>It can only initialized only one times. <br />
                  <b>Example:</b>
                  <div className="image">
                    <img src={ConstInitializedCode} alt="ConstInitializedCodeImage" />
                  </div>  </td>
                </tr>

                <tr>
                  <td>Var belong to global scope.</td>
                  <td>let belong to local scope</td>
                  <td>Const belong to const scope.</td>
                </tr>
                <tr>
                  <td>Var can be hoisted.</td>
                  <td>let can be hoisted.</td>
                  <td>Const can be hoisted.</td>
                </tr>
                <tr>
                  <td>Var does not belong to temporal deadzone.</td>
                  <td>Let belong to temporal deadzone.</td>
                  <td>Const belong to temporal deadzone.</td>
                </tr>
                <tr>
                  <td>We can access variable with the help of window variable.</td>
                  <td>We can not access variable with the help of window variable.</td>
                  <td>We can not access variable with the help of window variable.</td>
                </tr>
                
              </tbody>
            </table>
          </div>
        </div>

        {/* Tokens */}
        <h2>#Token</h2>
        <p>It is the smallest unit of a programming language.</p>
        <div className="image">
          <img src={Token} alt="TokenImage" />
        </div>
        <div className="">
          <h3>Token are 5 types:</h3>
          <table>
            <thead>
              <tr>
                <th>Keywords</th>
                <th>Identifier</th>
                <th>Operator</th>
                <th>Pantuator</th>
                <th>Literals</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>They are reservesed word which have some predefine meaning.</td>
                <td>These  are  the user given name to variable function, object etc.</td>
                <td>These are symbol or word that represent mathmatical logical or other operation.</td>
                <td>These are used to group or seprate the code.</td>
                <td>These are values used for programming purpose.</td>
              </tr>
              <tr>
                <td><b>Example: </b>let, var, const, if, function etc.</td>
                <td><b>Example: </b>let a, var Name, const pi etc</td>
                <td><b>Example: </b>+, -, *, /, %,&&, || etc.</td>
                <td><b>Example: </b>[], ;, :, " ", ` `, , </td>
                <td><b>Example: </b>Number, Bigint, Boolean etc</td>
              </tr>
            </tbody>
          </table>
          <h3># Rules for naming Identifier</h3>
          <ul className="unorder-list">
            <li>Identifier name cannot start with a number.</li>
            <li>It should not contain any keyword.</li>
            <li>If identifier name contain multiple names then instead of using space we have to use underscore( _ ).</li>
            <li>It should not contain any special character except $ or ( _ ).</li>
          </ul>
          <div className="image">
            <img src={ IdentifierCode} alt="IdentifierCodeImage" />
          </div>
        </div>
        <hr />
      <div className="button-container ">
        <div className="center" >
          <Link to="/javascript/literals">Next Page</Link>
        </div>
      </div>
      </div>
    </>
  );
}

export default IntroToJavaScript;
