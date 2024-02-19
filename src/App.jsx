import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./page/Dashboard";
import { useState } from "react";
import DataBuku from "./page/DataBuku";


const App = () => {

  const [showSidebar, SetShowSidebar] = useState('');
  const [showIcon, SetShowIcon] = useState('');

  const toggleClass = () => {
    SetShowSidebar(showSidebar === '' ? 'show-sidebar' : '');
    SetShowIcon(showIcon === '' ? 'show-icon' : '');
  };

  return (
    <>

      <Header toggle={toggleClass} showIcon={showIcon}/>
      <Sidebar toggle={toggleClass} showSidebar={showSidebar}/>

      <footer className="footer">
        <div>@copyright by Flindigital</div>
        <div>Version 1.0 @ 2024</div>
      </footer>
    </>
  );
}

export default App;