
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import HomePage from '../View/HomePage/HomePage';
import history from "../Model/History";
import Login from '../View/Login/Login';


// ---------- PART RESPONSIBLE FOR MANAGING THE APP'S PAGES ---------- // 

function RoutesPage() {

    return (
        <Router history={history}>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/homepage" element={<HomePage/>} />
            </Routes>

        </Router>

    )
}

export default RoutesPage;