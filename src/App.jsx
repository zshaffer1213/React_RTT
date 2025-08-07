import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './index.css'
import LoginPage from "./components/Login/LoginPage"
import MainPage from "./Pages/MainPage"
import Layout from "./Pages/Layout"
import { AuthProvider } from "./Context/AuthContext"

export default function App() {

    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout />}>
                        <Route index element={<MainPage />} />
                        <Route path="login" element={<LoginPage />} />                        
                    </Route>
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    )
}