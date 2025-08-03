import React from "react"

export default function TrackForm() {
    const [name, setName] = React.useState('')

    function handleSubmit(e) {
        e.preventDefault()
        console.log("Submited!")
    }
    
    
    return (
        <form className="tracking-form" onSubmit={() => handleSubmit(event)}>
            <input 
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Initials"
                className="form-name"
            />
            <select>
                <option value="first">RT Type</option>
                <option value="uboat" >Uboat</option>
                <option value="totes">TOTES</option>
                <option value="hba">HBA</option>
                <option value="mixed">Mixed</option>
                <option value="water">Water</option>
                <option value="food">Food</option>
                <option value="chem">Chem</option>
                <option value="pet">Pet</option>
            </select>
            <button>Start RT</button>
        </form>
    )
}