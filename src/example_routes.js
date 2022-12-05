import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";


//Pages
import Home from "./pages/home"
import About from "./pages/about"
import Dashboard from "./pages/dashboard"

export default function BasicExample() { 

return (
<Router>
    <div>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/dashboard">Dashboard</Link>
            </li>
        </ul>

        <hr />

        <Routes>
                <Route exact path="/" element={ <Home /> } />
                <Route path="/about" element={ <About /> } />
                <Route path="/dashboard" element={ <Dashboard /> } />
        </Routes>

    </div>
</Router>
)
}