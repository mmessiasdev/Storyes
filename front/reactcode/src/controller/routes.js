
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
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/homepage" element={<HomePage />} />
                    <Route exact path='/' element={<PrivateRoute />}>
                        <Route exact path='/login/auth' element={<HomePageLogin />} />
                        <Route exact path='/login/addproduct' element={<AddP/>}/>
                    </Route>
                </Routes>

            </Router>

        </AuthContext.Provider>

    )
}

export default RoutesPage;