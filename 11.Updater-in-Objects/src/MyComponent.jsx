import { useState } from "react"

function MyComponent() {
    const [car, setCar] = useState({ year: 2024, make: "Honda", model: "Civic" })

    function handleYear(e) {
        setCar(e.target.value)
    }
    
    function handleMake(e) {
        setCar(e.target.value)
    }

    function handleModel(e) {
        setCar(e.target.value)
    }

    return (
        <div>
            <p>Car: </p>
            <input type="number" value={car.year} onChange={handleYear} /> <br />
            <input type="text" value={car.make} onChange={handleMake} /> <br />
            <input type="text" value={car.model} onChange={handleModel} />
        </div>
    )
}
export default MyComponent