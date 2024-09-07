import React from "react";
import String from '../../assets/JavaScript/String.jpeg'

function Literals() {
    let outputStyle = {
        color: 'white',
        backgroundColor: 'red',
        padding: '5px',
        borderRadius: '5px',
        lineHeight: '2' 
    };
    
    let resultStyle = {
        color: "white",
        backgroundColor: "green",
        padding: '5px',
        borderRadius: '5px',
        lineHeight: '2' 
    };
    let out
  return (
    <>
      <div className="container">
        <h1>#Literals</h1>
        <div className="">
          <table>
            <caption>
              <h2>Types of literals</h2>
            </caption>
            <thead>
              <tr>
                <th>Primitive literals</th>
                <th>Non- primitive literals</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>It represent single value.</td>
                <td>It represent multiple value.</td>
              </tr>
              <tr>
                <td>
                  These are immutable it means we can't change their value.
                </td>
                <td>
                  These are mutable it means it means their value can be
                  changed.
                </td>
              </tr>
              <tr>
                <td>It store in stack memory.</td>
                <td>It store in heap memory.</td>
              </tr>
              <tr>
                <td>
                  Number, BigInt, Boolean, NaN, Undefine, null, symbol, String.
                </td>
                <td>Function, Array, Object.</td>
              </tr>
              <tr>
                <td>
                  <b>Example: </b> let a=5;, var name="Ram"
                </td>
                <td>
                  <b>Example: </b> let arr=[1,"Ram", 4.5,null, NaN];
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="note">
          The <b> typeof </b> operator in JavaScript returns the data type of a
          variable or expression.
        </div>
        <div className="">
         <h2># Primitive literals</h2>
          <table>
            <thead>
              <tr>
                <th>Data Types</th>
                <th>Explaination</th>
                <th>Example</th>
                <th>TypeOf</th>
              </tr>
            </thead>
            <tbody>
            {/* Row 1 */}
              <tr>
                <td style={{textAlign:'center', fontSize:'40px'}}>Number</td>
                <td>
                  <ul className="unorder-list">
                    <li>It represent numeric value.</li>
                    <li>We can store integer as well as decimal number.</li>
                    <li>
                      Range -2<sup>53</sup>-1 to 2<sup>53</sup>-1
                    </li>
                  </ul>
                </td>
                <td>
                  <ul className="unorder-list">
                    <li>var a=5;</li>
                    <li>let c=3434323</li>
                    <li>const pi=3.14</li>
                  </ul>
                </td>
                <td>
                  <ul className="unorder-list">
                    <li>typeof(a); <span style={resultStyle}>Number</span></li>
                    <li>typeof(c); <span style={resultStyle}>Number</span></li>
                    <li>typeof(pi); <span style={resultStyle}>Number</span></li>
                  </ul>
                </td>
              </tr>
              {/* Row 2 */}
              <tr>
                <td style={{fontSize:'40px', textAlign:'center'}}>Big Int</td>
                <td>
                    <ul className="unorder-list">
                        <li>It represent number that are beyond the range of number data type.</li>
                        <li>Range is less than  Range -2<sup>53</sup>-1 and more than 2<sup>53</sup>-1.</li>
                        <li>To make a number as BigInt we have to add suffix 'n' after the number</li>
                    </ul>
                </td>
                <td>
                    <ul className="unorder-list">
                        <li>let a=3423n</li>
                        <li>var b=3n</li>
                    </ul>
                </td>
                <td>
                    <ul className="unorder-list">
                        <li>typeof(a); <span style={resultStyle}>bigint</span></li>
                        <li>typeof(b); <span style={resultStyle}>bigint</span></li>
                    </ul>
                </td>
              </tr>
              {/* Row 3 */}
              <tr>
                <td style={{textAlign:'center', fontSize:'40px'}}>Boolean</td>
                <td>
                    <ul className="unorder-list">
                        <li>It represent logical entity.</li>
                        <li>It has 2 value: 'true' and 'false'.</li>
                    </ul>
                </td>
                <td>
                    <ul className="unorder-list">
                        <li>let a=true;</li>
                        <li>var b=false;</li>
                    </ul>
                </td>
                <td>
                    <ul className="unorder-list">
                        <li>typeof(a); <span style={resultStyle}>boolean</span></li>
                        <li>typeof(b); <span style={resultStyle}>boolean</span></li>
                    </ul>
                </td>
              </tr>
              {/* Row 4 */}
              <tr>
                <td style={{textAlign:'center', fontSize:'40px'}}>Null</td>
                <td>
                    <ul className="unorder-list">
                        <li>This datatype represent empty value.</li>
                        <li>It is used to mark the memory block empty intentionally.</li>
                    </ul>
                </td>
                <td>
                    <ul className="unorder-lis">
                        <li>let a=null</li>
                        <li>var b=null;</li>
                    </ul>
                </td>
                <td>
                    <ul className="unorder-list">
                        <li>typeof(a); <span style={resultStyle}>object</span></li>
                        <li>typeof(b); <span style={resultStyle}>object</span></li>
                        <li>It is a bug in JavaScript that why it showing object as typeof.</li>
                    </ul>
                </td>
              </tr>
              {/* Row 5 */}
              <tr>
                <td style={{textAlign:'center', fontSize:'40px'}}>NaN</td>
                <td>
                    <ul className="unorder-list">
                        <li>Not a Number</li>
                        <li>It represent computational error</li>
                        <li>When Js engine is not able to compute some result it retuen NaN.</li>
                    </ul>
                </td>
                <td>
                    <ul className="unorder-list">
                        <li>console.log("a"-2) <br /> <span style={outputStyle} >Output</span> : <span style={resultStyle}>NaN</span></li>
                        <li>console.log(4-"b") <br /> <span style={outputStyle}>Output</span> : <span style={resultStyle}>NaN</span></li>
                        <li>console.log("a"-"b") <br /> <span style={outputStyle}>Output</span> :  <span style={resultStyle}>NaN</span></li>
                    </ul>
                </td>
                <td>
                    <ul className="unorder-list">
                        <li>typeof("a"-2)   <span style={resultStyle}>Number</span></li>
                        <li>typeof(4-"b")   <span style={resultStyle}>Number</span></li>
                        <li>typeof("a"-"b") <span style={resultStyle}>Number</span></li>
                    </ul>
                </td>
              </tr>
              {/* Row 6 */}
              <tr>
                <td style={{textAlign:'center', fontSize:'40px'}}>Undefine</td>
                <td>
                    <ul className="unorder-list">
                        <li>Undefine represent uninitalized value.</li>
                        <li>When variable is not initialzed Js engine auto initialized it with undefine in variable phase.</li>
                        <li>Js engine will initialize variable dcelare with <b>var</b> variable phase.</li>
                        <li>Variable declared with <b>let</b> & <b>const</b>. It will not initialized in variable phase.</li>
                    </ul>
                </td>
                <td>
                    <ul className="unorder-list">
                        <li>var a;</li>
                        <li>let b;</li>
                    </ul>
                </td>
                <td>
                    <ul className="unorder-list">
                        <li>typeof(a) <span style={resultStyle}>undefine</span></li>
                        <li>typeof(b) <span style={resultStyle}>undefine</span></li>
                    </ul>
                </td>
              </tr>
              {/* Row 7 */}
              <tr>
                <td style={{textAlign:'center', fontSize:'40px'}}>Symbol</td>
                <td>It represent unique  and immutable value.</td>
                <td>
                  <ul className="unorder-list">
                    <li>var a=Symbol("hello");</li>
                    <li>let d=Symbol(33);</li>
                  </ul>
                </td>
                <td>
                <ul className="unorder-list">
                  <li>typeof(a) <span style={resultStyle}>symbol</span></li>
                  <li>typeof(d) <span style={resultStyle}>symbol</span></li>
                </ul>
                 </td>
              </tr>
              {/* Row 8 */}
              <tr>
                <td style={{fontSize:'40px', textAlign:"center"} }> Sting</td>
                <td>It is collection of character.</td>
                <td>
                  <ul className="unorder-list">
                    <li>var Name="Rohit"</li>
                    <li>let middleName='Kumar'</li>
                    <li>const lastName=`Singh`</li>
                  </ul>
                </td>
                <td>
                  <ul className="unorder-list">
                    <li>typeof(Name) <span style={resultStyle}>sting</span></li>
                    <li>typeof(middleName) <span style={resultStyle}>sting</span></li>
                    <li>typeof(lastName) <span style={resultStyle}>sting</span></li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Strings */}
        <div className="">
          <h2>#String</h2>
          <h3>#Way to create string</h3>
          <ol className="order-list">
            <li>
              <p>By using quotes (" double quotes ", ' single quotes ', `back quotes`)</p>
              <p>
              <b>Example: </b>
              <ul className="unorder-list">
                <li>let Name="Rohit"</li>
                <li>var middleName= "Kumar"</li>
                <li>const lastName= "Yadav"</li>
              </ul>
              </p>
            </li>
            <li>By using <b>new</b> keyword & string construction
            <p>
              <b>Example:</b>
              <ul className="unorder-list">
                <li>var Name=new String("Rohit"); </li>
                <li>let middleName= new String('Kumar');</li>
                <li>const lastName=new String(`Singh`);</li>
              </ul>
            </p></li>
          </ol>
          <div className="image">
            <img src={String} alt="StringImage" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Literals;
