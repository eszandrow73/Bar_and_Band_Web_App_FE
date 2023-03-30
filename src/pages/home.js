import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom"

export default function Home() {
    return (
        <div>
            <h2>Home</h2>
            <br /><h3>Dashboard links below</h3><br />
                <Link to="/postDashboard">Posts</Link><br />
                <Link to="/artDashboard">Art Dashboard</Link><br />
                <Link to="/barDashboard">Bar Dashboard</Link><br />
                <Link to="/bandDashboard">Band Dashboard</Link><br />
        </div>
    );
}