import  React from 'react';
import './App.css';
import {BrowserRouter as Router , Switch,Route,Link} from "react-router-dom"
import Home from "./component/Home"
import New from "./component/New"
import Header from "./component/Header/Header"
import Sidebar from "./component/Sidebar/Sidebar"
import Windows from "./component/Window/Windows"
import Terminal from "./component/Terminal/Terminal"
import Navbar from "./component/Sidebar/Navbar/Navbar"
function App() {
  return (
    <div className="App">
       <Navbar />
       <Header />
       <Sidebar />
       <Windows />
       <Terminal />
    </div>
  );
}

export default App;
