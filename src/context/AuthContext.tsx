
import { getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, User } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { SignOutUser, userStateListener } from "../firebase/firebase";
import { createContext, useState, useEffect, ReactNode } from "react";

interface Props {
  children?: ReactNode
}

export const AuthContext = createContext({
  // "User" comes from firebase auth-public.d.ts
  currentUser: {} as User | null,
  setCurrentUser: (_user:User) => {},
  signIn: async (_email: string, _password: string) => {},
  sendResetEmail: async (_email: string) => {},
  signOut: () => {}
});

export const AuthProvider = ({ children }: Props) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const navigate = useNavigate()

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const sendResetEmail = async (email: string) => {
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
    } catch (error) {
      console.error(error);
    }
  }

  const signOut = () => {
    SignOutUser()
    setCurrentUser(null)
    navigate('/')
  }

  const value = {
    currentUser,
    setCurrentUser,
    signIn,
    sendResetEmail,
    signOut
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
