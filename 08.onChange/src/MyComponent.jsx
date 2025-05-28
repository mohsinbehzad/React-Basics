import { useState } from "react"

function MyComponent() {

    const [myName, setMyName] = useState("Guest")
    const [quantity, setQuantity] = useState(0)
    const [player, setPlayer] = useState("")
    const [comment, setComment] = useState("")
    const [profession, setProfession] = useState("")

    function handleName(e) {
        setMyName(e.target.value)
    }

    function handleQuantityChange(e) {
        setQuantity(e.target.value)
    }

    function handleCommentChange(e) {
        setComment(e.target.value)
    }

    function handlePlayerName(e) {
        setPlayer(e.target.value)
    }

    function handleProfessionChange(e) {
        setProfession(e.target.value)
    }
    return (
        <>
            <div>
                <input type="text" placeholder="Enter Your Name" value={myName} onChange={handleName} />
                <p>Name: {myName}</p>
                <input type="number" value={quantity} onChange={handleQuantityChange} />
                <p>Quantity: {quantity}</p>

                <textarea value={comment} onChange={handleCommentChange} placeholder="Share your valuable insights"></textarea>
                <p>Comment: </p>
                <select value={player} onChange={handlePlayerName}>
                    <option value="">Select an Option</option>
                    <option value="Ronaldo">Cristiano Ronaldo</option>
                    <option value="Messi">Lionel Messi</option>
                    <option value="Ramos">Sergio Ramos</option>
                </select>
                <p>Player: </p>

                <label >
                    <input type="radio" value="job"
                        checked={profession === "job"}
                        onChange={handleProfessionChange}
                    />
                    Job
                </label>
                <label >
                    <input type="radio" value="business"
                        checked={profession === "business"}
                        onChange={handleProfessionChange}
                    />
                    Business
                </label>
            </div>
        </>
    )
}

export default MyComponent