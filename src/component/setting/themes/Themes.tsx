import React,{useState,useEffect} from 'react';
import './themes.css';
import {PhotoshopPicker, GithubPicker,AlphaPicker ,ChromePicker,MaterialPicker,TwitterPicker,SliderPicker} from 'react-color';
const Themes = () => {
  const [color,setColor] = useState('#000000')
  const handleChangeComplete = (color:any) => {
    setColor(color.hex)

  }
  return (
   <div className="color-picker">
    <ChromePicker
     color={color}
     onChangeComplete ={(color) => handleChangeComplete(color)}
    />
    </div>

  )
}
export default Themes
