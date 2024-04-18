import React, { Children, useContext, useEffect, useState } from 'react'
import { createContext } from 'react'
import { createUserWithEmailAndPassword 
    ,signInWithEmailAndPassword,onAuthStateChanged,signOut, sendPasswordResetEmail, updateEmail, updatePassword} from "firebase/auth";
import auth from '../Firebase/Firebase.jsx'
const AuthContext =createContext();
   
const AuthProvider=({children})=> {
    const [currentUser ,setCurrentUser]=useState();
    const [loading ,setLoading]=useState(true);
   
    const singup =(email,password)=>{
       return createUserWithEmailAndPassword(auth,email,password);
    };
    
    const login =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    const updateUserEmail =(email)=>{
        return updateEmail(auth.currentUser,email);
    }
    const updateUserPassword =(password)=>{
        return updatePassword(auth.currentUser,password);
    }
    const logout =()=>{
        return signOut(auth);
    }
    const resetePassword =(email)=>{
        return sendPasswordResetEmail(auth,email);
     };

    useEffect(() => {
        const unsubcribe=onAuthStateChanged(auth,(user)=>{
           setCurrentUser(user);
           setLoading(false);
        });
        return()=>{
            unsubcribe();
        }
    }, [])
  return (
  <AuthContext.Provider 
  value={
 {currentUser,
  singup,
  logout,
  login,
  resetePassword,
  updateUserEmail,
  updateUserPassword}}>
      {!loading && children}
  </AuthContext.Provider>
  );
};

export  {AuthProvider,AuthContext};
 
// export const useAuth =()=>{
//     return useContext(AuthContext);
// }
