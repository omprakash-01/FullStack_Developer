import React, { useState } from "react";
import Form1 from "../../assets/Html/Form1.png";
import Form2Code from "../../assets/Html/Form2Code.png";
import SelectCode from "../../assets/Html/SelectCode.png";
import datalistCode from "../../assets/Html/datalistCode.png";
import LabelCode from '../../assets/Html/LabelCode.png';
import Message from '../../assets/Html/Message.png';
import ImageModal from "../ImageModal";
import { Link } from "react-router-dom";

function HtmlForm() {
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
        <h1>#Form</h1>
        <ul className="unorder-list">
          <li>Forms are used to collect user data or information.</li>
          <li>
            To create a form in Html, we have to use
            &lt;form&gt;.....&lt;/form&gt; tag.
          </li>
          <li>&lt;form&gt; is a container tag.</li>
          <li>It is a block level element.</li>
          <li>
            <b>Syntax: </b>&lt;form&gt;.....&lt;/form&gt;
          </li>
        </ul>
        <h2>Input Tag</h2>
        <ol className="order-list">
          <li>
            <h3>Introduction</h3>
            <ul className="unorder-list">
              <li>It is used to create input filed.</li>
              <li>It is a non-container tag.</li>
              <li>
                The &lt;input&gt; allow the user to enter information or make
                seletion.
              </li>
              <li>It is an inline level element.</li>
              <li>
                <b>Syntax: </b> &lt;input&gt;
              </li>
            </ul>
          </li>
          <li>
            <h3> Type Attribute of &lt;input&gt; tag.</h3>
            <p>
              <b>Syntax:</b> &lt;input type="value" &gt;
            </p>
            <ul className="unorder-list">
              <li>
                type="text" (This create a single line text input filed where
                user can enter any text.)
              </li>{" "}
              Name: <input type="text" />
              <li>
                type="email" (This creates a text input filed that validates the
                user's input to ensure that it is a valid email address.)
              </li>
              Email: <input type="email" />
              <li>
                type="number" (This creates a number input filed where users can
                enter only numerical value.)
              </li>
              Phone: <input type="number" />
              <li>
                type="tel"(This creates an input filed that is specifically
                designed for telephone number.)
              </li>
              Mobile: <input type="tel" />
              <li>
                type="password" (This creates a text input filed wher the
                entered text is hidden and replaced with bullets.)
              </li>
              Password: <input type="password" />
              <li>
                type="file" (This creates a file filed that allow users to
                select a file form their device.)
              </li>
              Upload: <input type="file" />
              <li>
                type="submit" (This creates a button that allow users to submit
                the form to the server.)
              </li>
              Submit: <input type="submit" />
              <li>
                type="reset" (This creates a reset button that allow users to
                reset the form to it initial state withour reloading the page.)
              </li>
              Reset: <input type="reset" />
              <li>
                type="search" (This creates an input filed that is specifically
                desighed for search purpose.)
              </li>
              Search: <input type="search" />
              <li>
                type="radio" (A radio button allow the user to select only one
                option from a list of options.Each radio button in a group must
                have the same 'name' attributes but different 'value'
                attributes.)
              </li>
              <input type="radio" name="rabtn" />
              Choice 1
              <input type="radio" name="rabtn" />
              Choice 2
              <input type="radio" name="rabtn" />
              Choice 3
              <li>
                type="checkbox" (A checkbox allows the user to select one or
                more options from a list of optionss. Each checkbox is
                independent of other checkboxes on the same page and multiple
                checkboxes can be selected at the same time.)
              </li>
              <input type="checkbox" value="option1" /> Option1
              <input type="checkbox" value="option2" />
              Option2
              <input type="checkbox" value="option3" />
              Option3
              <li>
                type="date" (This creates a text input field that allows users
                to select a date from a calendar popup.)
              </li>
              Date: <input type="date" />
              <li>
                type="time" (This creates a text input filed that allows users
                to select a time form a dropdown menu or enter the time manually
                into the input filed.)
              </li>
              Time: <input type="time" />
              <li>
                type="month" (This creates a text input filed that allows users
                to select a month and year from dropdown menus.)
              </li>
              Month: <input type="month" />
              <li>
                type="week" (This creates a text input filed that allows users
                to select a week from dropdown menu.)
              </li>
              Week: <input type="week" />
              <li>
                type="range"(This creates a slider that allows users to select a
                value from a range for value.)
              </li>
              Range: <input type="range" />
              <li>
                type="url"(This creates an input field that is specifically
                designed for URLs.)
              </li>
              Url: <input type="url" />
              <li>
                type="color"(This creates a color picker that allows users to
                select a color.)
              </li>
              Color: <input type="color" />
            </ul>
          </li>
        </ol>
        <div className="image">
          <h4>Code:</h4>
          <a href={Form1} target="_blank">
            <img src={Form1} alt="Form1Code" />
          </a>
        </div>

        <table>
          <tr>
            <td>
              <p>
                <b>Name attributes:</b> It is used to provide specific name to
                the input field.
              </p>
              <code>Username: &lt;input type='text' name='username' &gt;</code>
            </td>
            <td>
              Username: <input type="text" name="username" />
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <b>Value attributes:</b>It is used to target the value inside
                the input filed.
              </p>
              <code>
                Username: &lt;input type='text' name='username' value='Ram'&gt;
              </code>
            </td>
            <td>
              <form action="">
                Username: <input type="text" name="username" value="Ram" />
              </form>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <b>Required attributes: </b>The required attributes specific
                that the user must fill out the field before submitting the
                form.
              </p>
              <code>
                Username: &lt;input type='text' name='username' required &gt;
              </code>
            </td>
            <td>
              <form action="">
                Username: <input type="text" name="username" required />
                <button type="submit">Submit</button>
              </form>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <b>Readonly attributes:</b> It means that the user can view the
                value of input filed but can't modify it.
              </p>
              <p>
                When an input filed is readonly it value is still submitted with
                form.{" "}
              </p>
              <code>
                Username: &lt;input type='text' name='username' readonly &gt;
              </code>
            </td>
            <td>
              <form action="">
                Username: 
                <input type="text" name="username" value="Ram" readOnly />
              </form>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <b>Disable attributes:</b> It means that the user cannot
                interact with it or submit value.
                <code>
                  Username: &lt;input type='text' name='username' disable &gt;
                </code>
              </p>
            </td>
            <td>
              <form action="">
                Username: <input type="text" name="username" value="Ram" />
              </form>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <b>Placeholder attributes:</b> The Placeholder sttributes
                specifies a hint to the user at to what king of input excepted
                in the input filed.
              </p>
              <p>
                It is usually displayed as grayed-out text with in the input
                filed.
              </p>
              <code>
                Username: &lt;input type='text' name='username'
                Placeholder='username' &gt;
              </code>
            </td>
            <td>
              <form action="">
                Username:{" "}
                <input
                  type="text"
                  name="username"
                  placeholder="Enter your name"
                />
              </form>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <b>Autofocus attributes:</b> This means that the cursor will
                automatically be placed in the input files ready for user to
                being type.
              </p>
              <code>
                Username: &lt;input type='text' name='username'
                Placeholder='username' autofocus &gt;
              </code>
            </td>
            <td>
              
              <form action="">
                Username:
                <input
                  type="text"
                  name="username"
                  placeholder="Enter your name"
                  autofocus
                />
              </form>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <b>Min & Max attributes:</b> Work an value fir range purpose.
              </p>
              <code>
                Username: &lt;input type='number' name='username'
                Placeholder='username' min='1' max='10' &gt;
              </code>
            </td>
            <td>
              <form action="">
                Username:
                <input
                  type="number"
                  name="username"
                  placeholder="Enter your name"
                  min="1"
                  max="10"
                />
              </form>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <b>Minlength & Maxlength attributes: </b> It work on number of
                character.
              </p>
              <code>
                Username: &lt;input type='text' name='username'
                Placeholder='username' minlength='2' maxlength='50' &gt;
              </code>
            </td>
            <td>
              <form action="">
                Username: 
                <input
                  type="text"
                  name="username"
                  minlength="2"
                  maxlength="50"
                />
              </form>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <b>Size attributes: </b> It is used to control the length of
                intput tag.
              </p>
              <code>
                Username: &lt;input type='text' name='username'
                Placeholder='username' size='30' &gt;
              </code>
            </td>
            <td>
              <form action="">
                Username:
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  size="15"
                />
              </form>
            </td>
          </tr>
        </table>
        <div className="label">
          <h2>label tag:</h2>
          <ul className="unorder-list">
            <li>
              The label tag is used to connect the text with the input filed.
            </li>
            <li>Label tag is a container tag.</li>
            <li>
              The text we want to connect should be written with in the label
              tag.
            </li>
            <li>
              In Input filed we have to provide is and that same id we have to
              pass to the for attributes of label tag.
            </li>
          </ul>
          <h4>Code:</h4>
            <div className="image">
              <img src={LabelCode} alt="LabelCode" onClick={()=>openModal(LabelCode)} style={{cursor:'pointer'}} />
            </div>
          <hr />
          <form action="">
            <fieldset style={{padding:'15px'}}>
              <legend><h4>Output</h4></legend>
              <label htmlFor="username">Username: </label>
              <input type="text" name="username" id="username" autofocus />
              <br />
              <label htmlFor="email">Email: </label>
              <input type="email" name="email" id="email" />
               <br />
              <label htmlFor="gender">Gender</label> <br />
              <input type="radio" name="gender" value="male" />Male
              <input type="radio" name="gender" value="female" />Female
              <input type="radio" name="gender" value="others" />Others 
              <br />
              <label htmlFor="language">Languages:</label> <br />
              <input type="checkbox" value="c" />C
              <input type="checkbox" value="c++" />C++
              <input type="checkbox" value="java" />Java
              <input type="checkbox" value="javascript" />JavaScript
              <input type="checkbox" value="python" />Python
            </fieldset>
          </form>
        </div>
        <div className="filedset">
          <h2>Filedset</h2>
          <ol className="order-list">
            <li>
              Filedset tag is used to group the related from control and create
              a box around the group.
            </li>
            <li>
              Lengend tag is used to provide title/caption for the fiedset.
            </li>
            <li>Both are container tag.</li>
          </ol>
          
            <h4>Code:</h4>
            <div className="image">
            <img src={Form2Code} alt="Form2Code" width={600}  onClick={()=>openModal(Form2Code)} style={{cursor:'pointer'}}/>
          </div>
          <form action="" >
           <fieldset style={{padding:'10px'}}>
            <legend><h4>Output</h4></legend>
            <fieldset style={{padding:'15px'}}>
              <legend>Personal Information</legend>
              <div className="Name">
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="email">
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" id="email" />
              </div>
              <div className="mobile">
                <label htmlFor="mobile">Mobile: </label>
                <input type="number" name="mobile" id="" />
              </div>
            </fieldset>
            <fieldset style={{padding:'15px'}}>
              <legend>Gender</legend>
              <input type="radio" name="gender" />
              Male
              <input type="radio" name="gender" />
              Female
              <input type="radio" name="gender" />
              Others
            </fieldset>
           </fieldset>
          </form>
         
        </div>
        <div className="select">
          <h2>select and options tag:</h2>
          <ul className="unorder-list">
            <li>
              The select tag in HTML is used to create a dropdwon list or a
              select list, where a user can select one or more option form a
              list of predefined options.
            </li>
            <li>To mention the option we have to use option tag.</li>
            <li>
              The content we want to display as option should be written with in
              the option tag.
            </li>
            <li>
              The option tag is used with select tag to provide the list of
              option from which a user can choose.
            </li>
            <li>
              The content that we want as an option should be written with in
              the option tag.
            </li>
          </ul>
          <b>For Example: </b>
          <label for="fruit">Choose a fruit:</label>
          <select id="fruit" name="fruit">
            <option value="apple">Apple</option>
            <option value="banana">Banana</option>
            <option value="cherry" selected>
              Cherry
            </option>
            <option value="date">Date</option>
            <option value="elderberry">Elderberry</option>
          </select>
          <div className="image">
            <img src={SelectCode} alt="SelectCode" onClick={()=>openModal(SelectCode)} style={{cursor:'pointer'}} />
          </div>
          <h3>Disadvantage of select tag:</h3>
          <p>
            The main disadvantage of the select tag is that it limit the user's
            input options to the pre defined list of option provided by the
            developer using the option tag.
          </p>
          <p>
            The user cannot enter any text of their choice or customize the
            option available in the list.
          </p>
          <h2>Datalist Tag:</h2>
          <ol className="order-list">
            <li>The datalist tag is introduced in HTML5.</li>
            <li>
              The Html datalist tag is used to provide an autocomplete feature
              on the form element.
            </li>
            <li>It is used to provide a list of predefined option to users.</li>
            <li>
              Datalist tag is used to create suggestion list to autocomplete
              list.
            </li>
            <li>
              The &lt;datalist&gt; tag contain a set of &lt;option&gt; tag that
              define the option in the list.
            </li>
            <li>
              We are binding the suggestion list with the input field for this
              we have to provide 'list' attribute in the datalist tag, this same
              'id' we have to provide in the 'list' attribute to input tag.
            </li>
            <li>
              Whenever the user inputs in the input filed related suggestion are
              displayed.
            </li>
            <li>
              Yhe advantage of using the datalist tag is that it allow user to
              enter value that are not present in the option list.
            </li>
          </ol>
          <b>For Example: </b>
          <label for="programming-language">Programming language: </label>
          <input list="languages" id="programming-language" name="programming-language"/>
          <datalist id="languages">
            <option value="JavaScript" />
            <option value="Python" />
            <option value="Java"/>
            <option value="C++" />
            <option value="Ruby" />
          </datalist>
          <div className="image">
            <img src={datalistCode} alt="datalistCode" onClick={()=>openModal(datalistCode)} style={{cursor:'pointer'}}/>
          </div>
        </div>
        <div className="textarea">
          <h2>Textarea Tag:</h2>
          <ol className="order-list">
            <li>The textarea tag is used to create multiline input field where the user can enter text.</li>
            <li>Textarea tag is container tag.</li>
            <li>We can control the dimesion of textarea using <q>row</q> and <q>cols</q> attributes.</li>
            <li>What ever content we write with in the textarea tag is directly displayed inside the area.</li>
          </ol>
          <b>For Example:</b>
          <p>Message:</p> 
          <textarea name="message" id="message" rows={10} cols={50} placeholder="Enter your message:"></textarea>
          <div className="image">
            <img src={Message} alt="MessageCode" onClick={function(){
              openModal(Message);
            }} style={{cursor:'pointer'}}/>
          </div>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th>&lt;input type="submit"/&gt;</th>
                <th>&lt;button&gt;Submit&lt;/button&gt;</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>It is not compatible with JavaScript.</td>
                <td>It is fully compatible with JavaScript.</td>
              </tr>
              <tr>
                <td>In this we only mention text.</td>
                <td>In this we can mention any content like text, image within the button tag.</td>
              </tr>
              <tr>
                <td>When we create submit button using &lt;input&gt; tag then it automatically tries to connect to the server, if server is present it will send the data and reload the page.</td>
                <td>In this button tag doen't try to connect and  reload the page when clicked.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <ImageModal
          isOpen={isModalOpen}
          src={modalImageSrc}
          onClose={closeModal}
        />
      <hr />
      <div className="btn-container">
      <div className="btn">
            <Link to="/html/htmltable">Previous Page</Link>
          </div>
      <div className="btn">
            <Link to="/html/htmliframe">Next Page</Link>
          </div>
      </div>
      </div>
    </>
  );
}

export default HtmlForm;
