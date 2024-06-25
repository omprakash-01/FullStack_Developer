import React, {useState} from 'react'
import HtmlTextFormatingCode from '../../assets/Html/HtmlTextFormatingCode.png'
import HtmlTextFormatingSolution from '../../assets/Html/HtmlTextFormatingSolution.png'
import { Link } from "react-router-dom";
import ImageModal from '../ImageModal'; 
function HtmlTextFormating() {
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
        <h1>#Html Text Formating</h1>
        <table>
            <thead>
                <tr>
                    <th>Tags</th>
                    <th>Details</th>
                </tr>
            </thead>
            <tbody>
                <tr>

                    <td>Bold Tag : &lt;b&gt;.....&lt;/b&gt;</td>
                    <td><b>It is used to style text in bold. <br /> It is container tag. <br /> It is an inline level element.</b></td>
                </tr>
                <tr>
                    <td>Strong Tag : &lt;strong&gt;.....&lt;/strong&gt;</td>
                    <td><strong>It is used to style text in bold and mark the content as  important.</strong></td>
                </tr>
                <tr>
                    <td>Italic Tag: &lt;i&gt;.....&lt;i/&gt;</td>
                    <td><i>It is used to style text in italic.</i></td>
                </tr>
                <tr>
                    <td>Emphasis Tag: &lt;em&gt;....&lt;/em&gt;</td>
                    <td><em>It is used to style in bold and mark content as important.</em></td>
                </tr>
                <tr>
                    <td>Underline Tag: &lt;u&gt;.....&lt;/u&gt;</td>
                    <td><u>It is used to underline the text.</u></td>
                </tr>
                <tr>
                    <td>Insert Tag: &lt;ins&gt;.....&lt;/ins&gt;</td>
                    <td> <ins>It is used to style in underline and mark content as recently added.</ins> </td>
                </tr>
                <tr>
                    <td>Superscript Tag:  &lt;sup&gt;.....&lt;/sup&gt;</td>
                    <td>Superscript text appears half a character above normal line, and some time rendered in a smaller font. <code>(a+b)<sup>2</sup> = a<sup>2</sup> + b<sup>2</sup> + 2ab. </code> </td>
                </tr>
                <tr>
                    <td>Subscript Tag: &lt;sub&gt;.....&lt;/sub&gt;</td>
                    <td>Subscript text appears half a character below the normal line, and is sometimes rendered in a smaller font. <code>H<sub>2</sub>0, <code>C0<sub>2</sub></code></code></td>
                </tr>
                <tr>
                    <td>Delete Tag: &lt;del&gt;.....&lt;/del&gt;</td>
                    <td><del>It is used to represent deleted content or the content which will be deleted in the near future.</del></td>
                </tr>
                <tr>
                    <td>Code Tag: &lt;code&gt;.....&lt;/code&gt;</td>
                    <td>It is used to represent code of some programming language. <br /> <code style={{backgroundColor:'#b3e5fb'}}>
                        #include&lt;iostream&gt;<br />
                        using namespace std; <br />
                        int main()&#123; <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; "Hello, World!"; <br />
                  &#125;
                    </code>
                    </td>
                </tr>
                <tr>
                    <td>Address Tag: &lt;address&gt;....&lt;/addreess&gt;</td>
                    <td>It is used to represent address. <address>6, 3rd Floor, Gariahat Road (s), Dhakuria, GZD, UP</address></td>
                </tr>
                <tr>
                    <td>Quote Tag: &lt;q&gt;.....&lt;/q&gt; </td>
                    <td><q>It is used for single line quatation.</q></td>
                </tr>
                <tr>
                    <td>BlockQuote Tag: &lt;blockquote&gt;.....&lt;/blockquote&gt;</td>
                    <td><blockquote>It is used for multiline quatation.</blockquote></td>
                </tr>
                <tr>
                    <td>Abbreviation Tag: &lt;abbr&gt;.....&lt;/abbr&gt;</td>
                    <td>It is used to provide expansion. For expension we have titile tag. Point your mouse cursor at HTML<br /> <abbr style={{backgroundColor:'#b3e5fb'}} title="HyperText Markup Language">HTML</abbr>,   <abbr style={{backgroundColor:'#b3e5fb'}} title="JavaScript">Js</abbr></td>
                </tr>
                <tr>
                    <td>Mark Tag: &lt;mark&gt;.....&lt;/mark&gt;</td>
                    <td>It is used to <mark>highlight </mark> text. </td>
                </tr>
                <tr>
                    <td>Small Tag: &lt;small&gt;.....&lt;/small&gt;</td>
                    <td><small>It is used to render text in a smaller font size compared to the surrounding text.</small></td>
                </tr>
                <tr>
                    <td>Pre Tag: &lt;pre&gt;.....&lt;/pre&gt;</td>
                    <td><pre>Display preformatted text.</pre></td>
                </tr>
                <tr>
                    <td>
                        <div className="image">
                            <img src={HtmlTextFormatingCode} 
                            onClick={()=>openModal(HtmlTextFormatingCode)} style={{cursor:'pointer'}}
                            alt="" />
                        </div>
                    </td>
                    <td>
                        <div className="image">
                            <img src={HtmlTextFormatingSolution} alt="" onClick={()=>openModal(HtmlTextFormatingSolution)} style={{cursor:'pointer'}} />
                        </div>
                    </td>
                </tr>
                
            </tbody>
        </table>
        <hr />
        <div className="btn-container">
          <div className="btn">
            <Link to="/html/htmllist">Previous Page</Link>
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

export default HtmlTextFormating
