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
function App() {
  return (
    <div className="App">

      <Setting />
       <Header />
       <Sidebar />
       <Windows />
       <Terminal />
    </div>
  );
}

export default App;
