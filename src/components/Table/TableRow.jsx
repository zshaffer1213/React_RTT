import React from "react"

export default function TableRow({name, type, start, end}) {

    const endBtn = <button>End</button>

    return (
         <div className="data-row">
            <p>{name}</p>
            <p>{type}</p>
            <p>{start}</p>
            <p>{end ? end : endBtn}</p>
         </div>
    )
}