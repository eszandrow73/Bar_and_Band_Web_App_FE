import logo from './logo.svg';
import './App.css';
import Calendar from 'react-calendar';
import Axios from 'axios';
import React,{ useState, useEffect } from 'react';

import BarBandForm from './BarBandForm.js'
import {Button, Modal, Input} from 'antd'
import "antd/dist/antd.css";
import LoginForm from "./pages/loginform"
import CalendarC from "./components/CalendarComponent"
//import BaseTable from "./components/BBTable"

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";


//Pages
import Home from "./pages/home"
import About from "./pages/about"
import ArtDashBoad from "./pages/artDashboard"
import BarDashboard from "./pages/barDashboard"
import BandDashboard from "./pages/bandDashboard"
import PostDash from "./pages/postDash"
import Account from "./pages/account"
import ProfilePage from "./pages/profile"


var cors = require('cors')


function App() {

    const [curUser, setCurUser] = useState("")
    const [curEmail, setCurEmail] = useState("")

    const storeUser = (un, pw, email) => {
        setCurUser(un)
        setCurEmail(email)
    }

   return (
        <div className="App">
          <header className="App-header" style={{"text":"black"}}>
               {/*<div style={{"zIndex":100}}>
                      <LoginForm storeUser={ storeUser } />
   </div>*/}
                  <Router>
                      <div>
                          <ul>
                              <li><Link to="/">Home</Link></li>
                              <li><Link to="/profile">Profile</Link></li>
                              <li><Link to="/postDashboard">Posts</Link></li>
                              <li><Link to="/artDashboard">Art Dashboard</Link></li>
                              <li><Link to="/barDashboard">Bar Dashboard</Link></li>
                              <li><Link to="/bandDashboard">Band Dashboard</Link></li>
                              <li><Link to="/about">About</Link></li>
                              <li><Link to="/account">Account</Link></li>

                          </ul>
                          <hr />
                          <Routes>
                              <Route exact path="/" element={<Home />} />
                              <Route path="/profile" element={< ProfilePage curUser={curUser} />} />
                              <Route path="/postDashboard" element={<PostDash />} />
                              <Route path="/about" element={<About />} />
                              <Route path="/artDashboard" element={<ArtDashBoad />} />
                              <Route path="/barDashboard" element={<BarDashboard />} />
                              <Route path="/bandDashboard" element={<BandDashboard />} />
                              <Route path="/account" element={<Account curUser={curUser} curEmail={curEmail }/>} />
                          </Routes>

                      </div>
                  </Router>

            <div className="App-sidebar" style={{ "left": "5%", "top": "10%", "width": "25%", "height": "20%", "position": "absolute" }}>
                      <CalendarC />
            </div>

           </header>
        </div>
   );
}

export default App;
