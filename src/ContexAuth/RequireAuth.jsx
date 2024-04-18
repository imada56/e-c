import React, { useContext } from 'react'
import { AuthContext } from './ContexAuth';
import { Navigate, useLocation } from 'react-router-dom';

const RequireAuth = ({children}) =>{
    const currentUser = useContext(AuthContext).currentUser
    const location =useLocation() 
    if(!currentUser){
   return <Navigate to='/login' state={{path : location.pathname}}/>
     }
 
    return children ;

}

export default RequireAuth