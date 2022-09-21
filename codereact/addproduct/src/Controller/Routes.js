
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import HomePage from '../view/homepage/homepage';
import history from "../model/history";
import Login from '../view/login/login';
import Register from '../view/login/register';


// ---------- PART RESPONSIBLE FOR MANAGING THE APP'S PAGES ---------- // 

function RoutesPage() {

    return (
        <Router history={history}>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/homepage" element={<HomePage/>} />
            </Routes>

        </Router>

    )
}

export default RoutesPage;