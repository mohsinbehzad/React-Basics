// For difference, in below code the increment() uses the updater function
// whereas decrement() uses the direct value

import { useState } from "react"

function UpdaterFunc() {
    const [count, setCount] = useState(0)

    function increment(e) {
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
        // Each call uses the latest state, so all 4 calls add up.
        // Result: count increases by 4.
    }

    function decrement() {
        setCount(count - 1);
        setCount(count - 1);
        setCount(count - 1);
        setCount(count - 1);
        // Each call uses the same old state, because updates are batched.
        // Result: count decreases by only 1.
    }

    return (
        <div>
            <h3>Count: {count}</h3>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default UpdaterFunc