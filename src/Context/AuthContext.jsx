import React from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = React.createContext()

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = React.useState(null)

    React.useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
        })
        return () => unsub
    }, [])

    return (
        <AuthContext.Provider value={{ currentUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return React.useContext(AuthContext)
}