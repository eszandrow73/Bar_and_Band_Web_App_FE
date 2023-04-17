import logo from './logo.svg';
import './App.css';
import Calendar from 'react-calendar';
import Axios from 'axios';
import React,{ useState, useEffect } from 'react';

import BarBandForm from './BarBandForm.js'
import {Button, Modal, Input, Layout, Menu, Breadcrumb} from 'antd'
import {
    BarsOutlined,
    CaretRightOutlined,
    DatabaseOutlined,
    HomeOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    ProfileOutlined,
    PictureOutlined,
    UploadOutlined,
    UserOutlined,
    ToolOutlined,
    KeyOutlined,
    MonitorOutlined,
    MessageOutlined
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
import ChatPage from "./pages/chatGPT"


var cors = require('cors')
const { Header, Sider, Content, Footer } = Layout;

function App() {

    const [curUser, setCurUser] = useState("")
    const [curUserId, setCurUserId] = useState(0)
    const [curEmail, setCurEmail] = useState("")
    const [collapsed, setCollapsed] = useState(false);

    const storeUser = (un, id, email) => {
        localStorage.setItem("cur_user", un)
        localStorage.setItem("cur_email", email)
        //localStorage.setItem("cur_user_id", id)
        
        setCurUser(un)
        setCurUserId(id)
        setCurEmail(email)
    }

    const checkIfLoggedIn = () =>{
        let cu = localStorage.getItem("cur_user")
        //let id = localStorage.getItem("cur_user_id")
        //let email = localStorage.getItem("cur_email")

        if (cu != undefined){
            setCurUser(cu)
        }

    }

    useEffect(()=>{
        checkIfLoggedIn()
    },[curUser])

    if(curUser==""){
        return (
            <LoginForm storeUser={ storeUser } />
        )
    }

   return (
        <div className="App">
               
            {/*
            <div style={{"zIndex":100}}>
                    <LoginForm storeUser={ storeUser } />
            </div>
            */}

                <Router>
                    <Layout>
                    <Header>
                        <div className="logo" />
                        <Menu theme="dark" mode="horizontal" />
                        <Link to="/profile"><UserOutlined/>Profile</Link>
                        <Link to="/about"><ProfileOutlined />About</Link>
                        <Link to="/account"><ToolOutlined />Account</Link>
                        <Link to="/chat"><KeyOutlined />ChatGPT</Link>
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
                        <Link to="/"><HomeOutlined />Home</Link><br />
                        <Link to="/postDashboard"><MenuFoldOutlined />Posts</Link><br />
                        <Link to="/artDashboard"><PictureOutlined />Art Dashboard</Link><br />
                        <Link to="/barDashboard"><BarsOutlined />Bar Dashboard</Link><br />
                        <Link to="/bandDashboard"><CaretRightOutlined />Band Dashboard</Link><br />
                        

                    </Sider>
                    
                          <Content style={{
                            textAlign: 'center',
                            }}>
                          <Routes>
                              <Route exact path="/" element={<Home />} />
                              <Route path="/profile" element={< ProfilePage curUser={curUser} />} />
                              <Route path="/postDashboard" element={<PostDash curUserId={curUserId}/>} />
                              <Route path="/about" element={<About />} />
                              <Route path="/artDashboard" element={<ArtDashBoad curUserId={curUserId} />} />
                              <Route path="/barDashboard" element={<BarDashboard curUserId={curUserId} />} />
                              <Route path="/bandDashboard" element={<BandDashboard curUserId={curUserId} />} />
                              <Route path="/account" element={<Account curUser={curUser} curEmail={curEmail }/>} />
                              <Route path="/chat" element={<ChatPage />} />
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
