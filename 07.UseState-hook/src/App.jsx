// React hook = Special function that allows functinal components
//              To use React features without writing class Components
//              (useState, useEffect, useContext, useReducer, useCallback etc)

// useState() = A React hook that allows the creation of a stateful variable
//              And a Setter function to update its value in the Virtual DOM
//              [name, setName]

import Counter from "./Counter"
import MyComponent from "./MyComponent"

function App() {

  return (
    <>
      <Counter></Counter>
      <MyComponent></MyComponent>
    </>
  )
}

export default App
