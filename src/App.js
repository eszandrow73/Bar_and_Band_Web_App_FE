import logo from './logo.svg';
import './App.css';
import Calendar from 'react-calendar';
import Axios from 'axios';
import React,{ useState, useEffect } from 'react';

import BarBandForm from './BarBandForm.js'
import {Button, Modal, Input, Layout, Menu, Breadcrumb} from 'antd'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
  } from '@ant-design/icons';
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
const { Header, Sider, Content, Footer } = Layout;

function App() {

    const [curUser, setCurUser] = useState("")
    const [curEmail, setCurEmail] = useState("")
    const [collapsed, setCollapsed] = useState(false);

    const storeUser = (un, pw, email) => {
        setCurUser(un)
        setCurEmail(email)
    }

   return (
        <div className="App">
               
            <div style={{"zIndex":100}}>
                    <LoginForm storeUser={ storeUser } />
            </div>

                <Router>
                    <Layout>
                    <Header>
                        <div className="logo" />
                        <Menu theme="dark" mode="horizontal" />
                        <VideoCameraOutlined/><Link to="/profile">Profile</Link>
                        <UserOutlined/><Link to="/about">About</Link>
                        <UserOutlined/><Link to="/account">Account</Link>
                    </Header>

                    {/*
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    */}

                    <Layout>

                    <Sider trigger={null} collapsible collapsed={collapsed}>
                        <div className="logo" />
                        {/*
                        <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        items={[
                            {
                            key: '1',
                            icon: <><UserOutlined><Link to="/">Home</Link></UserOutlined></>,
                            label: 'Home',
                            },
                        ]}
                        />
                    */}
                        <UserOutlined/><Link to="/">Home</Link><br />
                        <UploadOutlined/><Link to="/postDashboard">Posts</Link><br />
                        <UploadOutlined/><Link to="/artDashboard">Art Dashboard</Link><br />
                        <UploadOutlined/><Link to="/barDashboard">Bar Dashboard</Link><br />
                        <UploadOutlined/><Link to="/bandDashboard">Band Dashboard</Link><br />
                        

                    </Sider>
                    
                          <Content style={{
                            textAlign: 'center',
                            }}>
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
                          </Content>
                        </Layout>
                        <Footer
                            style={{
                            textAlign: 'center',
                            }}
                        >
                            Designed ©2023 Created by Eric Zandrow
                        </Footer>
                      </Layout>
                  </Router>
                  
            {/*
            <div className="App-sidebar" style={{ "left": "5%", "top": "10%", "width": "25%", "height": "20%", "position": "absolute" }}>
                      <CalendarC />
            </div>*/}

        </div>
   );
}

export default App;
