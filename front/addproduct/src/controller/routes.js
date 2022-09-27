
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import HomePage from '../view/screens/homepage/homepage';
import history from "../model/history";
import Login from '../view/componnents/login';
import Register from '../view/componnents/register';
import AdminPage from '../view/screens/admin/admin';
import AuthContext from '../services/authcontext';
import authapi from '../services/authapi';
import React, {useState} from 'react';


// ---------- PART RESPONSIBLE FOR MANAGING THE APP'S PAGES ---------- // 

function RoutesPage() {
    const [isAuthenticated, setIsAuthenticated] = useState(authapi.isAuthenticated)

    return (
        <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated}}>
            <Router history={history}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/homepage" element={<HomePage />} />
                    <Route path="/admin" element={<AdminPage />} />
                </Routes>

            </Router>

        </AuthContext.Provider>

    )
}

export default RoutesPage;