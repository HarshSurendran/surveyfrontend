import React from 'react'
import { IProtectedRouteProps } from '../Interfaces/IProps'
import { Navigate } from 'react-router-dom';

const PublicRoute: React.FC<IProtectedRouteProps> = ({ children }) => {
    const token = localStorage.getItem("token");
    return token ? <Navigate to="/admin/dashboard" replace /> : children;
}

export default PublicRoute
