import {IoClose} from "react-icons/io5"
import IconButton from '@material-ui/core/IconButton';
import "./BasicTabsOpener.css"
function BasicTabsOpener () {
 return (
   <ul className="header-files-options"> 
    <li className="header-file-options" onFocus={() => {
     alert('2')
    }}>
      <img className="file__image__header" src={"./asImages/themepng.png"}></img>
      <p className="file__name__header" > index.htmlhhh </p>
      
      <IconButton onClick={()=> {
       alert("cancel button was clicked ")
      }}>

       <IoClose  
       style={{color:"white"}}  size={"24px"} />
       </IconButton> 
    </li>
   </ul>
 )
}

export default BasicTabsOpener 
