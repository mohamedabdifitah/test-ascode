import {IModalPosition} from "./EditorModal";
import LanguageFetcher from "../../../languages/index"
import EditorStates from "../EditorStates";
export default function CreateAutoCompleteModal(x_axis:number,y_axis:number,lang:string,code:string,doc:any){
	const AutoCompleteModal = document.createElement("div");
	AutoCompleteModal.className= "AutoComplete__Modal"
	//AutoCompleteModal.setAtributte("id","AutoComplete__Modal")
	AutoCompleteModal.id = "AutoComplete__Modal";
	AutoCompleteModal.style.top = `${y_axis} px`
	AutoCompleteModal.style.left = "50"
	//const ListOfSuggestion = document.createElement("ul");
	alert("hi")
	//ListOfSuggestion.className = "List__of__suggestion"
	//AutoCompleteModal
	   //const codemirror = document.querySelector(".react-codemirror2")
	const codemirror = document.querySelector(".CodeMirror-scroll")
	   //const codemirror = document.querySelector(".CodeMirror")
	codemirror.appendChild(AutoCompleteModal)
	var data = LanguageFetcher(lang,code,doc)
	console.log(codemirror)
	alert(codemirror)
}
export function FetchPosition(x_axis:number,y_axis,lineChar:{line:number,ch:number,sticky:null},lang,code,doc){
	const AutoCompleteModal = document.querySelector(".AutoComplete__Modal")
	const codemirror = document.querySelector(".CodeMirror-scroll")
	if(AutoCompleteModal == null){
		CreateAutoCompleteModal(x_axis,y_axis,lang,code,doc)
	}else if(AutoCompleteModal instanceof HTMLDivElement ){
		//CreateAutoCompleteModal(x_axis,y_axis)
		//updateModalPosition(x_axis,y_axis,lineChar)
		console.log(codemirror)
		ModalPosition(lineChar)
		//var data = LanguageFetcher(lang,code,doc)

	}

}
/*
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
/*

}
*/
export function ModalPosition(lineChar:{line:number,ch:number,sticky:null}){
	var position = document.querySelector(".AutoComplete__Modal")
	//var y_position = document.querySelector(".AutoComplete__Modal")
	if(lineChar.line == 0){
		position.style.top = "30px"
		if(lineChar.ch ==0){
			position.style.left = "45px"

		}else if(lineChar.ch == 1){
			position.style.left = "60px";


		}else{
			var purePosition = position.style.left
			purePosition = purePosition.replace(/px/,"")
			//alert(purePosition)
			purePosition = parseInt(purePosition)
			position.style.left = String(lineChar.ch*8+45)+"px";

		}


	}else if(lineChar.line!=0 && lineChar.line!=1){
		position.style.top = String(lineChar.line*15+30)+"px"
		if(lineChar.ch==0){
			position.style.left= "45px";
		}else if(lineChar.ch==1){
			position.style.left = "60px"
		}else if(lineChar.ch!=0 && lineChar.ch!=1){
			position.style.left = String(lineChar.ch*8+45) + "px"
		}
	}else if(lineChar.line==1){
		position.style.top = "45px"
		if(lineChar.ch==0){
			position.style.left = "45px"
		}else if(lineChar.ch==1){                                                         position.style.left = "60px"
		}else if(lineChar.ch!=0 && lineChar.ch!=1){
			position.style.left = String(lineChar.ch*8+45)+"px"
		}
	}
}

