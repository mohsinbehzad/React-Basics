import { useState } from "react"

function ColorPicker() {
    const [color, setColor] = useState("#FFFFFF")

    function handleColorChange(e) {
        setColor(e.target.value)
    }

    return (
        <div className="container">
            <h1>Color Picker</h1>
            <div className="color-box" style={{ backgroundColor: color }}>
                <p>Selected Color: {color}</p>
            </div>
            <label htmlFor="color-input">Input Color:</label>
            <input id="color-input" type="color" value={color} onChange={handleColorChange} />
        </div>
    )
}

export default ColorPicker