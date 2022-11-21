import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import HomePage from '../../view/screens/homepage/homepage';
import HomePageLogin from '../../view/screens/homepageauth/homepageauth';
import history from "../../model/history";
import Login from '../../view/screens/login/login';
import AuthContext from '../auth/authcontext';
import authapi from '../auth/authapi';
import React, { useState } from 'react';
import PrivateRoute from './privateroutes/privateroute';
import AddP from '../../view/screens/addproduct/addproduct';
import Register from '../../view/screens/login/register';
import Product from '../../view/screens/product';
import HomePageAuth from '../../view/screens/homepageauth/homepageauth';


// ---------- PART RESPONSIBLE FOR MANAGING THE APP'S PAGES ---------- // 

function RoutesPage() {
    const [isAuthenticated, setIsAuthenticated] = useState(authapi.isAuthenticated)

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            <Router history={history}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route exact path="/" element={<PrivateRoute />}>
                        <Route exact path='/auth/homepage' element={<HomePageAuth/>} />
                        <Route exact path='/auth/addproduct' element={<AddP />} />
                        <Route exact path="/auth/product/:id" element={<Product />} />
                    </Route>    
                    <Route path="/auth" element={<Login/>} />
                    <Route path="/register" element={<Register/>} />
                    <Route path="/homepage" element={<HomePage />} />
                 
                </Routes>

            </Router>

        </AuthContext.Provider>

    )
}

export default RoutesPage;