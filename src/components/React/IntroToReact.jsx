import React from 'react';
import NodeVersion from '../../assets/React/NodeVersion.png'
import SearchBarCMD from '../../assets/React/SearchBarCMD.png'
import CreateReactAPP from '../../assets/React/CreateReactAPP.png';
import DirChange from '../../assets/React/DirChange.png'
import npminstall from '../../assets/React/npminstall.png'
import VsCode from '../../assets/React/VsCode.png'
import npmrundev from '../../assets/React/npmrundev.png'
import Result from '../../assets/React/Result.png'
import FolderStructure from '../../assets/React/FolderStructure.png'

function IntroToReact() {
  return (
    <>
      <div className="container">
        <h1>#Introduction to React</h1>
        <h2>What is React?</h2>
        <ul className="unordered-list">
          <li>React is a JavaScript library.</li>
          <li>It is used to create single-page applications.</li>
          <li>React follows the component-based architecture.</li>
          <li>Latest version of React is 18.0.</li>
        </ul>
        <h2>Why React?</h2>
        <ol className="ordered-list">
          <li>It is easy to learn.</li>
          <li>It follows declarative programming.</li>
          <li>It does not reload the page.</li>
          <li>It increases code reusability, readability, maintainability.</li>
          <li>It follows DRY (<b>Do not repeat yourself</b>).</li>
        </ol>
        <div className="note">
          <p>JavaScript follows imperative programming.</p>
        </div>
        <table>
          <thead>
            <tr>
              <th>Single Page Application</th>
              <th>Multi Page Application</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>It is a single page application.</td>
              <td>It is a multi page application.</td>
            </tr>
            <tr>
              <td>SPA does not require page reloading during use.</td>
              <td>MPA application requires page reloading in use.</td>
            </tr>
            <tr>
              <td>It is less secure compared to MPA.</td>
              <td>It is more secure compared to SPA.</td>
            </tr>
            <tr>
              <td>It is easy to debug.</td>
              <td>It is difficult to debug.</td>
            </tr>
            <tr>
              <td>SPA has faster loading time.</td>
              <td>MPA has lower loading time.</td>
            </tr>
          </tbody>
        </table>
        <h2>History</h2>
        <table>
          <thead>
            <tr>
              <th>React</th>
              <th>jQuery</th>
              <th>Angular</th>
              <th>Vue</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>React is a library.</td>
              <td>jQuery is a library.</td>
              <td>Angular is a framework.</td>
              <td>Vue is a framework.</td>
            </tr>
            <tr>
              <td>React developed in 2011.</td>
              <td>jQuery developed in 2005.</td>
              <td>Angular developed in 2009.</td>
              <td>Vue developed in 2014.</td>
            </tr>
            <tr>
              <td>React developed by Facebook.</td>
              <td>jQuery developed by BarCamp NYC.</td>
              <td>Angular developed by Google.</td>
              <td>Vue developed by Evan You.</td>
            </tr>
          </tbody>
        </table>
        <table>
          <thead>
            <tr>
              <th>Library</th>
              <th>Framework</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Libraries are lightweight.</td>
              <td>Frameworks are heavier.</td>
            </tr>
            <tr>
              <td>Libraries are collections of predefined code.</td>
              <td>Frameworks are collections of libraries.</td>
            </tr>
            <tr>
              <td>In libraries, we need to follow fewer rules and regulations.</td>
              <td>In frameworks, we need to follow more rules and regulations.</td>
            </tr>
            <tr>
              <td><b>Example:</b> React.js, jQuery</td>
              <td><b>Example:</b> Angular, Vue</td>
            </tr>
          </tbody>
        </table>
        <h2>Modules:</h2>
        <ul className="unorder-list">
            <li>Modules are small block of reuseable code.</li>
            <li>JavaScript moudules allows you to break code into seprate files and make it easier to maintian the code. </li>
            <li>You can export multiple file if export do not have <q>default</q> keyword in the name.</li>
            <li>You can export only one file if export have <q>default </q> keyword in the name. If you try to export multiple file it will show you an error.</li>
        </ul>
        <h2>How react works.</h2>
        <ol className="order-list">
            <li>When we start working with react js engine will create a DOM called Real DOM.</li>
            <li>React DOM library will a copy of real DOM which is called virtual DOM.</li>
            <li>Virtual DOM is a lightweight representation of real DOM.</li>
            <li>Whenever we make any changes that will get campared b/w virtual and real DOM and get updated in real DOM with help of <b>Diffing algorithm </b> and <b>Reconcialation process</b>.</li>
        </ol>
        <h3>Diffing Algorithm</h3>
        <p>It is an algorithm which is used to compare virtual and real DOM. </p>
        <h3>Reconcialiton Process</h3>
        <p>It is a process by which changes made in virtual DOM get updated in real DOM.</p>
      <h3>HMR (Hot Module replacement)</h3>
      <p>It is used to internally refresh the code.</p>
      <h3>Babel</h3>
      <p>Babel is a compiler which is used to convert latest Js code into browser understandble code.</p>
      <h2>Pack Bundlers</h2>
      <p>These are modules bundlers which is used to collect multiple JavaScript and related file and it bundle these file into single unit.</p>
      <table>
        <thead>
            <tr>
                <th>Web Pack</th>
                <th>Parcel</th>
                <th>Rollup</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>It is like a tool that takes all your web files, like JS,CSS, and html and bundle them together into single unit.</td>
                <td>Parcel is an easy to use bundler that automatically figures out how to bundle your files without needing much step from you.</td>
                <td>Rollup is a bundler thar specializer in making your JavaScript file as small as possible. It remove any extra cose that your browser does not need, so your files are tiny and load superfast.</td>
            </tr>
            <tr>
                <td>It was develop in 2011.</td>
                <td>It was develop in 2017.</td>
                <td>It was develop in 2014.</td>
            </tr>
        </tbody>
      </table>
      <h2>NPM (Node Package Modules) </h2>
      <p>NPM are the tools used in  JavaScript engine particularly with Node.js and React.js realted libraries and framework and install dependencies which are required for the project.</p>
      <p>There are different type of node packages manager.</p>
      <ol className="order-list">
        <li><b>NPM:</b> It  will install package & module globally.</li>
        <li><b>NPX (Node page executor):</b> It will help us to execute modules and package without  installing. them globally (It is not recommanded for project).</li>
        <li><b>yarn/ Bun:</b> These are also node package manager which are faster and secure than NPM and NPX.</li>
      </ol>
      <div className="">
        <h2>Vite</h2>
        <ul className="unorder-list">
            <li>Vite uses rollup as a module bundlers.</li>
            <li>It is faster compare to other react installation.</li>
        </ul>
        <h3>How to create a vite Projct.</h3>
        <ol className="order-list">
            <li>Fist you need to install <a href="https://nodejs.org/en/download/package-manager" target='_blank' style={{color:'blue'}}>Node js</a>. If you already intalled <b>Node js</b> you can check the version of  <b>Node js</b> by  typing <q>node --version</q> in your command Prompt. </li>
            <div className="image">
              <img src={NodeVersion} alt="NodeVersionImage" />
            </div>
            <div className="image">
            <li>Open a folder where you want to create a React Applicaton. In that folder at top search bar type <q>CMD</q>. Your window command Prompt will be open with current folder location.</li>
              <img src={SearchBarCMD} alt="SearchBarCMDImage" />
              
            </div>
            <li>In cmd type <b>npm create vite@latest</b> and press enter key. After that press <q>y</q> key. After that you have to give the <q>Project name:</q> and press enter key.After pressing that key you have given many option from that option select <b>React</b> and press enter key. After that again you have given many option from above the option select <b>JavaScritp</b> and press enter key.
            Almost you have created a ViteReact App. You only need two more setp to complete it. </li>
            <div className="image">
              <img src={CreateReactAPP} alt="CreateReactAPPImage" />
              <li>In cmd type <q>cd fileName</q> name that Project folder that you have created in step 3 and press enter key. Example: cd myfirstapp</li>
              <div className="image">
                <img src={DirChange} alt="DirChangeImage" />
              </div>
            </div>
            <li>After step 4 in cmd type <q>npm install</q> and press enter key. It will install all dependencies you need to create and run an react application.</li>
            <div className="image">
              <img src={npminstall} alt="npminstallImage" />
            </div>
            <li>After that type <q>code .</q> and press enter to open vs code editor.</li>
            <div className="image">
              <img src={VsCode} alt="VsCodeImage" />
            </div>
            <li>Open terminal of vs Code and type  <q>npm run dev</q> to start your react project. In vs code editor terminal you will a link of localhost:5174 press control key and click on it to open in browser.</li>
            <div className="image">
              <img src={npmrundev} alt="npmrundevImage" />
              <img src={Result} alt="ResultImage" />
            </div>
        </ol>
      </div>
      <h2>Folder Structure of vite:</h2>
      <ol className="order-list">
        <li><b>node_modules: </b>It is the place where all the dependencies are stored.</li>
        <li><b>public: </b>This folder is for static files.</li>
        <li><b>src: </b> It is the place where we can write the source code.</li>
        <li><b>index.html:</b> This is the enterence point for our react application.</li>
        <li><b>package.json: </b>You can see dependencies and dev dev dependencies in thid folder in the form of json</li>
        <li><b>vite.config.json: </b>
        In this file we can find the configuration of the vite installation</li>
        <li><b>README.md:</b> Instruction for program.</li>
<div className="image">
          <img src={FolderStructure} alt="FolderStructureImage" />
        </div>
      </ol>
      <h2>JSX</h2>
      <ul className="unorder-list">
        <li>Jsx stand for JavaScript xml.</li>
        <li>Jsx allow us to write htm in react.</li>
        <li>Jsx is combination of html and JavaScript.</li>
        <li>If you are using inline css you can need to write css in the form of object.</li>
        <li>With help of Jsx expression we can write JavaScript inside html.</li>
        <li>We have to write expression inside only curly braces. {}</li>
      </ul>
      </div>
    </>
  );
}

export default IntroToReact;
