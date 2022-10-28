import React, { useContext } from "react";
import {Navigate, Outlet } from "react-router-dom";
import authcontext from "../../controller/auth/authcontext";


const PrivateRoute = () => {
    const { isAuthenticated } = useContext(authcontext);
    return isAuthenticated ? <Outlet/> : <Navigate to="/auth" />;

}

export default PrivateRoute;