import React from "react";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";

export default function Layout() {
    const location = useLocation()
    return (
        <header>
            <div>
                <h1>RTTracker</h1>
                {location?.pathname === "/login" 
                    ?<NavLink to=".">Home</NavLink>
                    :<NavLink to="login">Login</NavLink>
                }
            </div>
            <Outlet />
        </header>
    )
}