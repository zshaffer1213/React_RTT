import React from "react";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";


export default function Layout() {
    const location = useLocation()
    const {currentUser, logout} = useAuth()


    return (
        <>
            <header>
                <div>
                    <h1>RTTracker</h1>
                    {location?.pathname === "/" 
                        ?<NavLink to="/dashboard">Home</NavLink>
                        :<NavLink to=".">Login</NavLink>
                    }
                    {currentUser && <p onClick={logout}>Logout</p>}
                </div>
            </header>
            <Outlet />
        </>
    )
}