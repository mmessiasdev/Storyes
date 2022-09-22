import React, { useContext } from "react";
import authcontext from "../../services/authcontext";
import { Route, useNavigate } from "react-router-dom";

const PrivateRoute = ({path, component}) => {
    const { isAuthenticated } = useContext(authcontext)
    if (isAuthenticated) {
        return <Route path={path} component={component} />

    } else {
        useNavigate("/");
    }

}

export default PrivateRoute;