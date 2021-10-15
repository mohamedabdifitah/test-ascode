
let dragStartIndex

export default function addEventListeners() {
  const draggables = document.querySelector('.Tabs');
  const dragListItems = document.querySelector('.MuiButtonBase-root.MuiTab-root.MuiTab-textColorInherit');
  /*
  draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', dragStart);
    //draggable.addEventListener("touchstart",dragStart);
  });
  */
  draggables?.addEventListener("touchstart",dragStart);
  /*dragListItems.forEach(item => {
	  item.addEventListener("touchstart",dragOver);
	  item.addEventListener("touchmove",dragEnter);
	  item.addEventListener("touchend",dragOver);
	  
  });
  */
 dragListItems?.addEventListener("touchstart",dragOver);
 dragListItems?.addEventListener("touchmove",dragEnter);
 dragListItems?.addEventListener("touchend",dragOver);
}
function swapItems(fromIndex, toIndex) {
  const itemOne = listItems[fromIndex].querySelector('.draggable');
  const itemTwo = listItems[toIndex].querySelector('.draggable');

  listItems[fromIndex].appendChild(itemTwo);
  listItems[toIndex].appendChild(itemOne);
}
function dragDrop() {
  // console.log('Event: ', 'drop');
  const dragEndIndex = +this.getAttribute('data-index');
  swapItems(dragStartIndex, dragEndIndex);

  this.classList.remove('over');
}
function dragOver(e) {
  // console.log('Event: ', 'dragover');
  e.preventDefault();
}

function dragLeave() {
  // console.log('Event: ', 'dragleave');
  this.classList.remove('over');
}
function dragEnter() {
  // console.log('Event: ', 'dragenter');
  this.classList.add('over');
}

function dragStart() {
  // console.log('Event: ', 'dragstart');
  dragStartIndex = +this.closest('li').getAttribute('data-index');
}
const Files = [
"index.js",
"src.ts",
"manage.py",
"index.html",
"main.cpp",

]
/*
export default function CreateListUiFiles(){
	const Bar = document.createElement("ul") ;
	const listItem = document.createElement("li")
	Files.ma((file,index)=>{
		listItem.setAttribute('data-index', index);
		listItem.innerHTML= `<img
		`
		draggable_list.appendChild(listItem)
		
	})
	addEventListeners()


}
*/
