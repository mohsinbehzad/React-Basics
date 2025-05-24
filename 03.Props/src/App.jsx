import Players from "./Players"

function App() {

  return (
    <>
      <Players name={"Ronaldo"} age={38} isPlayer={true} />
      <Players name={"Khan"} age={25} isPlayer={false} />
      <Players name={"Bolt"} age={45} isPlayer={true} />
    </>
  )
}

export default App
