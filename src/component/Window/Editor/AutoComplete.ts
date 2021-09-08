import {IModalPosition} from "./EditorModal"
export default function CreateAutoCompleteModal(x_axis:number,y_axis:number){
	const AutoCompleteModal = document.createElement("div");
	AutoCompleteModal.className= "AutoComplete__Modal"
	AutoCompleteModal.style.top = `${y_axis} px`
	AutoCompleteModal.style.left = "50"
	const ListOfSuggestion = document.createElement("ul");
	alert("hi")
	ListOfSuggestion.className = "List__of__suggestion"
	AutoCompleteModal.appendChild(ListOfSuggestion)
	   //const codemirror = document.querySelector(".react-codemirror2")
	const codemirror = document.querySelector(".CodeMirror-scroll")
	   //const codemirror = document.querySelector(".CodeMirror")
	codemirror.appendChild(AutoCompleteModal)
	console.log(codemirror)
	
}
export function FetchPosition(x_axis:number,y_axis,lineChar:{line:number,ch:number,sticky:null}){
	if(document.querySelector(".AutoComplete__Modal") == null){
		CreateAutoCompleteModal(x_axis,y_axis)
	}else{
		//CreateAutoCompleteModal(x_axis,y_axis)
		updateModalPosition(x_axis,y_axis,lineChar)
		
	}

}
function updateModalPosition(x_axis:number,y_axis:number,lineChar:{line:number,ch:number,sticky:null}){
	const AutoCompleteModal = document.querySelector(".AutoComplete__Modal")
	//alert(AutoCompleteModal.style.top)
	/*x_axis = String(x_axis) + "px"
	y_axis = String(y_axis) + "px"
	alert(x_axis)
	alert('hh')
	AutoCompleteModal.style.top = y_axis
	AutoCompleteModal.style.left = x_axis
*/

}
/*
export function ModalPosition(lineChar:{line:number,ch:number,sticky:null}){
	const x_position = document.querySelector(".AutoComplete__Modal").style.top ;
	const y_position = document.querySelector(".AutoComplete__Modal").style.left;
	/*if(lineChar.line==0){
		x_position = "30px"
		if(lineChar.ch ==0){
			x_position = "30px";
		}else if(lineChar.ch==1){
			x_position = "45px";

		}else{
			x_position*8+30

		}
	}else if(lineChar.line!=0 && lineChar.line!=1){
		x_position*15+30
		if(lineChar.ch==0){
			x_position = "30px"
		}else if(){

		}else if(){

		}i

	}
	*/
/*
}
*/
