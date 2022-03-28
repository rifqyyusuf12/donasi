import React from 'react';
import { Navigate } from 'react-router-dom';
import {reactLocalStorage} from 'reactjs-localstorage';


const ProtectRoutes = (props) => {
    var useAuth = false

    const email = reactLocalStorage.get('email')

    if (email) useAuth = true

    if (!useAuth) return <Navigate to="/login" />

    return props.children;
}
 
export default ProtectRoutes;