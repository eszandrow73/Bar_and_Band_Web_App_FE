import logo from './logo.svg';
import './App.css';
import Calendar from 'react-calendar';
import Axios from 'axios';
import React,{ useState, useEffect } from 'react';

import BarBandForm from './BarBandForm.js'
import {Button, Modal, Input} from 'antd'
import "antd/dist/antd.css";
import LoginForm from "./components/loginform"
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
import BarDashboard from "./pages/barDashboard"
import BandDashboard from "./pages/bandDashboard"
import Account from "./pages/account"

var cors = require('cors')


function App() {

    const [curUser, setCurUser] = useState("")

    const storeUser = (un, pw) => {
            setCurUser(un)
    }

    const ax_call = async()=>{
      //https://resttesttest.com/
      //this works
      //var res = await Axios.get('https://httpbin.org/get')
      //let's try this
      //var res = await Axios.post('https://httpbin.org/post')
      //id, spotify, website, "style", members
      let r_list = []
      r_list.push(3)
      r_list.push('https://open.spotify.com/artist/2RbojkeHFCCbnmM4UAaWiN')
      r_list.push('https://andreagillis.bandcamp.com/')
      r_list.push('Alernative')
      r_list.push('Andrea Gillis')
      var res = await Axios.get('http://localhost:8999/addBand',{params: {'input':r_list}})
        console.log(res)
    }

    


   return (
        <div className="App">
          <header className="App-header" style={{"text":"black"}}>
               <div style={{"zIndex":100}}>
                      <LoginForm storeUser={ storeUser } />
                  </div>
                  <Router>
                      <div>
                          <ul>
                              <li><Link to="/">Home</Link></li>
                              <li><Link to="/about">About</Link></li>
                           <li><Link to="/barDashboard">Bar Dashboard</Link></li>
                           <li><Link to="/bandDashboard">Band Dashboard</Link></li>
                              <li><Link to="/account">Account</Link></li>
                          </ul>
                          <hr />
                          <Routes>
                              <Route exact path="/" element={<Home />} />
                              <Route path="/about" element={<About />} />
                              <Route path="/barDashboard" element={<BarDashboard />} />
                               <Route path="/bandDashboard" element={<BandDashboard />} />
                               <Route path="/account" element={<Account curUser={curUser} />} />
                          </Routes>

                      </div>
                  </Router>

            <div className="App-sidebar" style={{ "left": "5%", "top": "10%", "width": "25%", "height": "20%", "position": "absolute" }}>
                      <CalendarC />
                      <Button onClick={ax_call}>test</Button>
            </div>

           </header>
        </div>
   );
}

export default App;
