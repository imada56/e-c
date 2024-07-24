import React, { useContext } from 'react';
import { AuthContext } from './ContexAuth';
import { Navigate, useLocation } from 'react-router-dom';

interface RequireAuthProps {
  children: React.ReactNode;
}

const RequireAuth: React.FC<RequireAuthProps> = ({ children }) => {

  const authContext = useContext(AuthContext); // Retrieve the context value
  const {currentUser} = authContext || {};
  const location = useLocation();

  if (!currentUser) {
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  }

  return <>{children}</>;
};

export default RequireAuth;
