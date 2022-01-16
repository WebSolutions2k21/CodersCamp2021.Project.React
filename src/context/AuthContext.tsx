import {createContext} from 'react'
import firebase from 'firebase/compat/app';

export const AuthContext = createContext<firebase.User | null>(null);
