import React from 'react';
import EditorModal from './EditorModal'
import {Iprops} from './EditorModal';
const EditorLinker = (props:Iprops)=>{
  const {
   x_axis,
   set_x_axis,
   y_axis,
   set_y_axis,
   lineChar,
   setlineChar,
   } = props
  const elem = React.createElement(EditorModal, props, props.children);
  const editor = document.querySelector('.react-codemirror2')
  editor?.appendChild(elem)
  //alert(editor)
  return (
   <>
   </>

  )
}
export default EditorLinker
