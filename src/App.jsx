import React from "react"
import TableHead from "./components/Table/TableHead"
import TableRow from "./components/Table/TableRow"
import './index.css'
import TrackForm from "./components/TrackForm/TrackForm"

export default function App() {
    return (
        <>
            <h1>RTTracker</h1>
            <TrackForm />
            <TableHead />
            <TableRow />
        </>
    )
}