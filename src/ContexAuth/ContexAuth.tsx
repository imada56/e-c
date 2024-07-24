import React, { createContext, useContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail, updateEmail, updatePassword, onAuthStateChanged, UserCredential } from "firebase/auth";
import { auth } from '../Firebase/Firebase'; // Adjust path as per your actual Firebase configuration
import { User } from 'firebase/auth'; // Import User type from Firebase

// Interface for User object
interface IUser {
  uid: string;
  email: string | null; // Allow for null values
  // Add other relevant user properties
}

// Interface for Authentication Context
interface IAuthContext {
  currentUser: IUser | null; // Current user or null if not logged in
  signup: (email: string, password: string) => Promise<void>; // Function to sign up
  login: (email: string, password: string) => Promise<void>; // Function to log in
  updateUserEmail: (email: string) => Promise<void>; // Function to update user email
  updateUserPassword: (password: string) => Promise<void>; // Function to update user password
  logout: () => Promise<void>; // Function to log out
  resetPassword: (email: string) => Promise<void>; // Function to reset password
}

// Create AuthContext with initial value of undefined
const AuthContext = createContext<IAuthContext | undefined>(undefined);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<IUser | null>(null); // Initialize currentUser with IUser or null
  const [loading, setLoading] = useState(true); // Loading state

  // Function to sign up
  const signup = async (email: string, password: string): Promise<void> => {
    try {
      const userCredential: UserCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      if (user) {
        setCurrentUser({
          uid: user.uid,
          email: user.email,
          // Add other relevant properties from user
        });
      }
    } catch (error) {
      console.error("Error signing up:", error);
      throw error; // Rethrow the error to handle it elsewhere
    }
  };

  // Function to log in
  const login = async (email: string, password: string): Promise<void> => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("Error logging in:", error);
      throw error; // Rethrow the error to handle it elsewhere
    }
  };
  // Function to update user email
  const updateUserEmail = (email: string): Promise<void> => {
    return updateEmail(auth.currentUser!, email); // Assert non-null since currentUser might be null
  };

  // Function to update user password
  const updateUserPassword = (password: string): Promise<void> => {
    return updatePassword(auth.currentUser!, password); // Assert non-null since currentUser might be null
  };

  // Function to log out
  const logout = (): Promise<void> => {
    return signOut(auth);
  };

  // Function to reset password
  const resetPassword = (email: string): Promise<void> => {
    return sendPasswordResetEmail(auth, email);
  };

  // Effect to listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
      if (user) {
        setCurrentUser({
          uid: user.uid,
          email: user.email,
          // Add other relevant properties from user
        });
      } else {
        setCurrentUser(null); // Set currentUser to null if no user is logged in
      }
      setLoading(false);
    });

    return () => {
      unsubscribe(); // Clean up
    };
  }, []);

  // Render AuthProvider with AuthContext.Provider
  return (
    <AuthContext.Provider
      value={{
        currentUser,
        signup,
        login,
        logout,
        resetPassword,
        updateUserEmail,
        updateUserPassword
      }}
    >
      {!loading && children} {/* Render children only when loading is false */}
    </AuthContext.Provider>
  );
};

// Export AuthProvider and AuthContext
export { AuthProvider, AuthContext };

// Custom hook to use AuthContext
export const useAuth = (): IAuthContext => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider'); // Throw error if used outside AuthProvider
  }
  return context;
};
