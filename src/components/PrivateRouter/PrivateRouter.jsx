import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRouter = ({ children }) => {
    const isAuth = useSelector(state => state.auth.token)
    

    return isAuth ? children:<Navigate to="/login"/>
        
    
 }

export default PrivateRouter