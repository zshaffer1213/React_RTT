import React from "react"
import { auth, db } from "../../firebase"
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from 'firebase/auth'
import { doc, setDoc, collection, addDoc } from "firebase/firestore";
import { Navigate, useNavigate } from "react-router-dom"
import { useAuth } from "../../Context/AuthContext"


export default function LoginPage() {
    const [email, setEmail] = React.useState('')
    const [firstName, setFirstName] = React.useState('')
    const [lastName, setLastName] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [isLogin, setIsLogin] = React.useState(true)
    const [storeNumber, setStoreNumber] = React.useState('')
    const navigate = useNavigate()
    const {currentUser} = useAuth()

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            if (isLogin) {
                const userCred = await signInWithEmailAndPassword(auth, email, password)
                console.log("User logged in!", userCred.user.uid)
                navigate('/', {replace: true})
            } else {
                const userCred = await createUserWithEmailAndPassword(auth, email, password)
                await setDoc(doc(db, 'users', userCred.user.uid), {
                    name: `${firstName} ${lastName}`,
                    store: storeNumber,

                }, {merge: true})
                console.log("User registered!", userCred.user.email)
            }
        }catch (err) {
            console.error(err.message)
        }finally {
            setEmail('')
            setPassword('')
        }
    }
    
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>{isLogin ? 'Login' : "Sign Up"}</h2>

                {!isLogin && <input
                    name="username-first"
                    type='text'
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    autoComplete="given-name"
                />}

                {!isLogin && <input
                    name="username-last"
                    type='text'
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                    autoComplete="family-name"
                />}
                
                {!isLogin && <input
                    name="store-number"
                    type='number'
                    placeholder="Store Number"
                    value={storeNumber}
                    onChange={(e) => setStoreNumber(e.target.value)}
                    required
                    autoComplete='false'
                />}

                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoComplete="email"
                />
                <input 
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    autoComplete={isLogin ? "current-password" : "new-password"}
                />
                <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
                <p onClick={() => setIsLogin((prev) => !prev)}>
                    {isLogin ? "Need an account?" : "Already have on?"}
                </p>
            </form>
            {currentUser && <Navigate to='/dashboard'/>}
        </div>
    )
    
}