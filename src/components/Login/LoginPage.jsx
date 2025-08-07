import React from "react"
import { auth } from "../../firebase"
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from 'firebase/auth'
import { Navigate } from "react-router-dom"


export default function LoginPage() {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [isLogin, setIsLogin] = React.useState(true)

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            if (isLogin) {
                const userCred = await signInWithEmailAndPassword(auth, email, password)
                console.log("User logged in!", userCred.user.uid)
            } else {
                const userCred = await createUserWithEmailAndPassword(auth, email, password)
                console.log("User registered!", userCred.user.uid)
            }
        }catch (err) {
            console.error(err.message)
        }finally {
            setEmail('')
            setPassword('')
            // if (isLogin )
        }
    }
    
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>{isLogin ? 'Login' : "Sign Up"}</h2>
                <input
                    name="email"
                    type="email"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoComplete="email"
                />
                <input 
                    name="password"
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
                <p onClick={() => setIsLogin((prev) => !prev)}>
                    {isLogin ? "Need an account?" : "Already have on?"}
                </p>
            </form>
        </div>
    )
    
}