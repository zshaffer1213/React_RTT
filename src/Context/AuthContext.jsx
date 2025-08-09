import React from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

const AuthContext = React.createContext()

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = React.useState(null)

    React.useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
        })
        return () => unsub
    }, [])

    function logout() {
        return signOut(auth)
    }

    const contextValues = {
        currentUser,
        logout
    }

    return (
        <AuthContext.Provider value={contextValues}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return React.useContext(AuthContext)
}