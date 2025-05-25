import { useState } from "react"

function Counter() {
    const [count, setCounter] = useState(0)

    const increment = () => {
        setCounter(count + 1);
    }

    function decrement() {
        setCounter(count - 1);
    }

    function reset() {
        setCounter(0);
    }

    return (
        <>
            <div className="counter-container">
                <h1 className="count-display">{count}</h1>
                <button className="btn" onClick={increment}>Increment</button>
                <button className="btn" onClick={reset}>Reset</button>
                <button className="btn" onClick={decrement}>Decrement</button>
            </div>
        </>
    )
}

export default Counter