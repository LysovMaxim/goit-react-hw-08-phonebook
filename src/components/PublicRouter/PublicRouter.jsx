import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PublicRouter = ({ children }) => {
    const isAuth = useSelector(state => state.auth.token)

    return !isAuth ? children:<Navigate to="/contacts"/>
        
    
 }

export default PublicRouter