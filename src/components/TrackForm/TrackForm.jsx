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
                name="initials"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Initials"
                className="form-name"
            />
            <select name="rtType">
                <option value="blank">----------</option>
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