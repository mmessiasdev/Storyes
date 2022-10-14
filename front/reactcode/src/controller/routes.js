
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import HomePage from '../view/screens/homepage/homepage';
import HomePageLogin from '../view/screens/homepagelogin/homepage';
import history from "../model/history";
import Login from '../view/componnents/login/login';
import Register from '../view/componnents/login/register';
import AuthContext from '../services/authcontext';
import authapi from '../services/authapi';
import React, { useState } from 'react';
import PrivateRoute from '../view/privateroutes/privateroute';
import AddP from '../view/screens/addproduct/addproduct';


// ---------- PART RESPONSIBLE FOR MANAGING THE APP'S PAGES ---------- // 

function RoutesPage() {
    const [isAuthenticated, setIsAuthenticated] = useState(authapi.isAuthenticated)

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            <Router history={history}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route exact path="/" element={<PrivateRoute />}>
                        <Route exact path='/auth/homepage' element={<HomePageLogin />} />
                        <Route exact path='/auth/addproduct' element={<AddP />} />
                    </Route>    
                    <Route path="/auth" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/homepage" element={<HomePage />} />
                </Routes>

            </Router>

        </AuthContext.Provider>

    )
}

export default RoutesPage;