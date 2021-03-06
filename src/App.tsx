import  React from 'react';
import './App.css';
import {BrowserRouter as Router , Switch,Route,Link} from "react-router-dom"
import Home from "./component/Home"
import New from "./component/New"
import Header from "./component/Header/Header"
import Setting from "./component/setting/Setting"
import Sidebar from "./component/Sidebar/Sidebar"
import Windows from "./component/Window/Windows"
import Terminal from "./component/Terminal/Terminal"
/*port Split from "split.js" 
import Split from 'react-splitter';
*/
/*
import "./Splitter/Splitter"
*/
import "./Splitter/TouchSplitter"
import SplitterLayout from 'react-splitter-layout';
/*
import 'react-splitter-layout/lib/index.css';
*/
import NewSidebar from "./component/Sidebar/NewSidebar";
function App() {
  /*
  const onSplitChanged = (primarySize: string) => {
  console.log(`The split is: `,primarySize);
  };
  const onMeasuredSizesChanged = (sizes: SplitMeasuredPixelSizes) => {
  console.log(`The primary pane is:`, sizes.primary,"px");
  console.log(`The splitter is:`, sizes.splitter,"px");
  console.log(`The secondary pane is:`, sizes.secondary,"px");
  };
  */
  return (
    <div className="App">

      {/*<Setting />*/}
       <Header />

       <Sidebar/>
       {/*<NewSidebar />*/}
        <div className="Sidebar-window-separator" draggable={true}>
	</div>
        <Windows />
	<div className="Terminal-window-separator" draggable={true} />
       <Terminal />
    </div>
  );
}

export default App;
