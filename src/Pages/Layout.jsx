import React from "react";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

export default function Layout() {
    const location = useLocation()
    const {currentUser} = useAuth()
    return (
        <header>
            <div>
                <h1>RTTracker</h1>
                {location?.pathname === "/" 
                    ?<NavLink to="/dashboard">Home</NavLink>
                    :<NavLink to=".">Login</NavLink>
                }
                {currentUser && <p>Logout</p>}
            </div>
            <Outlet />
        </header>
    )
}