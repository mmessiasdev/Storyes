import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import HomePage from '../view/pages/homepage/homepage';
import history from "../model/history";
import Login from '../view/pages/login/login';
import Register from '../view/pages/login/register';
import Authcontext from '../services/authcontext';
import authapi from '../services/authapi';
import PrivateRoute from '../view/componnents/privateroutes';
import ProdAddPage from '../view/pages/addproducts/paddpage';
import { useState } from 'react';


// ---------- PART RESPONSIBLE FOR MANAGING THE APP'S PAGES ---------- // 

function RoutesPage() {

    const [isAuthenticated, setisAuthenticated] = useState(authapi.authenticate)



    return (
        <Authcontext.Provider value={{isAuthenticated, setisAuthenticated}}>
            <Router history={history}>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/homepage" element={<HomePage />} />
                    <PrivateRoute path="/addproduct" element={<ProdAddPage/>}/>
                </Routes>

            </Router>

        </Authcontext.Provider>

    )
}

export default RoutesPage;