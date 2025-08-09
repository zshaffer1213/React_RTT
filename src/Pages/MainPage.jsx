import React from "react"
import TableHead from "../components/Table/TableHead"
import TableRow from "../components/Table/TableRow"
import '../index.css'
import TrackForm from "../components/TrackForm/TrackForm"
import { useAuth } from "../Context/AuthContext"
import { collection, addDoc } from "firebase/firestore"
import { Navigate } from "react-router-dom"

const RoltainerContext = React.createContext() 
export {RoltainerContext}

export default function MainPage() {
    const {currentUser} = useAuth()
    const [storeData, setStoreData] = React.useState([
        {
            id: 1,
            eName: 'Zack',
            rtType: 'Uboat',
            startTime: new Date().toLocaleTimeString(),
            endTime: null
        },
        {
            id: 2,
            eName: 'Zack',
            rtType: 'Uboat',
            startTime: new Date().toLocaleTimeString(),
            endTime: null
        }
    ])

        function handleEndBtn(id) {
        console.log(`clicked ${id}`)
    }



    return (
        <>
            <TrackForm />
            <TableHead />
            <RoltainerContext.Provider value={{handleEndBtn}}>
                {storeData.map((arrItem) => {
                    return <TableRow key={arrItem.id} storeData={arrItem} />
                })}
            </RoltainerContext.Provider>
            {!currentUser && <Navigate to='.' replace />}
        </>
    )
}