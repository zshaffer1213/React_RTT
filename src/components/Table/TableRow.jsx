import React from "react"
import { RoltainerContext } from "../../Pages/MainPage"
export default function TableRow({storeData}) {
    
    const { handleEndBtn } = React.useContext(RoltainerContext)

    const endBtn = <button onClick={() => handleEndBtn(storeData.id)}>End</button>

    return (
         <div className="data-row">
            <p>{storeData.eName}</p>
            <p>{storeData.rtType}</p>
            <p>{storeData.startTime}</p>
            <p>{storeData.end ? endTime : endBtn}</p>
         </div>
    )
}