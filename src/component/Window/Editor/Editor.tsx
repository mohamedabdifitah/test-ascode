import "./Editor.css"
import EditorViewer from "./EditorViewer"
import useLocalStorage from '../hooks/useLocalStorage'

const Editor = () => {
 const [html, setHtml] = useLocalStorage('html', '')
 const [css, setCss] = useLocalStorage('css', '')
 const [js, setJs] = useLocalStorage('js', '')
 const [srcDoc, setSrcDoc] = useState('')

 return (
  <div className="Editor__section">
   {/*
   <table> 
    <ol>
    <li>
    <tr>
     <td contentEditable="true">
     <h4 className="keyword__word">
      import </h4>
      </td>
      <td contentEditable="true">
      <h4>
       data
       </h4>
      </td>
     <td contentEditable="true"><h4 className="keyword__word" 
     >from </h4> </td>
     <td contentEditable="true">
     <h4>
     "./data"
     </h4>
     </td>
    </tr>
    </li>
    </ol>
   </table>

   <EditorViewer />
   */}
   <EditorViewer
    language="css"
    displayName="CSS"
    value={css}
    onChange={setCss}
    />
  </div>

 )

}

export default Editor 
