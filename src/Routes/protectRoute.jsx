import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectRoutes = (props) => {
    const fakeAuth = false

    if (!fakeAuth) return <Navigate to="/login" />

    return props.children;
}
 
export default ProtectRoutes;